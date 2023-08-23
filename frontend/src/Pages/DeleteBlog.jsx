import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteBlog() {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios.delete("/api/posts/delete.php", { data: { id } }).then((res) => {
      navigate("/");
    });
  });
  return <div>Deleting....</div>;
}
export default DeleteBlog;
