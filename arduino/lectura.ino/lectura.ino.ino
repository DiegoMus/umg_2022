/*
Practica de X Electrónica Analógica
Universidad Mariano Galvez de Guatemala
Sede Cobán Plan Fin de Semana
*/

char valor; //Variable para guardar caracteres recibidos
int salida = 13;


void setup(){
    Serial.begin(9600); //Velocidad de comunicación verficar que sea la misma que en la app de node
    pinMode(salida, OUTPUT); // Salida que accionará el Transistor y Relé
}

void loop(){
  if (Serial.available() > 0){ //validador de trabajo de lectura serial
      valor = Serial.read(); //Guardado del valor serial recibido
        switch(valor){
            case '1' :  //Opción de encendido
              digitalWrite(salida, HIGH);
              break;
            
            default: //Todo parametro enviado por serial que no tenga condición apaga el LED esto puede mejorarlo
              digitalWrite(salida,LOW);
              break;
          }
    }
}
