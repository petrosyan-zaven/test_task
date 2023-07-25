import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className='Heade'>
        <NavLink to={'/'}>Home</NavLink>
        <button>Log0</button>
    </nav>
  )
}

export default Header