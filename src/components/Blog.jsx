import React from 'react'
import { useState } from "react";


const Blog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
     const openModal = () => setIsOpen(true);
//     const closeModal = () => {
//         setIsOpen(false);
//         setTitle("");
//         setContent("");
//         setImageUrl("");
//   };

  const handleSave = () => {
   if(!title || !content || !imageUrl){
    alert("Fill out the fields");
    return;
   }
    const newBlog = { title, content, imageUrl };
    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    existingBlogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(existingBlogs));
    console.log("Saved", { title, content, imageUrl });

    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
          ✖
        </button>
        <h2 className="text-2xl font-bold text-center mb-4">Add New Blog</h2>

        <input
          type="text"
          placeholder="Enter Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border-2 p-2 rounded-lg mb-3 focus:ring focus:ring-blue-300"
        />

        <textarea
          placeholder="Enter Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border-2 p-2 rounded-lg mb-3 focus:ring focus:ring-blue-300 h-32"
        />

        <input
          type="text"
          placeholder="Enter Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full border-2 p-2 rounded-lg mb-3 focus:ring focus:ring-blue-300"
        />

        <div className="flex justify-between mt-4">
          <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700">
            Save
          </button>
          <button onClick={closeModal} className="px-4 py-2 bg-gray-400 text-white font-bold rounded-lg hover:bg-gray-500">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Blog