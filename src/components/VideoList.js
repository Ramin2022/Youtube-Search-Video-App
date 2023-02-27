import React from "react";
import { useSelector } from "react-redux";
import VideoItem from "./VideoItem";

// Video List Component
const VideoList = () => {
  const listOfVideos = useSelector((state) => state.video.videos);

  const renderedVideos = listOfVideos.map((video) => (
    <div key={video.snippet.title}>
      {/* Video Item Component */}
      <VideoItem video={video} />
    </div>
  ));
  return <div>{renderedVideos}</div>;
};

export default VideoList;
