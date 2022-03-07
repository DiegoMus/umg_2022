const serialPort = require('serialport')

const port = new serialPort(
    'COM7',{bauteRate: 9600}
)

const parser = new serialPort.parsers.Readline()

port.pipe(parser)


parser.on('data',(line)=>{console.log(line)})