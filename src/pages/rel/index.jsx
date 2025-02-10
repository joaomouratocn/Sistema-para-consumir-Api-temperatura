import './style.css'
import { useNavigate } from 'react-router-dom';
import React from 'react'
import Logo from '../../assets/logo-horizontal-branco.png'
import Print from '../../assets/print.png'

function Home() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/')
  }

  return (
    <div className='container-rel'>
      <div className='top-rel'>
        <img src={Logo} alt="Logo" className='logo-rel'/>
        <div className='right-section-rel'>
          <p className='p-user-rel'>Olá <span className='span-user-rel'>João</span></p>
          <a className='exit-a-rel' onClick={handleLogout}>Sair</a>
        </div>
      </div>
      <div className='main-rel'>
        <label htmlFor='dateEnd'>Data inicial:</label>
        <input type="date" id='dateEnd' className='input-rel' placeholder='Data inicial'/>
        <label htmlFor='dateInit'>Data final:</label>
        <input type="date" id='dateInit' className='input-rel' placeholder='Data final'/>
        <label htmlFor='unit'>Unidade:</label>
        <select name="unit" id="unit" className='input-rel'>
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
        <button className='button-rel'>Buscar</button>
        <img src={Print} alt='Print' className='print-rel'/>
      </div>
      <div className='table-container'>
        <table border="1">
          <thead className='thead-rel'>
            <tr>
              <th rowSpan="2">Data</th>
              <th colSpan="3">Geladeira</th>
              <th colSpan="3">Ambiente</th>
              <th rowSpan="2">Usuário</th>
            </tr>
            <tr>
              <th className='th-rel'>Máxima</th>
              <th className='th-rel'>Mínima</th>
              <th className='th-rel'>Atual</th>
              <th className='th-rel'>Máxima</th>
              <th className='th-rel'>Mínima</th>
              <th className='th-rel'>Atual</th>
            </tr>
          </thead>
          <tbody>
            <tr className='tr-rel'>
              <td className='td-rel'>06/02/2025 - 07:00</td>
              <td className='td-rel'>3.2 °C</td>
              <td className='td-rel'>3.0 °C</td>
              <td className='td-rel'>3.1 °C</td>
              <td className='td-rel'>18.0 °C</td>
              <td className='td-rel'>15.9 °C</td>
              <td className='td-rel'>17 °C</td>
              <td className='td-rel'>João Mourato</td>
            </tr>
            <tr className='tr-rel'>
              <td className='td-rel'>06/02/2025 - 12:00</td>
              <td className='td-rel'>3.2 °C</td>
              <td className='td-rel'>3.0 °C</td>
              <td className='td-rel'>3.1 °C</td>
              <td className='td-rel'>18.0 °C</td>
              <td className='td-rel'>15.9 °C</td>
              <td className='td-rel'>17 °C</td>
              <td className='td-rel'>João Mourato</td>
            </tr>
            <tr className='tr-rel'>
              <td className='td-rel'>06/02/2025 - 17:00</td>
              <td className='td-rel'>3.2 °C</td>
              <td className='td-rel'>3.0 °C</td>
              <td className='td-rel'>3.1 °C</td>
              <td className='td-rel'>18.0 °C</td>
              <td className='td-rel'>15.9 °C</td>
              <td className='td-rel'>17.0 °C</td>
              <td className='td-rel'>João Mourato</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home