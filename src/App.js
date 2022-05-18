import './App.css';
import CustomNavbar from './components/CustomNavbar';
import {plus,increment,decrement} from "./redux/action" // our functions
import {useDispatch} from "react-redux" //we use always use dispatch in redux
import Movie from './components/Movie';
function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
    
      {/* <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(plus())}>+</button> */}
      <CustomNavbar/>
      <Movie/>
      
    </div>
  );
}

export default App;
