import { useEffect, useState } from "react";

function useCurrencyInfo(currrency){
  const [data, setData] = useState({})
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currrency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currrency]))
  }, [currrency])
  return data
}

export default useCurrencyInfo