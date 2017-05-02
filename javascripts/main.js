$(document).ready(function(){
  let apiKeys;
  let editId = "";

  $("#new-item").on("click", () => {
    $('.list-container').addClass('hide');
    $(".new-container").removeClass("hide");
  });

  $("#list-items").on("click", () => {
    $('.new-container').addClass('hide');
    $('.list-container').removeClass('hide');
  });

  FbAPI.firebaseCreds().then((keys) => {
    apiKeys = keys;
    firebase.initializeApp(apiKeys);
    FbAPI.writeDom(apiKeys);
  }).catch((error) => {
    console.log("error in firebase", error);
  });

  $('#add-todo-button').on("click", () => {
    let newTodo = {
      isCompleted: false,
      task: $('#add-todo-text').val()
    };

    if(editId.length > 0){
      FbAPI.addTodo(apiKeys, newTodo, editId).then(() => {
        $('#add-todo-text').val("");
        editId = "";
        $('.new-container').addClass('hide');
        $('.list-container').removeClass('hide');
        FbAPI.writeDom(apiKeys);
      }).catch((error) => {
        console.log("add to error", error);
      });
    }else{
      FbAPI.addTodo(apiKeys, newTodo).then(() => {
        $('#add-todo-text').val("");
        $('.new-container').addClass('hide');
        $('.list-container').removeClass('hide');
        FbAPI.writeDom(apiKeys);
      }).catch((error) => {
        console.log("add to error", error);
      });
    }
  });

  // Delete function

  $('.main-container').on('click', '.delete', (event) => {
    FbAPI.deleteTodo(apiKeys, event.target.id)
    .then(() => {
      FbAPI.writeDom(apiKeys);
    }).catch((error) => {
      console.log("error in the delete to do", error);
    });
  });

  // Edit function

  $('.main-container').on('click', '.edit', (event) => {
    let editText = $(event.target).closest('.col-xs-4').siblings('.col-xs-8').find('.task').html();
    editId = event.target.id;
    FbAPI.editTodo(event.target.id)
    .then(() =>{
      $('.list-container').addClass('hide');
      $(".new-container").removeClass("hide");
      $('#add-todo-text').val(editText);
    }).catch((error) => {
      console.log("error in the edit to do", error);
    });

  });


  $('.main-container').on("click", 'input[type=checkbox]', (event) => {
    FbAPI.checker(event.target.id).then(() => {
      FbAPI.writeDom(apiKeys);
    }).catch((error) => {
      console.log("error checker", error);
    });
  });



});
