// import React, { useContext, useState } from "react";
// import { AuthContext } from "../context/auth.context";

import { useState } from "react";

// const Todo = () => {
//   const { state } = useContext(AuthContext);
//   const [todo, setTodo] = useState("");
//   const [allTodos, setAllTodos] = useState([]);
//   console.log(allTodos, "allTodos");
//   function handleChange(event) {
//     setTodo(event.target.value);
//   }
//   function handleSubmit() {
//     setAllTodos([...allTodos, todo]);
//     setTodo("");
//   }
//   function deleteTodo(index) {
//     const newArray = [...allTodos];
//     newArray.splice(index, 1);
//     setAllTodos(newArray);
//   }
//   return (
//     <div>
//       <h1>Todo : {state?.user?.name}</h1>
//       <input value={todo} onChange={handleChange} />
//       <br />
//       <button onClick={handleSubmit}>Submit Todo.</button>
//       <h1>All Todos.</h1>
//       {allTodos.map((todo, i) => (
//         <div
//           key={i}
//           style={{
//             display: "flex",
//             width: "50%",
//             margin: "auto",
//             justifyContent: "space-around",
//           }}
//         >
//           <p>
//             {" "}
//             {i + 1}. {todo}
//           </p>
//           <button onClick={() => deleteTodo(i)}>Delete.</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Todo;
