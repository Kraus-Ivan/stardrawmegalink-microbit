let servo1 = servoPWM.createServo(AnalogPin.P13);
servo1.setPulse(1800);
servo1.setMinPulse(300);
servo1.setMaxPulse(2800);

basic.forever(function () {
	basic.pause(20);
    
    //servo1.setPulse(2500);
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
