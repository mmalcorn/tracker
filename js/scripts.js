$(document).ready(function(){
  $("#survey").submit(function()  {
    event.preventDefault()
    var name = $("input#userName").val();
    var design = $("input:radio[name=design]:checked").val();
    var frontBack = $("input:radio[name=frontBack]:checked").val();
    var mobile = $("input:radio[name=mobile]:checked").val();
    var webapp = $("input:radio[name=webapp]:checked").val();
    var governmentStartup = $("input:radio[name=governmentStartup]:checked").val();

    if (design === 'yes') { //if you've found the red wire.
      if (frontBack === 'frontend' || frontBack === 'either'){
        if (mobile === 'yes') {
          if (webapp ==='yes') {
            if (governmentStartup === 'government' || governmentStartup=== 'either') {
              $("#survey").hide();
              $("#css").slideToggle();
              $("#result").text(name + " ," + "you should consider taking the CSS track")
            }else{
              $("#survey").hide();
              $("#ruby").fadeToggle();
              $("#result").text(name + " ," + "you should consider learning Ruby.");
            }
          }else if(webapp==='no'){
            $("#survey").hide();
            $("#java").fadeToggle();
            $("#result").text(name + " ," + "you should consider learning java.");
          }else {
            $("#survey").hide();
            $("#ruby").fadeToggle();
            $("#result").text(name + " ," + "you should consider learning Ruby.");
          }
        }else if(mobile==='either'){
          $("#survey").hide();
          $("#java").fadeToggle();
          $("#result").text(name + " ," + "you should consider learning java.");
        }
        else{ //mobile is no
          $("#survey").hide();
          $("#ruby").fadeToggle();
          $("#result").text(name + " ," + "you should consider learning Ruby.");
        }
      }
    }
    else if (frontBack === 'backend'){ // no red wire, but is there a green one?
      if (mobile ==='yes' || mobile === 'either'){
        $("#survey").hide();
        $("#java").fadeToggle();
        $("#result").text(name + " ," + "you should consider learning java.");
      }
      else {
        $("#survey").hide();
        $("#result").text(name + " ," + "you should consider learning PHP.");
      }
    }
    else { // if there's no red, or green wires, then we learn ruby.
      $("#survey").hide();
      $("#ruby").fadeToggle();
      $("#result").text(name + " ," + "you should consider learning Ruby.");
    }
  });
});

/*

YOU are James Bond.
YOU ARE RESPONSIBLE FOR DIFFUSING A BOMB!

Q is on the phone with you, trying to figure out what kind of bomb it is, so he can tell you how to diffuse it.

Q: is there a red wire?
You look for the wire, and you say "NO, there's no red wire!"

Q: How about a green wire?
You look and you look and you say no! no greens!

Q: How about a blue wire?
YOu go nope, no blue wire. WHAT DO I DO????

Q: OK, if you can't find any of those wires, chuck it out the window.
You just chuck it out the window and you run.

*/
//
// var you = new Spy("James Bond");
//
// // Q: if you find a red wire, cut it.
// if (redWire === true) {
//   you.cutRedWire();
// }
// // Q: OK, so you didn't find a red wire. Is there a green wire?
// else if(greenWire === true) {
//   // You: YES!!!
//   // Q: Cool! Cut it!
//   you.cutGreenWire();
// }
// // Q: So, you didn't see a red or green wire? Are you sure????
// // You: Yes, there are no red or green wires.
// // Q: Ok, is there a blue wire?
// else if(blueWire === true) {
//   // You: Yes, there is a blue wire! WHAT DO I DO WITH IT?
//   // Q: Ok, let me think. If there is a blue wire, there is probably a purple one. Do you see it?
//   if(purpleWire === true){
//     // You: Yes, there is a blue wire, and a purple wire.
//     // Q: Thank god. Cut both.
//     you.cutBlueWire();
//     you.cutPurpleWire();
//   }else{
//     //this only happens if you find a blue wire, but not a purple wire.
//     // You: nope, no purple wire. only blue.
//     // Q: ummmm ok then it is probably not running on battery, it is plugged into the wall, just unplug it and you're safe.
//     you.unplugTheWholeThing();
//   }
// }
// //Q: Wait, you can't see red, green, blue? What the hell? I have no idea. Just toss it and run.
// else{
//   you.chuckBombOutWindow();
//   you.run();
// }
//
//
//
// //************* If you want to ask about each wire, rather than only caring about the purple wire, if there is a blue wire...
//
//
// // Q: if you find a red wire, cut it.
// if (redWire === true) {
//   you.cutRedWire();
// }
// // Q: OK, so you didn't find a red wire. Is there a green wire?
// else if(greenWire === true) {
//   // You: YES!!!
//   // Q: Cool! Cut it!
//   you.cutGreenWire();
// }
// // Q: So, you didn't see a red or green wire? Are you sure????
// // You: Yes, there are no red or green wires.
// // Q: Ok, is there a blue wire?
// else if(blueWire === true) {
//   // You: Yes, there is a blue wire! WHAT DO I DO WITH IT?
//   // Q: Ok, cool, cut it.
//     you.cutBlueWire();
// }
// // we wouldn't want to have another else here, because we still have more stuff to check.
// //Also because we already have a master back up plan. Toss it and run. Covers everything that isnt' red, green, blue or purple.
//
// // only go on to the next else if, when the previous one is false.
// // so at this point, you tell Q that you haven't found, red, green or blue.
// // Q: OK fine. is there a purple one?
// else if(purpleWire === true){
//   // You: Yes, there is a purple wire, but no blue one. no green or red.
//   // Q: Thank god. Cut purple one.
//   you.cutPurpleWire();
// }
// //Q: Wait, you can't see red, green, blue or purple? What the hell? I have no idea. Just toss it and run.
// else{
//   you.chuckBombOutWindow();
//   you.run();
// }
