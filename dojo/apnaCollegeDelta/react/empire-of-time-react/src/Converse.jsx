import converse from "./assets/converse.png"
import Like from "./Like"
export default function Converse(){
    return (<div>
        <h3>Converse Chuck Taylor All Star Low Top</h3>
        <img src={converse} alt="converse image" />
        <p><strong>$65.00</strong> &nbsp;&nbsp;&nbsp;&nbsp; <Like/></p>
        <p>Free Shipping</p>
        <p>Ready to dress up or down, these clasic canvas Chucks are an everyday wardrobe staple.</p>
        <a href="#">More information &rarr;</a>
        <h4>Product details</h4>
        <ul>
            <li>Lightweight, durable canvas sneaker</li>
            <li>Lightly padded footbed for added comfort</li>
            <li>Iconic Chuck Taylor ankle patch</li>
        </ul>
        <button>Add to cart</button>
    </div>)
}