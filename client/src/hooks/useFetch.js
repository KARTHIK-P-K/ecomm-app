import React, { useState, useEffect, useContext, createContext } from "react";
import { makeRequest } from "../makeRequest";
import { CartContext } from "../context/CartContext";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { ratingState } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);

        setData(res.data.data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url, ratingState]);
  return { data, loading, error };
};

export default useFetch;
