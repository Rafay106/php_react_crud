import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import ListBlogs from "./Pages/ListBlogs";
import CreateBlog from "./Pages/CreateBlog";
import ReadBlog from "./Pages/ReadBlog";
import DeleteBlog from "./Pages/DeleteBlog";
import UpdateBlog from "./Pages/UpdateBlog";

function App() {
  return (
    <div className="app">
      <h3>React CRUD using PHP and MySQL</h3>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<ListBlogs />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/:id" element={<ReadBlog />} />
          <Route path="/:id/edit" element={<UpdateBlog />} />
          <Route path="/:id/delete" element={<DeleteBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
