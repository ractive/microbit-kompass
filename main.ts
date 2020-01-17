let richtung = 0
basic.forever(function () {
    richtung = input.compassHeading()
    if (richtung < 45) {
        basic.showString("N")
    } else if (richtung < 135) {
        basic.showString("O")
    } else if (richtung < 225) {
        basic.showString("S")
    } else if (richtung < 315) {
        basic.showString("W")
    }
    basic.pause(100)
})
