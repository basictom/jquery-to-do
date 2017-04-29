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

  let countTask = () => {
    let remainingTasks = $('#incomplete-tasks li').length;
    $('#counter').hide().fadeIn(1000).html(remainingTasks);
  };

});
