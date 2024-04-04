// import { prototype } from 'postcss/lib/previous-map';
import PropTypes from 'prop-types'; // ES6
import { BsBookmarkStar } from "react-icons/bs";

const Blog = ({blog, handleAddToBookmark, handleAddReadingTime}) => {
    
    const {id, title,cover, author, author_img, posted_date, reading_time, hashtags  } = blog;
    return (
        <div className="mt-5 mb-20">
            <img className="rounded-xl " src={cover} alt="" />
            <div className="flex items-center justify-between my-5">
                <div className="flex gap-5 items-center">
                <img className="w-[64px]" src={author_img} alt="" />
                <div>
                <h4 className="font-bold">{author}</h4>
                <h4 className="text-[#11111199]">{posted_date}</h4>
                </div>
                </div>
                 <div className='flex gap-4'>
                 <p className="text-[#11111199]"> {reading_time} min read</p>
                 <button onClick = {()=> handleAddToBookmark(blog)}className='text-2xl'><BsBookmarkStar></BsBookmarkStar></button>
                 </div>
            </div>
            <h3 className="text-3xl font-semibold">{title}</h3>
            <p className='flex gap-3 mt-6'>
                {
                    hashtags.map(hash => <span key={blog.id}> <a href=""> #{hash} </a> </span> )
                }
            </p>
           
                <button onClick={() => handleAddReadingTime(reading_time, id)} className="text-violet-600 underline ">Mark as read</button>
            
            <div className="mt-5 bg-gray-700 border-b-2 border-gray-400"></div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleAddReadingTime: PropTypes.func.isRequired
}
export default Blog;