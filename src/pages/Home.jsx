
import { NavLink } from "react-router-dom";
import songsData from "../data/songs.json";
//lagt til

// TODO: Import necessary modules and data
function Home() {
  // TODO: Implement logic to display the list of songs
  return (
    <>
      <div className="songWrapper">
        {songsData.songs.map(song => (
          <NavLink key={song.title} to={`/song/${song.title.toLowerCase().replace(/ /g, "-")}`} className="songLink">
            {song.title}
          </NavLink>
        ))}
        {/* TODO: Display the list of songs with links */}
      </div>
    </>
  );
}

export default Home;
