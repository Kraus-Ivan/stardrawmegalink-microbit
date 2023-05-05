let servo1 = servoPWM.createServo(AnalogPin.P13);
let servo2 = servoPWM.createServo(AnalogPin.P15);

// změřeno
servo1.setMinPulse(400);
servo1.setMaxPulse(2600);

servo2.setMinPulse(400);
servo2.setMaxPulse(2600);


const step = 1;
let currentPosition = 2000;
servo1.setPulse(currentPosition);
servo2.setPulse(currentPosition);

basic.forever(function () {
    basic.pause(2);

    if (input.buttonIsPressed(Button.A)){
        currentPosition += step; // Zvyšuje hodnotu pulzu o krok
        servo1.setPulse(currentPosition);
        servo2.setPulse(currentPosition + 150)
    }

    if (input.buttonIsPressed(Button.B)) {
        currentPosition -= step; // Sníží hodnotu pulzu o krok
        servo1.setPulse(currentPosition);
        servo2.setPulse(currentPosition - 150);
    }
});

