import './style.css'
import Logo from '../../assets/logo-horizontal-branco.png'

function Home() {
  return (
    <div className='container'>
      <h1>Nome da unidade</h1>
      <form >
        <input type="text" placeholder='Temperatura' />
        <input type="text" placeholder='Nome' />
        <button>Registrar</button>
      </form>
      <table border="1">
        <thead>
          <tr>
            <th colspan="2">Cabeçalho Principal</th>
            <th>Cabeçalho 2</th>
          </tr>
          <tr>
            <th>Subcabeçalho 1</th>
            <th>Subcabeçalho 2</th>
            <th>Subcabeçalho 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dados 1.1</td>
            <td>Dados 1.2</td>
            <td>Dados 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home
