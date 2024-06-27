input.onButtonPressed(Button.A, function () {
    radio.sendString("HOLA")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
