import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} profile='maykbrito' />
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
            <button title="Excluir comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, Devon. Parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
