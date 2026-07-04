const { setCorsHeaders, handleOptions } = require('./lib/utils');
const { deliverContactSubmission, hasDeliveryConfigured } = require('./lib/contact');

module.exports = async (req, res) => {
  if (handleOptions(req, res)) return;

  setCorsHeaders(res);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Name, email, and message are required fields.',
    });
  }

  const newContact = {
    id: Date.now(),
    name,
    email,
    subject: subject || 'General Inquiry',
    message,
    createdAt: new Date().toISOString(),
  };

  try {
    if (hasDeliveryConfigured()) {
      const deliveries = await deliverContactSubmission(newContact);
      const failed = deliveries.filter((d) => !d.ok);

      if (failed.length === deliveries.length && deliveries.length > 0) {
        return res.status(500).json({ error: 'Failed to deliver contact submission.' });
      }
    } else {
      console.log('Contact submission received (no delivery configured):', newContact);
    }

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      data: newContact,
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({ error: 'Failed to process contact submission.' });
  }
};
