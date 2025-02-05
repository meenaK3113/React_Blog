import React, { useState,useEffect } from 'react'
import { useNavigate, useParams} from 'react-router-dom'

const ReadBlog = () => {
    const {id} =useParams();
    const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const selectedBlog = storedBlogs[id];
    setBlog(selectedBlog);
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-gray-700 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-gray-500 p-6 rounded-lg shadow-md w-full max-w-4xl flex text-white">
      <div className="w-1/3">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-auto object-cover py-30 rounded-lg"
          />
        </div>
        <div className="w-2/3 pr-4 px-6">
          <h2 className="font-bold text-6xl uppercase mb-4 italic">{blog.title}</h2>
          <hr/>
          <p className="text-white mb-6">{blog.content}</p>
        </div>
        
      </div>
      
    </div>
  );
};
export default ReadBlog