import getRamdomElementFromArray from "../utils/RamdomElementArray"
import pharse from '../utils/phrases.json'

const buttonCard = ({setpharseRamdom,setpathRandom,arrBackground} ) => {
  const handleRandomPhrase=()=>{
    setpharseRamdom(getRamdomElementFromArray(pharse))
    const newPath=getRamdomElementFromArray(arrBackground)
    setpathRandom(newPath)
  }
  
  return (
    <button className="btn" onClick={handleRandomPhrase}>probar mi suerte hoy</button>
  )
}
export default buttonCard