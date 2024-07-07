import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './components/ShowList';
import ExpemseTracketWrapper from './components/ExpemseTracketWrapper';

export default function App() {
  return (
    <div className="App">
     {/* <h1>Expense tracker coming up</h1> */}
     <Router>
           <Routes>
                 <Route path='/' element={< ExpemseTracketWrapper onClose={()=>{}} onTrue={()=>{}}/>}></Route>
                 <Route path='/home' element={< ShowList />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

