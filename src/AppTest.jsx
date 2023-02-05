import { Link, Route, Routes } from 'react-route-dom'
import Forms from './pages/intro/Forms'
import Intro from './pages/intro/Intro'

export default function AppTest() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/form">Forms</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Intro />}/>
        <Route path="/form" element={<Forms />}/>
      </Routes> 
    </>
  )
}