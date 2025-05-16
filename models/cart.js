const mongoose = require('mongoose');

// Définition du schéma
const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  totalAmount: {
    type: Number,
    required: true
  }
}, { timestamps: true });

// Création du modèle Cart
const Cart = mongoose.model('Cart', cartSchema);

// Export du modèle Cart
module.exports = Cart;
