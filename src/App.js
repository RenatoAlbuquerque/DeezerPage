import Header from './components/Header';
import MusicList from './components/MusicList';
import Search from './components/Search';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <MusicList />
    </div>
  );
}

export default App;
