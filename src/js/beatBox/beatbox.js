const keyData = {
	1: {
        sound: new Howl({
            urls: ["../public/audio/beatBox/tom.wav"]
        }),
        color: "#db1d2d"
    },
    2: {
        sound: new Howl({
            urls: ["../public/audio/beatBox/clap.wav"]
        }),
        color: "#f0421c"
    },
    3: {
        sound: new Howl({
            urls: ["../public/audio/beatBox/kick.wav"]
        }),
        color: "#fec02d"
    },
    4: {
        sound: new Howl({
            urls: ["../public/audio/beatBox/openhat.wav"]
        }),
        color: "#20d071"
    },
    5: {
        sound: new Howl({
            urls: ["../public/audio/beatBox/boom.wav"]
        }),
        color: "#1a9ddb"
    },
    6: {
        sound: new Howl({
            urls: ["../public/audio/beatBox/ride.wav"]
        }),
        color: "#a13fad"
    },
    7: {
        sound: new Howl({
            urls: ["../public/audio/beatBox/snare.wav"]
        }),
        color: "#f26fd4"
    },
    8: {
        sound: new Howl({
            urls: ["../public/audio/beatBox/wipe.mp3"]
        }),
        color: "#404be6"
    },
    9: {
        sound: new Howl({
            urls: ["../public/audio/beatBox/splits.mp3"]
        }),
        color: "#00ff04"
    }
};

$(document).ready(function(){
    var tomBeat = document.getElementById("tAudio");
    $("#tom").mousedown(function() {
        tomBeat.currentTime = 0;
        tomBeat.play();
		
		paper.view.onKeyDown({key: 1});
    });

    var clapBeat = document.getElementById("cAudio");
    $("#clap").mousedown(function() {
        clapBeat.currentTime = 0;
        clapBeat.play();
		
		paper.view.onKeyDown({key: 2});
    });

    var kickBeat = document.getElementById("kAudio");
    $("#kick").mousedown(function() {
        kickBeat.currentTime = 0;
        kickBeat.play();
		
		paper.view.onKeyDown({key: 3});
    });

    var openhatBeat = document.getElementById("oAudio");
    $("#openhat").mousedown(function() {
        openhatBeat.currentTime = 0;
        openhatBeat.play();
		
		paper.view.onKeyDown({key: 4});
    });

    var boomBeat = document.getElementById("bAudio");
    $("#boom").mousedown(function() {
        boomBeat.currentTime = 0;
        boomBeat.play();
		
		paper.view.onKeyDown({key: 5});
    });

    var rideBeat = document.getElementById("rAudio");
    $("#ride").mousedown(function() {
        rideBeat.currentTime = 0;
        rideBeat.play();
		
		paper.view.onKeyDown({key: 6});
    });

    var snareBeat = document.getElementById("sAudio");
    $("#snare").mousedown(function() {
        snareBeat.currentTime = 0;
        snareBeat.play();
		
		paper.view.onKeyDown({key: 7});
    });

    var hoopBeat = document.getElementById("hAudio");
    $("#hoop").mousedown(function() {
        hoopBeat.currentTime = 0;
        hoopBeat.play();
		
		paper.view.onKeyDown({key: 8});
    });

    var loopBeat = document.getElementById("lAudio");
    $("#loop").mousedown(function() {
        loopBeat.currentTime = 0;
        loopBeat.play();
		
		paper.view.onKeyDown({key: 9});
    });
});