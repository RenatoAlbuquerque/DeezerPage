import MusicList from './components/MusicList';
import MusicProvider from './providers/musicPreview.js';
import PausePlayProvider from './providers/pausePlayMusic.js';

function App() {
  return (
    <div className="App">
      <PausePlayProvider>
        <MusicProvider>
          <MusicList />
        </MusicProvider>
      </PausePlayProvider>
    </div>
  );
}

export default App;
