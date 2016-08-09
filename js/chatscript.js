var chatend="</div>";
var chat="";
$(document).ready(function(){
	$(".chatinp").focus();
	var res,reply="";
	$.ajax({url: "http://localhost:8989/al.php",
	 	success: function(result){
	 		res=JSON.parse(result);
	 		chatreply=res;
	 		console.log(res);
	 	}
	});
	$(".chatinp").change(function(e){
		ai(res);
		resetmsg($(".chatinp").val());
	});
});
function ai(res){
	var defaultreply=["BYE!!!","...","Say What!","Where is Ben?","I over 9000!","I can't Understand","Start making sense you asshole"];
	reply=defaultreply[Math.floor(Math.random()*defaultreply.length)];
	for (var i = 0; i < res.result.length; i++) {
		for (var j = 0; j < res.result[i].question.length; j++) {
			var str=$(".chatinp").val();
			console.log(res.result[i].question[j]);
			if(str.indexOf(res.result[i].question[j])>=0){
				reply=(res.result[i].reply[Math.floor(Math.random()*res.result[i].reply.length)]);
				$("#chatview").animate({ scrollTop: $("#chatview").height() }, 1000);
			}
			if((str.indexOf("time")>=0)||(str.indexOf("Time")>=0)){
				var date = new Date();
				var h = date.getHours();
				var m = date.getMinutes();
				reply="The Time is "+h+":"+m;
				$("#chatview").animate({ scrollTop: $("#chatview").height() }, 1000);
			}
			if((str.indexOf("date")>=0)||(str.indexOf("Date")>=0)){
				var date = new Date();
				var h = date.getDate();
				var m = date.getMonth()+1;
				var y = date.getFullYear();
				reply="The Date is "+h+"/"+m+"/"+y;
				$("#chatview").animate({ scrollTop: $("#chatview").height() }, 1000);
			}
			if((str.indexOf("Math:")>=0)||(str.indexOf("Date")>=0)){
				reply=eval(str.substring(5));
				$("#chatview").animate({ scrollTop: $("#chatview").height() }, 1000);
			}
		}
	}
}
function resetmsg(msg){
	var chatbegin="<div id='chatarea' class='row sender'><b>You:</b> ";
	chat+=chatbegin+msg+chatend;
	$("#chatview").html(chat);
	$(".chatinp").val("");
	chat=sendmsg(chat);
}
function sendmsg(chat){
	var replybegin="<div id='chatarea' class='row reply'><b>Anchit:</b> ";
	chat+=replybegin+reply+chatend;
	var timer= setInterval(function(){ 
		$("#chatview").html(chat);
		clearInterval(timer);
	}, 2000);
	
	return chat;
}