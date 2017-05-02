var FbAPI = ((oldCrap) => {

  oldCrap.getTodos = (apiKeys) => {
    return new Promise ((resolve, reject) => {

      let items = [];

      $.ajax(`${apiKeys.databaseURL}/items.json`)
      .done((data) => {
        let response = items;
        Object.keys(response).forEach((key) => {
          console.log("keys", key);
          response[key].id = key;
          //response[item0] = value of item0 in json file
          // putting in id : item0 into object
          items.push(response[key]);
        });
        resolve(items);
      })
      .fail((error) => {
        reject(error);
      });
    });
  };

  oldCrap.addTodo = (apiKeys, newTodo) => {
    return new Promise ((resolve, reject) => {

      $.ajax({
        method : 'POST',
           url : `${apiKeys.databaseURL}/items.json`,
          data : JSON.stringify(newTodo)
      }).done(() => {
        resolve();
      }).fail(() => {
        reject();
      });

      // newTodo.id = `item${FbAPI.todoGetter().length}`;
      // console.log("newtodo", newTodo);
      // FbAPI.setSingleTodo(newTodo);
      // resolve();
    });
  };

  oldCrap.checker = (apiKeys, id) => {
    return new Promise((resolve, reject) => {
      FbAPI.setChecked(id);
      resolve();
    });
  };

  oldCrap.deleteTodo = (apiKeys, id) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        method : 'DELETE',
           url : `${apiKeys.databaseURL}/items/${id}.json`
      }).done(() => {
        resolve();
      }).fail((error) => {
        reject(error);
        console.log("delete promise error", error);
      });
    });
  };

  oldCrap.editTodo = (apiKeys, editTodo, id) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        method : 'PUT',
           url : `${apiKeys.databaseURL}/items/${id}.json`,
          data : JSON.stringify(editTodo)
      }).done(() => {
        resolve();
      }).fail(() => {
        reject();
      });
    });
  };

  return oldCrap;

})(FbAPI || {});
