import { addDoc, collection } from "firebase/firestore";
import { db } from "./config"

export const useAddData = () => {
    const dataCollectionRef = collection( db, "video-playlist");
    const addData = async ({
        cover_image,
        description,
        duration,
        title, 
        video_link
    }) => {
        await addDoc(dataCollectionRef, {
            cover_image,
            description,
            duration,
            title, 
            video_link
        })
    }
    return { addData }
}


