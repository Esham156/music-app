import React,{ useState } from 'react';
import './App.css'
import { Header,Songs,ArtistInfo } from './components';

function App() {
  return (
    <div className='body'>
      <Header></Header>
      <ArtistInfo></ArtistInfo>
      <Songs></Songs>
      
    </div>
  );
}


export default App
