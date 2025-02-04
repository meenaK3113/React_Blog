import React from 'react'

const Blogview = () => {
    const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Blog Posts</h2>
      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs available. Add some!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="border rounded-lg shadow-lg p-4 bg-white">
              <img src={blog.imageUrl} alt="Blog" className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-xl font-bold mt-3">{blog.title}</h3>
              <p className="text-gray-700 mt-2">{blog.content.substring(0, 100)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
    
  )
}

export default Blogview