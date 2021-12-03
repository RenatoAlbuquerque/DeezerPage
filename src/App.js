import MusicList from './components/MusicList';
import MusicProvider from './providers/musicPreview.js';
import ModalProvider from './providers/modal.js';

function App() {
  return (
    <div className="App">
        <ModalProvider>
          <MusicProvider>
            <MusicList />
          </MusicProvider>
        </ModalProvider>
    </div>
  );
}

export default App;
