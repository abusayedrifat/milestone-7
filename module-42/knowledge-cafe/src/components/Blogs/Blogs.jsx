import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark , handleAddReadingTime}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect( () =>{
        fetch('blog-data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog} 
                    handleAddToBookmark={handleAddToBookmark}
                    handleAddReadingTime={handleAddReadingTime}
                    ></Blog>  )
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleAddReadingTime: PropTypes.func.isRequired
}

export default Blogs;