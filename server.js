const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require("path");
const mongoose = require('mongoose');
const ExpressError = require("./utils/ExpressError.js");
const MongoStore = require('connect-mongo');
const session = require("express-session");
const flash = require("connect-flash");
const ejsMate = require("ejs-mate");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/User.js");

// Load environment variables
dotenv.config();

// const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/homeService";
const dbUrl = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect(dbUrl);
  console.log("connected to DB");
}

main().catch((err) => {
  console.log(err);
});

app.use(express.json()); // Parse incoming JSON requests
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// MongoStore
const store = MongoStore.create({
  mongoUrl:dbUrl,
  crypto: {
    secret: process.env.SESSION_SECRET,
  },
  touchAfter: 24 * 3600,  // 24 hours in sec
});

store.on("error", () => {
  console.log('eRROR IN mongo sESSION STORE', ERR);
});

// Express Session
const sessionOptions = {
  store,
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // milliseconds in 7 days
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

// Passport
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

// API routes
const serviceRoutes = require('./routes/serviceRoutes');
const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes.js');

app.use('/api', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/services/contact', contactRoutes);

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
