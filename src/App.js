import { useEffect, useState } from 'react';
import './App.css';
import { fetchData } from './controllers/api';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SummaryPage from './pages/SummaryPage';

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
      <Header/>

      <Routes>
        <Route path='/' element={<HomePage movieList={movieList}/>}/>
        <Route path='/summary' element={<SummaryPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
