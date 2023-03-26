import React from 'react'
 
const Album = () => {
   const data = JSON.parse(sessionStorage.getItem("Albums")) 
  return (
   <div>
     <table>
       <thead>
         <tr>
           <th>Id</th>
           <th>Title</th>  
         </tr>
       </thead>
       <tbody>
        {data.map((e)=>(
           <tr key={e.id}>
               <td>{e.id}</td>
               <td>{e.title}</td> 
           </tr>
        ))}
       </tbody>
     </table> 
   </div> 
  )
}

export default Album