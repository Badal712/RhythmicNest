import React from 'react';
import "./login.css";
import { loginEndpoint } from "../../../spotify"
import MusicGif from "../Image/Music.gif"

export default function login() {
  return (
    <div className="container">
        <div className="login">
            <h1>Welcome to RhythmicNest</h1>
            <p>Please log in to access your music dashboard</p>
            <a href={loginEndpoint}>
                <button className="login-button">Login</button>
            </a>
        </div>
        <div className="Right">
            <img src={MusicGif} alt="Animated music illustration"/>
        </div>
    </div>
  )
}
