"use client";

import { useState, useEffect } from "react";

export function useStrapi(endpoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`http://neolaia.dervitsani.ovh/api/${endpoint}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch ${endpoint}`);
        }

        const json = await res.json();
        setData(json.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}
