import PropTypes from 'prop-types'; 
import { IoBookmarks } from "react-icons/io5";

const Blog = ({ blog, handleBookmarkBtn }) => {
    const {title, cover_img, reading_time, author_img, author_name, posted_date, hashtag} = blog;
    // console.log(blog);

    return (
        <div className='mb-16'>
            <img src={cover_img} alt="" />
            

            <div className='flex justify-between items-center mt-5 mb-4'>
                <div className='flex items-center gap-6'>
                    <img className='w-16 h-16' src={author_img} alt="" />

                    <div>
                        <h3>{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>
                        {reading_time} min read
                        <button onClick={()=>handleBookmarkBtn(blog)}><IoBookmarks /></button>
                    </span>
                </div>
            </div>

            
            <h2 className='text-5xl font-bold'>{title}</h2>

            <div>
                <h3 className='text-2xl my-5' ><a href="#">{hashtag}</a></h3>
            </div>
        </div>
    );
};





Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarkBtn: PropTypes.func.isRequired
    
}

export default Blog;