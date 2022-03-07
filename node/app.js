//Creando servidor web en expresss
const express = require('express');
const app = express();

//inicializar puerto Serial
var SerialPort = require("serialport");

//Listar puerto
var port = 3000;

//Listar puerto serial (Windows, otros sistemas operativos)
var arduinoCOMPort = "COM9";

//Definir Velocidad
var arduinoSerialPort = new SerialPort(arduinoCOMPort, {baudRate: 9600});

//apertura de Puertos
arduinoSerialPort.on('open',function() {
  console.log('Serial Port ' + arduinoCOMPort + ' is opened.');
});

//Ruta de Test
app.get('/', function (req, res) {
    return res.send('App para encender led');
})

//Ruta de acciones
app.get('/:action', function (req, res) {
   var action = req.params.action || req.param('action');
    if(action == 'o'){
        arduinoSerialPort.write("1");
        return res.send('Led Encedido');
    } 
    if(action == 'off') {
        arduinoSerialPort.write("0");
        return res.send("Apagar Led");
    }
    return res.send('Action: ' + action);
});

app.listen(port, function () {
  console.log('listening on port http://0.0.0.0:' + port + '!');
});