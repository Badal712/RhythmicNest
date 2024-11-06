import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from './library';
import Feed from './feed';
import Player from './player';
import Trending from './trending';
import Favorites from './favorites';


export default function Home() {
  return ( 
  <Router>
    <div className='main_body'>
        
        <Routes>
            <Route path="/" element={<Library/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/player" element={<Player/>}/>
            <Route path="/trending" element={<Trending/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            
        </Routes>
        
    </div>
  </Router>
    
  )
}
