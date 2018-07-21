const TOPIC = '';

// genero un ID de cliente aleatorio para permitir multiples conexiones.
const clientId = parseInt(Math.random() * 100, 10);
console.log('[mqtt] - cliente con id %s generado', clientId);

/* // creo un cliente MQTT.
const client = new Paho.MQTT.Client(window.location.host, 80, "/mqtt", clientId.toString());

// inicio la conexion, y me subscribo al topico definido en la constante.
client.connect({
    onSuccess: () => {
        console.log('[MQTT] - Me conecte correctamente');

        client.subscribe(TOPIC, {
            onSuccess: () => {
                console.log('[MQTT] - Me subscribi correctamente al topico', TOPIC);
            },
            onFailure: () => {
                console.log('[MQTT] - Fallo la subscripcion al topico', TOPIC);
            }
        })
    },
    onFailure: () => {
        console.log('[MQTT] - Fallo la conexion a mqtt');
    }
}); */
