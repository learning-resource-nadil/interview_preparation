import { useEffect, useState } from "react";

function DataFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchData() {
    const responce = await fetch("");
    const result = await responce.json();

    if (result) {setData(result);
        setLoading(false);
    }
  }
  if(loading) return(<h1> The Data is Loading</h1>)
  useEffect(() => {
    fetchData();
  }, []);
  return <div>{data ? "" : "Loading....."}</div>;
}
export default DataFetch;