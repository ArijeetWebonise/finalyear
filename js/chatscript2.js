var bot = new RiveScript();

// Load a directory full of RiveScript documents (.rive files). This is for
// Node.JS only: it doesn't work on the web!
// bot.loadDirectory("brain", loading_done, loading_error);


// Load a list of files all at once (the best alternative to loadDirectory
// for the web!)
bot.loadFile([
    "brain/first.rive"
], loading_done, loading_error);

// All file loading operations are asynchronous, so you need handlers
// to catch when they've finished. If you use loadDirectory (or loadFile
// with multiple file names), the success function is called only when ALL
// the files have finished loading.
function loading_done (batch_num) {
    $("#chatview").html(" ");

    ai("Hello, bot!");
}

// It's good to catch errors too!
function loading_error (error) {
    console.log("Error when loading files: " + error);
}

function ai(inp){
    // Now the replies must be sorted!
    bot.sortReplies();
    // And now we're free to get a reply from the brain!
    var reply = bot.reply("local-user", inp);
    var msg = new SpeechSynthesisUtterance(reply);
    window.speechSynthesis.speak(msg);
    $("#chatview").append("<div id='chatarea' class='row reply'><b>Anchit</b>: " + reply+"</div>");
    $(".chatinp").focus();
}
$(document).ready(function(){
    $(".chatinp").change(function(e){
        $("#chatview").append("<div id='chatarea' class='row sender'><b>Me</b>: " + $(".chatinp").val()+"</div>");       
        ai($(".chatinp").val());
        $(".chatinp").val("");
    });
});
