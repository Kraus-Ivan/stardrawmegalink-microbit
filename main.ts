/*
let servo1 = servoPWM.createServo(AnalogPin.P13);
let servo2 = servoPWM.createServo(AnalogPin.P15);
*/
/*
servo1.setDelay(servoPWM.Speed.SlowestUltra);
servo2.setDelay(servoPWM.Speed.Immediately);
*/

PCAmotor.GeekServo(PCAmotor.Servos.S1, 1500);
basic.pause(1000);
PCAmotor.GeekServospeed(PCAmotor.Servos.S1, 1500, 2400, 1)

/*
servo1.setPulse(1500);
servo2.setPulse(1500);
basic.pause(1000);
servo1.setPulse(2500);
basic.pause(2000);
servo1.setPulse(500);

for (let i = 1; i < 1000; i ++) {
    servo1.setPulseBy(5);
    basic.pause(1);
}*/

