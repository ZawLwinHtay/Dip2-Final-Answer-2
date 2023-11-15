import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPostPage from "../pages/AddPostPage";
import EditPostPage from "../pages/EditPostPage";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPostPage />} />
        <Route path="/edit/:id" element={<EditPostPage />} />
      </Routes>
    </>
  );
}
