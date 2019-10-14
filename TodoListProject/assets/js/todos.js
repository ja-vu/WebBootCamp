// Check off specific todos by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});


//Click on X to delete Todos
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    // if we hit enter (character #13)
    if(event.which === 13){

        //grabbing new todo text from input
        var toDoText = $(this).val();
        $(this).val("")

        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + toDoText + "</li>")
    }
});

$(".fa-edit").click(function(){
    $("input[type='text']").fadeToggle();
})