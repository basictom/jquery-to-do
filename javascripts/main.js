$(document).ready(function(){

  $("#new-item").on("click", () => {
    $('.list-container').addClass('hide');
    $(".new-container").removeClass("hide");
  });

  $("#list-items").on("click", () => {
    $('.new-container').addClass('hide');
    $('.list-container').removeClass('hide');
  });



  FbAPI.getTodos()
  .then(() => {
    FbAPI.writeDom();
  })
  .catch((error) => {
    console.log("get todos error", error);
  });

});
