import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './register.css'

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: '',
    email: '',  
    password: '',
    year: '',
  });

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: user.firstName,
          email: user.email,
          password: user.password,
          year: user.year,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        console.log('User created!');
        navigate('/');
      } else {
        console.log('Error registering user:', data.status);
      }
    } catch (err) {
      console.error('Error registering user:', err);
    }

    setUser({ firstName: '',email: '', password: '', year: '' });
  }

  const generateYearOptions = () => {
    const startYear = 1980;
    const endYear = 2023;
    const years = [];

    for (let year = endYear; year >= startYear; year--) {
      years.push(year);
    }

    return years.map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  };
  
  return (
    <div className="Register">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="box">
          <label>
            <input
              type="text"
              placeholder='first name'
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </label>
        </div>
        <div className="box">
          <label>
            <input
              type="text"
              placeholder='email'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </label>
        </div>
        <div className='box'>
          <label>
            <input
              type="password"
              placeholder='password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
        </label>
        </div>
        <div className='box'>
        <label>
          <select
            value={user.year}
            onChange={(e) => setUser({ ...user, year: new Date().getUTCFullYear() - e.target.value })}
          >
            <option value="">Select Year</option>
            {generateYearOptions()}
          </select>
        </label>
        </div>
        <div className="btn-box">
          <button className="btn-login" type='submit'>Register</button>
          <Link className='register-btn' to={'/'}>Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
