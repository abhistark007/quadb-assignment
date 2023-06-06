import { useEffect, useState } from 'react';
import './App.css';
import { fetchData } from './controllers/api';

function App() {
  const [movieList,setMovieList]=useState(null);
  useEffect(()=>{
    getMovieList();
  },[])

  const getMovieList=async()=>{
    const data=await fetchData();
    console.log(data);
    setMovieList(data);
  }
  return (
    <div className="App">

    </div>
  );
}

export default App;
