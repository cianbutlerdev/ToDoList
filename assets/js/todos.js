// Check off Todos
$('ul').on("click", "li", function(){
  $(this).toggleClass('completed');
});

// X to Delete
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grab text value
    var todoText = $(this).val();
    $(this).val("");
    // create new li to add to ul
    $('ul').append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");


  }

});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();

});
