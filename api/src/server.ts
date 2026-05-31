import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';

/**
 * Cargar variables de entorno desde el archivo .env
 * Esto permite configurar el puerto y otras variables sin hardcodearlas en el código.
 * Asegúrate de tener un archivo .env en la raíz del proyecto con las variables necesarias.
 */
dotenv.config();

/**
 * Crear una instancia de Express para configurar el servidor.
 */
const app = express();
/**
 * Definir el puerto en el que el servidor escuchará las solicitudes.
 * Se utiliza la variable de entorno PORT si está definida, o el puerto 3000 por defecto.
 */
const PORT = process.env.PORT || 3000;

/**
 * Configurar middleware para manejar CORS (Cross-Origin Resource Sharing) y parsear JSON en las solicitudes.
 * CORS permite que el servidor acepte solicitudes desde diferentes orígenes, lo cual es útil para APIs.
 */
app.use(cors());
/**
 * Middleware para parsear el cuerpo de las solicitudes como JSON.
 * Esto permite que el servidor entienda y procese los datos enviados en formato JSON en las solicitudes POST, PUT, etc.
 */
app.use(express.json());

/**
 * Definir las rutas de la API.
 * En este caso, se define una ruta de ejemplo para saludar.
 */
app.get('/greet', (req, res) => {
  res.json({ message: 'API con TypeScript!!!' });
});

/**
 * Iniciar el servidor y hacer que escuche en el puerto definido.
 * Cuando el servidor esté listo, se imprimirá un mensaje en la consola indicando la URL donde se puede acceder a la API.
 */
app.listen(PORT, () => {
  console.log(`Run server in http://localhost:${PORT}`);
});
