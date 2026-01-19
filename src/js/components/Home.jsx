import React, { useState } from "react";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  //add into array => concat
  //delete from array => filter
  //update from array => map

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (inputValue.trim() !== "") {
        setListaTareas([...listaTareas,
            inputValue, 
        ]);
      }
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <h1>todos</h1>
      <input
        type="text"
        placeholder="Que quieres hacer ?"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyDown={handleKeyDown}
      />
      <ul>
        {listaTareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <i
              className="ms-5 btn fa-solid fa-trash-arrow-up"
              onClick={() =>
                setListaTareas(
                  listaTareas.filter(
                    (tareas, currentIndex) => index != currentIndex,
                  ),
                )
              }
            >
            </i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
