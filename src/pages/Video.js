import React, {useRef, useState} from 'react'
import "./video.css"
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'

function Video() {
 
  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)

  function handleStart(){

    if(play === false){
        videoRef.current.play()
        setPlay(true)
    } else {
        videoRef.current.pause()
        setPlay(false)
    }
  }

  return (
    <div className='video'>
        <video
         className='video_player'
         ref={videoRef}
         onClick={handleStart}
         loop
         src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z'
         >
        </video>
        <VideoSidebar />
        <VideoFooter />
    </div>
    
  )
}

export default Video