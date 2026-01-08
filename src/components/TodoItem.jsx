import React from "react";
import { useState } from "react";

function TodoItem(props) {
  // console.log(props.info);
  const [done, setDone] = useState(false)
  function delTask(){
    

  }



  return (
    <li 
    className= {`flex items-center text-2xl justify-between px-3 py-2 rounded-lg ${ done ? "opacity-50 line-through" : "" }`}  >
      <span
      className="cursor-pointer flex-1"
      onClick={() => setDone(!done)}>
        {props.text}
      </span>
      <button 
      className="ml-3 text-red-400 hover:text-red-500"
      onClick={delTask}
      >
        del
      </button>
    </li>
  );
}

export default TodoItem;
