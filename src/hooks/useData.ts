import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoding] = useState(false);

  useEffect(
    () => {
      const Controller = new AbortController();

      setLoding(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: Controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoding(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err);
          setLoding(false);
        });

      return () => Controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data: data, error, isLoading };
}
export default useData;
