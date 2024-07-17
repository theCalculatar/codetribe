import React, { useEffect } from 'react'
import styles from './todo.module.css'


function Todos({todos}) {
  // const todos = props.todos
  return (
    <div className={styles.container}>
      <div>
        { todos.map((value)=>{
            <p>{value.todo}</p>
          })
        }
      </div>
    </div>
  )
}

export default Todos