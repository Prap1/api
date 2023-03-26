import React from 'react'
 
const CompletedTodo = () => {
   const data = JSON.parse(sessionStorage.getItem("CompletedTodos")) 
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
               <td>True</td> 
           </tr>
        ))}
       </tbody>
     </table> 
   </div> 
  )
}

export default CompletedTodo