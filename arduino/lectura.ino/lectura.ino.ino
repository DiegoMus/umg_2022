char valor;
int salida = 13;


void setup(){
    Serial.begin(9600);
    pinMode(salida, OUTPUT);
}

void loop(){
  if (Serial.available() > 0){
      valor = Serial.read();
        switch(valor){
            case 'o' : 
              digitalWrite(salida, HIGH);
              break;
            
            default:
              break
          }
    }
}
