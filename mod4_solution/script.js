var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var name of names) {
    var firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter === "j") {
        byeSpeaker.speak();
    } else {
        helloSpeaker.speak();
    }

}