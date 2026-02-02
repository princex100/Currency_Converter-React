import { useEffect, useState } from "react";


 export default function useCurrency(currency){
  let url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
   let [data,setData]=useState({});
  useEffect(()=>{
     fetch(url)
     .then((raw)=>raw.json())
     .then((res)=>{setData(res[currency])});
     
  },[currency]);


  return data;
}





