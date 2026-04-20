import FormData from 'form-data'
import Mailgun from 'mailgun.js'

const EMAIL_FROM = 'noreply@bratislava.sk'
const EMAIL_TO = ['nadacia@bratislava.sk', 'martin.pinter@bratislava.sk']

if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
  console.warn('Missing mailgun api key or domain - sending emails will not work!')
}

const mailgun = new Mailgun(FormData)
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || '',
  url: 'https://api.eu.mailgun.net',
})

export type NewSubscriberEmailData = {
  name: string
  email: string
}

export const sendNewSubscriber = (email: string, name: string) => {
  console.log(
    `About to send sub email from: ${EMAIL_FROM} to: ${EMAIL_TO}, data: ${email}, ${name}`,
  )
  return mg.messages.create(process.env.MAILGUN_DOMAIN || '', {
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: `New subscriber: ${email}`,
    text: `Hi,\nyou have a new subscriber:\n\n${name}\n${email}`,
  })
}
