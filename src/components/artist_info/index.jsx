
const artist = {
    name: "Ghali",
    type: "Trap/Rap",
    language: "Italian",
    intro: "Ghali Amdouni, known by the mononymously as Ghali, is an Italian rapper   and record producer. Born in Milan to Tunisian parents, he originally started his career using the pseudonym Fobia.",
    image_url: "https://i.scdn.co/image/ab67616d0000b273f6612f243f2b172cfbe6a828"
};

const ArtistInfo =()=>{
    return(
      <div className='artist_details'>
        <div className='artist_name'>{artist.name}</div>
        <img src={artist.image_url} className="artist_image" alt="Photo of Ghali" />
        <div className='artist_into'>{artist.intro}</div>
        <div className='artist_type'>Music Type: {artist.type} <br/>language: {artist.language}</div>
      </div>
    )
};

export default ArtistInfo;