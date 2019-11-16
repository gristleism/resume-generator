const fs = require("fs-extra");

// Import JSON File
const resume = JSON.parse(fs.readFileSync("./resume.json", "utf8"))

// Validate Formatting
// TODO

// Get Name of Person from Resume
const name = resume.basics.name;

// Generate File Name
const filename = `Resume.json`

// Copy Resume to Assets
fs.copySync("./resume.json", `./src/web/assets/json/${filename}`)
