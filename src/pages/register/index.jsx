import './style.css'
import Logo from '../../assets/logo-horizontal-branco.png'
import { useNavigate } from 'react-router-dom';

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
        <h2 className='label-register'>Cadastro</h2>
        <form onSubmit={handleRegister} className='form-register'>
          <label className='label-register'>Nome:</label>
          <input type="text" name='name' placeholder='Insira seu nome' className='input-register' id='input-name-register'/>
          <label className='label-register'>Email:</label>
          <input type="email" name='email' placeholder='Insira seu e-mail' className='input-register' id='input-email-register'/>
          <label className='label-register'>Senha:</label>
          <input type="password" name='password' placeholder='Insira uma senha' className='input-register' id='input-password-register'/>
          <label className='label-register'>Confirme a senha:</label>
          <input type="password" name='confirm-password' placeholder='Repita a senha' className='input-register' id='input-confirm-pass-register'/>
          <label className='label-register'>Selecione unidade:</label>
          <select name="unit" className='input-register' id='select-unit-register'>
            <option value="select">Selecione</option>
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