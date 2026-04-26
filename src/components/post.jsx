import { useState } from 'react'
import styles from './Post.module.css'

function Post({ name, content, onClick, onSave }) {
  const [postcontect, setpostcontect] = useState(content)
  const [inputValue, setInputValue] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const handleSave = () => {
    setpostcontect(inputValue)
    onSave(inputValue)
    setInputValue('')
    setIsEditing(false)
  }

  const handleCancel = () => {
    setInputValue('')
    setIsEditing(false)
  }

  return <div className={styles.conteiner} onClick={onClick}>
    <h1 className={styles.name}>hello {name}</h1>
    <h2 className={styles.contect}>{postcontect}</h2>
    {isEditing ? (
      <>
        <input
          className={styles.input}
          placeholder='write a post...'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text" />
        <button onClick={handleSave}>שמור</button>
        <button onClick={handleCancel}>ביטול</button>
      </>
    ) : (
      <button onClick={() => setIsEditing(true)}>Edit</button>
    )}
  </div>
}
export default Post
