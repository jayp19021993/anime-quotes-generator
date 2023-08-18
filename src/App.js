import React,{useState, useEffect} from "react";
import Quote from "./components/Quote.js"; 

function App() {
  const[quote, setQuote]= useState({
    anime:null, 
    character:null, 
    quote:null
  })

  const fetchQuote= async()=>{
    return await fetch('https://animechan.xyz/api/random')
    .then(response => response.json());
  } 

  const Generator = async()=>{
    setQuote(await fetchQuote());
  }

  useEffect(async()=>{
    setQuote(await fetchQuote());
  }, [])

  return (
    <div className="App">
      <Quote/> 

      <button onClick={Generator}>Generator new quote</button>
    </div>
  );
}

export default App;
