import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddPosts, EditPost, GetPosts } from "../api/ApiHandle";

export default function FormComponents({ formTitle, apiComment }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const [editPost, setEditPost] = useState(null);

  useEffect(() => {
    GetPosts().then((res) => {
      res.map((data) => {
        if (data.id == id) {
          setEditPost(data);
        }
      });
    });
  }, [id, editPost]);

  // form submit handle
  const formSubmitHandle = (e) => {
    e.preventDefault();
    if (apiComment == "AddPosts") {
      AddPosts(e.target);
      navigate("/");
    } else if (apiComment == "EditPosts") {
      EditPost(id, e.target);
      navigate("/");
    }
  };

  return (
    <div className="bg-white mx-auto p-5 w-3/5 md:w-2/5 h-auto rounded-md">
      <h3 className="font-bold text-xl md:text-2xl text-center text-yellow-500 mb-3">
        {formTitle}
      </h3>
      <form
        action=""
        onSubmit={(e) => formSubmitHandle(e)}
        className=" space-y-3"
      >
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            defaultValue={editPost && editPost.name}
            // value={name}
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg  focus:border-red-500 block w-full p-2.5 outline-none"
          />
          {name && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Username already taken!
            </p>
          )}
        </div>

        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
            defaultValue={editPost && editPost.title}
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg  focus:border-red-500 block w-full p-2.5 outline-none"
          />
          {title && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Username already taken!
            </p>
          )}
        </div>

        {/* Content */}
        <div>
          <label
            htmlFor="content"
            className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows="4"
            placeholder="Enter Content"
            onChange={(e) => setContent(e.target.value)}
            defaultValue={editPost && editPost.content}
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg  focus:border-red-500 block w-full p-2.5 outline-none"
          ></textarea>

          {content && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Username already taken!
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
