const http = require('http'); // modulo nativo de node

const host = 'localhost'; // localhost y puerto
const port = 8080; 

// servidor que responda a mi nombre y un mensaje
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    
// mensaje
    const respuesta = {
        nombre: 'Erick Avila',
        mensaje: '¡Hola, mundo!'
    };
    
    res.end(JSON.stringify(respuesta));
});

// listen con chalk para que las letras sean verdes
server.listen(port, host, () => {
    console.log(chalk.green(`El servidor se está ejecutando en http://${host}:${port}/`));
});
