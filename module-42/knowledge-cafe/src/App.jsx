
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
const [bookmarks, setBookmarks] = useState([]);
const [readingTime, setReadingTime] = useState(0);

const handleAddToBookmark = blog =>{
  const newBookmarks = [...bookmarks, blog]
  setBookmarks(newBookmarks)
}

const handleAddReadingTime = (time, id) =>{
  const totalReadTime = readingTime + time ;
  setReadingTime(totalReadTime);
  //remove the read blog from bookmark
  const remainingBookmarks = bookmarks.filter( bookmark => bookmark.id != id);
  setBookmarks(remainingBookmarks)
}
  return (
    <>
    
     <div className="max-w-[1170px] mx-auto">
     <Header></Header>
      <div className="flex mx-6 my-6 gap-4">
      
      <Blogs handleAddToBookmark={handleAddToBookmark}  handleAddReadingTime={handleAddReadingTime} ></Blogs>
     
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      
      
      
      </div>
     </div>
     
    </>
  )
}

export default App
