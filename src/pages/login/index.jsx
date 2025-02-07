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
    <div className='container'>
      <div className='main'>
        <img src={Logo} alt="Logo" className='logo' />
        <form className='form' onSubmit={handleLogin}>
          <input className='input' placeholder='Insira unidade' type="text" />
          <input className='input' placeholder='Insira senha' type="password" />
          <button className='access' type='submit'>Acessar</button>
        </form>
      </div>
    </div>
  )
}

export default Login
