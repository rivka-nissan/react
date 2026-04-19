import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Post from './components/Post'
function App() {
  return(
<>
<Post name="rivka" content="this is my first post" />
<Post name="sarah" content="this is my second post" />
<Post name="david" content="this is my third post" />
</>
  );
  
 
}

export default App
