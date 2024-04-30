import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blog from "../Blogs/Blog";

const HomePageBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [seeDetails, setSeeDetails] = useState(3);
    useEffect(() => {
        fetch("/public/blog.json") 
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.error("Error fetching blogs:", error));
    }, []);


    return (
        <div className="mt-10 px-2 lg:px-10">
                  <div className="mb-10 text-center">
                  <h1 className="text-center text-4xl font-bold">Our Latest Blogs</h1>
        <p className="section-p text-base mt-5">
        Stay updated with our latest insights, tips, and stories. <br /> Explore our blog for travel inspiration
        </p>
      </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                   Array.isArray(blogs) && blogs?.slice(0, seeDetails).map(blog => (
                        <Blog
                            key={blog.id}
                            blog={blog}
                        />
                    ))
                }
            </div>
            <div className="flex justify-center mt-10">
                {seeDetails < blogs.length && (
                    <Link to="/blogs">
                    <button className="btn w-fit bg-[#E7A500]">
                        See More
                    </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default HomePageBlogs;
