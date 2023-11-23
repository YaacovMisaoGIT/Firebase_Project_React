import React, { useState, useEffect } from 'react';
import '../App.css';
import { db } from '../config';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate, Navigate } from "react-router-dom";


export function Showvideos() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const videosCollection = collection(db, 'video-playlist');
      const data = await getDocs(videosCollection);
      const videoList = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setVideos(videoList);
    };

    fetchData();
  }, []);

  const playVideo = (videoLink) => {
    setSelectedVideo(videoLink);
  };

  // const goToUpload = () => {
  //   navigate('/upload-videos');  
  // };

  return (
    <div className="App">
      <select onChange={(e) => playVideo(e.target.value)}>
        <option value="">Show Videos</option>
        {videos.map((data) => (
          <option key={data.id} value={data.video_link}>
            {data.title}
          </option>
        ))}
      </select>

      {selectedVideo && (
        <div>
          <iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

        {/* <button onClick={goToUpload}>Go to UploadVideos</button> */}

    </div>
  );
}

  




// ****************************************************
// ****************************************************

// ====WITH IMAGE===
// function App() {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       const videosCollection = collection(db, 'video-playlist');
//       const data = await getDocs(videosCollection);
//       const videoList = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
//       setVideos(videoList);
//     };

//     fetchData();
//   }, []);

//   const playVideo = (videoLink) => {
//     setSelectedVideo(videoLink);
//     setShowDropdown(false); // Hide dropdown after selecting video
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <div className="App">
//       <div className="custom-dropdown">
//         <div className="dropdown-header" onClick={toggleDropdown}>
//           Show Videos
//         </div>
//         {showDropdown && (
//           <div className="dropdown-content">
//             {videos.map((data) => (
//               <div key={data.id} onClick={() => playVideo(data.video_link)}>
//                 <img
//                   src={data.cover_image}
//                   alt={`Cover for ${data.title}`}
//                   width="50"
//                   height="50"
//                 />
//                 <span>{data.title}</span>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {selectedVideo && (
//         <div>
//           <iframe
//             width="640"
//             height="360"
//             src={`https://www.youtube.com/embed/${selectedVideo}`}
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// ****************************************************
// ****************************************************

// ===WITH VIDEOS DISLAYED AS LIST====
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { db } from './config';
// import { collection, getDocs } from 'firebase/firestore';
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { db } from './config';
// import { collection, getDocs } from 'firebase/firestore';

// function App() {
//   const [videos, setVideos] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const usersCollectionRef = collection(db, 'video-playlist');

//   // Fetch data from Firebase
//   useEffect(() => {
//     const getVideos = async () => {
//       const data = await getDocs(usersCollectionRef);
//       setVideos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };
//     getVideos();
//   }, []);


//   // Function to toggle dropdown visibility
//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   // Function to play selected video
//   const playVideo = (videoLink) => {
//     setSelectedVideo(videoLink);
//     setShowDropdown(false); // Hide dropdown after selecting video
//   };
//   return (
//     <div className="App">
//       <button onClick={toggleDropdown}>Show Videos</button>
//       {showDropdown && (
//   <div className="custom-dropdown">
//     <div className="dropdown-header" onClick={toggleDropdown}>
//     </div>
//     <div className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
//     <option value="">Select a video</option>
//       {videos.map((video) => (
//         <div key={video.id} onClick={() => playVideo(video.video_link)}>
//           <iframe
//                 width="560"
//                 height="315"
//                 src={`https://www.youtube.com/embed/${video.video_link}`}
//                 title="YouTube video player"
//                 allowFullScreen
//           ></iframe>
//         <div className="video-info">
//           <h3>{video.title}</h3>
//           <p>{video.description}</p>
//           <p>Duration: {video.duration}</p>
//         </div>

//         </div>
//       ))}
//     </div>
//   </div>
// )}
//       {selectedVideo && (
//         <div>
//            <iframe
//             width="640"
//             height="360"
//             src={`https://www.youtube.com/embed/${selectedVideo}`}
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe> 
        
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
