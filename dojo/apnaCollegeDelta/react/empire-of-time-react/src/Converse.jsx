import converse from "./assets/converse.png"
import Like from "./Like"
import "./Converse.css";
export default function Converse({title, image, price}){
    return (<div className="Converse">
        <h3 >{title}</h3>
        <img src={image} alt="converse image" />
        <p><strong className="price">${price}</strong> &nbsp;&nbsp;&nbsp;&nbsp; <Like /></p>
        <p className="free-shipping">Free Shipping</p>
        <p>Ready to dress up or down, these clasic canvas Chucks are an everyday wardrobe staple.</p>
        <a href="#">More information &rarr;</a>
        <h4>Product details
            <Like/>
        </h4>
        <ul>
            <li>Lightweight, durable canvas sneaker</li>
            <li>Lightly padded footbed for added comfort</li>
            <li>Iconic Chuck Taylor ankle patch</li>
        </ul>
        <button className="add-to-cart">Add to cart</button>
    </div>)
}