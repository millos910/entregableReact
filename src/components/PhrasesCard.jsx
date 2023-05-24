
const phrasesCard = ({PharseRandom}) => {
    console.log(PharseRandom)
  return (
    <div>
      <p className="card">{PharseRandom.phrase}</p>
      {/* <img src="/img/rectangle1.svg" alt={PharseRandom.phrase} /> */}
    </div>
  )
}
export default phrasesCard