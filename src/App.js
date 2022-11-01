import logo from './logo.svg';
import './App.css';
import ClassCounter from './ClassCounter';
import FunctionCounter from './FunctionCounter';

function App() {
  return (
   <div className='App'>
    <h2>Class Counter</h2>
    <ClassCounter />,
    <h2>Function Counter</h2>
    <FunctionCounter />
    </div>
  );
}

export default App;
