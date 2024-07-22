import { useEffect, useState } from 'react';
import './App.css';
import Navbar from '././components/Navbar';
import ItemListContainer from '././components/itemListContainer';
import fetchdata from '././components/fetchdata';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '././components/NotFound';
import ItemDetail from '././components/itemDetail';


function App() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {

    fetchdata()
      .then(response => {
        setProductos(response);
      })
      .catch(err => console.error(err));


  }, []);


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer productos={productos} />} />
          <Route path="/detalle/:id" element={<ItemDetail productos={productos} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
