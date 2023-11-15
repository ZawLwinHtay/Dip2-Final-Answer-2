import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddPosts, EditPost, GetPosts } from "../api/ApiHandle";

export default function FormComponents({ formTitle, apiComment }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  // edit and delete
  const { id } = useParams();

  // edit post default value
  const [editPost, setEditPost] = useState(null);

  useEffect(() => {
    // Get one post for edit
    GetPosts().then((res) => {
      res.map((data) => {
        if (data.id == id) {
          setEditPost(data);
        }
      });
    });
  }, [id, editPost]);

  // validation
  const validation = (errMsg) => {
    setErr(errMsg);
  };

  // form submit handle
  const formSubmitHandle = (e) => {
    e.preventDefault();
    if ((name && title && content) || (editPost)) {
      // for add new post
      if (apiComment == "AddPosts") {
        AddPosts(e.target);
        navigate("/");
      }
      // for edit post
      else if (apiComment == "EditPosts") {
        EditPost(id, e.target);
        navigate("/");
      }
    } else {
      if (!name) {
        validation("name");
      }
      if (!title) {
        validation("title");
      }
      if (!content) {
        validation("content");
      }
    }
  };

  return (
    <div className="bg-white mx-auto p-5 w-3/5 md:w-2/5 h-auto rounded-md">
      {/* Form Title */}
      <h3 className="font-bold text-xl md:text-2xl text-center text-yellow-500 mb-3">
        {formTitle}
      </h3>

      {/* Form */}
      <form
        action=""
        onSubmit={(e) => formSubmitHandle(e)}
        className=" space-y-3"
      >
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className={`block mb-2 text-md font-medium ${
              !name && err ? "text-red-700" : "text-black"
            }`}
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            defaultValue={editPost ? editPost.name : name}
            className={`border text-sm rounded-lg block w-full p-2.5 outline-none text-yellow-500 ${
              !name && err
                ? "bg-red-50 border-red-500 placeholder-red-700"
                : "bg-yellow-50 placeholder-yellow-200 border-yellow-500"
            }`}
          />
          {!name && err && (
            <p className="text-sm text-red-600 dark:text-red-500">
              required name !!!
            </p>
          )}
        </div>

        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className={`block mb-2 text-md font-medium ${
              !title && err ? "text-red-700" : "text-black"
            }`}
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
            defaultValue={editPost ? editPost.title : title}
            className={`border text-sm rounded-lg block w-full p-2.5 outline-none text-yellow-500 ${
              !title && err
                ? "bg-red-50 border-red-500 placeholder-red-700"
                : "bg-yellow-50 placeholder-yellow-200 border-yellow-500"
            }`}
          />
          {!title && err && (
            <p className="text-sm text-red-600 dark:text-red-500">
              required title !!!
            </p>
          )}
        </div>

        {/* Content */}
        <div>
          <label
            htmlFor="content"
            className={`block mb-2 text-md font-medium ${
              !content && err ? "text-red-700" : "text-black"
            }`}
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows="4"
            placeholder="Enter Content"
            onChange={(e) => setContent(e.target.value)}
            defaultValue={editPost ? editPost.content : content}
            className={`border text-sm rounded-lg block w-full p-2.5 outline-none text-yellow-500 ${
              !content && err
                ? "bg-red-50 border-red-500 placeholder-red-700"
                : "bg-yellow-50 placeholder-yellow-200 border-yellow-500"
            }`}
          ></textarea>

          {!content && err && (
            <p className="text-sm text-red-600 dark:text-red-500">
              required content !!!
            </p>
          )}
        </div>

        <button className="text-white font-semibold text-sm md:text-lg w-full p-2.5 bg-yellow-400 rounded-md">
          Save
        </button>
      </form>
    </div>
  );
}
