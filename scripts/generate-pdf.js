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
    path: '/api/documents/resume/render?format=pdf',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  };

  const pdfPath = path.join(__dirname, '..', 'Resume.pdf');
  const file = fs.createWriteStream(pdfPath);

  const req = https.request(options, (res) => {
    console.log(`Status: ${res.statusCode}`);
    
    if (res.statusCode !== 200) {
      let errorData = '';
      res.on('data', (chunk) => {
        errorData += chunk;
      });
      res.on('end', () => {
        console.error('API Error:', errorData);
        process.exit(1);
      });
      return;
    }
    
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

  req.end();
}

generatePDF().catch(console.error);
