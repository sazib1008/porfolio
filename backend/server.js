const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Paths to files
const projectsPath = path.join(__dirname, 'data', 'projects.json');
const skillsPath = path.join(__dirname, 'data', 'skills.json');
const contactsDir = path.join(__dirname, 'data');
const contactsPath = path.join(contactsDir, 'contacts.json');

// Helper to read JSON
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

// Helper to write JSON
const writeJsonFile = (filePath, data) => {
  try {
    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
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
  const projects = readJsonFile(projectsPath);
  res.json(projects);
});

app.get('/api/skills', (req, res) => {
  const skills = readJsonFile(skillsPath);
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

// Start Server
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
