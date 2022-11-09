let express = require('express')
let app = express()

//Estatico
app.use(express.static(__dirname + '/static'))

//plantillas
app.set('views', __dirname + '/views')
app.set('view engine' , 'ejs')

app.listen(8000, function() {
    console.log('Escuchando por el puero 8000')
})

let cats = [
    { id: 1,
      name: "Cuddles", 
      favorid_food: "Spaghetti",
      age: 3,
      sleeping: ['under the bed', 'in a sunbeam'],
      imagen: "gato1.jpg"
    },
    { id: 2,
      name: "gatito", 
      favorid_food: "Atun",
      age: 2.5,
      sleeping: ['en el sillón', 'en la cama', 'en los pies'],
      imagen: "gato2.jpg"
    },
    { id: 3,
      name: "fiesta", 
      favorid_food: "Pescado",
      age: 38,
      sleeping: ['debajo de la cama', 'debajo del sillon', 'en la alfombra'],
      imagen: "gato3.jpg"
    }
] 


app.get('/cats', function(req, resp) {
    resp.render( 'cats', { cats } )
})

app.get('/detail/:id', function(req, resp) {
    // console.log(req);
    
    let index = req.params.id - 1
    let arr = cats[index]
    console.log(arr);
    // resp.send("OK");
    resp.render( 'details', { arr } )
})
