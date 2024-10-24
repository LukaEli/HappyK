import React, { useState } from "react";
import { Play, Pause } from "lucide-react";
import "../styles/playlist.css";

function Playlist() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const songs = [
    {
      id: 1,
      title: "Our Song",
      artist: "Artist Name",
      memory: "Remember when...",
    },
    {
      id: 2,
      title: "Special Moment",
      artist: "Artist Name",
      memory: "That time we...",
    },
    // Add more songs
  ];

  return (
    <div className="playlist">
      <h2>Our Special Songs</h2>
      <div className="songs-container">
        {songs.map((song) => (
          <div key={song.id} className="song-card">
            <div className="song-info">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
              <p className="memory">{song.memory}</p>
            </div>
            <button
              className="play-button"
              onClick={() => {
                setCurrentSong(currentSong === song.id ? null : song.id);
                setIsPlaying(!isPlaying);
              }}
            >
              {currentSong === song.id && isPlaying ? <Pause /> : <Play />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;
