import { useParams } from "react-router-dom";
import songsData from "../data/songs.json";
//lagt inn

// TODO: Import necessary modules and data

// TODO: Destrcutrue props to receive information coming in from the parent comp
function SongInfo() {

  const { songTitle: urlSongTitle } = useParams();
  const songTitle = urlSongTitle.replace(/-/g, " ");
  const song = songsData.songs.find(s => s.title.toLowerCase() === songTitle);

  //if (!song) return <div>Song not found!</div>;


  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)

  return (
    <>
      <div>
        <h2>{song.title}</h2>
        <p>{song.artist}</p>
        <p>{song.album} ({song.year})</p>
      </div>
    </>
  );
}

export default SongInfo;

