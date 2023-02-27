import React from "react";
import SearchBar from "./features/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

// App Components
export const App = () => {
  return (
    <div className="app">
      <div className="container-fluid bg-dark">
        {/* Search component in the navbar */}
        <SearchBar />
      </div>
      <div className="container pt-3" style={{ marginTop: "3.8rem" }}>
        <div className="row">
          <div className="pt-2 d-flex align-content-center justify-content-center  col-12 col-md-12 col-lg-8">
            {/* Video Detail Component */}
            <VideoDetail />
          </div>
          <div className="  col-12 col-m-12 col-lg-4">
            {/* Video List Component */}
            <VideoList />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
