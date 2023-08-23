import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ListBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("/api/posts/read.php").then((res) => {
      const blogs = res.data.data;
      setBlogs(blogs);
    });
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <Link to={`/${blog.id}`}>
            <h3>{blog.title} by {blog.author}</h3>
          </Link>
          <div className="options">
            <Link to={`/${blog.id}/edit`}>Edit</Link>
            <Link to={`/${blog.id}/delete`}>Delete</Link>

          </div>
        </div>
      ))}
    </div>
  );
}
export default ListBlogs;
