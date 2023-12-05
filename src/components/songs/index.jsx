import LikeBtn from "../button";

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
];

const Songs = () => {
    const eachsong = songs.map(song =>
      <div className='song_div'>
        <img src={song.cover_url} className="song_cover" alt="song cover image"/>
        <div className='song_details'>{song.name} <br/> {song.date}</div>
        <LikeBtn></LikeBtn>
      </div>
      )
    return(eachsong);
};

export default Songs;