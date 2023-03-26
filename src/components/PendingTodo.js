import React from 'react'
 
const PendingTodo = () => {
   const data = JSON.parse(sessionStorage.getItem("PendingTodos")) 
  return (
   <div>
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
               <td>False</td> 
           </tr>
        ))}
       </tbody>
     </table> 
   </div> 
  )
}

export default PendingTodo