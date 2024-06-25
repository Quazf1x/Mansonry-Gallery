//const API_URL =
//  "https://api.thecatapi.com/v1/images/search?limit=50&breed_ids=beng&api_key=live_m2OOJxSSyesEaSibHVOHinds32gbGzF5NwQw1YKtcZTuPvmj5fizFvqMdH2O1Mk3";

const API_URL = "https://api.thecatapi.com/v1";
const API_KEY =
  "live_m2OOJxSSyesEaSibHVOHinds32gbGzF5NwQw1YKtcZTuPvmj5fizFvqMdH2O1Mk3";

import { useState, useEffect } from "react";

const useFetch = <T>(category: string, params?: any): [boolean, T] => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<T>();

  const searchParams = new URLSearchParams(params).toString();
  const fetchURL = `${API_URL}/${category}?${searchParams}&api_key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoading) setLoading(true);

      try {
        console.log("fetched");
        const response = await fetch(fetchURL, { mode: "cors" });
        if (!response.ok) throw new Error("unknown error!");
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchURL, params]);

  return [isLoading, data as T];
};

export default useFetch;
