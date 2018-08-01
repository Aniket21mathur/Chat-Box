$(function(){
var socket=io.connect("http://localhost:3000");
socket.on("connect",function(data){
socket.emit("join","Hello i am a client");
});

var send_message=$("#sendmessage");
var enter_key=$("#message");

// listener for 'thread' event, which updates messages
socket.on("thread",function(data){
	$("#thread").append("<li>"+data+"</li>");
});

send_message.click(function(){
	var message=$("#message").val();
	socket.emit('messages',message);
	$("#message").val(null);
});

enter_key.keypress(function(event){
	
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		var message=$("#message").val();
	socket.emit('messages',message);
	$("#message").val(null);	
	}
	

});


});
