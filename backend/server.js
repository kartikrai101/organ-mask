const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./database/connection');
dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(
    cors({
        origin: '*',
    }),
);
app.use(bodyParser.json());

const patientRoutes = require('./routes/patientRoutes');
const hospitalRoutes = require('./routes/hospitalRoutes');

app.use('/api/patient', patientRoutes);
app.use('/api/hospital', hospitalRoutes);

app.listen(PORT, () => {
    console.log('Server listening to PORT: ', PORT);
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully');
} catch (err) {
    console.error('Unable to connnect to the database: ', err);
}
