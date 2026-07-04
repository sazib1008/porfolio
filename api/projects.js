const { readJsonFile, setCorsHeaders, handleOptions } = require('./lib/utils');

module.exports = (req, res) => {
  if (handleOptions(req, res)) return;

  setCorsHeaders(res);

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const projects = readJsonFile('projects.json');
  return res.status(200).json(projects);
};
