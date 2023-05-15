import './App.css';
import './Component/First.js'
import First from './Component/First.js';
import Second from './Component/Second';
import Hoc from './Component/Hoc';
import './Component/style.css'

function App() {
  
  
  return (
     <div style={{backgroundColor:'black'}}>
       <Hoc/>
     <First/>
     <Second/>
      
      
     </div>
  );
}

export default App;
