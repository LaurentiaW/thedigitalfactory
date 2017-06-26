var noon = 12;
var evening = 18;
var wakeupTime = 9;
var lunchTime = 13;
var partyTime = 17;
var naptime = 15;

var isPartyTime = false;

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var lunchTimeSelector = document.getElementById("lunchTimeSelector")

var napTimeSelelector = document.getElementById("napTimeSelector")

var partyTimeButton = document.getElementById("partyTimeButton");

var updateClock = function (){
    var time = new Date().getHours();
    var messageTimeEvent = document.getElementById('timeEvent');
    var lolcat = document.getElementById('lolcat');
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg"
    var messageText;

    if (time == partyTime) {
    messageText = "P-A-R-T-Y 'cause I gotto!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
} else if (time == naptime) {
    messageText = "Catching some zzzz - see you after naptime!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
} else if (time == lunchTime) {
    messageText = "My tummy is speaking to me - FEED ME!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
} else if (time == wakeupTime) {
    messageText = "YAY - another day!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
} else if (time < noon) {
    messageText = "Good morning!";
} else if (time > evening){
    messageText = "Good evening!";
} else {
    messageText = "Good afternoon!";
}

    var showCurrentTime = function (){
    var clock = document.getElementById("clock");
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if (hours >= noon){
        meridian = "PM"
    }
    if (hours > noon) {
        hours = hours - 12;
    }

    if (minutes <10){
        minutes ="0" + minutes;
    }

    if (seconds < 10 ) {
        seconds = "0" + seconds;
    }

    var clockTime = hours + " : " + minutes + " : " + seconds + " " + meridian + "!";
    clock.innerText = clockTime;
};

    messageTimeEvent.innerText = messageText;
    lolcat.src = image;
    showCurrentTime ();
};

updateClock ();

var oneSecond = 1000;
setInterval (updateClock, oneSecond);

var partyEvent = function() {

  if (isPartyTime == false) {
    isPartyTime = true;
    time = partyTime;
    partyTimeButton.innerText = "PARTY TIME!";
    partyTimeButton.style.backgroundColor = "#222";
  } else {
    isPartyTime = false;
    time = new Date().getHours();
    partyTimeButton.innerText = "PARTY OVER";
    partyTimeButton.style.backgroundColor = "#0A8DAB";
  }

};

var wakeUpEvent = function(){
    wakeUpTime=WakeUpTimeSelector.value;
}
var lunchEvent = function(){
    lunchTime=lunchTimeSelector.value;
}
var napEvent = function(){
    napTime=napTimeSelector.value;
}

partyTimeButton.addEventListener('click', partyEvent);
wakeUpTimeSelector.addEventListener('change',wakeUpEvent);
lunchTimeSelector.addEventListener('change',lunchEvent);
napTimeSelector.addEventListener('change',napEvent);
