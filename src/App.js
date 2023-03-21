import logo from './logo.svg';
import './App.css';
import Create from './Component/Create';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from './Component/Read';
import Edit from './Component/Edit';
import Header from './Component/Header';

function App() {
  return (
    <>
      <Header/>
      <div className="container mt-4">
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Create/>}/>
        <Route path='/read' element={<Read/>}/>
          <Route path='/edit' element={<Edit/>}>

        </Route>
      </Routes>
      </BrowserRouter>
      </div>
      </>
  );
}

export default App;
