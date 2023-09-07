import './App.css';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import CounterApp from './components/CounterApp';

function App() {
  return (
    <div className="App">
     <AddTodo/>
     <ListTodo/>
     <CounterApp/>
    </div>
  );
}

export default App;
