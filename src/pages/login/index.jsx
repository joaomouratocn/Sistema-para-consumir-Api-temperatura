import './style.css'
import Logo from '../../assets/logo-horizontal-branco.png'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) =>{
    e.preventDefault();
    navigate('/home')
  }
  return (
    <div className='container-login'>
      <div className='main-login'>
        <img src={Logo} alt="Logo" className='logo-login' />
        <form className='form-login' onSubmit={handleLogin}>
          <input className='input-login' placeholder='Insira unidade' type="text" />
          <input className='input-login' placeholder='Insira senha' type="password" />
          <button className='access-login' type='submit'>Acessar</button>
        </form>
      </div>
    </div>
  )
}

export default Login
