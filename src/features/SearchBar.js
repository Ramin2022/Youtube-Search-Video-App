import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchVideos } from "./videoSlice";

// Search Component in the Navbar
const SearchBar = () => {
  const [videoTerm, searchVideoTerm] = useState("");

  const dispatch = useDispatch();

  // Initial rendering of the videos
  useEffect(() => {
    dispatch(searchVideos("computer"));
  }, []);

  // Search Button function 
  const onVideoSearched = (e) => {
    e.preventDefault();
    dispatch(searchVideos(videoTerm));
  };

  return (
    <>
      <nav className="navbar bg-dark fixed-top border-bottom border-1 border-danger">
        <div className="container">
          <a className="navbar-brand text-light border-top  border-bottom border-danger border-2">
            Youtube Search{" "}
          </a>
          <form className="d-flex" role="search" onSubmit={onVideoSearched}>
            <input
              onChange={(e) => searchVideoTerm(e.target.value)}
              value={videoTerm}
              id="search"
              name="search"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default SearchBar;
