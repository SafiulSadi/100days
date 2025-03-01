export default function Msg({fname, textColor}){
    let styles = {color:textColor}
    return (<div>
        <h3 style={styles}>Hello, {fname}</h3>

    </div>)
}