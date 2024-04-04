import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {

   
    return (
       <div className="md:w-1/3 h-full">
         <div className="bg-[#6047EC1A] border border-[#6047EC] py-5 px-10 rounded-lg mt-5">
        <h2 className="text-violet-700 text-lg font-semibold text-center">Your total reading time : {readingTime} min </h2>
    </div>
        <div className=" bg-gray-200 rounded-xl p-4  mt-5 ">

            
            <h3 className="text-2xl font-bold">Bookmarks: {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} 
                bookmark={bookmark} readingTime={readingTime}
                ></Bookmark>)
            }
        </div>
       </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
   readingTime: PropTypes.number
}
export default Bookmarks;