import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Content from './pages/content/Content';
import Header from './components/google/header/Header';
import UserPage from './pages/userPage/UserPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path = "/" element = { <Login /> }/>
          <Route path='/register' element = { <Register /> }/>
          <Route path='/home' element = { <Content /> }/>
          <Route path='/user/:id' element = { <UserPage /> }/>

        </Routes>
      </Router>
    </div>
  )
}

export default App