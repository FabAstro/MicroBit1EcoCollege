let gamestarted = false
basic.forever(function () {
    gamestarted = false
    basic.pause(randint(1000, 5000))
    gamestarted = true
    basic.showIcon(IconNames.TShirt)
    while (gamestarted) {
        if (input.pinIsPressed(TouchPin.P1)) {
            gamestarted = 0
        }
    }
    basic.pause(3000)
    basic.clearScreen()
})
