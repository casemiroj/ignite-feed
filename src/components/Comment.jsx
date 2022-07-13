import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/casemiroj.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Casemiro</strong>
              <time title='05 de julho ás 15:21h' dateTime='2022-07-05 15:21:00'>Cerca de 1h</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}