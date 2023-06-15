import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className='videoFooter'>
        <div className='videoFooter_text'>
            <h3>@gabrielfiss1</h3>
            <p>Jose pegando chave </p>
                <div className='videoFooter_music'>
                  <MusicNoteIcon className='videoFooter_icon'/>
                  <div className='videoFooterMusic_text'>
                  <p>Titulo da musica</p>
                  </div>  
                </div>
        </div>
       <img
        className='videoFooter_record'
        alt='imagem de vinil'
        src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z'
       /> 
    </div>
  )
}

export default VideoFooter