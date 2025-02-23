import "./App.css"

function Title(){
  return <h1>I am the title</h1>;
}

function Description(){
  return <h3>this is the description</h3>;
}
function App() {

  return (
  <div>
    <Title/>
    <Description/>
    <Title/>
  </div>

  )
}

export default App
