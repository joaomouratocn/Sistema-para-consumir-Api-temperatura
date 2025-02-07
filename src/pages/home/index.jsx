import './style.css'
import React, {useState} from 'react'
import Logo from '../../assets/logo-horizontal-branco.png'

function Home() {

  const [geladeira, setGeladeira] = useState({maxima:'', minima:'', atual:''});
  const [ error, setError] = useState('')

  const handleChange = (e) => {
    setGeladeira({...geladeira, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const alert = (e) =>{
    alert('Realemente são estes dadps!')
  }

  return (
    <div className='container-home'>
      <div className='top-home'>
        <h4 className='user-name-home'>Olá João Mourato</h4>
        <h1 className='unid-name-home'>Nome da unidade</h1>
        <a className='exit-a-home'>Sair</a>
      </div>

      <form className='form-home' onSubmit={alert}>
        <h2 className='amb-name-home'>Geladeira</h2>
        <div className='inputs-home'>
          <input className='temp-input-home' type="text" placeholder='Maxíma' />
          <input className='temp-input-home' type="text" placeholder='Mínima' />
          <input className='temp-input-home' type="text" placeholder='Atual' />
        </div>
        <h2 className='amb-name-home'>Ambiente</h2>
        <div className='inputs-home'>
          <input className='temp-input-home' type="text" placeholder='Maxíma' />
          <input className='temp-input-home' type="text" placeholder='Mínima' />
          <input className='temp-input-home' type="text" placeholder='Atual' />
        </div>
        <button className='submit-home' type='submit'>Registrar</button>
      </form>

      <table border="1" className='table-home'>
        <thead>
          <tr>
            <th rowSpan="2">Data</th>
            <th colspan="3">Temperatura Geladeira</th>
            <th colspan="3">Temperatura Ambiente</th>
            <th rowSpan="2">Usuário</th>
          </tr>
          <tr>
            <th>Máxima</th>
            <th>Mínima</th>
            <th>Atual</th>
            <th>Máxima</th>
            <th>Mínima</th>
            <th>Atual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>06/02/2025 - 07:00</td>
            <td>3.2 °C</td>
            <td>3.0 °C</td>
            <td>3.1 °C</td>
            <td>18.0 °C</td>
            <td>15.9 °C</td>
            <td>17 °C</td>
            <td>João Mourato</td>
          </tr>

          <tr>
            <td>06/02/2025 - 12:00</td>
            <td>3.2 °C</td>
            <td>3.0 °C</td>
            <td>3.1 °C</td>
            <td>18.0 °C</td>
            <td>15.9 °C</td>
            <td>17 °C</td>
            <td>João Mourato</td>
          </tr>

          <tr>
            <td>06/02/2025 - 17:00</td>
            <td>3.2 °C</td>
            <td>3.0 °C</td>
            <td>3.1 °C</td>
            <td>18.0 °C</td>
            <td>15.9 °C</td>
            <td>17.0 °C</td>
            <td>João Mourato</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home
