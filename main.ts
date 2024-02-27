let tel = 0
basic.forever(function () {
    if (tel % 2 == 1) {
    	
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (tel <= 15) {
        tel += 1
        basic.pause(500)
    } else {
        basic.clearScreen()
        tel = 0
    }
})
