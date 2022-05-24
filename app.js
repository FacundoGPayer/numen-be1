const mongoose = require('mongoose')
const url ='mongodb+srv://admin:numen2022@cluster-numen.bcv5z.mongodb.net/proyecto-db'
mongoose.connect(url, {
})
.then(()=> console.log('CONECTADO A MONGO ATLAS'))
.catch((e)=> console.log('Error: ' + e)) 
//Schema
const productSchema = mongoose.Schema({
    nombre: {type: String, required:true,},
    marca: {type: String, required:true,},
    descripcion: {type:String, required:false,},
    precio: {type: Number, required:true,},
    stock: {type: Number, required:true,},
}, {versionKey: false})
const ProductModel = mongoose.model('productos', productSchema)
//Mostrar
const mostrar = async (id)=>{
    const producto = await ProductModel.find({_id:id})
    console.log(producto)
}


//Crear
const crear = async (nombre, marca, descripcion, precio, stock)=>{
    const producto = new ProductModel({
        nombre: nombre,
        marca: marca,
        descripcion: descripcion,
        precio: precio,
        stock: stock
    })
    const resultado = await producto.save()
}


//Editar
const actualizar = async (id, nombre, marca, descripcion, precio, stock)=>{
    const producto = await ProductModel.updateOne({_id:id},
    {
        $set:{
            nombre: nombre,
            marca: marca,
            descripcion: descripcion,
            precio: precio,
            stock: stock
        }
    })
}

//Eliminar
const eliminar = async (id)=>{
    const producto = await ProductModel.deleteOne({_id:id})
}

