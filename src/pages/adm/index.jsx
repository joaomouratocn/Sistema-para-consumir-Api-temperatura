import './style.css'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import Logo from '../../assets/logo-horizontal-branco.png'
import Print from '../../assets/print.png'

function Home() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    //TO-DO
    navigate('/')
  }

  return (
    <div className='container-home'>
      <div className='top-home'>
        <img src={Logo} alt="Logo" className='logo-adm'/>
        <a
          className='exit-a-home'
          onClick={(e) => {handleLogout(e); }}>Sair</a>
      </div>
      <div className='main-adm'>
        <label for='dateEnd'>Data inicial:</label>
        <input type="date" id='dateEnd' className='input-adm' placeholder='Data inicial'/>
        <label for='dateInit'>Data final:</label>
        <input type="date" id='dateInit' className='input-adm' placeholder='Data final'/>
        <select name="unit" id="unit" className='input-adm'>
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
        <button>Buscar</button>
        <img src={Print} alt='Print' className='print-adm'/>
      </div>
      <table border="1">
        <thead className='thead-home'>
          <tr>
            <th rowSpan="2">Data</th>
            <th colSpan="3">Geladeira</th>
            <th colSpan="3">Ambiente</th>
            <th rowSpan="2">Usuário</th>
          </tr>
          <tr>
            <th className='th-home'>Máxima</th>
            <th className='th-home'>Mínima</th>
            <th className='th-home'>Atual</th>
            <th className='th-home'>Máxima</th>
            <th className='th-home'>Mínima</th>
            <th className='th-home'>Atual</th>
          </tr>
        </thead>
        <tbody>
          <tr className='tr-home'>
            <td className='td-home'>06/02/2025 - 07:00</td>
            <td className='td-home'>3.2 °C</td>
            <td className='td-home'>3.0 °C</td>
            <td className='td-home'>3.1 °C</td>
            <td className='td-home'>18.0 °C</td>
            <td className='td-home'>15.9 °C</td>
            <td className='td-home'>17 °C</td>
            <td className='td-home'>João Mourato</td>
          </tr>

          <tr className='tr-home'>
            <td className='td-home'>06/02/2025 - 12:00</td>
            <td className='td-home'>3.2 °C</td>
            <td className='td-home'>3.0 °C</td>
            <td className='td-home'>3.1 °C</td>
            <td className='td-home'>18.0 °C</td>
            <td className='td-home'>15.9 °C</td>
            <td className='td-home'>17 °C</td>
            <td className='td-home'>João Mourato</td>
          </tr>

          <tr className='tr-home'>
            <td className='td-home'>06/02/2025 - 17:00</td>
            <td className='td-home'>3.2 °C</td>
            <td className='td-home'>3.0 °C</td>
            <td className='td-home'>3.1 °C</td>
            <td className='td-home'>18.0 °C</td>
            <td className='td-home'>15.9 °C</td>
            <td className='td-home'>17.0 °C</td>
            <td className='td-home'>João Mourato</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home
