import React from 'react'
 
const Todo = () => {
   const data = JSON.parse(sessionStorage.getItem("Todos")) 
  return (
   <div>
    <h4>Todo</h4>
     <table>
       <thead>
         <tr>
           <th>Id</th>
           <th>Title</th> 
           <th>Completed</th> 
         </tr>
       </thead>
       <tbody>
        {data.map((e)=>(
           <tr key={e.id}>
               <td>{e.id}</td>
               <td>{e.title}</td>
               <td>{e.completed}</td> 
           </tr>
        ))}
       </tbody>
     </table> 
   </div> 
  )
}

export default Todo