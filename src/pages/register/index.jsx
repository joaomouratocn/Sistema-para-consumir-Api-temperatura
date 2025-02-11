import './style.css'
import axios from 'axios';
import Logo from '../../assets/logo-horizontal-branco.png'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Register() {
  const [options, setOptions] = useState([])
  const [selectedOptions, setSelectedOption] = useState('')
  const navigate = useNavigate();


  const fetchUnits = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/units')
      setOptions(response.data)
    } catch (error) {
      console.log('Erro ao buscar os dados', error)
    }
  }

  useEffect(() => {
    fetchUnits();
  }, [])

  const handleSelect = (e) => {
    setSelectedOption(e.target.value)
  }

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
          <input type="text" name='name' placeholder='Insira seu nome' className='input-register' id='input-name-register' />
          <label className='label-register'>Email:</label>
          <input type="email" name='email' placeholder='Insira seu e-mail' className='input-register' id='input-email-register' />
          <label className='label-register'>Senha:</label>
          <input type="password" name='password' placeholder='Insira uma senha' className='input-register' id='input-password-register' />
          <label className='label-register'>Confirme a senha:</label>
          <input type="password" name='confirm-password' placeholder='Repita a senha' className='input-register' id='input-confirm-pass-register' />
          <label className='label-register'>Selecione unidade:</label>
          <select
            name="unit"
            className='input-register'
            id='select-unit-register'
            value={selectedOptions}
            onChange={handleSelect}>
            <option value="">Selecione</option>
            {
              options.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.name}
                </option>
              ))}
          </select>
          <button type='submit' className='button-register'>Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default Register