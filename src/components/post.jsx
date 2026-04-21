import { useState } from 'react'
import styles from './Post.module.css'

function Post({ name, content ,onClick}) {
const handleClick = () => {
    console.log('i was clicked')

  }
  const[postcontect,setpostcontect] = useState(content)

return <div className={styles.conteiner}onClick={onClick}>
    <h1 className={styles.name}>hello {name}</h1>
    <h2 className={styles.contect}>{postcontect}</h2>
    <input 
    className={styles.input}
    placeholder='write a post...'
    onChange={(e) => setpostcontect(e.target.value)}

    type="text" />
</div>

}
export default Post

