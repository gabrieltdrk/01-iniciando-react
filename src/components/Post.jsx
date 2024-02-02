import styles from './Post.module.css';

export function Post({ author, content }) {
  return (
    <div className={styles.content}>
      <strong>{author}</strong>
      <p>{content}</p>
    </div>
  );
}
