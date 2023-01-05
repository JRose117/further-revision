import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllHP from './components/AllHP'

const App = () => {

  return (
    <div className="site=wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<AllHP/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
