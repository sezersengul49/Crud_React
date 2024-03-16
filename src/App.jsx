import { useEffect, useState } from "react";
import Form from "./components/form";
import Loader from "./components/Loader";
import ListItem from "./components/ListItem";
import axios from "axios";
axios



const App = () => {

  const[todos, setTodos]=useState(null)
 
  //* FETCH ile GET isteği
  // useEffect(()=>{

  //   fetch('http://localhost:3000/todos')
  //   .then((res) => res.json())
  //   .then((data)=> setTodos(data))
  //   .catch((err)=> console.log(err));


  // } ,[])

  //* AXİOS ile GET isteği
  useEffect (()=> {
    axios
    .get('http://localhost:3000/todos')
    .then((res) => setTodos(res.data))
    
    .catch((err)=> console.log(err));
  } ,[])
  

  return (
    <div className="p-3 container p-md-5">
    <h1
   className=" text-center">Server  <span className="text-warning">CRUD</span>
   </h1>

    <Form setTodos={setTodos}/>

    {!todos &&  <Loader/>}

    <ul className="list-group">

      {todos?.map((todo)=> 
         <ListItem 

         key={todo.id} 
          todo={todo} 
          setTodos={setTodos} 
          allTodos={todos}/>
      )}

    </ul>

 

 </div> )
};

export default App;