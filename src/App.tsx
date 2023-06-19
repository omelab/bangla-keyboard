import React from 'react'; 
import './App.css';
import AvroInput from './avro/AvroInput';

function App() {
  const onInputChange = (changedVal: any) => {
    console.log(changedVal);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h2> Avro Bangla Input Field</h2> 
        
        <AvroInput type="text" className="Hello" placeholder="Search here" onChange={onInputChange}  />
        
        <AvroInput type="textarea"  style={{width:'100%', height:'100px'}} onKeyDown={(event)=> console.log(event)}/>
      </header>
    </div>
  );
}

export default App;
