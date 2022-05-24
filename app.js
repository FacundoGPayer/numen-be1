const mongoose = require('mongoose')
const url ='mongodb+srv://admin:numen2022@cluster-numen.bcv5z.mongodb.net/proyecto-db'
mongoose.connect(url, {
})
.then(()=> console.log('CONECTADO A MONGO ATLAS'))
.catch((e)=> console.log('Error: ' + e)) 
//Schema
const productSchema = mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    nombre: {type: String, required: true},
    marca: {type: String, required: true},
    descripcion: {type:String},
    precio: {type: Number, required: true},
    stock: {type: Number, required: true},
}, {versionKey: false})
const ProductModel = mongoose.model('productos', productSchema)

//Motrar todos
const getAll = async ()=>{
    const productos = await ProductModel.find()
    console.log(productos)
}

//Mostrar
const get = async (id)=>{
    const producto = await ProductModel.findOne({id:id})
    console.log(producto)
}

//Crear
const post = async (id,nombre, marca, descripcion, precio, stock)=>{
    const producto = new ProductModel({
        id: id,
        nombre: nombre,
        marca: marca,
        descripcion: descripcion,
        precio: precio,
        stock: stock
    })
    const resultado = await producto.save()
}

//Editar
const put = async (id, nombre, marca, descripcion, precio, stock)=>{
    const producto = await ProductModel.updateOne({id:id},
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
const del = async (id)=>{
    const producto = await ProductModel.deleteOne({id:id})
}

