import React,{useEffect,useState} from "react";
import API_KEY from "./Keys";
const CONTEXT_KEY= "9ec571f86697d07ac";

const useGoogleSearch = (term) =>{
    const [data,setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
.then((Response)=>Response.json())
.then((result)=>{
    setData(result);
})
        }
        fetchData();
    }, [term]);
    return {data};
}

export default useGoogleSearch;