  import './App.css';
  import Menu from './Components/menu';
  import Login from './pages/Login/Login';
  import Cadastro from './pages/Cadastro/Cadastro';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Inicio from './pages/Inicio/Inicio';
  import Home from './pages/Home/Home';
  import Perfil from './pages/Perfil/Perfil';
  import Crie from './pages/Crie/Crie';
  import Descrição from './pages/Descrição/Descrição';
  import Sobre from './pages/Sobre/Sobre';
  import Alterarsenha from './pages/Alterarsenha/Alterarsenha';
  import Contatos from './pages/Contatos/Contatos';
  import { Helmet } from 'react-helmet';

  function App() {
    return (
  <Router>
        <div className="Container">
        <Helmet>
          <link rel="icon" type="image/png" href="https://hobbyhubback-production.up.railway.app/media/hobby/logoprojeto.png"/>
        </Helmet>
        <Menu className="menu_button_header"/>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
            <Route path='/perfil' element={<Perfil/>} />
            <Route path='/descrição' element={<Descrição/>} />
            <Route path='/crie' element={<Crie/>} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/alterarsenha' element={<Alterarsenha/>} />
            <Route path='/Contatos' element={<Contatos/>} />
          </Routes>
        </div>
      </Router>
    )
  }

  export default App;