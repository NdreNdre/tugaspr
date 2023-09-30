import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/homepage'
import ArrayPage from './pages/arraypage'
import StarPage from './pages/starpage'
import ApiPage from './pages/ApiPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/tugaspr' element={<HomePage />}></Route>
        <Route path='/array' element={<ArrayPage />}></Route>
        <Route path='/star' element={<StarPage />}></Route>
        <Route path='/api' element={<ApiPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
