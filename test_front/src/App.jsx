import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Content from './pages/content/Content';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path = "/" element = { <Login /> }/>
          <Route path='/register' element = { <Register /> }/>
          <Route path='/home' element = { <Content /> }/>
        </Routes>
      </Router>
    </div>
  )
}

export default App