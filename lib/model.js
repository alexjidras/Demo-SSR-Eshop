import mongoose from "./connection";

const productSchema = new mongoose.Schema({
    categorie: String,
    nume: String,
    pret: Number,
    pretVechi: Number,
    descriere: String,
    hex: [String],
    colors: [String],
    images: [String]      
});

productSchema.eachPath((path) => productSchema.paths[path].required(true));
productSchema.set('toJSON', {
  versionKey:false,
  transform: function (doc, ret) {   
    ret.id = ret._id;
    delete ret._id  
}
});

module.exports = mongoose.model("Product", productSchema, "Products");



