import React from "react";
import { useDispatch } from "react-redux";
import { selectVideo } from "../features/videoSlice";

// Video Item Component
const VideoItem = ({ video }) => {
  const dispatch = useDispatch();

  // Selecting video fucntion from the video list
  const selectedVideo = (video) => {
    dispatch(selectVideo(video));
  };

  return (
    <>
      <div
        role="button"
        onClick={() => selectedVideo(video)}
        className="card mt-2 d-flex flex-row p-1 text-light align-items-stretch"
        id="thumbnailCard"
      >
        <div>
          <img
            // className="img-fluid"
            style={{ maxWidth: "180px" }}
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
        </div>

        <div className="content p-1 overflow-hidden ">
          <p className="ps-2">{video.snippet.title}</p>
        </div>
      </div>
    </>
  );
};

export default VideoItem;
