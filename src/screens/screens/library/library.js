import React, { useState, useEffect } from "react";
import APIKit from "../../../spotify";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import './library.css';
import { useNavigate } from "react-router-dom";

export default function Library() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then(function(response) {
      setPlaylists(response.data.items);
      console.log(response.data);
    });
  }, []);
  
  const navigate = useNavigate();
  const playPlaylist = (id) =>{
    navigate("/player", { state: { id: id } });
    console.log("/player", { state: { id: id } });
  }

  return (
    <div className="screen-container">
      <div className="library-container">
        {playlists?.map((playlist) => (
          <div className="playlist-card" key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
            <img src={playlist.images[0].url} className="playlist-img" alt="playlist-imges"/>
            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-Subtitle">{playlist.tracks.total} Songs</p>
            <div className="playlist-button">
              <IconContext.Provider value={{ size: "3rem" , color: "#00fff5" }}>
                <AiFillPlayCircle />
              </ IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}