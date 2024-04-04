import { useEffect, useState } from "react";

function usePosts(url) {
  // loading state
  const [loading, setLoading] = useState(true);

  //   posts state
  const [fetchData, setFetchData] = useState([]);

  //   fetch posts data

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return { loading, fetchData };
}

export default usePosts;
