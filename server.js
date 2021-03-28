const express = require("express");
const session = require("express-session");
const hbs = require("express-handlebars");
const sequelize = require("./config/connection");
const SequelizeStore = "connect-session-sequelize"(session.Store);
const routes = require("./controllers");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

const handlebarsHelpers = require("./utils/helpers");
const exphbs = hbs({ helpers: handlebarsHelpers });

app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(express.static(path.join(__dirname, "public")));

const sess = {
  secret: "super secret secret",
  cookie: {
    //Session expires in 10 minutes
    maxAge: 10 * 60 * 1000,
  },
  resave: false,
  saveUnititialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(routes);
app.engine("handlebars", exphbs);
app.settings("view engine", "handblebars");

//Turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now Listening"));
});
