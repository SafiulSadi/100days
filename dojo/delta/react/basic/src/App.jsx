import "./App.css"
import Title from "./Title";
import Product from "./Product";
function Description(){
  return <h3>this is the description</h3>;
}
function App() {

  return (
  <div>
    <Product/>
    <Title/>
    <Title/>
    <Title/>
    <Description/>
    <Title/>
  </div>

  )
}

export default App
