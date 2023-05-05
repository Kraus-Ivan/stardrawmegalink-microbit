class PWMservo {
    min: number;
    max: number;
    current: number;
    pin: AnalogPin;

    constructor(min: number, max: number, current: number, pin: AnalogPin) {
        this.min = min;
        this.max = max;
        this.current = current;
        this.pin = pin;

        this.rotate(0);
    }

    public rotate(howmuchmore: number) {
        // Opravit použití proměnných třídy
        if (this.current + howmuchmore > this.max) {
            this.current = this.max;
        } else if (this.current + howmuchmore < this.min) {
            this.current = this.min;
        } else {
            this.current += howmuchmore;
        }

        pins.servoSetPulse(this.pin, this.current);
        console.log(this.current);
    }
}

let switched = false;

pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
pins.analogWritePin(AnalogPin.P16, 0);
pins.setPull(DigitalPin.P13, PinPullMode.PullNone);
pins.analogWritePin(AnalogPin.P13, 0);
let miniservo = new PWMservo(900, 1900, 1400, AnalogPin.P16);
let servo1 = new PWMservo(400, 2600, 1500, AnalogPin.P13);

basic.forever(function () {
    basic.pause(20);
    if(switched){
        if (input.buttonIsPressed(Button.A)) {
            miniservo.rotate(20);
        }
        if (input.buttonIsPressed(Button.B)) {
            miniservo.rotate(-20);
        }
    }else{
        if (input.buttonIsPressed(Button.A)) {
            servo1.rotate(200);
        }
        if (input.buttonIsPressed(Button.B)) {
            servo1.rotate(-200);
        }
    }

});

input.onLogoEvent(TouchButtonEvent.Pressed, () => {

    switched = !switched;

});
