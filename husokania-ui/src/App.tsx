import './App.css'
import Skills from './components/home/Skills'
import Navbar from './components/header/navbar/Navbar'
import Hello from './components/home/Hello'

function App() {
  return (
    <>
    <Navbar title='Husokania'/>
    <Hello/>
    <Skills/>
    </>
  )
}

export default App;