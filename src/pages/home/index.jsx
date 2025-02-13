import './style.css'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import Logo from '../../assets/logo-horizontal-branco.png'
import Swal from 'sweetalert2';

function Home() {
  const [refrigerator, setRefrigerator] = useState({ maxima: '', minima: '', atual: '' });
  const [location, setLocation] = useState({ maxima: '', minima: '', atual: '' })
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/')
  }

  const handleChangeRefrigerator = (e) => {
    const { name, value } = e.target;
    setRefrigerator({ ...refrigerator, [name]: value })
  };

  const handleChangeLocation = (e) => {
    const { name, value } = e.target
    setLocation({ ...location, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      refrigerator.maxima === '' ||
      refrigerator.minima === '' ||
      refrigerator.atual === '' ||
      location.maxima === '' ||
      location.minima === '' ||
      location.atual === ''
    ) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos obrigatórios',
        text: 'Todos campos são obrigatórios!'
      })
      return
    }
    Swal.fire({
      icon: 'question',
      title: 'Confirma registro',
      html: `Todos os campos estão corretos:<br>
      <b>GELADEIRA</b> -> max: <b>${refrigerator.maxima}</b> min: <b>${refrigerator.minima}</b> atual: <b>${refrigerator.atual}</b><br>
      <b>AMBIENTE</b> -> max: <b>${location.maxima}</b> min: <b>${location.minima}</b> atual: <b>${location.atual}</b><br>
      Não poderão ser alterados novamente!`,
      showCancelButton: true,
      confirmButtonText: 'Sim, registrar!',
      cancelButtonText: 'Não, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('enviado para a API')
      }
    });
  }

  return (
    <div className='container-home'>
      <div className='top-home'>
        <img src={Logo} alt="Logo" className='logo-home' />
        <div className='right-section-home'>
          <p className='p-user-home'>Olá <span className='span-user-home'>João</span></p>
          <a className='exit-a-home' onClick={handleLogout}>Sair</a>
        </div>
      </div>

      <form className='form-home' onSubmit={handleSubmit}>
        <div className='location-home'>
          <div className='div-amb-home'>
            <h2 className='amb-name-home'>Geladeira</h2>
            <label htmlFor='maxima-refri' className='label-home'>Máxima:</label>
            <input
              id='maxima-refri'
              className='temp-input-home'
              type="text"
              placeholder='00.0°C'
              name='maxima'
              value={refrigerator.maxima}
              onChange={handleChangeRefrigerator}
            />
            <label htmlFor='minima-refri' className='label-home'>Mínima:</label>
            <input
              id='minima-refri'
              className='temp-input-home'
              type="text"
              placeholder='00.0°C'
              name='minima'
              value={refrigerator.minima}
              onChange={handleChangeRefrigerator}
            />
            <label htmlFor='atual-refri' className='label-home'>Atual:</label>
            <input
              id='atual-refri'
              className='temp-input-home'
              type="text"
              placeholder='00.0°C'
              name='atual'
              value={refrigerator.atual}
              onChange={handleChangeRefrigerator}
            />
          </div>
          <div className='div-amb-home'>
            <h2 className='amb-name-home'>Ambiente</h2>
            <label htmlFor='maxima-amb' className='label-home'>Máxima:</label>
            <input
              id='maxima-amb'
              className='temp-input-home'
              type="text"
              placeholder='00.0°C'
              name='maxima'
              value={location.maxima}
              onChange={handleChangeLocation}
            />
            <label htmlFor='minima-amb' className='label-home'>Mínima:</label>
            <input
              id='minima-amb'
              className='temp-input-home'
              type="text"
              placeholder='00.0°C'
              name='minima'
              value={location.minima}
              onChange={handleChangeLocation}
            />
            <label htmlFor='atual-amb' className='label-home'>Atual:</label>
            <input
              id='atual-amb'
              className='temp-input-home'
              type="text"
              placeholder='00.0°C'
              name='atual'
              value={location.atual}
              onChange={handleChangeLocation}
            />
          </div>
        </div>
        <button className='submit-home' type='submit'>Registrar</button>
      </form>

      <div className='container-table-home'>
      <table className='table-home'>
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
            <td className='td-home'>3.2°C</td>
            <td className='td-home'>3.0°C</td>
            <td className='td-home'>3.1°C</td>
            <td className='td-home'>18.0°C</td>
            <td className='td-home'>15.9°C</td>
            <td className='td-home'>17°C</td>
            <td className='td-home'>João Mourato</td>
          </tr>
          <tr className='tr-home'>
            <td className='td-home'>06/02/2025 - 12:00</td>
            <td className='td-home'>3.2°C</td>
            <td className='td-home'>3.0°C</td>
            <td className='td-home'>3.1°C</td>
            <td className='td-home'>18.0°C</td>
            <td className='td-home'>15.9°C</td>
            <td className='td-home'>17°C</td>
            <td className='td-home'>João Mourato</td>
          </tr>
          <tr className='tr-home'>
            <td className='td-home'>06/02/2025 - 17:00</td>
            <td className='td-home'>3.2°C</td>
            <td className='td-home'>3.0°C</td>
            <td className='td-home'>3.1°C</td>
            <td className='td-home'>18.0°C</td>
            <td className='td-home'>15.9°C</td>
            <td className='td-home'>17°C</td>
            <td className='td-home'>João Mourato</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Home