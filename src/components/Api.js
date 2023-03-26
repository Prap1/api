import React, { useState, useEffect } from "react";
import Post from "./Post";
import { Link }  from "react-router-dom"
function Api() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));

    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data));

    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data));

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  const renderActions = (userId) => {
    const userPosts = posts.filter((post) => post.userId === userId);
    const userComments = comments.filter(
      (comment) => comment.postId === userPosts[0]?.id
    );
    const userTodos = todos.filter((todo) => todo.userId === userId);
    const userPendingTodos = userTodos.filter((todo) => !todo.completed);
    const userCompletedTodos = userTodos.filter((todo) => todo.completed);
    const userAlbums = albums.filter((album) => album.userId === userId);
    // const userPhotos = photos.filter((photo) => photo.aId === userId);
    return (
      <>
{/*       
      <button><Post userPost={userPosts} /></button> */}
      
        <Link to={"/post"}><button onClick={() => sessionStorage.setItem("Post",JSON.stringify(userPosts))}>
          Posts ({userPosts.length})
        </button></Link>
        <Link to={"/comment"}><button onClick={() => sessionStorage.setItem("Comments",JSON.stringify(userComments))}>
          Comments ({userComments.length})
        </button></Link>
        <Link to={"/todos"}><button onClick={() => sessionStorage.setItem("Todos",JSON.stringify(userTodos))}>
          Todos ({userTodos.length})
        </button></Link>
        <Link to={"/pendingTodo"}><button onClick={() => sessionStorage.setItem("PendingTodos",JSON.stringify(userPendingTodos))}>
          Pending Todos ({userPendingTodos.length})
        </button></Link>
        <Link to={"/completedTodo"}><button onClick={() => sessionStorage.setItem("CompletedTodos",JSON.stringify(userCompletedTodos))}>
          Completed Todos ({userCompletedTodos.length})
        </button></Link>
        <Link to={"/album"}><button onClick={() => sessionStorage.setItem("Albums",JSON.stringify(userAlbums))}>
          Albums ({userAlbums.length})
        </button></Link>
        {/* <button onClick={() => console.log(userPhotos)}>
          Photos ({userPhotos.length})
        </button> */}
      </>
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Company Name</th>
            <th>Person Name</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.company.name}</td>
              <td>{user.name}</td>
              <td>
                <p>name: {user.name},</p>
                <p>username: {user.username},</p>
                <p>email: {user.email},</p>
                <p>street: {user.address.street},</p>
                <p>suite: {user.address.suite},</p>
                <p>city: {user.address.city},</p>
                <p>zipcode: {user.address.zipcode},</p>
                <p>phone: {user.phone},</p>
                <p>website: {user.website},</p>
                <p>company name: {user.company.name},</p>
                <p>company catch phrase: {user.company.catchPhrase},</p>
                <p>company bs: {user.company.bs}</p>
              </td>
              <td>{renderActions(user.id)}</td>
            </tr>
          ))}
        </tbody>
      </table> 
    </div>
  );
}

export default Api;
