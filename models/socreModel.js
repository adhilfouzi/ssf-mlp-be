const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
    Kondotty: { type: Number, required: true, default: 0 },
    Areekode: { type: Number, required: true, default: 0 },
    Pulikkal: { type: Number, required: true, default: 0 },
    Edakkara: { type: Number, required: true, default: 0 },
    Nilambur: { type: Number, required: true, default: 0 },
    Kolathur: { type: Number, required: true, default: 0 },
    ManjeriEast: { type: Number, required: true, default: 0 },
    ManjeriWest: { type: Number, required: true, default: 0 },
    Perinthalmanna: { type: Number, required: true, default: 0 },
    Malappuram: { type: Number, required: true, default: 0 },
    Wandoor: { type: Number, required: true, default: 0 }
});

const Score = mongoose.model("Score", ScoreSchema);

module.exports = Score;
