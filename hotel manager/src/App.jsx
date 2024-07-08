import { useState } from 'react'
import './App.css'
import SongForm from './components/form/SongForm'
import Song from './components/song/Songs'
import Search from './components/search/Search'
import Playing from './components/onplay/Playing'

function App() {
  const [songs,addSongs] = useState([])
  const [playing, setPlaying] = useState(null)
  const add = (title,artist,album,image,genre)=>{
    addSongs((songs)=>[...songs,({title:title,artist:artist,album:album,image:image,genre:genre})])
  }

  const deleteSong = (title) => {
    songs.filter((val)=>{
      if (val==title){
        return val
      }
    }).pop()
  }

  const setSong = ({song}) =>{
    setPlaying(song)
  }

  return (
    <div>
      <div className='row-2'>
        <SongForm add={add}/>      
        <Search songs={songs}/>
        <Playing song={playing}/>
      </div>


      {(songs.length>0)?<div className='song-list'>
        <h4>Songs</h4>
        <p>({songs.length})</p>
      </div>:<h4>Added songs will display here</h4>}
      <div className='songs'>
        {songs.map(song=>{
          return <Song song={song} setSong = {setSong} />
      })}
      </div>
    </div>
  )
}

export default App
