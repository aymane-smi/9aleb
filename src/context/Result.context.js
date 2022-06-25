import { createContext, useState } from "react";

export const ResultContext = createContext();
const base_url = "https://google-search3.p.rapidapi.com/api/v1/";

function ResultProvider({children}){
    const [results, setResults] = useState([]);
    const [loading,setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("elon+musk");
    const getResults = async (type) => {
        setLoading(true);
        console.log(type);
        const response = await fetch(`${base_url}${type.substring(1)}`, {
            method: "GET",
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'US',
                'X-RapidAPI-Key': '1379dced65mshc4c9c52ca432695p181583jsn458c1a9dc9e3',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
            },
        });

        const data = await response.json();
        console.log(data);
        setResults(data);
        setLoading(false);
    }
    return (<ResultContext.Provider value={{getResults, results, loading, searchTerm, setSearchTerm}}>
        {children}
    </ResultContext.Provider>);
}

export default ResultProvider;