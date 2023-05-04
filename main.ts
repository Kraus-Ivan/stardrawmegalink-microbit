let servo1 = servoPWM.createServo(AnalogPin.P13);
servo1.setPulse(1500);

//změřeno
servo1.setMinPulse(400);
servo1.setMaxPulse(2600);

basic.forever(function () {
	basic.pause(20);
});


input.onButtonPressed(Button.A, () => {

    servo1.setPulseBy(50);

});

input.onButtonPressed(Button.B, () =>{

    servo1.setPulseBy(-50);

});

input.onLogoEvent((TouchButtonEvent.Pressed), () =>{

    
    basic.showNumber(servo1.getPulse());

});
