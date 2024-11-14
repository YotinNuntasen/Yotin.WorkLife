// const express = require('express');
// const app = express();
// const db = require('./src/models')
// const initRoutes = require('./src/routes/web')

// global._basedir = __dirname;

// app.use(express.urlencoded({ extended: true}))
// initRoutes(app);

// db.sequelize.sync({ force: true}).then(() =>{
//     console.log('Drop and re-sync db.')
//   })

// let port = 5173;
// app.listen(port, () => {
//     console.log(`Server is runningat localhost:${port}`)
// })