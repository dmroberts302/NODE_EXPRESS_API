import express from "express";

// body-parser allows us to take in incoming post request bodies
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'

// initialize express app - our whole app relies in this variable
const app = express();
// create port number, most front-ends use port = 3000 hence we use 5000 for the backend 
const PORT = 5000;

/* initialize the middle-ware
 * parse application/json
 */ 

app.use(bodyParser.json());

// all routes in the users.js will use /users as a starting point
app.use('/users', usersRoutes);

// get server function on homepage
app.get('/', (req, res) => res.send('Homepage'))

// listen for server functions on PORT=5000 which translates to http://localhost:5000
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));