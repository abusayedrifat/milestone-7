import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {

    const {title} = bookmark;
    return (
       <div>
        
            
        <div className="bg-white rounded-lg p-3 mt-2">
            <h3 className="text-lg font-semibold leading-[30px]">{title}</h3>
            
        
        </div>
       </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object,
    readingTime: PropTypes.number,
}

export default Bookmark;