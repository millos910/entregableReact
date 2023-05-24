import './App.css'
import { useState } from 'react'
import phrases from './utils/phrases.json'
import ButtonCard from './components/ButtonCard'
import PhrasesCard from './components/phrasesCard'
import getRamdomElementFromArray from './utils/RamdomElementArray'
const arrBackground=[1,2,3,4]
function App() {
  const initialValue=getRamdomElementFromArray(phrases);
  const initialPath=getRamdomElementFromArray(arrBackground)
  const [PharseRandom,setpharseRamdom]=(useState(initialValue));
  const [pathRandom,setpathRandom]=useState(initialPath)
  const objStyle={
    backgroundImage: `url('img/fondo${pathRandom}.jpg')`
  }
  return (
    <div style={objStyle} className='app'>
        <h1 className='app__tittle'>Galleta de la Fortuna app</h1> 
        <ButtonCard setpharseRamdom={setpharseRamdom} 
          setpathRandom={setpathRandom}
          arrBackground={arrBackground}/>
        <PhrasesCard PharseRandom={PharseRandom}/>
        <footer className='footer'>
          <h3><b>Created by: </b>Emilio Montero</h3>
        </footer>
    </div>
  )
}

export default App
