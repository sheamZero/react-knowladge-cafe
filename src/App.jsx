
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])


  const handleBookmarkBtn = blog =>{
    console.log("add");
    console.log(blog);
  }


  return (
    <>

      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleBookmarkBtn={handleBookmarkBtn}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
