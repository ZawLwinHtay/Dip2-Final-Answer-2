import axios from "axios";

const d = new Date();
const date = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();


// Get all post from api
export function GetPosts() {
  return axios.get("http://127.0.0.1:8000/posts/").then((res) => res.data);
}


// Add new post
export function AddPosts(post) {
  return axios.post("http://127.0.0.1:8000/posts/", {
    id: null,
    name: post.name.value,
    title: post.title.value,
    content: post.content.value,
    date: `${date}/${month + 1}/${year}`,
  });
}


// Edit post
export function EditPost(id, post) {
  return axios.put(`http://127.0.0.1:8000/posts/${id}/`, {
    name: post.name.value,
    title: post.title.value,
    content: post.content.value,
    date: `${date}/${month + 1}/${year}`,
  });
}


// Delete post
export function DeletePost(id) {
  return axios.delete(`http://127.0.0.1:8000/posts/${id}/`, {});
}
