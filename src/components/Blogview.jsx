import React from 'react'
import { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';

const Blogview = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {

    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  const description=(content)=>{
    return content.length>150? content.substring(0,150)+'...':content;
  };

  const deleteBlog = (index) => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    storedBlogs.splice(index, 1);
    localStorage.setItem('blogs', JSON.stringify(storedBlogs));
    setBlogs(storedBlogs);
  };

  const incrementReadCount = (index) => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blog = storedBlogs[index];
    blog.readCount = (blog.readCount || 0) + 1;
    storedBlogs[index] = blog;
    localStorage.setItem('blogs', JSON.stringify(storedBlogs));
    setBlogs(storedBlogs); 
  };

  return (
    <div className="p-4 h-screen bg-gray-700">
      <h2 className="text-5xl font-bold mb-6 flex justify-center text-white italic ">Let's Read Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg space-x-4 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-95"
            >
              {blog.imageUrl && (
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2 uppercase">{blog.title}</h3>
              <p className="text-gray-700  pb-3">{description(blog.content)}</p>
              
              <div className='flex '>
                <div className='flex-grow'>
              <Link to={`/readblog/${index}`} className="bg-black text-white rounded-lg p-2" onClick={() => incrementReadCount(index)}>Read More </Link>
              </div>

              <div className='gap-2 flex'>
              <div className=" text-sm text-black flex"> <Eye />
                {blog.readCount ? ` ${blog.readCount}` : "0"}
              </div>
              <button
                onClick={() => deleteBlog(index)}
                className="text-black"
              >
              <Trash2 />  
              </button>
              </div>
            </div>
            </div>
          ))
        ) : (
          <div className='flex w-screen  justify-center'>
          <div className=' bg-gray-500 flex flex-col items-center text-4xl m-10 justify-center p-4 rounded-lg'>Dreaming, after all, is a form of planning.<div className='p-8'>Add your Blog now!!!</div></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogview