import React, { useEffect, useState } from 'react'
import styles from './todo.module.css'
import { RxCross2 } from "react-icons/rx";


function Todos({todos,delTodo,editTodo}) {
  const [title,setTitle] = useState()
  const [description,setDescripton] = useState(null)
  const [index,setIndex] = useState(0)
  const [id,setId] = useState(0)
  const [priority,setPriority] = useState(0)

  const _setTitle = (title,index,id,priority) =>{
    const _todo = todos
    _todo[title] = title
    setDescripton(todos[index].description)
    setTitle(title)
    setIndex(index)
    setId(id)
    setPriority(priority)
  }
  
  const _setDesciption = (description,index,id,priority) =>{
    const _todo = todos
    _todo[description] = description
    setTitle(todos[index].todo)
    setDescripton(description)
    setIndex(index)
    setId(id)
    setPriority(priority)
  }


  useEffect(()=>{
    const timer = setTimeout(()=>{
      title==todos[index]?'':editTodo({id:id, todo:title,priority:priority,description},index)
    },3000)
  
    return () => {clearTimeout(timer)}

  },[title,description])
  //
  const todoColor = (priority) =>{
    if(priority==0){
      return 'green'
    }else if(priority==1){
      return 'yellow'
    }else return 'red'
  }
  return (
    <div className={styles.container}>
      { todos.map((value,index)=>{
        return (<div key={index} className={styles.todo}>
                  <div className={styles.priority} style={{backgroundColor:todoColor(value.priority)}}></div>
                  <div style={{display:'flex',flexDirection:'column'}}>
                    <span contentEditable="true" className={styles.title} onKeyUp={(e)=>{
                      _setTitle(e.target.innerHTML,index,value.id,value.priority)
                    }} >{value.todo} 
                    </span>
                    <span contentEditable="true" className={styles.description} onKeyUp={(e)=>{
                      _setDesciption(e.target.innerHTML,index,value.id,value.priority)}}>{value.description}
                    </span>
                  </div>
                  <RxCross2 onClick={()=>delTodo(value)}className={styles.icon}/>
                </div>)
        })
      }
    </div>
  )
}

export default Todos