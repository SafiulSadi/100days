import './App.css'
import zoro from "./assets/zoro.png";
import alleye from "./assets/alleyes.png"
import converse from "./assets/converse.png"

import {Title, Description} from './Title'
import Card from './Card'
import Converse from './Converse';
import Container from './Container';
function App() {
  let hoodies = [{htitle:"Zoro Wanted Poster Tee for winter", price:20, image:zoro}, {htitle:"All Eyes On Me Tee/Hoodie/Hello hoodies for winter and summer", price:20, image:alleye}, {htitle:"Converse Chuck Taylor All Star Low Top", price:65, image:converse}]
  let arr = ["Zoro Wanted Poster Hoodie/Tee for winter", "All Eyes On Me Tee/Hoodie for winter and summer", "Converse Chuck Taylor All Star Low Top"]
  return (
    <>
     <Container/>
      

    </>
  )
}


export default App
