import './style.css'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import Logo from '../../assets/logo-horizontal-branco.png'
import Swal from 'sweetalert2';

function Home() {
  const [refrigerator, setRefregerator] = useState({ maxima: '', minima: '', atual: '' });
  const [location, setLocation] = useState({ maxima: '', minima: '', atual: '' })
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    //TO-DO
    navigate('/')
  }

  const handleChangeRefrigerator = (e) => {
    const { name, value } = e.target;
    setRefregerator({ ...refrigerator, [name]: value })
  };

  const handleChangeLocation = (e) => {
    const { name, value } = e.target
    setLocation({ ...location, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      refrigerator.maxima == '' ||
      refrigerator.minima == '' ||
      refrigerator.atual == '' ||
      location.maxima == '' ||
      location.minima == '' ||
      location.atual == ''
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
        //TO-DO
        console.log('enviado para a API')
      }
    });
  }

  return (
    <div className='container-home'>
      <div className='top-home'>
        <h4 className='user-name-home'>Olá João Mourato</h4>
        <a
          className='exit-a-home'
          onClick={(e) => {handleLogout(e); }}>Sair</a>
      </div>

      <form className='form-home' onSubmit={handleSubmit}>
        <h2 className='amb-name-home'>Geladeira</h2>
        <div className='inputs-home'>
          <input
            className='temp-input-home'
            type="text"
            placeholder='Maxíma'
            name='maxima'
            value={refrigerator.maxima}
            onChange={handleChangeRefrigerator}
          />
          <input
            className='temp-input-home'
            type="text"
            placeholder='Mínima'
            name='minima'
            value={refrigerator.minima}
            onChange={handleChangeRefrigerator} />
          <input
            className='temp-input-home'
            type="text"
            placeholder='Atual'
            name='atual'
            value={refrigerator.atual}
            onChange={handleChangeRefrigerator}
          />
        </div>
        <h2 className='amb-name-home'>Ambiente</h2>
        <div className='inputs-home'>
          <input
            className='temp-input-home'
            type="text"
            placeholder='Maxíma'
            name='maxima'
            value={location.maxima}
            onChange={handleChangeLocation} />
          <input
            className='temp-input-home'
            type="text"
            placeholder='Mínima'
            name='minima'
            value={location.minima}
            onChange={handleChangeLocation} />
          <input
            className='temp-input-home'
            type="text"
            placeholder='Atual'
            name='atual'
            value={location.atual}
            onChange={handleChangeLocation}
          />
        </div>
        <button className='submit-home' type='submit'>Registrar</button>
      </form>

      <table border="1" className='table-home'>
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
