
import './App.css'
import Intro from './components/intro/Intro'
import LatestNews from './components/latestNews/LatestNews'
import Nav from './components/nav/Nav'
import TopNews from './components/topNews/TopNews'

function App() {
  return (
    <div>
      <Nav/>
      <Intro/>
      <TopNews/>
      <LatestNews/>
    </div>
  )
}

export default App
