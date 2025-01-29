

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import { Header } from '../Components/Header.jsx';

import { Hero } from '../Components/Hero.jsx';
import { Food_category } from '../Components/Menu.jsx';

import { DishProvider } from '../Components/contextHook.jsx';
import { Footer } from '../Components/Footer.jsx';

function App() {

  return (
    <>
    
    <DishProvider >
    <Header/>
   <Food_category/>
    <Hero/>
    <Footer />
    </DishProvider>
    
    </>
  )
}

export default App
