import './App.css'
import Product from './Pages/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Test from './Pages/Test'


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Product />} />
          <Route index path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
