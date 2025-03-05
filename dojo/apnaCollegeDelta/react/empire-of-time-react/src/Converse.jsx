import converse from "./assets/converse.png"
import Like from "./Like"
import "./Converse.css";
export default function Converse({title, image, price, sale}){
    return (<div className="Converse">
        <h3 className="title-converse">{title} <span style={sale>0?{}:{display:"none"} } className="title-converse-sale">SALE {sale}%</span></h3>
        <img src={image} alt="converse image" />
        <p><strong className="price">${price}</strong> &nbsp;&nbsp;&nbsp;&nbsp; <Like /></p>
        <p className="free-shipping">Free Shipping</p>
        <p>Ready to dress up or down, these clasic canvas Chucks are an everyday wardrobe staple.</p>
        <a href="#">More information &rarr;</a>
        <h4>Product details
            <Like/>
        </h4>
        <div className="colors" style={{textAlign:"left"}}>
            <div className="red"  style={{margin:"5px", width:"25px", height:"25px",display:"inline-block", backgroundColor:"black"}}>  </div>
            <div className="red"  style={{margin:"5px", width:"25px", height:"25px",display:"inline-block", backgroundColor:"blue"}}>  </div>
            <div className="red"  style={{margin:"5px", width:"25px", height:"25px",display:"inline-block", backgroundColor:"red"}}>  </div>
            <div className="red"  style={{margin:"5px", width:"25px", height:"25px",display:"inline-block", backgroundColor:"yellow"}}>  </div>
            <div className="red"  style={{margin:"5px", width:"25px", height:"25px",display:"inline-block", backgroundColor:"lime"}}>  </div>
            <div className="red"  style={{margin:"5px", width:"25px", height:"25px",display:"inline-block", backgroundColor:"brown"}}>  </div>
        </div>
        <ul>
            <li>Lightweight, durable canvas sneaker</li>
            <li>Lightly padded footbed for added comfort</li>
            <li>Iconic Chuck Taylor ankle patch</li>
        </ul>
        <button className="add-to-cart">Add to cart</button>
    </div>)
}