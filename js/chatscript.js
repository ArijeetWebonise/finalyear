$(document).ready(function(){
	var chat="";
	var chatbegin="<div id='chatarea' class='row'>You: ";
	var chatend="</div>";
	var res,reply="";
	var replybegin="<div id='chatarea' class='row reply'>Anchit: ";
	var defaultreply=["BYE!!!","...","Say What!","Where is Ben?","I over 9000!","I can't Understand","Start making sense you asshole"];
	$.ajax({url: "http://localhost:8989/al.php",
	 	success: function(result){
	 		res=JSON.parse(result);
	 		chatreply=res;
	 		// console.log(res);
	 	}
	});
	$(".chatinp").change(function(e){
		reply=defaultreply[Math.floor(Math.random()*defaultreply.length)];
		for (var i = 0; i < res.result.length; i++) {
			for (var j = 0; j < res.result[i].question.length; j++) {
				if(res.result[i].question[j]==$(".chatinp").val()){
					reply=(res.result[i].reply[Math.floor(Math.random()*res.result[i].reply.length)]);
					$("#chatview").animate({ scrollTop: $("#chatview").height() }, 1000);
				}
			}
		}
		chat+=chatbegin+$(".chatinp").val()+chatend;
		$("#chatview").html(chat);
		$(".chatinp").val("");
		chat+=replybegin+reply+chatend;
		$("#chatview").html(chat);
	});
});