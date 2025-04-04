// import {useEffect, useState} from "react"

// function useCurrencyInfo(currency){
//     const[data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://open.er-api.com/v6/latest/${currency}`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency])
//     console.log(data);
//     return data
// }

// export default useCurrencyInfo;

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                if (res && res.rates) {
                    setData(res.rates);  // ✅ Fix: Correct API response structure
                } else {
                    console.error("Invalid API response", res);
                }
            })
            .catch((error) => console.error("Error fetching data:", error)); // ✅ Added error handling
    }, [currency]);

    return data;  // ✅ Ensures hook always returns correct data
}

export default useCurrencyInfo;
