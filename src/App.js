import { useEffect, useState } from 'react';
import './App.css';
import Lane from './components/Lane/Lane';
import TaskForm from './components/TaskForm/TaskForm';
import generateDummyData from './data';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const statuses = ['To Do', 'In Progress', 'Done'];

  useEffect(() => {
    const dummyData = generateDummyData();
    setTodoList(dummyData.todoList);
    setInProgressList(dummyData.inProgressList);
    setDoneList(dummyData.doneList);
  }, []);

  const addTask = (newTask) => {
    // Determine which list to add the task based on its status
    if (newTask.status === 'todo') {
      setTodoList([...todoList, newTask]);
    } else if (newTask.status === 'inprogress') {
      setInProgressList([...inProgressList, newTask]);
    } else if (newTask.status === 'done') {
      setDoneList([...doneList, newTask]);
    }
  };

  const handleClearAll = () => {
    setTodoList([]);
    setInProgressList([]);
    setDoneList([]);
  };

  return (
    <div className="App">
      <h2>JIRA</h2>
      <button onClick={() => setShowTaskForm(true)}>Add Task</button>
      {showTaskForm && (
        <button onClick={() => setShowTaskForm(false)}>Close</button>
      )}
      {showTaskForm && <TaskForm addTask={addTask} />}
      <button onClick={() => handleClearAll()}>Clear All</button>
      <div className="lane">
        {statuses.map((status) => {
          let list;
          if (status === 'To Do') {
            list = todoList;
          } else if (status === 'In Progress') {
            list = inProgressList;
          } else {
            list = doneList;
          }
          return <Lane name={status} list={list} />;
        })}
      </div>
    </div>
  );
}

export default App;
