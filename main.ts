class SmoothServo {
    private pin: AnalogPin;

    private target: number;
    private current: number;
    private zasobnik: number[] = [];

    private min: number = 400;
    private max: number = 2600;

    constructor(pin: AnalogPin) {
        this.pin = pin;
        this.target = 0;
        this.current = 1550;
        pins.servoSetPulse(this.pin, this.current);
    }

    moveTo(position: number) {
        console.log(this.current);
        this.target = position;
        let step = 20;
        console.log(step);
        for (let i = 0; this.current + step * i < this.target; i++) {

            this.zasobnik.push(this.current + (step * i));


        } console.log(this.zasobnik.join());
        
    }

    update() {
        if(this.zasobnik !== undefined && this.zasobnik.length > 0){
            let e = this.zasobnik.shift()
            console.log(e);
            pins.servoSetPulse(this.pin, e);
            this.current = e;
        }else{
            pins.servoSetPulse(this.pin, this.current);
        }
    }
}

let servo = new SmoothServo(AnalogPin.P1);

input.onButtonPressed(Button.A, () =>{

    servo.moveTo(2002);

});

basic.forever(() => {
    basic.pause(20);
    if(servo !== null && servo !== undefined){
        servo.update();
    }

});

let miniservo = servoPWM.createServo(AnalogPin.P0);
miniservo.setPulse(500);