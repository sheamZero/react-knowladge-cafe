import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    // console.log(blogs);
    return (
        <div>
            <h2>i am blogs</h2>
        </div>
    );
};

export default Blogs;