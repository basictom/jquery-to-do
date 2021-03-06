$(document).ready(function(){

  $("#new-item").on("click", () => {
    $('.list-container').addClass('hide');
    $(".new-container").removeClass("hide");
  });

  $("#list-items").on("click", () => {
    $('.new-container').addClass('hide');
    $('.list-container').removeClass('hide');
  });

  $('#add-todo-button').on("click", () => {
    let newTodo = {
      isCompleted: false,
      task: $('#add-todo-text').val()
    };
    console.log("newtodo", newTodo);
    FbAPI.addTodo(newTodo).then(() => {
      $('#add-todo-text').val("");
      $('.new-container').addClass('hide');
      $('.list-container').removeClass('hide');
      FbAPI.writeDom();
      countTask();
    }).catch((error) => {
      console.log("add to error", error);
    });
  });



  FbAPI.getTodos()
  .then(() => {
    FbAPI.writeDom();
    countTask();
  })
  .catch((error) => {
    console.log("get todos error", error);
  });


  // Delete function

  $('.main-container').on('click', '.delete', (event) => {
    FbAPI.deleteTodo(event.target.id)
    .then(() => {
      FbAPI.writeDom();
      countTask();
    }).catch((error) => {
      console.log("error in the delete to do", error);
    });
  });

  // Edit function

  $('.main-container').on('click', '.edit', (event) => {
    let editText = $(event.target).closest('.col-xs-4').siblings('.col-xs-8').find('.task').html();
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
      FbAPI.writeDom();
      countTask();
    }).catch((error) => {
      console.log("error checker", error);
    });
  });

  let countTask = () => {
    let remainingTasks = $('#incomplete-tasks li').length;
    $('#counter').hide().fadeIn(1000).html(remainingTasks);
  };

});
