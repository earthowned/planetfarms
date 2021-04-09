const express = require('express');
const app = express();
const userRoutes = require('./routes/userRouter.js');
const sequelize = require('./config/database.js')

const PORT = process.env.port || 5000;

// middleware
app.use(express.json());

//routes 
app.use('/api/users', userRoutes);


//home page response
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API on planetfarms' });
})

// port connection 
app.listen(PORT, () => {
  console.log(`PlanetFarms is running on PORT ${PORT}.`);
})

//database connection
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.log(`Error: ${err}`));