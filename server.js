const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require("path");
const mongoose = require('mongoose');
const ExpressError = require("./utils/ExpressError.js");
const ejsMate = require("ejs-mate");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/User.js");
const session = require("express-session");
const flash = require("connect-flash");
const MongoStore = require('connect-mongo');
// const connectDB = require('./config/db');

// dotenv.config(); // Load environment variables

app.use(express.json()); // Parse incoming JSON requests
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const serviceRoutes = require('./routes/serviceRoutes');
const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes.js');

const MONGO_URL = "mongodb://127.0.0.1:27017/homeService";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

//MongoStore
const store = MongoStore.create({
  mongoUrl: MONGO_URL,
  crypto: {
    secret: "mysupersecretcode",
  },
  touchAfter: 24 * 3600,  //24 hours in sec
});


//Express Session
const sessionOptions = {
  store,
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, //milliseconds in 7 days
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};


// // Connect to MongoDB
// connectDB();

// API routes
app.use('/api/services', serviceRoutes);
app.use('/api', userRoutes);
app.use('/api/services/contact', contactRoutes);

app.use(session(sessionOptions));
app.use(flash());

//Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// Homepage route
app.get('/api/services', (req, res) => {
  res.render("services/home.ejs");
});

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

// Error Handling
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message });
});

// Port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
