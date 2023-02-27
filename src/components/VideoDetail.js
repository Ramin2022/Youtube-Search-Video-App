import React from "react";
import { useSelector } from "react-redux";

// Vdieo Detail Component
const VideoDetail = () => {
  const video = useSelector((state) => state.video.selectedVideo);

  if (!video) {
    return (
      <div className="text-light" id="spinner">
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  // Video source
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="col-12">
      <div className="ratio ratio-16x9">
        {/* Ifram tag for showin video on the app */}
        <iframe src={videoSrc} title="YouTube video" allowFullScreen />
      </div>
      <div className="text-light pt-3 card mt-2 p-2 " id="detail">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
