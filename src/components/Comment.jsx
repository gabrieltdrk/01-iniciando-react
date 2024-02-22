import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} profile="https://github.com/maykbrito.png" />
      <div className={styles.commentContainer}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Andrade</strong>
              <time
                title="2 de Fevereiro às 23:59h"
                dateTime="2024-02-02 23:59:53"
              >
                Publicado há 1h
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Excluir comentário">
              <Trash size={24} />
            </button>
          </header>
          {content}
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
