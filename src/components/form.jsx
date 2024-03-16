import axios from 'axios';
import { Toast } from 'bootstrap';
import React from 'react'
import { toast } from 'react-toastify';
import { v4 as generateId } from 'uuid';





const Form = ({setTodos}) => {

  const handleSubmit=(e)=> {
    e.preventDefault()

    const title=e.target[0].value;
    const status=e.target[1].value;

    const newTodo = {
      id:generateId(),
      title,
      status,
      date:new Date().toLocaleDateString(),
    };

 //* FETCH le POST isteği 

    // fetch('http://localhost:3000/todos', {
    //   method: 'POST',
    //   body:JSON.stringify(newTodo),
    // })
    // .then(()=>setTodos ((prev)=> [...prev ,newTodo]))
    // .catch((err)=> console.log(err))

  
    //* AXİOS ile POST istegi
    axios
    .post ('http://localhost:3000/todos', newTodo)

    .then(()=> {

    toast.success('todo eklendi');

    setTodos ((prev)=> [...prev ,newTodo]);
    })

    .catch((err)=> alert('üzgünüz sorun olustu'))
 
  };
  return (
    <form
    onSubmit={handleSubmit}
    className='d-flex align-items-center justify-content-center gap-3 my-5'>
        <input className='form-control shadow' type="text" />
        <select className='form-select w-50 shadow'>
            <option value="daily">Günlük</option>
            <option value="job">iş</option>
            <option value="important">önemli</option>
        </select>
        <button className='btn btn-primary shadow'>Gönder</button>
    </form>
  )
}

export default Form;
