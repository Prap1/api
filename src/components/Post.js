 import React from 'react'
 
 const Post = () => {
    const data = JSON.parse(sessionStorage.getItem("Post")) 
   return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th> 
          </tr>
        </thead>
        <tbody>
         {data.map((e)=>(
            <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.body}</td>
            </tr>
         ))}
        </tbody>
      </table> 
    </div> 
   )
 }
 
 export default Post