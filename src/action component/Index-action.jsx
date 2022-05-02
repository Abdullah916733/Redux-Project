import React from 'react'

 export  const AddToDO = (input) => {
    
  
     return {
         type : "add",
         payload : {
               id : new Date().getTime().toString(),
               data : input,
         },
         
     }
 }

 
 export  const DeleteToDO = (id) => {
  
    return {
        type : "delete",
        payload : id
    }

}




export  const ClearToDO = () => {
  
    return {
        type : "clear"
    }

}

