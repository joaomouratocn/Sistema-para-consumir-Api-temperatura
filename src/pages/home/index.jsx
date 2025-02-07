import './style.css'
import Logo from '../../assets/logo-horizontal-branco.png'

function Home() {
  return (
    <div className='container'>
      <p className='user'>João Mourato</p>
      <p>Sair</p>
      <h1>Nome da unidade</h1>
      <form >
        <p>Geladeira</p>
        <input type="text" placeholder='Maxíma' />
        <input type="text" placeholder='Mínima' />
        <input type="text" placeholder='Atual' />
        <p>Ambiente</p>
        <input type="text" placeholder='Maxíma' />
        <input type="text" placeholder='Mínima' />
        <input type="text" placeholder='Atual' />
        <button>Registrar</button>
      </form>
      <table border="1">
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
