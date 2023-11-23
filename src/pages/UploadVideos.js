import { React, useState } from 'react'
import { useAddData } from '../useAddData'

export function UploadVideos() {
  const { addData } = useAddData();
  const [cover_image, setCoverImage] = useState("")
  const [description, setDescription] = useState("")
  const [duration, setDuration] = useState("")
  const [title, setTile] = useState("")
  const [video_link, setVideo_link] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    addData({
      cover_image,
      description,
      duration,
      title, 
      video_link
    });
    setCoverImage("")
    setDescription("")
    setDuration("")
    setTile("")
    setVideo_link("")
  }

  return (
    <div>
       
      {/* <input type='file' />
      <button> Upload Video</button>
      <p>cover_image</p> */}
      <form  onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Add Cover Image"
              value={cover_image}
              required
              onChange={(e) => setCoverImage(e.target.value)}
      />
     <input
              type="text"
              placeholder="Add Description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
      />
      <input
              type="text"
              placeholder="Add Duration"
              value={duration}
              required
              onChange={(e) => setDuration(e.target.value)}
      />
      <input
              type="text"
              placeholder="Add Title"
              value={title}
              required
              onChange={(e) => setTile(e.target.value)}
      />
      <input
              type="text"
              placeholder="Add Video Link"
              value={video_link}
              required
              onChange={(e) => setVideo_link(e.target.value)}
      />
      <button type="submit"> Add Transaction</button>
      </form>

    </div>
  )
}

 
