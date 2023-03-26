import React from 'react'
 
const Comment = () => {
   const data = JSON.parse(sessionStorage.getItem("Comments")) 
  return (
   <div>
     <table>
       <thead>
         <tr>
           <th>Id</th>
           <th>Name</th>
           <th>Email</th>
           <th>Body</th> 
         </tr>
       </thead>
       <tbody>
        {data.map((e)=>(
           <tr key={e.id}>
               <td>{e.id}</td>
               <td>{e.name}</td>
               <td>{e.email}</td>
               <td>{e.body}</td>
           </tr>
        ))}
       </tbody>
     </table> 
   </div> 
  )
}

export default Comment