import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToDO, DeleteToDO ,ClearToDO  } from './action component/Index-action';
import './index.css'

const TodoList = () => {

    const [input, setInput] = useState();

    const list = useSelector( (state) => state.ReducerWork.list )

    const dispatch = useDispatch();

  const Copy = (val) => {
   
      navigator.clipboard.writeText(val)

  }
  

  return (

    <>

    <section>

  <div className=' todoApp '>
  
    <div className='todoContainer'>
   <h2>Todo List</h2>
      
      <div className='inputList'>
       <input type="text"  value={input}    onChange={ (event) =>  setInput(event.target.value) }  className="inputdata" />

       <div className='plusIcon'>
     <i className="fa-solid fa-plus"  onClick={ () =>  dispatch( AddToDO(input) , setInput("") )  }></i>
     </div>
      </div>

  

      {
          list.map( (val) => {
          return   (  
               <div className='listItems' key={val.id} >
                    <h3 >{val.data}</h3>

              <div className='deleteIcon'  onClick={ () => dispatch(DeleteToDO(val.id))}>
            <i className="fa-solid fa-trash-can"></i>
           </div>
           
               <div className='deleteIcon'> 
               <button type="button" className="btn btn-outline-success"  onClick={ () => Copy(val.data)} >Copy</button>
               </div>

           </div> 
               
               )
          }

          )
      }
   

   <div className='text-center mt-4'>
  <button type="button" className="btn btn-outline-success" onClick={ () => dispatch(ClearToDO() )  }>Clear All </button>
  </div>

      </div>
      
  </div>

    </section>
      
      

        </>
  )
}

export default TodoList