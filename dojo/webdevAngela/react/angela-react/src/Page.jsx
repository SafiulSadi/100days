import myImage from './assets/image.png';
import "./Page.css"
import Card from './Card';
const fname = "Angela";
const lname = "Yu";
let num = 3;

export default function Page({title}){
    return (<div className='Page'>
        <h1>{title}</h1>
        <img src={myImage} width={"300px"}/>
        <h2>
        This is the japan picture
        </h2>
        <p>These are {`${fname} ${lname}`}'s top {num} favorite foods. And the lucky number is {Math.floor(Math.random()*10)}</p>
        <Card/>
        <Card/>
        <Card/>
    </div>)
}