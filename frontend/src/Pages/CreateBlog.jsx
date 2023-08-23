import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [category_id, setCategory_id] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyHandler = (e) => {
    setBody(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory_id(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (category && category != 0) {
      const blog = {
        title,
        body,
        author,
        category_id,
      };
      axios.post("/api/posts/create.php", blog).then((res) => {
        if (res.data.message === "Post Created") {
          navigate("/");
        } else setErr(res.data.message);
      });
    } else setErr("Category is required!");
  };

  return (
    <div>
      <p id="err">{err}</p>
      <form onSubmit={onSubmit}>
        <div>
          <label id="title">Title: </label>
          <input
            name="title"
            type="text"
            id="title"
            value={title}
            onChange={titleHandler}
          />
        </div>
        <div>
          <label id="title">Title: </label>
          <textarea
            name="body"
            id="body"
            value={body}
            onChange={bodyHandler}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <label id="author">Author: </label>
          <input
            name="author"
            type="text"
            id="author"
            value={author}
            onChange={authorHandler}
          />
        </div>
        <div>
          <label id="category">Category: </label>
          <select
            name="category"
            id="category"
            value={category_id}
            onChange={categoryHandler}
          >
            <option value="0">None</option>
            <option value="1">Technology</option>
            <option value="2">Gaming</option>
            <option value="3">Auto</option>
            <option value="4">Entertainment</option>
            <option value="5">Books</option>
          </select>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
export default CreateBlog;
