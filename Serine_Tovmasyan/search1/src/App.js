
import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form/Form';
import Todos from './components/Todos/Todos';
import { URL } from './helpers/constants';

function App() {
  const [fetchedData, setFetchedData]= useState([]);
  const [todos, setTodos] = useState([]);
  const searchTitle=(title)=>{
    const filteredItems = fetchedData.filter(todo=> todo.title.toLowerCase().includes(title.toLowerCase()));
    setTodos(filteredItems)
  }
  
  useEffect(()=>{
    fetch(URL)
    .then(res => res.json())
    .then(data=>{
      setFetchedData(data);
      setTodos(data);
    })
  }, [])

  return (
    <>
      <h2><span className='slash'>/</span> SEARCH IN TODOS</h2>
      <Form searchTitle={searchTitle}/>
      <Todos items={todos}/>
    </>
  );
}

export default App;
