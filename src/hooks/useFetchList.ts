import React from "react";

import { SENATORS_URL, REPRESENTATIVES_URL, STATES } from "../constants";
import { Congressman } from "../types";

const get = async (url: string) => {
  return await fetch(url)
    .then(e => e.json())
    .then(e => e);
};

function useFetchList(page: number) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error>();
  const [list, setList] = React.useState<Congressman[]>([]);
  const fetchedPages = React.useRef<{ [key: string]: boolean }>({})

  const sendQuery = React.useCallback(async (page: number) => {
    try {
      if (fetchedPages.current[page]) return;
      
      setLoading(true);
      setError(undefined);
      fetchedPages.current[page] = true;

      const [reps, senators]: {success: boolean, results: Congressman[]}[] = await Promise.all([
        get(`${REPRESENTATIVES_URL}/${STATES[page]}`),
        get(`${SENATORS_URL}/${STATES[page]}`),
      ]);

      setList(prev =>
        [
          ...prev, ...(senators.results?.map(e => ({ ...e, type: 'Senator' })) || []),
          ...(reps.results?.map(e => ({ ...e, type: 'Representative' })) || [])
        ]
      );

      setLoading(false);
    } catch (err) {
      fetchedPages.current[page] = false;
      setError(err as Error);
    }
  }, [setLoading, setError]);

  return { loading, error, list, sendQuery };
}

export default useFetchList;
