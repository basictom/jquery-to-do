var FbAPI = (() => {

  let todos = [];



  return {
    todoGetter : () => {
      return todos;
    },
    setTodos : (newArray) => {
      todos = newArray;
    },
    setSingleTodo: (newObject) => {
      todos.push(newObject);
    },
    setChecked: (itemId) => {
      const position = itemId.split("item")[1];
      todos[position].isCompleted = !todos[position].isCompleted;
    },
    duhlete: (id) => {
      //item1
      const position = id.split("item")[1];
      todos.splice(position, 1);//(where in the array, and how many you want from it)
    }
  };


})();
