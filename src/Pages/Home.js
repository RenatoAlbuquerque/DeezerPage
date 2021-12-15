import React from 'react';
import MusicList from '../components/MusicList';

import MusicProvider from '../providers/musicPreview.js';
import ModalProvider from '../providers/modal.js';

const Home = () =>{
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

export default Home;