const levelTitle  = document.getElementById('level-title');
const levelImg    = document.getElementById('level-img');
const levelText   = document.getElementById('level-text');
const option1     = document.getElementById('a1');
const option2     = document.getElementById('a2');
const option3     = document.getElementById('a3');
const inventory1  = document.getElementById('in1');
const inventory2  = document.getElementById('in2');
const audio       = document.getElementById('audio');
var weapon        = 0;
var key           = 0;
var cannibals     = 0;

function onloadGame()
{
  audio.src             = "audio/stationsong.mp3";
  levelTitle.innerHTML  = "METRO 2029";
  levelImg.src          = "img/start.jpg";
  levelText.innerHTML   = "It's 2029 you live in Dobrynin one of the metro stations of moscow. People live in the metro because moscow a nuclear wasteland after it was bombed in 2013. There is a exploration team missing in D6(a secret military metroline/ base). You have to find them with Youri, Boris and Vladimir. Good luck in the metro.";
  console.log(levelTitle);
  option1.style.display = "block";
  option1.innerHTML     = "START GAME";
  option1.setAttribute("onclick", "startGame()");
  option2.style.display = "none";
  option3.style.display = "none";
}

function startGame()
{
  levelTitle.innerHTML  = "Dmitri's room";
  levelImg.src          = "img/Dmitri's_room.jpg";
  levelText.innerHTML   = "You:   I have to pack my stuff fast otherwise they go without me.";
  console.log(levelTitle);
  option1.innerHTML     = "Leave room with your wapon";
  option1.setAttribute("onclick", "level21()");
  option2.style.display = "block";
  option2.innerHTML     = "Leave room without your wapon";
  option2.setAttribute("onclick", "level22()");
}

function level21()
{
  audio.src                 = "audio/tunnelwind.mp3";
  levelTitle.innerHTML      = "The metro platform in Dobrynin";
  levelImg.src              = "img/tunnel.jpg";
  levelText.innerHTML       = "You:   He guys how are you doing.";
  inventory1.style.display  = "inline";
  inventory1.src            = "img/ak-47_icon.png";
  console.log(levelTitle);
  weapon++;
  option1.innerHTML         = "Next";
  option1.setAttribute("onclick", "conversation11()");
  option2.style.display     = "none";
}

function conversation11()
{
  levelText.innerHTML   = levelText.innerHTML + "<br>Boris:   Good, we go to Polis in 5 minutes. we only have to wait for Youri.";
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "conversation21()");
}

function conversation21()
{
  levelText.innerHTML   = levelText.innerHTML + "<br>You:   Look there he is.";
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "conversation31()");
}

function conversation31()
{
  levelText.innerHTML   = levelText.innerHTML + "<br>Youri:   I'm here.";
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "conversation4()");
}

function level22()
{
  audio.src             = "audio/tunnelwind.mp3";
  levelTitle.innerHTML  = "The metro platform in Dobrynin";
  levelImg.src          = "img/tunnel.jpg";
  levelText.innerHTML   = "You:   He guys how are you doing.";
  console.log(levelTitle);
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "conversation12()");
  option2.style.display = "none";
}

function conversation12()
{
  levelText.innerHTML   = levelText.innerHTML + "<br>Boris:   Good, we go to Polis in 5 minutes. we only have to wait for Youri.";
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "conversation22()");
}

function conversation22()
{
  levelText.innerHTML   = levelText.innerHTML + "<br>You:   Look there he is.";
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "conversation32()");
}

function conversation32()
{
  levelText.innerHTML   = levelText.innerHTML + "<br>Youri:   Don’t you need your gun, Dmitri?";
  option1.innerHTML     = "I don't think so.";
  option1.setAttribute("onclick", "conversation4()");
  option2.style.display = "block";
  option2.innerHTML     = "If you say so.(go back to room)";
  option2.setAttribute("onclick", "room2()");
}

function room2()
{
  audio.src             = "audio/stationsong.mp3";
  audio.src               = "audio/stationsong.mp3";
  levelTitle.innerHTML    = "Dmitri's room";
  levelImg.src            = "img/Dmitri's_room.jpg";
  levelText.style.display = "none";
  console.log(levelTitle);
  weapon++;
  option1.innerHTML     = "Take your wapon.";
  option1.setAttribute("onclick", "room3()");
  option2.style.display = "none";
}

function room3()
{
  levelImg.src                = "img/Dmitri's_room2.jpg";
  inventory1.style.display    = "inline";
  inventory1.src              = "img/ak-47_icon.png";
  option1.innerHTML           = "Go back to the group.";
  option1.setAttribute("onclick", "conversation5()");
}

function conversation4()
{
  audio.src             = "audio/tunnelwind.mp3";
  levelTitle.innerHTML  = "The metro platform in Dobrynin";
  levelImg.src          = "img/tunnel.jpg";
  levelText.innerHTML   = levelText.innerHTML + "<br>Vladimir:    Ok, shall we go.";
  console.log(levelTitle);
  option1.innerHTML     = "Go";
  option1.setAttribute("onclick", "polyanka()");
  option2.style.display = "none";
}

function conversation5()
{
  audio.src                 = "audio/tunnelwind.mp3";
  levelTitle.innerHTML    = "The metro platform in Dobrynin";
  levelImg.src            = "img/tunnel.jpg";
  levelText.style.display = "block";
  levelText.innerHTML     = "You:   I’m back, let’s go.";
  console.log(levelTitle);
  option1.innerHTML       = "Go.";
  option1.setAttribute("onclick", "polyanka()");
}

function polyanka()
{
  levelTitle.innerHTML  = "Polyanka";
  levelImg.src          = "img/Depot.jpg";
  levelText.innerHTML   = "Vladimir:    The power source looks all busted. Dmitri, can you fix it?";
  console.log(levelTitle);
  option1.innerHTML     = "Yes, i'm on it.";
  option1.setAttribute("onclick", "power()");
  option2.style.display = "block";
  option2.innerHTML     = "I can't";
  option2.setAttribute("onclick", "polyanka2()");
}

function polyanka2()
{
  levelText.innerHTML   = "Youri:   I can fix it.";
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "gameOver1()");
  option2.style.display = "none";
}

function power()
{
  audio.src               = "audio/switch_Copy.mp3";
  levelImg.src            = "img/power_source.jpg";
  levelText.style.display = "none";
  option1.innerHTML       = "Next";
  option1.setAttribute("onclick", "polis()");
  option2.style.display   = "none";
}

function polis()
{
  audio.src               = "audio/tunnelwind.mp3";
  levelTitle.innerHTML     = "Polis";
  levelImg.src             = "img/polis_guards.jpg";
  levelText.style.display  = "block";
  levelText.innerHTML      = "Vladimir:    There are the guards who spoke the missing squad.";
  console.log(levelTitle);
  option1.setAttribute("onclick", "polis2()");
}

function polis2()
{
  levelText.innerHTML   = levelText.innerHTML + "<br>Guards:    hello, good you are here.";
  option1.innerHTML     = "Say nothing";
  option1.setAttribute("onclick", "polis42()");
  option2.style.display = "block";
  option2.innerHTML     = "Ask if they know something about the missing squad.";
  option2.setAttribute("onclick", "polis41()");
}

function polis41()
{
  levelText.innerHTML   = levelText.innerHTML + "<br>You:   Do you guys know something about the missing squad.";
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "polis51()");
  option2.style.display = "none";
}

function polis42()
{
  levelText.innerHTML   = levelText.innerHTML + "<br>Guard 2:   Something you should know, you can’t go through Smolensk. They are repairing a collapsed tunnel. So you have to go through Arbatskaya";
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "polis43()");
  option2.style.display = "none";
}

function polis51()
{
  levelText.innerHTML   = levelText.innerHTML + "<br>Guard 1:   They went to the Defence Ministry in D6 for some document.";
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "polis42()");
}

function polis43()
{
  levelText.innerHTML   = levelText.innerHTML + "<br>You:   thanks.";
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "arbatskaya()");
}

function arbatskaya()
{
  levelTitle.innerHTML  = "Arbatskaya";
  levelImg.src          = "img/Dark_one_Copy.jpg";
  levelText.innerHTML   = "Vladimir:    Quiet, it’s here occupied with dark ones.";
  console.log(levelTitle);
  option1.setAttribute("onclick", "arbatskaya2()");
}

function arbatskaya2()
{
  levelImg.src          = "img/Dark_one.jpg";
  levelText.innerHTML   = levelText.innerHTML + "<br>Youri:   Shit, there is one.";
  if (weapon != 0) {
    option1.innerHTML   = "Aim for the head.";
    option1.setAttribute("onclick", "gameOver3()");
    option2.style.display = "block";
    option2.innerHTML     = "Aim for the heart.";
    option2.setAttribute("onclick", "gameOver3()");
    option3.style.display = "block";
    option3.innerHTML     = "Shoot everywhere.";
    option3.setAttribute("onclick", "arbatskaya3()");
  } else {
    option1.innerHTML     = "Next";
    option1.setAttribute("onclick", "gameOver2()");
  }
}

function arbatskaya3()
{
  audio.src             = "audio/machinegun.mp3";
  levelImg.src          = "img/Dark_one_Copy.jpg";
  levelText.innerHTML   = "You:   that was to close.";
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "smolenskaya()");
  option2.style.display = "none";
  option3.style.display = "none";
}

function smolenskaya()
{
  audio.src             = "audio/stationsong.mp3";
  levelTitle.innerHTML  = "Smolenskaya";
  levelImg.src          = "img/station.jpg";
  levelText.innerHTML   = "Boris:   We made it.";
  console.log(levelTitle);
  option1.setAttribute("onclick", "smolenskaya2()");
}

function smolenskaya2()
{
  levelText.innerHTML   = levelText.innerHTML + "<br>Vladimir:    Don’t be to happy, we go in 10 minutes. So gear up. Dmitri get some information.";
  option1.innerHTML     = "You:   I'm on it";
  option1.setAttribute("onclick","smolenskaya3()");
}

function smolenskaya3()
{
  levelImg.src              = "img/guard.jpg";
  levelText.style.display   = "none";
  option1.innerHTML         = "Hello, how are you doing?";
  option1.setAttribute("onclick", "smolenskaya41()");
  option2.style.display     = "block";
  option2.innerHTML         = "Do you know the best way to go to Kiev.";
  option2.setAttribute("onclick", "smolenskaya51()");
  option3.style.display     = "block";
  option3.innerHTML         = "Can you tell me something about D6?";
  option3.setAttribute("onclick", "smolenskaya61()");
}

function smolenskaya41()
{
  levelText.style.display   = "block";
  levelText.innerHTML       = "You:   Hello, how are you doing?<br>Guard:   Not great, we were attacked last night. Thanks, and you?";
  option1.innerHTML         = "Next";
  option1.setAttribute("onclick","smolenskaya42()");
  option2.style.display     = "none";
  option3.style.display     = "none";
}

function smolenskaya42()
{
  levelText.style.display   = "block";
  levelText.innerHTML       = levelText.innerHTML + "<br>You:		We were also attacked yesterday.";
  option1.innerHTML         = "Go to Kiev";
  option1.setAttribute("onclick", "kievEntrance()");
  option2.style.display     = "block";
  option2.innerHTML         = "Do you know the best way to go to Kiev.";
  option2.setAttribute("onclick", "smolenskaya43()");
  option3.style.display     = "block";
  option3.innerHTML         = "Can you tell me something about D6?";
  option3.setAttribute("onclick", "smolenskaya47()");
}

function smolenskaya43()
{
  levelText.innerHTML       = "Guard:		Of course, you follow the tunnel until you see a sign that says Kiev. Than follow the signs to the surface. Above you still have to follow the signs to the other entrance. Than you follow the tunnel to Kiev.";
  option1.innerHTML         = "Thank you.";
  option1.setAttribute("onclick", "smolenskaya462()");
  option2.innerHTML         = "Do you know if there are mutants on the surface?";
  option2.setAttribute("onclick", "smolenskaya44()");
  option3.style.display     = "none";
}

function smolenskaya44()
{
  levelText.innerHTML         = "Guard:   Of course there are mutants, but if you stay low and be quiet. You won’t have any problems.";
  option1.innerHTML           = "Thank you";
  option1.setAttribute("onclick", "smolenskaya45()");
  option2.style.display       = "none";
}

function smolenskaya45()
{
  levelText.innerHTML         = "Guard:   You need a key to get in Kiev from here. Here take it.";
  key++;
  option1.innerHTML           = "Take the key";
  option1.setAttribute("onclick", "smolenskaya46()");
}

function smolenskaya46()
{
  audio.src                   = "audio/tunnelwind.mp3";
  levelImg.src                = "img/group.jpg";
  levelText.innerHTML         = "Vladimir:    Dimitri we are going to Kiev.";
  inventory2.style.display    = "block";
  inventory2.src              = "img/keys.png";
  option1.innerHTML           = "Go";
  option1.setAttribute("onclick", "kievEntrance()");
}

function smolenskaya462()
{
  audio.src                   = "audio/tunnelwind.mp3";
  levelImg.src                = "img/group.jpg";
  levelText.innerHTML         = "Vladimir:    Dimitri we are going to Kiev.";
  option1.innerHTML           = "Go";
  option1.setAttribute("onclick", "kievEntrance()");
  option2.style.display       = "none";
}

function smolenskaya47()
{
  levelText.style.display     = "block";
  levelText.innerHTML         = "Guard:		Sorry, i can’t help you with that. Maybe somebody in Kiev knows.";
  option1.innerHTML           = "Bye, have a good day.";
  option1.setAttribute("onclick", "kievEntrance()");
  option2.style.display       = "none";
  option3.style.display       = "none";
}

function smolenskaya51()
{
  levelText.style.display   = "block";
  levelText.innerHTML         = "Guard:		Of course, you follow the tunnel until you see a sign that says Kiev. Than follow the signs to the surface. Above you still have to follow the signs to the other entrance. Than you follow the tunnel to Kiev.";
  option1.innerHTML           = "Thank you";
  option1.setAttribute("onclick", "kievEntrance()");
  option2.style.display       = "none";
  option3.style.display       = "none";
}


function smolenskaya61()
{
  levelText.style.display   = "block";
  levelText.innerHTML         = "Guard:   Sorry, i can’t help you with that. Maybe somebody in Kiev knows.";
  option1.innerHTML           = "Bye, have a good day.";
  option1.setAttribute("onclick", "kievEntrance()");
  option2.style.display       = "none";
  option3.style.display       = "none";
}

function kievEntrance()
{
  audio.src                   = "audio/tunnelwind.mp3";
  if (key != 0) {
    levelTitle.innerHTML      = "Entrance to Kiev";
    levelImg.src              = "img/gate1.jpg";
    levelText.innerHTML       = "Vladimir:    The gate is locked.";
    console.log(levelTitle);
    option1.innerHTML         = "Next";
    option1.setAttribute("onclick", "kievEntrance21()");
  } else {
    levelTitle.innerHTML      = "Entrance to Kiev";
    levelImg.src              = "img/gate1.jpg";
    levelText.innerHTML       = "You:		The gate is locked, maybe in the control room I can open it.";
    console.log(levelTitle);
    option1.innerHTML         = "Next";
    option1.setAttribute("onclick", "kievEntrance31()");
    option2.style.display       = "none";
    option3.style.display       = "none";
  }
}

function kievEntrance21()
{
  levelText.innerHTML         = "You:		That’s right, the guard in Smolenskaya said that. He gave me a key to unlock it in the control room.";
  option1.innerHTML           = "Next";
  option1.setAttribute("onclick", "kievEntrance22()");
}

function kievEntrance22()
{
  levelTitle.innerHTML      = "Control room";
  levelImg.src                = "img/control_room.jpg";
  levelText.innerHTML         = "Boris:		Open that thing.";
  console.log(levelTitle);
  option1.innerHTML           = "Open";
  option1.setAttribute("onclick", "kievEntrance23()");
}

function kievEntrance23()
{
  levelImg.src                = "img/gate1.jpg";
  levelText.innerHTML         = "Vladimir:	let’s go.";
  option1.innerHTML           = "Enter Kiev";
  option1.setAttribute("onclick", "kiev()");
}

function kievEntrance31()
{
  levelTitle.innerHTML      = "Control room";
  levelImg.src                = "img/control_room.jpg";
  levelText.innerHTML         = "You:   Vladimir, there has to be a key inserted to open the gate.";
  console.log(levelTitle);
  option1.innerHTML           = "Next";
  option1.setAttribute("onclick", "kievEntrance32()");
}

function kievEntrance32()
{
  levelText.innerHTML         = levelText.innerHTML + "<br>Vladimir:    Everybody, look for the keys.";
  option1.innerHTML           = "Next";
  option1.setAttribute("onclick", "kievEntrance33()");
}

function kievEntrance33()
{
  levelText.innerHTML         = levelText.innerHTML + "<br>Youri:   Here, I found a keyring with some keys.";
  option1.innerHTML           = "Next";
  option1.setAttribute("onclick", "kievEntrance34()");
}

function kievEntrance34()
{
  levelText.innerHTML         = "You:		Let’s try them.";
  inventory2.src              = "img/keys.png";
  option1.innerHTML           = "Round key";
  option1.setAttribute("onclick", "roundKey()");
  option2.style.display       = "block";
  option2.innerHTML           = "Square key";
  option2.setAttribute("onclick", "squareKey()");
  option3.style.display       = "block";
  option3.innerHTML           = "Triangular key";
  option3.setAttribute("onclick", "itFits()");
}

function roundKey()
{
  levelText.innerHTML         = "You:   It doesn’t fit.";
  option1.innerHTML           = "Square key";
  option1.setAttribute("onclick", "roundKey2()");
  option2.innerHTML           = "Triangular key";
  option2.setAttribute("onclick", "itFits()");
    option3.style.display       = "none";
}

function roundKey2()
{
  levelText.innerHTML         = "You:   It doesn’t fit.";
  option1.innerHTML           = "Triangular key";
  option1.setAttribute("onclick", "itFits()");
  option2.style.display       = "none";
}

function squareKey()
{
  levelText.innerHTML         = "You;   It doesn't fit.";
  option1.innerHTML           = "Round key";
  option1.setAttribute("onclick", "squareKey2()");
  option2.innerHTML           = "Triangular key";
  option2.setAttribute("onclick", "itFits()");
  option3.style.display       = "none";
}

function squareKey2()
{
  levelText.innerHTML         = "You:   It doesn't fit.";
  option1.innerHTML           = "Triangular key";
  option1.setAttribute("onclick", "itFits()");
  option2.style.display       = "none";
}

function itFits()
{
  levelText.innerHTML         = "You:   It fits.";
  option1.innerHTML           = "Leave the control room";
  option1.setAttribute("onclick", "kievEntrance4()");
  option2.style.display       = "none";
  option3.style.display       = "none";
}

function kievEntrance4()
{
    levelImg.src              = "img/gate1.jpg";
    levelTitle.innerHTML      = "Entrance to Kiev";
    levelText.innerHTML       = "Vladimir:	let’s go.";
    console.log(levelTitle);
    option1.innerHTML         = "Enter Kiev";
    option1.setAttribute("onclick", "kiev()");
}

function kiev()
{
  audio.src             = "audio/tunnelwind.mp3";
  levelTitle.innerHTML  = "Kiev";
  levelImg.src          = "img/kiev2.jpg";
  levelText.innerHTML   = "Vladimir:    Everybody take some rest. Dmitri, ask that guard if he knows something about D6.";
  console.log(levelTitle);
  option1.innerHTML     = "All right";
  option1.setAttribute("onclick", "kiev2()");
}

function kiev2()
{
  levelText.innerHTML   = "Guard:   Hello, how are you?";
  option1.innerHTML     = "Good, can you tell me something about D6?";
  option1.setAttribute("onclick", "kiev3()");
}

function kiev3()
{
  levelText.innerHTML   = "Guard:   D6, are you going to search for that missing squad?";
  option1.innerHTML     = "Yes.";
  option1.setAttribute("onclick", "kiev41()");
  option2.style.display = "block";
  option2.innerHTML     = "That’s none of your business.";
  option2.setAttribute("onclick", "kiev42()");
}

function kiev41()
{
  levelText.innerHTML   = "Guard:   I don't know enything about D6. But, you have to be careful in Pobedy Park. The people who live there are cannibals.";
  cannibals++;
  option1.innerHTML     = "Thank you";
  option1.setAttribute("onclick", "pobedyPark()");
  option2.style.display = "none";
}

function kiev42()
{
  levelText.innerHTML   = "Guard:   Than I can’t help you.";
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "pobedyPark()");
  option2.style.display = "none";
}

function pobedyPark()
{

  if (cannibals != 0) {
    audio.src               = "audio/machinegun.mp3";
    levelTitle.innerHTML    = "Pobedy Park";
    levelImg.src            = "img/pobedy_park.jpg";
    levelText.innerHTML     = "Youri:  CANNIBALS…";
    console.log(levelTitle);
    option1.innerHTML       = "Next";
    option1.setAttribute("onclick", "pobedyPark2()");
  } else {
    levelTitle.innerHTML    = "Pobedy Park";
    levelImg.src            = "img/pobedy_park2.jpg";
    levelText.style.display = "none";
    console.log(levelTitle);
    option1.innerHTML       = "Next";
    option1.setAttribute("onclick", "gameOver5()");
  }
}

function pobedyPark2()
{
  levelText.innerHTML   = "Boris:		Shit, youri is hit.";
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "pobedyPark3()");
}

function pobedyPark3()
{
  audio.src             = "audio/machinegun.mp3";
  levelText.innerHTML   = "Vladimir:	Fire at will.";
  option1.innerHTML     = "Shoot and go to the right.";
  option1.setAttribute("onclick", "pobedyPark4()");
  option2.style.display = "block";
  option2.innerHTML     = "Shoot and go to the left.";
  option2.setAttribute("onclick", "gameOver4()");
}

function pobedyPark4()
{
  levelImg.src          = "img/pobedy_park2.jpg";
  levelText.innerHTML   = "Vladimir:    Boris, he's dead.";
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "whiteHouse()");
  option2.style.display = "none";
}

function whiteHouse()
{
  audio.src             = "audio/tunnelwind.mp3";
  levelTitle.innerHTML  = "White house";
  levelImg.src          = "img/white_house_mutans.jpg";
  levelText.innerHTML   = "You(in yourself):    I can’t believe Youri is dead.";
  console.log(levelTitle);
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "whiteHouse2()");
}

function whiteHouse2()
{
  levelText.innerHTML   = "Vladimir:    Maybe this metro line still works if the electricity is back on.";
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "whiteHouse3()");
}

function whiteHouse3()
{
  levelText.innerHTML   = "You:   I will take a look.";
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "whiteHouse4()");
}

function whiteHouse4()
{
  audio.src             = "audio/monster.mp3";
  levelText.innerHTML   = "Boris:   Shit, mutants.";
  option1.innerHTML     = "Stay and help kill the mutants.";
  option1.setAttribute("onclick", "gameOver6()");
  option2.style.display = "block";
  option2.innerHTML     = "Repair the electricity.";
  option2.setAttribute("onclick", "whiteHouse5()");
}

function whiteHouse5()
{
  levelImg.src          = "img/white_house2.jpg";
  levelText.innerHTML   = "You:    Did the switches go up or down?";
  option1.innerHTML     = "Put the switches up.";
  option1.setAttribute("onclick", "whiteHouse7()");
  option2.innerHTML     = "Put the switches down.";
  option2.setAttribute("onclick", "whiteHouse6()");
}

function whiteHouse6()
{
  audio.src             = "audio/switch.mp3";
  levelImg.src          = "img/white_house2.jpg";
  levelText.innerHTML   = "You:    Shit, it doesn't work.";
  option1.innerHTML     = "Put the switches up.";
  option1.setAttribute("onclick", "whiteHouse7()");
  option2.style.display = "none";
}

function whiteHouse7()
{
  audio.src             = "audio/switch.mp3";
  levelImg.src          = "img/white_house2.jpg";
  levelText.innerHTML   = "You:    It works.";
  option1.innerHTML     = "Next.";
  option1.setAttribute("onclick", "whiteHouse8()");
  option2.style.display = "none";
}

function whiteHouse8()
{
  audio.src             = "audio/train.mp3";
  levelImg.src          = "img/white_house.jpg";
  levelText.innerHTML   = "Vladimir:    It works, everybody into the train.";
  option1.innerHTML     = "Next.";
  option1.setAttribute("onclick", "defenceMinistry()");
}

function defenceMinistry()
{
  audio.src             = "audio/alarm.mp3";
  levelTitle.innerHTML  = "Defence ministry";
  levelImg.src          = "img/gate2.jpg";
  levelText.innerHTML   = "Boris:   we made it.";
  console.log(levelTitle);
  option1.setAttribute("onclick", "defenceMinistry2()");
}

function defenceMinistry2()
{
  levelText.innerHTML   = "Vladimir:	look there is a gate.";
  option1.setAttribute("onclick", "defenceMinistry3()");
}

function defenceMinistry3()
{
  levelText.innerHTML   = "Boris:		There is also a door around the corner to the left. Which one, it’s your call.";
  option1.innerHTML     = "The right gate.";
  option1.setAttribute("onclick", "gameOver7()");
  option2.style.display = "block";
  option2.innerHTML     = "The left door.";
  option2.setAttribute("onclick", "win()");
  option3.style.display = "block";
  option3.innerHTML     = "Knock first.";
  option3.setAttribute("onclick", "defenceMinistry4()");
}

function defenceMinistry4()
{
  levelText.innerHTML   = levelText.innerHTML + "<br>You:   If we knock first we know for sure there are no mutants behind the door.";
  option1.innerHTML     = "Next";
  option1.setAttribute("onclick", "defenceMinistry5()");
  option2.style.display = "none";
  option3.style.display = "none";
}

function defenceMinistry5()
{
  audio.src             = "audio/knockingmonster.mp3";
  levelText.innerHTML   = levelText.innerHTML + "<br>Vladimir:    Good idea. Boris knock three time on the gate.";
  option1.setAttribute("onclick", "defenceMinistry6()");
}



function defenceMinistry6()
{
  audio.src             = "audio/knocking.mp3";
  levelText.innerHTML   = levelText.innerHTML + "<br>Vladimir:    And now on de left door.";
  option1.setAttribute("onclick", "defenceMinistry7()");
}

function defenceMinistry7()
{
  levelText.innerHTML   = levelText.innerHTML + "<br>Somebody:    “Hello.”";
  option1.setAttribute("onclick", "defenceMinistry8()");
}
function defenceMinistry8()
{
  levelText.innerHTML   = levelText.innerHTML + "<br>Boris:   There is someone in there.";
  option1.setAttribute("onclick", "win()");
}

function gameOver1()
{
  audio.src                 = "audio/game_over_1.mp3";
  levelTitle.innerHTML      = "GAME OVER";
  levelImg.src              = "img/explosie.jpg";
  levelText.innerHTML       = "Youri did something wrong and the station blew up";
  console.log(levelTitle);
  weapon                    = 0;
  key                       = 0;
  cannibals                 = 0;
  inventory1.style.display  = "none";
  inventory2.style.display  = "none";
  option1.innerHTML         = "Start again";
  option1.setAttribute("onclick", "startGame()");
  option2.style.display     = "block";
  option2.innerHTML         = "Back to menu";
  option2.setAttribute("onclick", "onloadGame()");
}

function gameOver2()
{
  audio.src                 = "audio/Dark_one.mp3";
  levelTitle.innerHTML      = "GAME OVER";
  levelImg.src              = "img/Dark_one_attack.jpg";
  levelText.innerHTML       = "You didn’t have a gun.";
  console.log(levelTitle);
  weapon                    = 0;
  key                       = 0;
  cannibals                 = 0;
  inventory1.style.display  = "none";
  inventory2.style.display  = "none";
  option1.innerHTML         = "Start again";
  option1.setAttribute("onclick", "startGame()");
  option2.style.display     = "block";
  option2.innerHTML         = "Back to menu";
  option2.setAttribute("onclick", "onloadGame()");
  option3.style.display     = "none";
}

function gameOver3()
{
  audio.src                 = "audio/Dark_one.mp3";
  levelTitle.innerHTML      = "GAME OVER";
  levelImg.src              = "img/Dark_one_attack.jpg";
  levelText.innerHTML       = "You were to slow.";
  console.log(levelTitle);
  weapon                    = 0;
  key                       = 0;
  cannibals                 = 0;
  inventory1.style.display  = "none";
  inventory2.style.display  = "none";
  option1.innerHTML         = "Start again";
  option1.setAttribute("onclick", "startGame()");
  option2.style.display     = "block";
  option2.innerHTML         = "Back to menu";
  option2.setAttribute("onclick", "onloadGame()");
  option3.style.display     = "none";
}

function gameOver4()
{
  audio.src                 = "audio/machinegun.mp3";
  levelTitle.innerHTML      = "GAME OVER";
  levelImg.src              = "img/zwart.jpg";
  levelText.innerHTML       = "You walked into crossfire.";
  console.log(levelTitle);
  weapon                    = 0;
  key                       = 0;
  cannibals                 = 0;
  inventory1.style.display  = "none";
  inventory2.style.display  = "none";
  option1.innerHTML         = "Start again";
  option1.setAttribute("onclick", "startGame()");
  option2.style.display     = "block";
  option2.innerHTML         = "Back to menu";
  option2.setAttribute("onclick", "onloadGame()");
  option3.style.display     = "none";
}

function gameOver5()
{
  audio.src             = "audio/machinegun.mp3";
  levelTitle.innerHTML      = "GAME OVER";
  levelImg.src              = "img/zwart.jpg";
  levelText.style.display   = "block";
  levelText.innerHTML       = "You were killed and eaten by cannibals.";
  console.log(levelTitle);
  weapon                    = 0;
  key                       = 0;
  cannibals                 = 0;
  inventory1.style.display  = "none";
  inventory2.style.display  = "none";
  option1.innerHTML         = "Start again";
  option1.setAttribute("onclick", "startGame()");
  option2.style.display     = "block";
  option2.innerHTML         = "Back to menu";
  option2.setAttribute("onclick", "onloadGame()");
}

function gameOver6()
{
  audio.src                 = "audio/monster2.mp3";
  levelTitle.innerHTML      = "GAME OVER";
  levelImg.src              = "img/mutant.jpg";
  levelText.innerHTML       = "After a while you ran out of bullets and were eaten by mutants.";
  console.log(levelTitle);
  weapon                    = 0;
  key                       = 0;
  cannibals                 = 0;
  inventory1.style.display  = "none";
  inventory2.style.display  = "none";
  option1.innerHTML         = "Start again";
  option1.setAttribute("onclick", "startGame()");
  option2.style.display     = "block";
  option2.innerHTML         = "Back to menu";
  option2.setAttribute("onclick", "onloadGame()");
}

function gameOver7()
{
  audio.src                 = "audio/monster2.mp3";
  levelTitle.innerHTML      = "GAME OVER";
  levelImg.src              = "img/mutant.jpg";
  levelText.innerHTML       = "There was a mutant behind this door.";
  console.log(levelTitle);
  weapon                    = 0;
  key                       = 0;
  cannibals                 = 0;
  inventory1.style.display  = "none";
  inventory2.style.display  = "none";
  option1.innerHTML         = "Start again";
  option1.setAttribute("onclick", "startGame()");
  option2.style.display     = "block";
  option2.innerHTML         = "Back to menu";
  option2.setAttribute("onclick", "onloadGame()");
  option3.style.display     = "none";
}

function win()
{
  audio.src                 = "audio/Kids_Cheering.mp3";
  levelTitle.innerHTML      = "YOU WON";
  levelImg.src              = "img/win.jpg";
  levelText.innerHTML       = "You found the missing squad.";
  console.log(levelTitle);
  weapon                    = 0;
  key                       = 0;
  cannibals                 = 0;
  inventory1.style.display  = "none";
  inventory2.style.display  = "none";
  option1.innerHTML         = "Start again";
  option1.setAttribute("onclick", "startGame()");
  option2.style.display     = "block";
  option2.innerHTML         = "Back to menu";
  option2.setAttribute("onclick", "onloadGame()");
  option3.style.display     = "none";
}
