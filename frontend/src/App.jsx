import './App.css'
import VideoPlayer from './videoPlayer'
import { useRef } from 'react'
import videojs from 'video.js'
function App() {
  const playerRef = useRef(null)
  const videoLink = "http://localhost:8000/uploads/receipt/923a0538-cd9e-4023-81b6-3dbf47d35fd7/index.m3u8"

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL"
      }
    ]
  }

    const handelPlayerReady = (player) => {
      playerRef.current = player;
      player.on("waiting", () => {
        videojs.log("player is waiting");
      })
      player.on("dispose", () => {
        videojs.log("player will dispose");
      })
    }

  return (
    <>
      <div>
        <h1>Video player</h1>
      </div>
      <VideoPlayer
      options = {videoPlayerOptions}
      onReady = {handelPlayerReady}
      />
    </>
  )
}

export default App
