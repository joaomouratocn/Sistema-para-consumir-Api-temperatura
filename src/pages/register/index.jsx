import './style.css'
import Logo from '../../assets/logo-horizontal-branco.png'
import { Navigate, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('enviado para cadastro!')
    navigate('/')
  }

  return (
    <div className="container-register">
      <div className="main-register">
        <img src={Logo} alt="Logo" className='logo-register' />
        <p className='p-register'>Novo usuário:</p>
        <form action="submit" onSubmit={(e) => { handleRegister(e); }} className='form-register'>
          <p className='p-register'>Nome:</p>
          <input type="text" name='name' placeholder='Insira seu nome' className='input-register' />
          <p className='p-register'>Email:</p>
          <input type="text" name='email' placeholder='Insira se e-mail' className='input-register' />
          <p className='p-register'>Senha:</p>
          <input type="password" name='password' placeholder='Insira uma senha' className='input-register' />
          <p className='p-register'>Confirmar:</p>
          <input type="password" name='password' placeholder='Repita a senha' className='input-register' />
          <p className='p-register'>Unidade:</p>
          <select name="unit" id="unit" className='input-register'>
            <option value="select">Selecione unidade</option>
            <option value="AV">Água Vermelha</option>
            <option value="BT">Botafogo</option>
            <option value="CA">Cidade Aracy</option>
            <option value="DT">Delta</option>
            <option value="IM">Itamaraty</option>
            <option value="JK">Jockey Club</option>
            <option value="RD">Redenção</option>
            <option value="SE">Santa Eudoxia</option>
            <option value="SF">Santa Felicia</option>
            <option value="SJ">São José</option>
            <option value="VI">Vila Isabel</option>
            <option value="ZV">Zavaglia</option>
          </select>
          <button type='submit' className='button-register'>Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default Register
