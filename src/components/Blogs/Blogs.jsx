import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

import PropTypes from 'prop-types'; 

const Blogs = ({handleBookmarkBtn}) => {
    const [blogs, setBlogs] = useState([]);



    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])



    // console.log(blogs);
    return (
        <div className="w-2/3">
            <h2 className="text-3xl mb-6">Blogs : {blogs.length}</h2>
            {
                blogs.map( blog => <Blog blog={blog} 
                     key={blogs.id}
                     handleBookmarkBtn={handleBookmarkBtn}
                     ></Blog>)
            }
        </div>
    );
};



Blogs.propTypes = {
    handleBookmarkBtn: PropTypes.func.isRequired
}
export default Blogs;