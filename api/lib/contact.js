async function deliverContactSubmission(contact) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  const deliveries = [];

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'contact_submission',
        ...contact,
      }),
    });
    deliveries.push({ channel: 'webhook', ok: response.ok });
  }

  if (resendKey && contactEmail) {
    const from = process.env.RESEND_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>';
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [contactEmail],
        subject: `[Portfolio] ${contact.subject}`,
        html: `
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${contact.name}</p>
          <p><strong>Email:</strong> ${contact.email}</p>
          <p><strong>Subject:</strong> ${contact.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${contact.message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });
    deliveries.push({ channel: 'email', ok: response.ok });
  }

  return deliveries;
}

function hasDeliveryConfigured() {
  return Boolean(process.env.CONTACT_WEBHOOK_URL || process.env.RESEND_API_KEY);
}

module.exports = { deliverContactSubmission, hasDeliveryConfigured };
