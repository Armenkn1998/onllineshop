import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import  Catalog  from './page/Catalog/Catalog'
import Product from './page/Product/Product'
import Footer from './components/Footer/Footer'
import Home from './page/Home/Home'

function App() {


  return (
    <>
    <Header/>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/catalog" element={<Catalog />} />
  <Route path="/product" element={<Product />} />
</Routes>
    <Footer/>
     
    </>
  )
}

export default App
