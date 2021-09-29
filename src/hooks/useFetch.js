import { useEffect, useState } from "react";

//

const useFetch = (url) => {
  let [data, setData] = useState(null);
  let [isPending, setIsPending] = useState(null);
  let [error, setError] = useState(null);
  // fcts : ...
  /*const deleteBlog = (id) => {
    let newBlogs = [...data];
    setData(newBlogs.filter((el) => el.id !== id));
  };*/

  useEffect(() => {
    const abortCont = new AbortController();

    setIsPending(true);
    setTimeout(() => {
      //, { signal: abortCont.signal }
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error(
              "there is an error while loading , please try again later"
            );
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err.name);
          if (err.name === "AbortError") {
            console.log("fetch aborted!");
          } else {
            //console.log(err);
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);
    // abortCont.abort();
    return () => abortCont.abort();
  }, [url]); // the [] : runs one time

  return { data, error, isPending };
};

export default useFetch;
