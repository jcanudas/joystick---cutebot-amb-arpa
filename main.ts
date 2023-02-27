radio.onReceivedString(function (receivedString) {
    if (receivedString == "Amunt") {
        cuteBot.forward()
    }
    if (receivedString == "Avall") {
        cuteBot.backforward()
    }
    if (receivedString == "Dreta") {
        cuteBot.turnright()
    }
    if (receivedString == "Esquerra") {
        cuteBot.turnleft()
    }
    if (receivedString == "E") {
        cuteBot.stopcar()
    }
    if (receivedString == "C") {
        cuteBot.setServo(cuteBot.ServoList.S1, 80)
    }
    if (receivedString == "D") {
        cuteBot.setServo(cuteBot.ServoList.S1, 10)
    }
    if (receivedString == "A") {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
    }
    if (receivedString == "B") {
        cuteBot.closeheadlights()
    }
    if (receivedString == "F") {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.OnceInBackground)
    }
})
radio.setGroup(1)
cuteBot.setServo(cuteBot.ServoList.S1, 10)
basic.forever(function () {
	
})
