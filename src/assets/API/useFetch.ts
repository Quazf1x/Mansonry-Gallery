const API_URL = "https://api.thecatapi.com/v1";
const API_KEY =
  "live_0BZApQflwx5ogel0j04vtpi32p10zEeTHH5mH8wI78osikP8L2LDVX4EapoJGlxI";

import { useState, useEffect } from "react";

const useFetch = <T>(category: string, params?: any): [boolean, T, boolean] => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [data, setData] = useState<T>();

  const fetchParams = new URLSearchParams(params).toString();
  const fetchURL = `${API_URL}/${category}?${fetchParams}&api_key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoading) {
        setLoading(true);
        setError(false);
      }

      try {
        const response = await fetch(fetchURL, { mode: "cors" });
        if (!response.ok) throw new Error("unknown error!");

        const data = await response.json();
        setData(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchURL, params]);

  return [isLoading, data as T, isError];
};

export default useFetch;
