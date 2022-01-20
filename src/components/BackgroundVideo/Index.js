import React from 'react';
import { BgVideo, Overlay } from './BackgroundVideo.styles';
import Video from "../../assets/Pexels Videos 2000817.mp4"

const BackgroundVideo = () => {
    return (
        <>
            <BgVideo src={Video} muted loop autoPlay playsinline="true" disablePictureInPicture="true"/>
            <Overlay />
        </>
    )
}

export default BackgroundVideo;
