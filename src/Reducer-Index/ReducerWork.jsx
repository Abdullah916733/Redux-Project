import React from 'react';

 const initialData = {
      list : [],
 }

const ReducerWork = (state = initialData , action) => {
  
     switch(action.type){

         case "add" : 

         const {id , data } = action.payload;

     if(data.length >= 3 && data.length <= 10 ){
      
            return {  ...state,
               list : [
                      ...state.list,
                      {
                         id : id,
                         data : data
                      }
                  ] 
                }  
            
        }

         case "delete" : 

         return {...state ,
               
               list : state.list.filter( (val) => val.id !== action.payload )

                 }

          case "clear" :
              return {...state ,
                       list : []
                     }


         default : return  state

     }

}

export default ReducerWork
