import { useParams } from 'react-router';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom"


const Home = (props) => {
  return (
    <h1>Welcome</h1>
  );
}

const Input = (props) => {
  const { value } = useParams();
  const { color1 } = useParams("");
  const { color2 } = useParams("");


  return (
    isNaN(value) ?
    <div style={{backgroundColor: color2}}>
      <h1 style={{color: color1 }}>The word is: { value } </h1>
    </div>:
    <div style={{backgroundColor: color2}}>
      <h1 style={{color: color1 }}>The number is: { value } </h1>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Link to={"/home"}>Go Home</Link>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/:value' element={<Input />} />
        <Route path='/:value/:color1' element={<Input />} />
        <Route path='/:value/:color1/:color2' element={<Input />} />
      </Routes>
    </div>
  );
}

export default App;
