
import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
     <div className='app_videos'>
      <Video
        likes={232}
        messages={30}
        shares={12}
        name="gou233"
        description="Brincando com o josé"
        music="musica top"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
      />
      <Video
        likes={21}
        messages={5}
        shares={1} 
        name="paulosantos2058"
        description="Gatao do pai"
        music="musica emocionante"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
      />
      </div>
    </div>
  );
}

export default App;
