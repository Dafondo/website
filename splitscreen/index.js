var playing = false;
var filename = 'music/beaucoups.mp3';
var audio = new Audio(filename);
document.getElementById("songname").innerText = "Beaucoups and Beaucoups - Daniel Hart";

function play() {
    if (!playing) {
        playing = true;
        audio.loop = true;
        audio.play();
        document.getElementById('play').innerText = "Pause Music";
        $('#play').removeClass('btn-success');
        $('#play').addClass('btn-danger');
    } else{
        playing = false;
        audio.pause();
        audio.currentTime = 0;
        document.getElementById('play').innerText = "Play Music";
        $('#play').removeClass('btn-danger');
        $('#play').addClass('btn-success');
    }
}

function changeSong(newsong, name) {
    var songname = document.getElementById("songname");
    console.log(newsong, name);
    if(songname.innerText != name) {
        audio.loop = true;
        audio.src = newsong;
        songname.innerText = name;
    }
}

audio.addEventListener('loadeddata', () => {
    audio.currentTime = 0;
    if(playing) {
        audio.loop = true;
        audio.play();
    }
});

var mapdown = new Waypoint({
    element: document.getElementById('scene1Start'),
    handler: function(direction) {
        if(direction === "down") {
            changeSong("music/beaucoups.mp3", "Beaucoups and Beaucoups - Daniel Hart");
        }
    }
});

var mapup = new Waypoint({
    element: document.getElementById('scene1End'),
    handler: function(direction) {
        if(direction === "up") {
            changeSong("music/beaucoups.mp3", "Beaucoups and Beaucoups - Daniel Hart");
        }
    }
});

var floatdown = new Waypoint({
    element: document.getElementById('scene2Start'),
    handler: function(direction) {
        if(direction === "down") {
            changeSong("music/floating-hands.mp3", "Floating Hands - Daniel Hart");
        }
    }
});

var floatup = new Waypoint({
    element: document.getElementById('ringstart'),
    handler: function(direction) {
        if(direction === "up") {
            changeSong("music/floating-hands.mp3", "Floating Hands - Daniel Hart");
        }
    }
});

var ringdown = new Waypoint({
    element: document.getElementById('ringstart'),
    handler: function(direction) {
        if(direction === "down") {
            changeSong("music/ring.wav", "Cordless phone ring - cbakos");
        }
    }
});

var ringup = new Waypoint({
    element: document.getElementById('ringend'),
    handler: function(direction) {
        if(direction === "up") {
            changeSong("music/ring.wav", "Cordless phone ring - cbakos");
        }
    }
});

var phonedown = new Waypoint({
    element: document.getElementById('phonestart'),
    handler: function(direction) {
        if(direction === "down") {
            audio.pause();
            document.getElementById("songname").innerText = "Silence";
        }
    }
});

var phoneup = new Waypoint({
    element: document.getElementById('phoneend'),
    handler: function(direction) {
        if(direction === "up") {
            audio.pause();
            document.getElementById("songname").innerText = "Silence";
        }
    }
});

var meetdown = new Waypoint({
    element: document.getElementById('meetstart'),
    handler: function(direction) {
        if(direction === "down") {
            changeSong("music/black-sheep.mp3", "Black Sheep - Daniel Hart");
        }
    }
});

var meetup = new Waypoint({
    element: document.getElementById('scene2End'),
    handler: function(direction) {
        if(direction === "up") {
            changeSong("music/black-sheep.mp3", "Black Sheep - Daniel Hart");
        }
    }
});

var hospdown = new Waypoint({
    element: document.getElementById('scene3Start'),
    handler: function(direction) {
        if(direction === "down") {
            changeSong("music/bibb.mp3", "Bibb County Reprise - Daniel Hart");
        }
    }
});

var hospup = new Waypoint({
    element: document.getElementById('hospend'),
    handler: function(direction) {
        if(direction === "up") {
            changeSong("music/bibb.mp3", "Bibb County Reprise - Daniel Hart");
        }
    }
});

var byedown = new Waypoint({
    element: document.getElementById('hospend'),
    handler: function(direction) {
        if(direction === "down") {
            changeSong("music/pines.mp3", "Longleaf Pines - Daniel Hart");
        }
    }
});

var byeup = new Waypoint({
    element: document.getElementById('scene3End'),
    handler: function(direction) {
        if(direction === "up") {
            changeSong("music/pines.mp3", "Longleaf Pines - Daniel Hart");
        }
    }
});


var emilydown = new Waypoint({
    element: document.getElementById('scene4Start'),
    handler: function(direction) {
        if(direction === "down") {
            changeSong("music/a-rose-for-emily.mp3", "A Rose For Emily - The Zombies");
            audio.loop = false;
        }
    }
});


  