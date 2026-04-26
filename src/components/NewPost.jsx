import { useState } from 'react'
import styles from './Newost.module.css'

function NewPost({ onAdd }) {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = () => {
    onAdd({ name, content })
    setName('')
    setContent('')
    setIsOpen(false)
  }

  const handleCancel = () => {
    setName('')
    setContent('')
    setIsOpen(false)
  }

  return (
    <div className={styles.container}>
      {!isOpen && (
        <button className={styles.addButton} onClick={() => setIsOpen(true)}>Add Post</button>
      )}
      {isOpen && (
        <div className={styles.form}>
          <input
            className={styles.input}
            placeholder='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" />
          <input
            className={styles.input}
            placeholder='content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text" />
          <button className={styles.submitButton} onClick={handleSubmit}>Submit</button>
          <button className={styles.cancelButton} onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  )
}

export default NewPost
