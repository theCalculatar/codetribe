
import { useState } from 'react'
import './App.css'
import EditorsPick from './components/editorsPick/EditorsPick'
import Intro from './components/intro/Intro'
import LatestNews from './components/latestNews/LatestNews'
import MustRead from './components/mustRead/MustRead'
import Nav from './components/nav/Nav'
import TopNews from './components/topNews/TopNews'
import { GrClear } from 'react-icons/gr'
import Searches from './components/searches/Searches'

function App() {
  const [categoty,setCategory] = useState(null)
  return (
    <div>
      <Nav/>
      <Intro/>
      <ul className='categories'>
        <li onClick={()=>setCategory('Technology')}>Technology</li>
        <li onClick={()=>setCategory('Sport')}>Sport</li>
        <li onClick={()=>setCategory('Games')}>Games</li>
        <li onClick={()=>setCategory('Netflix')}>Netflix</li>
        {categoty?<li onClick={()=>setCategory(null)}><GrClear/></li>:''}
      </ul>
      {
        !categoty?(<div>
          <TopNews/>
          <LatestNews/>
          <MustRead/>
          <EditorsPick/>
        </div>):<Searches q={categoty}/>
      }
    </div>
  )
}

export default App
