import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(['']); // post comments
  const [commentText, setCommentText] = useState(''); // comments textarea

  const publishedAtTitleFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedAtTime = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateComment() {
    event.preventDefault();
    setComments([...comments, commentText]);
    setCommentText('');
  }

  function handleChangeComment() {
    setCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDelete = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    setComments(commentsWithoutDelete);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar profile={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedAtTitleFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedAtTime}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="###">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateComment} className={styles.commentForm}>
        <strong>Deixe seu feedback 👍</strong>
        <textarea 
          name="comment"
          value={commentText}
          onChange={handleChangeComment}
          placeholder="Deixe um comentário..." 
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentSection}>
        {comments.map((comment) => {
          return (
          <Comment 
            onDeleteComment={deleteComment}
            key={comment} 
            content={comment} 
          />);
        })}
      </div>
    </article>
  );
}
