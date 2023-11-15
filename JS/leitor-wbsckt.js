const socket = new WebSocket('ws://localhost:8025/');

// Abrir conexão
socket.addEventListener('open', function (event) {
  socket.send('Ola!');
});

var sensor1;
var sensor2;

socket.addEventListener('message', function (event) {
  let [val1, val2] = event.data.split(",");

  // imprime variáveis
  console.log('Sensor 1:', val1, 'Sensor 2:', val2);

  // atualiza variáveis
  sensor1 = parseFloat(val1);
  sensor2 = parseFloat(val2);
});

