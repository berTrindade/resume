const https = require('https');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  console.log('Starting PDF generation via htmldocs API...');
  
  const apiKey = process.env.HTMLDOCS_API_KEY;
  if (!apiKey) {
    console.error('HTMLDOCS_API_KEY environment variable not set');
    process.exit(1);
  }

  const options = {
    hostname: 'api.htmldocs.com',
    path: '/api/documents/resume',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  };

  const pdfPath = path.join(__dirname, '..', 'Resume.pdf');
  const file = fs.createWriteStream(pdfPath);

  const req = https.request(options, (res) => {
    console.log(`Status: ${res.statusCode}`);
    
    res.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log(`PDF generated successfully at: ${pdfPath}`);
    });
  });

  req.on('error', (error) => {
    console.error('Error generating PDF:', error);
    process.exit(1);
  });

  req.write(JSON.stringify({ format: 'pdf' }));
  req.end();
}

generatePDF().catch(console.error);
