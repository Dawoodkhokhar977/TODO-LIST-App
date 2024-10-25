import {useEffect, useState } from 'react';
const Todolist = () => {
    function getstoredtodos(){
        let data = localStorage.getitem("todos")
        let json = JSON.parse(data)
        if(json){
            
        }
        return[]
    }
    // let [todos,settodos] = useState(getstoredtodos())
    // useEffect(()=>{
    //     localStorage.setitem("todos",JSON,stringify(todos))
    // })
  const [todos, settodos] = useState([{ task: "My First Task", completed:true }]);

  function handlesubmit(event) {
    event.preventDefault();
    let task = event.target.task.value;
    if (!task) {
      alert("Please provide a valid task");
      return;
    }
    settodos([...todos, { task: task, completed: false }]);
    event.target.reset();
  }

  function changeTaskStatus(index) {
    let newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    settodos(newTodos);
  }

  function deletetask(index) {
    let newtodos = [...todos];
    newtodos.splice(index, 1);
    settodos(newtodos);
  }

  return (
    <div>
      <div className='container my-5'>
        <div className='mx-auto rounded border p-4' style={{ width: "600px", backgroundColor: "#08618d" }}>
          <h1 className='text-white text-center mb-5'>MY TODO LIST</h1>

          <form className="d-flex" onSubmit={handlesubmit}>
            <input className="form-control me-2" type="search" placeholder="New task" name='task' aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Add</button>
          </form>

          {todos.map((todo, index) => (
            <div key={index} className='rounded mt-4 p-2 d-flex' style={{ backgroundColor: todo.completed ? "#87FC68" : "lightGray" }}>
              <div className='me-auto'>
                {todo.task}
              </div>
              <div>
                <i className={"h5 me-2 " + (todo.completed ? "bi bi-check-square" : "bi bi-square")} style={{ cursor: "pointer" }} onClick={() => changeTaskStatus(index)}></i>
                <i className="bi bi-trash text-danger h5" style={{ cursor: "pointer" }} onClick={() => deletetask(index)}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todolist;
