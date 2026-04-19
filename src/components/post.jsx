import styles from './Post.module.css'
function Post({ name, content }) {
return <div className={styles.conteiner}>
    <h1 className={styles.name}>hello {name}</h1>
    <h2 className={styles.contect}>{content}</h2>
</div>

}
export default Post

