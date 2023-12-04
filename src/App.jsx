import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const artist = {
  name: "Ghali",
  type: "Trap/Rap",
  language: "Italian",
  intro: "Ghali Amdouni, known by the mononymously as Ghali, is an Italian rapper   and record producer. Born in Milan to Tunisian parents, he originally started his career using the pseudonym Fobia.",
  image_url: "https://i.scdn.co/image/ab67616d0000b273f6612f243f2b172cfbe6a828"
}

const songs = [{
  name: "Ninna Nanna",
  date: "31 Oct 2016",
  cover_url: "https://upload.wikimedia.org/wikipedia/it/c/c3/Ghali_-_Ninna_nanna.png"
},
{
  name: "1993",
  date: "12 Nov 2020",
  cover_url: "https://i.ytimg.com/vi/aeIVXDhc2TA/hqdefault.jpg"
},
{
  name: "Fallito",
  date: " 29 Feb 2020",
  cover_url: "https://lastanzadeifantasmicom.files.wordpress.com/2021/02/ghali-dna-1.jpg?w=620"
}
]

const LikeBtn = () => {
  const [value, setValue] = useState("like"); 

  const handleClick = () => {
    setValue((value === "like") ?  'liked' : 'like');
  };

  return (
    <button onClick={handleClick}
    className={value}>
     {value}
    </button>
  );
};

const Header = () =>{
  return(
    <div>
      <h1
      className='header'
      >MyMusic</h1>
    </div>
  )
}

const ArtistInfo =()=>{
  return(
    <div className='artist_details'>
      <div className='artist_name'>{artist.name}</div>
      <img src={artist.image_url} className="artist_image" alt="Photo of Ghali" />
      <div className='artist_into'>{artist.intro}</div>
      <div className='artist_type'>Music Type: {artist.type} <br/>language: {artist.language}</div>
    </div>
  )
}

const Songs = () => {
  const eachsong = songs.map(song =>
    <div className='song_div'>
      <img src={song.cover_url} className="song_cover" alt="song cover image"/>
      <div className='song_details'>{song.name} <br/> {song.date}</div>
      <LikeBtn></LikeBtn>
    </div>
    )
  return(eachsong);
}




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
