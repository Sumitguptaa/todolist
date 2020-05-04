//check off specific todos by clicking and to make a line through with gray color
$("ul").on("click","li",function(){  //jQuery always work on existing elements
	$(this).toggleClass("completed");
});
//click on X to delete todo
$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});
$("input[type='text']").keypress(function(e){
		if(e.which===13)
		{
			//grabing new text form input
			var text=$(this).val();
			$(this).val("");
			//create a new li and add to ul
			$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+text+"</li>");
		}
	});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
