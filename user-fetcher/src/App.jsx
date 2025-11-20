import React, { useState, useEffect } from "react";

const App = () => {
  const [isfetching, setIsfetching] = useState(true);
  const [data, setdata] = useState([]);
  const [error, setError] = useState(false);

  // 🔥 GLOBAL GET DATA FUNCTION (used everywhere)
  const fetchUsers = async () => {
    const controller = new AbortController();

    let timer = setTimeout(() => {
      controller.abort();
      setError(true);
      setIsfetching(false);
    }, 3000);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      });

      clearTimeout(timer);

      const json = await res.json();
      setdata(json);
      setIsfetching(false);
    } catch (err) {
      setIsfetching(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchUsers(); // 🔥 call global function
  }, []);

  const handleRetry = async () => {
    setError(false);
    setIsfetching(true);
    fetchUsers(); // 🔥 call same global function again
  };

  return (
    <div>
      {isfetching && (
        <>
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span>Loading...</span>
        </>
      )}

      {error && (
        <div className="fixed top-0 left-0 w-full bg-red-600 text-white p-3 flex justify-between items-center animate-[slideDown_0.3s_ease-out]">
          <span>Error occurred.</span>
          <button
            onClick={handleRetry}
            className="bg-white text-red-600 px-3 py-1 rounded"
          >
            Retry
          </button>
        </div>
      )}

      <div className="flex gap-2 flex-wrap">
        {data.map((d, i) => (
          <div className="w-60" key={i}>
            <p>Name: {d.name}</p>
            <p>Email: {d.email}</p>
            <p>Website: {d.website}</p>
            <p>Phone: {d.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
