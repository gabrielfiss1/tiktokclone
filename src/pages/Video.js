import React, {useRef, useState} from 'react'
import "./video.css"
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'

function Video({likes, messages, shares, name, description, music, url}) {
 
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
         src={url}
         >
        </video>
        <VideoSidebar 
          likes={likes}
          messages={messages}
          shares={shares} 

        />
        <VideoFooter
         name={name}
         description={description}
         music={music}
        />
    </div>
    
  )
}

export default Video