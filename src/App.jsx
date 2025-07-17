import Greeting from './components/Greeting.jsx';
import PropsDemo from './components/PropsDemo.jsx';
import Destructuring from './components/Destructuring.jsx';
import Button from './components/Button.jsx';
import flyingHouse from '/public/flyinghouse.jpg';
import Image from './components/Image.jsx';
import './App.css';

function App() {
  function handleClick(){
    console.log("Button Clicked");
  }

  return (
    <div className="wrapper">
       <h1> My third react project</h1>
        <Greeting/>
        <PropsDemo name="Rucha"/>
        <Destructuring studentName="Chikoo" course="Python" school="UW"/>
        <Button text="Click Me" onClick={handleClick}/>
        <Image path={flyingHouse} altText = "A flying house" widthPx="300px"/>
    </div>
  )
}

export default App
