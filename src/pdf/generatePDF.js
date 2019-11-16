const fs = require("fs");
const PDFDocument = require("pdfkit");

// Import JSON File
const resume = JSON.parse(fs.readFileSync("./resume.json", "utf8"));

// Get Name of Person from Resume
const name = resume.basics.name;

// Generate File Name
const filename = `Resume.pdf`;

// Create a document
const doc = new PDFDocument({
  margin: 54
});

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream(`./src/web/assets/pdf/${filename}`));

// Custom Spacing Function
const addSpace = (multiplier = 1) => {
  doc.y = doc.y + (4 * multiplier)
}

// Create Text Types
const sectionText = (text, x, y) => {
  doc
    .font("node_modules/source-sans-pro/TTF/SourceSansPro-Regular.ttf")
    .fontSize(8)
    .fillColor("#8c8c8c");
  if (x && y) {
    doc.text(text.toUpperCase(), x, y);
  } else {
    doc.text(text.toUpperCase());
  }
};
const headerText = text => {
  doc
    .font("node_modules/source-serif-pro/TTF/SourceSerifPro-Regular.ttf")
    .fontSize(8)
    .fillColor("#000000")
    .text(text);
};
const bodyText = text => {
  doc
    .font("node_modules/source-sans-pro/TTF/SourceSansPro-Regular.ttf")
    .fontSize(7.25)
    .fillColor("#8c8c8c")
    .text(text);
};
const bulletpoints = text => {
  doc
    .font("node_modules/source-sans-pro/TTF/SourceSansPro-Regular.ttf")
    .fontSize(7.25)
    .fillColor("#000000");
  text.forEach(bulletpoint => {
    doc
      .fillColor("#8c8c8c")
      .text("• ")
      doc.moveUp()
      .fillColor("#000000")
      .text(bulletpoint, doc.x + 5, doc.y, { width: 295 })
      // reset offset
      doc.x = doc.x - 5
  });
};

const generateContact = info => {
  sectionText("contact", 50, 50);
  addSpace(3);
  headerText(info.name);
  addSpace(1);
  bodyText(info.website);
  bodyText(info.phone);
  bodyText(info.email);
  doc.moveDown();
};

const generateExperience = positions => {
  sectionText("Experience", 50, 145);
  addSpace(3);
  positions.forEach(generatePosition);
  addSpace(1);
};

generatePosition = position => {
  // date formatter
  const formatDate = date => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return `${monthNames[new Date(date).getMonth()]}, ${new Date(
      date
    ).getFullYear()}`;
  };
  headerText(position.position);
  addSpace(1);
  bodyText(position.company);
  bodyText(
    `${formatDate(position.startDate)} - ${formatDate(position.endDate)} | ${
      position.location
    }`
  );
  addSpace(1);
  bulletpoints(position.highlights);
  doc.moveDown();
};

generateEducation = programs => {
  sectionText("Education", 370, 145);
  addSpace(3);
  programs.forEach(generateProgram);
  addSpace(7);
};

generateProgram = program => {
  const formatDate = date => {
    return `${new Date(date).getFullYear() + 1}`;
  };
  headerText(program.studyType);
  addSpace(1);
  bodyText(program.institution);
  bodyText(
    `${formatDate(program.startDate)} - ${formatDate(program.endDate)} | ${
      program.location.city
    }, ${program.location.region}`
  );
  doc.moveDown();
};

generateSkills = skills => {
  sectionText("Skills");
  addSpace(3);
  skills.forEach(generateSkill);
  addSpace(1);
};

generateSkill = (skill, index) => {
  doc
    .font("node_modules/source-sans-pro/TTF/SourceSansPro-Regular.ttf")
    .fillColor("#8c8c8c")
    .fontSize(8)
    .text(skill.name.toUpperCase())
    addSpace(1);
  skill.keywords.forEach((keyword, index) => {
    doc.fillColor("#000000")
    .font("node_modules/source-sans-pro/TTF/SourceSansPro-Regular.ttf")
    .fontSize(7.25)
    if (index === skill.keywords.length - 1) {
      doc.text(`${keyword}.`);
    } else {
      doc.text(`${keyword}, `, { continued: true });
    }
  });
  doc.moveDown();
};

// generate
generateContact(resume.basics);
generateExperience(resume.work);
generateEducation(resume.education);
generateSkills(resume.skills);

// Finalize PDF file
doc.end();
