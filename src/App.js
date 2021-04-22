
import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ContentFree from './components/ContentFree';
function App() {
  var curr_time = new Date().toLocaleTimeString();
  const [count, setCount] = useState(0);
  const [time, setTime] = useState([]);
  const [clicked,setClicked]=useState(true);
  const click = () => {
    setCount(count + 1);
    if (count >= 0) {
       setTime((old)=>[...old,curr_time]);
    }
   
  }
  return (
    <div className="app">
      <Navbar />
      <Sidebar click={click} />
      {
        (count > 0 && clicked) ? (
           <Content count={count} time={time}/>
        ):(<ContentFree/>)
        
        
      }
     
      <Footer count={count}/>
    </div>
  );
}

export default App;
