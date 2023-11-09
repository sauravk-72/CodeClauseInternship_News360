import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";

const App =()=>{
 const apiKey = process.env.REACT_APP_NEWS_API
  
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/general" element={<News key="general" apiKey={apiKey} pageSize={5} country="in" category="general" />} />
            <Route exact path="/" element={<News key="general" apiKey={apiKey} pageSize={5} country="in" category="general" />} />
            <Route exact path="/business" element={<News key="business" apiKey={apiKey} pageSize={8} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} pageSize={8} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" apiKey={apiKey} pageSize={8} country="in" category="health" />} />
            <Route exact path="/science" element={<News key="science" apiKey={apiKey} pageSize={8} country="in" category="science" />} />
            <Route exact path="/sports" elemet={<News key="sports" apiKey={apiKey} pageSize={8} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={8} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
 
}

export default App



