const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  console.log('Starting PDF generation...');
  
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to the htmldocs dev server - it serves documents at root with documentId
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle'
  });
  
  // Generate PDF
  const pdfPath = path.join(__dirname, '..', 'Resume.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0',
      right: '0',
      bottom: '0',
      left: '0'
    }
  });
  
  await browser.close();
  console.log(`PDF generated successfully at: ${pdfPath}`);
}

generatePDF().catch(console.error);
