import React from 'react';
import { useInView } from "react-cool-inview";

import useFetchList from './hooks/useFetchList';
import RepRow from './components/RepRow';
import { STATES } from './constants';

import './App.css';

function App() {
  const [page, setPage] = React.useState(0);
  const { loading, error, list, sendQuery } = useFetchList(page);

  const { observe } = useInView({
    rootMargin: "50px 0px",
    onEnter: () => {
      setPage((prev) => prev + 1);
    },
  });

  React.useEffect(() => {
    if (page < STATES.length) {
      sendQuery(page);
    }
  }, [sendQuery, page]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Those responsible:
        </h2>
        <ul>
        {list.map((e) => (
          <RepRow
            key={e.link}
            congressman={e}
          />
        ))}
        </ul>
        {loading && <p>Loading...</p>}
        {page >= STATES.length && <p>That&apos;s all, folks</p>}
        {error && <p>Error: {JSON.stringify(error)}</p>}
        <div ref={observe} />
        
      </header>
    </div>
  );
}

export default App;
