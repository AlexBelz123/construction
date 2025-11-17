import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import GalleryPage from "./components/GalleryPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:assetType" element={<GalleryPage />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;