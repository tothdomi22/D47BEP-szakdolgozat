const app = require('./app');
const sequelize = require('./config/config');
const port = 3000;
const controlPanelRoutes = require('./routes/controlPanelRoutes')


//database sync
sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Error syncing the database:', error);
  });