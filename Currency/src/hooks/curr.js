import { useEffect,useState } from "react";

function useCurr(currency) {
const [data, setData] = useState({})//giving the empty data obj as initial state
    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json') //fetching the data from the api using the currency as input
            .then(res => res.json())//Convert the promise response to json type data
            .then(res => setData(res[currency]))//the json data is now converted into the data that is defined by the currency input
               .catch(() => setData({})); // fallback in case of an error
    },[currency])
    return data;//returns the data that is taken from the api through fetch by useEffect
}
export default useCurr;//Exports the custom hook and the data associated with it