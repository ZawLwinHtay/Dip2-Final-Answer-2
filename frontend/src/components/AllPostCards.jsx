import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DeletePost, GetPosts } from "../api/ApiHandle";

export default function AllPostCards() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    GetPosts().then((res) => {
      setPosts(res.reverse());
    });
  }, [posts]);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className="md:w-3/5 mx-auto bg-white p-5 my-3 rounded-lg"
          >
            {/* card header */}
            <div className="flex items-start justify-between relative">
              {/* card left */}
              <div>
                <h2 className="mb-2 font-bold text-xl md:text-3xl text-yellow-400">
                  {post.name}
                </h2>
                <div className="flex items-center gap-3">
                  <h3 className="text-gray-500 text-md md:text-xl font-semibold">
                    {post.title}
                  </h3>
                  <p className="text-xs bg-yellow-400 px-3 py-1.5 text-white font-semibold">
                    {post.date}
                  </p>
                </div>
              </div>

              {/* card right */}
              <div className="flex gap-3 items-center">
                <Link
                  to={`/edit/${post.id}`}
                  className="bg-yellow-400 p-1 mr-5 rounded-md text-white cursor-pointer"
                >
                  <PencilSquareIcon className="w-6 h-6" />
                </Link>
                <div onClick={()=>DeletePost(post.id)} className="cursor-pointer absolute -top-5 -right-5 bg-yellow-400 rounded-tr-md rounded-bl-lg p-1">
                  <XMarkIcon className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* card body */}
            <p className="mt-2 text-xs md:text-sm text-[#9e9e9e] text-justify">
              {post.content}
            </p>
          </div>
        );
      })}
    </div>
  );
}
