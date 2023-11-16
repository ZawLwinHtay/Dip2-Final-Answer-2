import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddPosts, EditPost, GetPosts } from "../api/ApiHandle";

export default function FormComponents({ formTitle, apiComment }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [err, setErr] = useState("");
  const [InputErr, setInputErr] = useState("");
  const navigate = useNavigate();

  // edit and delete
  const { id } = useParams();

  useEffect(() => {
    // Get one post for edit
    GetPosts().then((res) => {
      res.map((data) => {
        if (data.id == id) {
          setName(data.name);
          setTitle(data.title);
          setContent(data.content);
        }
      });
    });
  }, [id]);

  // validation
  const validation = (errMsg) => {
    setErr(errMsg);
  };

  // form submit handle
  const formSubmitHandle = (e) => {
    e.preventDefault();

    if (name && title && content) {
      if (name.length <= 50 && title.length <= 50 && content.length < 256) {
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
        if (title.length > 50) {
          setInputErr(`Title maximum legth is 50. (Current length ${title.length})`);
        } 
        if (name.length > 50) {
          setInputErr(`Name maximum legth is 50. (Current length ${name.length})`);
        } 
        if (content.length > 255) {
          setInputErr(
            `Content maximum legth is 255. (Current length ${content.length})`
          );
        }
      }
    } else {
      validation("err");
    }
  };

  return (
    <div className="bg-white mx-auto p-5 w-4/5 md:w-2/5 h-auto rounded-md relative">
      {/* maximum legth error */}
      <div className={` absolute left-0 w-full ${InputErr ? 'top-0' : '-top-20'} duration-200`}>
        {title && name && content && InputErr && (
          <div
            id="alert-border-2"
            className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
            role="alert"
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div className="ms-3 text-sm font-medium">{InputErr}</div>
            <button
              className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
              type="button"
              data-dismiss-target="#alert-border-2"
              aria-label="Close"
              onClick={()=>setInputErr("")}
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

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
            value={name}
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
            value={title}
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
            value={content}
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
