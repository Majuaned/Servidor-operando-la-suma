const express = require("express");
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})

app.get('/', function (req, res) {
  //se solicita al servidor el archivo siguiente...
  res.sendFile(__dirname + "/index.html")
})
/* 
{
  "num1":2,
  "num2":3
}
{num1,num2}=req.body
se crea la ruta suma con el método post y se crea una función la cual trae del body num 1 y 2
 */
app.post('/suma', function (req, res) {
  const { num1, num2 } = req.body;
  if (typeof num1 == "number" && typeof num2 == "number") {
    //se ejecuta la operación de suma en el servidor
    let suma = num1 + num2
    //see retorna como respuesta como un json un texto y un resultado (res), el cual es la variable suma, q contiene el resultado de la operación
    return res.json({
      texto: "Suma exitosa",
      resultado: suma
    })
  } else {
    res.json({
      texto: "los tipos de datos no son numericos",
      resultado: "Error"
    })
  }
})