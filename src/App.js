import './App.css';
import Todo from './components/todo';

function App() {
  const todos = [
    {
      id: 1,
      title: "Leaning react testing in react",
      completed: false
    },
    {
      id: 2,
      title: "I have learn react",
      completed: true
    }
  ]
  return (
    <div className="App">
      {todos.map((todo) => {
        return (<Todo todo={todo} />)
      })}
    </div>
  );
}

export default App;
