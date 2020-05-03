(function(window) {
    var helloSpeaker = {
        speakWord: "Hello",
        speak: function() {
            console.log(this.speakWord + " " + name);
        }
    };
    window.helloSpeaker = helloSpeaker;

})(window);