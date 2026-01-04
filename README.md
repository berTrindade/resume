# Bernardo Trindade de Abreu - Resume

This is a version-controlled resume built with [htmldocs](https://htmldocs.com) - a modern tool for creating PDF documents using React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Development

Start the development server with live preview:

```bash
npm run dev
```

This will open a browser window at `http://localhost:3010` where you can see your resume in real-time.

### Build PDF

To export your resume as a PDF:

1. Open the development server (`npm run dev`)
2. Navigate to your resume in the browser
3. Use the built-in export functionality or print to PDF

## 📝 Customizing Your Resume

Edit the `documents/Resume.tsx` file to update your information:

1. Open your PDF CV: `Bernardo Trindade de Abreu - CV (1).pdf`
2. Open `documents/Resume.tsx` in your code editor
3. Find the `Resume.PreviewProps` object at the bottom of the file
4. Replace all "TODO:" sections with content from your PDF:
   - **Personal Information**: Name and contact details
   - **Summary**: Copy your professional summary
   - **Experience**: Add all your work experience entries
   - **Projects**: Add your projects (or remove this section if not applicable)
   - **Education**: Add your education history
   - **Skills**: List all your skills by category
   - **Certifications**: Add certifications (or remove if not applicable)

## 🔄 Version Control

This project uses Git for version control. Each update to your resume should be committed with a meaningful message.

### Initial Setup

```bash
git init
git add .
git commit -m "Initial commit - Resume v1.0"
```

### Versioning Best Practices

Create semantic versions for major resume updates:

```bash
# For minor updates (typo fixes, small changes)
git add .
git commit -m "v1.0.1 - Fix typo in job title"
git tag v1.0.1

# For new content (added project, new job)
git add .
git commit -m "v1.1.0 - Add new project: XYZ"
git tag v1.1.0

# For major overhauls (complete rewrite, new design)
git add .
git commit -m "v2.0.0 - Complete resume redesign"
git tag v2.0.0
```

### Viewing Version History

```bash
# See all commits
git log --oneline

# See all tagged versions
git tag

# Checkout a specific version
git checkout v1.0.0

# Return to latest version
git checkout main
```

## 📁 PrResume.tsx           # Your resume (EDIT THIS FILE)
```
resume/
├── documents/
│   ├── templates/
│   │   └── Resume.tsx       # Your resume template
│   └── static/              # Static assets (images, etc.)
├── index.css                # Global styles
├── tailwind.config.js       # Tailwind CSS configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🎨 Customizing the Design

The resume uses Tailwind CSS for styling. You can modify:

- **Colors**: Edit the className properties in `Resume.tsx`
- **Fonts**: Update the font family in the `<Head>` component or `index.css`
- **Layout**: Adjust spacing, margins, and the overall structure in the JSX
- **Size**: Change the `size` prop in the `<Document>` component (e.g., "letter", "A4")

## 📤 Exporting to PDF

### Method 1: Browser Print
1. Run `npm run dev`
2. Open the resume in your browser
3. Use Ctrl/Cmd + P to print
4. Select "Save as PDF"

### Method 2: CLI Export (if available)
```bash
npx htmldocs@latest build
```

## 🔗 Useful Links

- [htmldocs Documentation](https://docs.htmldocs.com)
- [htmldocs Components](https://docs.htmldocs.com/components/document)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📋 Changelog

### v1.0.0 (2026-01-04)
- Initial resume setup with htmldocs
- Basic structure with experience, education, projects, and skills sections
- Version control initialized

## 💡 Tips

1. **Keep it concise**: Aim for 1-2 pages maximum
2. **Use action verbs**: Start bullet points with strong action words
3. **Quantify achievements**: Include numbers and metrics where possible
4. **Tailor for each role**: Customize your resume for different job applications by creating branches
5. **Regular updates**: Commit changes after each significant career update
6. **Backup**: Push to GitHub or another remote repository for backup

## 🤝 Contributing

This is a personal resume, but feel free to fork and adapt for your own use!

## 📄 License

This template is open source and available for personal use.
