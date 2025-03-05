import zoro from "./assets/zoro.png";
import alleye from "./assets/alleyes.png"
import converse from "./assets/converse.png"
import "./Container.css"
import {Title, Description} from './Title'
import Card from './Card'
import Converse from './Converse';
export default function Container(){
    let hoodies = [{sale: 10,htitle:"Zoro Wanted Poster Hoodie/Tee for winter", price:20, image:zoro}, {sale: 0,htitle:"All Eyes On Me Tee/Hoodie for winter and summer", price:21, image:alleye}, {sale: 10,htitle:"Converse Chuck Taylor All Star Low Top", price:65, image:converse}]
      let arr = ["Zoro Wanted Poster Hoodie/Tee for winter", "All Eyes On Me Tee/Hoodie for winter and summer", "Converse Chuck Taylor All Star Low Top"]
      let stl = { marginTop:"30px",width: "90%",margin:"0 auto", alignItems:"center", textAlign:"center", }
    return (
        <div className=".Container">
          <h1 style={{backgroundColor: "aquamarine", fontSize:"3rem"}}>Empire of Time</h1>
          <div className=".inner-container" style={stl}>
    
          <Converse sale = {hoodies[0].sale}title={hoodies[0].htitle} price={hoodies[0].price} image={hoodies[0].image}/>
          <Converse sale = {hoodies[1].sale}title={hoodies[1].htitle} price={hoodies[1].price} image={hoodies[1].image}/>
          <Converse sale = {hoodies[2].sale}title={hoodies[2].htitle} price={hoodies[2].price} image={hoodies[2].image}/>
         
          
          </div>
          <div className=".inner-container" style={stl}>
    
          <Converse sale = {hoodies[0].sale}title={hoodies[0].htitle} price={hoodies[0].price} image={hoodies[0].image}/>
          <Converse sale = {hoodies[1].sale}title={hoodies[1].htitle} price={hoodies[1].price} image={hoodies[1].image}/>
          <Converse sale = {hoodies[2].sale}title={hoodies[2].htitle} price={hoodies[2].price} image={hoodies[2].image}/>
         
          
          </div>
          <div div className=".inner-container" style={stl}>
    
          <Converse sale = {hoodies[1].sale}title={hoodies[1].htitle} price={hoodies[1].price} image={hoodies[1].image}/>
          <Converse sale = {hoodies[2].sale}title={hoodies[2].htitle} price={hoodies[2].price} image={hoodies[2].image}/>
          <Converse sale = {hoodies[0].sale}title={hoodies[0].htitle} price={hoodies[0].price} image={hoodies[0].image}/>
          </div>
          
    
        </div>
      )
}

// fabrilife turag mad cofeee, dour fashion brands daaka