/*
$('button').on("click",function(){
   $('div').fadeToggle(500)
})
*/

$('button').on("click",function(){
    $('div').slideToggle(1000, function(){
        console.log("SLIDE IS DONE")
        $(this).remove();
    });
})
