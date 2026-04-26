import { useState } from 'react'
import './App.css'
import Post from './components/Post'
import NewPost from './components/NewPost'
function App() {
  const [posts, setPosts] = useState([
    { name: "rivka", content: "this is my first post" },
    { name: "sarah", content: "this is my second post" },
    { name: "david", content: "this is my third post" }
  ])

  const handleAdd = (newPost) => {
    setPosts([...posts, newPost])
  }

  const handleSave = (index, newContent) => {
    const newPosts = [...posts]
    newPosts[index].content = newContent
    setPosts(newPosts)
  }

  const handlelogpost = () => {
    console.log(posts)
  }

  return(
    <>
      <NewPost onAdd={handleAdd}/>
      {posts.map((post, index) => <Post key={index} name={post.name} content={post.content} onSave={(newContent) => handleSave(index, newContent)}/>)}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        margin: '20px',
        width: '300px',
        height: '200px'
      }}>
        <button className="button" onClick={handlelogpost}>
          log to console
        </button>
      </div>
    </>
  );
}

export default App
