// TODO get domain and set based on that
const EMAIL_FROM = 'noreply@bratislava.sk'
const EMAIL_TO = ['nadacia@bratislava.sk', 'martin.pinter@bratislava.sk']

// EU region of Mailgun's HTTP API: https://documentation.mailgun.com/docs/mailgun/api-reference/
const MAILGUN_API = 'https://api.eu.mailgun.net/v3'

if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
  console.warn('Missing mailgun api key or domain - sending emails will not work!')
}

export interface NewSubscriberEmailData {
  name: string
  email: string
}

export const sendNewSubscriber = async (email: string, name: string) => {
  console.log(
    `About to send sub email from: ${EMAIL_FROM} to: ${EMAIL_TO.join(',')}, data: ${email}, ${name}`,
  )
  const body = new URLSearchParams({
    from: EMAIL_FROM,
    subject: `New subscriber: ${email}`,
    text: `Hi,\nyou have a new subscriber:\n\n${name}\n${email}`,
  })
  EMAIL_TO.forEach((to) => body.append('to', to))

  const mailgunCredentials = `api:${process.env.MAILGUN_API_KEY ?? ''}`
  const response = await fetch(`${MAILGUN_API}/${process.env.MAILGUN_DOMAIN ?? ''}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(mailgunCredentials).toString('base64')}`,
    },
    body,
  })
  if (!response.ok) {
    throw new Error(`Mailgun responded ${response.status}: ${await response.text()}`)
  }

  return response.json()
}
