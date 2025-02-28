import myImage from "./assets/image.png"
const stl = {padding:"10px", margin:"10px"}
const arr = ["flower", "garden", "ayanokoji"]
export default function Card(){
    return(<div className="Card">
        <img style={stl} src={myImage} />
        <img style={stl} src={myImage} />
        <img style={stl} src={myImage} />
    </div>)+
}