var FbAPI = ((oldCrap) => {

  oldCrap.getTodos = () => {
    return new Promise ((resolve, reject) => {

      let items = [];

      $.ajax('./database/seed.json')
      .done((data) => {
        let response = data.items;
        Object.keys(response).forEach((key) => {
          console.log("keys", key);
          response[key].id = key;
          //response[item0] = value of item0 in json file
          // putting in id : item0 into object
          items.push(response[key]);
        });
        FbAPI.setTodos(items);
        resolve(items);
      })
      .fail((error) => {
        reject(error);
      });
    });
  };

  oldCrap.addTodo = (newTodo) => {
    return new Promise ((resolve, reject) => {
      newTodo.id = `item${FbAPI.todoGetter().length}`;
      console.log("newtodo", newTodo);
      FbAPI.setSingleTodo(newTodo);
      resolve();
    });
  };

  return oldCrap;

})(FbAPI || {});
