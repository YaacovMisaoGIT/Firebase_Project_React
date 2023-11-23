import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Showvideos } from './pages/Showvideos';
import { UploadVideos } from './pages/UploadVideos';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none' }}>
            <li style={{ margin: '10px' }}>
              <Link to="/show-videos">Show Videos</Link>
            </li>
            <li style={{ margin: '10px' }}>
              <Link to="/upload-videos">Upload Videos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/show-videos" element={<Showvideos />} />
          <Route path="/upload-videos" element={<UploadVideos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
