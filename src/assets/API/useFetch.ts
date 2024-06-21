const API_URL =
  "https://api.thecatapi.com/v1/images/search?limit=50&breed_ids=beng&api_key=live_m2OOJxSSyesEaSibHVOHinds32gbGzF5NwQw1YKtcZTuPvmj5fizFvqMdH2O1Mk3";

import { useState, useEffect } from "react";
import catType from "./fetchTypes";

const useFetch = (): [boolean, catType[]] => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<catType[]>([
    {
      breeds: null,
      height: 1,
      id: "1",
      url: "placeholder",
      width: 1,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, { mode: "cors" });
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
  }, []);

  return [isLoading, data];
};

export default useFetch;
