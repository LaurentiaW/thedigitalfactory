$(document).ready(function(){
var magicBall = {};
magicBall.answers =["It is certain", "It is worth the risk", "A decision is better than none", "It is better than some of the alternatives", "If it is a sunny day then yes!", " Ask again tomorrow", "Every negative has a positive"];
$("#answer").hide();


    magicBall.question = function(question) {
        var random = Math.random();

        var randomArray = random * this.answers.length;

        var randomIndex = Math.floor(randomArray);

        var answer = this.answers[randomIndex];

        $("#answer").text( answer );

        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
        $("#8ball").effect("shake");


        console.log(question);
        console.log(answer);
    };


    var onClick = function (){
        $("#answer").hide();
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png")
        setTimeout (
        function (){
            var question = prompt ("Ask me anything");
                $("#8ball").effect("shake");
            magicBall.question(question);
        },500);

        $("#answer").fadeIn(4000);


    };

    $("#questionButton").click( onClick );

});