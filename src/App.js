import logo from './logo.svg';
import "./App.css"
import Sample from './example/Sample';
import Test212 from './example/Test212';
import Hope from './example/Hope';

const var1={
  name:"siri",
  age:21,
  city:"hyderabad"
}
const var2={
  
  language:"py",
  duration:3,
  certification:"Yes"
}

function App() {
  return (
    <div className="App">
      <h1 style={{color:"pink", backgroundColor: 'black'}}>This is a sample css file</h1>
      <Test212 name="SMMK"/>
      <Test212 name={var1.name}/>
      <Sample/>
      <p><b>**************************************************************************************</b></p>
      <Hope var1={var1}/>
      <p>_______________________________________________________________________________________________________________________________________</p>
      



    </div>
  );
}



export default App;
