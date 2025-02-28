//Create a react app from scratch
    //it should display 2 paragraphs
    //the paragraphs should say 
    // created by yourname
    //copyright currentLYear
    
import "./Footer.css"
const mname = "A S M Safiul Sadi"
// let year = new Date();
const date = new Date();

export default function Footer(){
    return (<div className="Footer">
        <p>Created by {mname}</p>
        <p contentEditable="true" spellCheck="false">Copyright &copy; {date.getFullYear().toString() } &trade; </p>
    </div>)
}