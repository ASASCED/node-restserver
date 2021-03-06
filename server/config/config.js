// =======================
// ========PUERTO=========
// =======================
process.env.PORT = process.env.PORT || 3000

// =======================
// ========ENTORNO=========
// =======================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// =======================
// ========BASE DE DATOS=========
// =======================
let urlDB

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URL
}

process.env.URLDB = urlDB

// =======================
// ========VENCIMIENTO DEL TOKEN=========
// 60 SEG | 60 MIN | 24 HRS | 30 DIAS
// =======================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30

// =======================
// ========SEED DE AUTENTICACION=========
// =======================
process.env.SEED = process.env.SEED || 'secret'

// =======================
// ========GOOGLE CLIENT ID=========
// =======================
process.env.CLIENT_ID =
    process.env.CLIENT_ID ||
    '335974681243-2mjd3ehsjrjtik74s3d56hb11q5qfbc5.apps.googleusercontent.com'
