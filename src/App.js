import './App.css';
import Addtask from './components/Addtask';
import ListTask from './components/ListTask';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <Addtask/>
      <ListTask/>
    </div>
  );
}

export default App;
