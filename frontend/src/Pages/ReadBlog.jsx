import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ReadBlog() {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/posts/read_single.php?id=${id}`).then((res) => {
      setBlog(res.data);
    });
  }, []);
  return (
    <div>
      <h2>{blog.title}</h2>
      <h3>by {blog.author}</h3>
      <p>{blog.body}</p>
      <p>Created On {blog.created_at}</p>
    </div>
  );
}
export default ReadBlog;
