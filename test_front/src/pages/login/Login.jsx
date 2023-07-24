import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react';
import './login.css'
import SigneIn from '../../components/google/SigneIn';


function Login() {
  
    const navigate = useNavigate();
    
    const [ formData, setFormData ] = useState({
      email: '',
      password: ''
    })
    
    
    const handleLogin = async (e) => {
  
       e.preventDefault()
        setFormData ({email: "",password: "" })
         
  
      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        const token = data.jwt;
        navigate('/home');
  
        localStorage.setItem('token', token);
        if("error" in data){ alert(data.error)}
      } catch (err) {
        console.error(err);
      
      }
    };

    

  return (
    <div className='Login'>

        <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div className='box'>
            <label>
                    <input
                        type="text"
                        placeholder='name'
                        value={formData.email}
                        onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                        }
                    />
            </label>
        </div>
          
        <div className='box'>
          <label>
                  <input
                      type="password"
                      placeholder='password'
                      value={formData.password}
                      onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                      }
                  />
            </label>         
        </div> 
        <div className='btn-box'>
             <button className='btn-login'>Login</button>
             <Link className='register-btn' to={'/register'}>Register</Link>
             
        </div>
        <SigneIn />
      </form>
    </div>
  )
}

export default Login