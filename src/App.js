import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components 
import AddProducts from './components/AddProducts';
import AllProducts from './components/AllProducts';
import ColorSchemesExample from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <ColorSchemesExample />
        <Routes>
          <Route path='/' element={ <AddProducts /> } />
          <Route path='/allproducts' element={ <AllProducts /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;