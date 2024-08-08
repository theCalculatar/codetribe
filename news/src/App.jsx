
import './App.css'
import Intro from './components/intro/Intro'
import LatestNews from './components/latestNews/LatestNews'
import MustRead from './components/mustRead/MustRead'
import Nav from './components/nav/Nav'
import TopNews from './components/topNews/TopNews'

function App() {
  return (
    <div>
      <Nav/>
      <Intro/>
      <TopNews/>
      <LatestNews/>
      <MustRead/>
    </div>
  )
}

export default App
