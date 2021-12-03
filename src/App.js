import MusicList from './components/MusicList';
import MusicProvider from './providers/musicPreview.js';

function App() {
  return (
    <div className="App">
        <MusicProvider>
          <MusicList />
        </MusicProvider>
    </div>
  );
}

export default App;
