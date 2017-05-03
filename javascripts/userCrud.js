var FbApi = ((cats) => {

  cats.addUser = (keys, userName) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        method : 'POST',
        url    : `${keys.databaseURL}/`,
        data   : JSON.stringify(newUser)
      }).done((response) => {
        resolve(response);
      }).fail((error) => {
        console.log("error in adduser promise", error);
        reject(error);
      });
    });
  };

  return cats;
})(FbApi || {});
