import { Showvideos} from "./pages/Showvideos";
import { UploadVideos} from "./pages/UploadVideos";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
     
       <Router>
        <Routes>
          <Route path="/show-videos"   element={<Showvideos />} />
          <Route  path="/upload-videos"  element={ <UploadVideos/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;






