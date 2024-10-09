const Service = require("../models/Service");

// Get all services
const electricalServices = async (req, res) => {
 try {
    const services = await Service.find({category: 'electrical'}); // Filter for electrical services
    // console.log(services);
    res.render("services/electrical.ejs", {services})
  } catch (err) {
    res.send("error in electrical");
  }
};

const plumbingServices = async (req, res) => {
    try {
       const services = await Service.find({category: 'plumbing'}); // Filter for electrical services
       // console.log(services);
       res.render("services/plumbing.ejs", {services})
     } catch (err) {
       res.send("error in electrical");
     }
   };

   const technicalServices = async (req, res) => {
    try {
       const services = await Service.find({category: 'technical'}); // Filter for electrical services
       // console.log(services);
       res.render("services/technical.ejs", {services})
     } catch (err) {
       res.send("error in electrical");
     }
   };

   const cleaningServices = async (req, res) => {
    try {
       const services = await Service.find({category: 'cleaning'}); // Filter for electrical services
       // console.log(services);
       res.render("services/cleaning.ejs", {services})
     } catch (err) {
       res.send("error in electrical");
     }
   };

module.exports = {
  electricalServices, plumbingServices, technicalServices
  , cleaningServices
};
