const PDFDocument = require("pdfkit");
const fs = require("fs");

const pdfDoc = new PDFDocument();
pdfDoc.pipe(fs.createWriteStream("SampleDocument.pdf"));

pdfDoc
  .fillColor("green")
  .fontSize(25)
  .opacity(20)
  .text(
    "I am a very good programmer and I have that talent to bulid something",
    150,
    20
  );
pdfDoc.fillColor("blue").fontSize(17).text("100%", 305, 150);

pdfDoc.end();
