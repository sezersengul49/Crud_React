
import axios from "axios"
import formatDate from "./utils/formatDate"
import Content from "./Content";
import Edit from "./Edit";
import { useState } from "react";


const ListItem = ({todo, setTodos, allTodos}) => {
    const [isEdit, setIsedit]=useState(false)

  const handleDelete = ()=> {
   
    //* FETCH ile DELETE isteği

    // fetch(`http://localhost:3000/todos/${todo.id}`,{method: 'DELETE'})
    // .then(()=> {
    //     const filtredTodos = allTodos.filter((item)=> item.id !== todo.id)

    //     setTodos(filtredTodos);
    // })
    // .catch(()=> console.log('basarısız oldu',err))


      //* AXİOS ile DELETE isteği
    axios
    .delete(`http://localhost:3000/todos/${todo.id}`)
    .then(()=> {
        const filtredTodos = allTodos.filter((item) => item.id !== todo.id);

        setTodos(filtredTodos);
    })
    .catch((err)=> console.log('basarısız oldu', err));


  };

  const handleUpdate =(e) => {
    e.preventDefault();

    const title= e.target[1].value;
    const status= e.target[0].value;

    //apı güncelle fetch ile*/

    // fetch(`http://localhost:3000/todos/${todo.id}` ,{
    //   method:'PATCH',
    //   body: JSON.stringify({title,status})

    // });

     //apı güncelle axios ile*/
   axios.patch(`http://localhost:3000/todos/${todo.id}`,{title,status})

   .then(()=> {
    const updated= {...todo, title , status};

    const newTodos= allTodos.map((item)=> item.id===updated.id ?updated : item);

    setTodos(newTodos);

    setIsedit(false)

   })

  }


  return (
    <li className=" relative p-3 list-group-item d-flex justify-content-between align-items-center gap-3 ">

        {isEdit ? ( <Edit
        todo={todo}
        handleUpdate={handleUpdate}
         setIsedit= {setIsedit}

        />)
         :
        (
         <Content todo={todo} handleDelete={handleDelete} setIsedit= {setIsedit}/>
        )}
    
        
        <span className="date">{formatDate(todo.date)}</span>
        
        </li>
  );
};

export default ListItem;