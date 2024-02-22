import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { useState } from "react";

import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([""]); // post comments
  const [commentText, setCommentText] = useState(""); // comments textarea

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
    setCommentText("");
  }

  function handleChangeComment(event) {
    event.target.setCustomValidity("");
    setCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDelete = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDelete);
  }

  function handleCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const isCommentEmpty = commentText.length === 0

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
          placeholder="Deixe um comentário..."
          value={commentText}
          onChange={handleChangeComment}
          onInvalid={handleCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentSection}>
        {comments.map((comment) => {
          return (
            <Comment
              onDeleteComment={deleteComment}
              key={comment}
              content={comment}
            />
          );
        })}
      </div>
    </article>
  );
}
