const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Load seed data using require so Vercel includes them in the deployment package
const projects = require('../backend/data/projects.json');
const skills = require('../backend/data/skills.json');

// Paths to write data - Vercel filesystem is read-only, so write to /tmp
const contactsPath = process.env.VERCEL
  ? '/tmp/contacts.json'
  : path.join(__dirname, '..', 'backend', 'data', 'contacts.json');

// Helper to read JSON (for contacts)
const readJsonFile = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return [];
  }
};

// Helper to write JSON (for contacts)
const writeJsonFile = (filePath, data) => {
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error(`Error writing to ${filePath}:`, error);
    return false;
  }
};

// Routes
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/skills', (req, res) => {
  res.json(skills);
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  const contacts = readJsonFile(contactsPath);
  const newContact = {
    id: Date.now(),
    name,
    email,
    subject: subject || 'General Inquiry',
    message,
    createdAt: new Date().toISOString()
  };

  contacts.push(newContact);
  
  if (writeJsonFile(contactsPath, contacts)) {
    return res.status(201).json({ success: true, message: 'Message sent successfully!', data: newContact });
  } else {
    return res.status(500).json({ error: 'Failed to save contact submission.' });
  }
});

// For local standalone running of this entry point (e.g. node api/index.js)
if (require.main === module) {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
