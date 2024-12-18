import './App.css';

import { BrowserRouter, Routes ,Route } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Container from './components/layout/container'

import Home from  './components/pages/home'
import List from  './components/pages/ListBand'
import Insert from  './components/pages/InsertBand'
import ListM from  './components/pages/ListMusic'
import InsertM from  './components/pages/InsertMusic'
import DetailMusic from './components/pages/DetailMusic';
import DeleteMusic from './components/pages/DeleteBand';
import UpdateMusic from './components/pages/UpdateMusic';

function App(){

  return(
    <>
    <BrowserRouter>
      <Container>
          <Routes>
            <Route path='/' element={<NavBar/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/ListBand' element={<List/>}/>
            <Route path='/InserBand' element={<Insert/>}/>
            <Route path='/ListMusic' element={<ListM/>}/>
            <Route path='/InserMusic' element={<InsertM/>}/>
            <Route path='/DetailMusic/:cod_musica' element={<DetailMusic/>}/>
            <Route path='/DeleteMusic/:cod_musica' element={<DeleteMusic/>}/>
            <Route path='/UpdateMusic/:cod_musica' element={<UpdateMusic/>}/>
            </Route>
          </Routes>
      </Container>
    </BrowserRouter>
    </>
  )
}
export default App;