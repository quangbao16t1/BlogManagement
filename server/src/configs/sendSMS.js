import  Twilio  from 'twilio';

const accountSid = `${process.env.TWILIO_ACCOUNT_SID}`;
const authToken = `${process.env.TWILIO_AUTH_TOKEN}`;
const from = `${process.env.TWILIO_ACCOUNT_PHONE_NUMBER}`

const client = new Twilio(accountSid, authToken);

const sendSMS = (to, body, txt) => {
  try {
    client.messages
      .create({
        body: `BLOG_PROJECT  ${txt}-${body}`,
        from: from,
        to: to
      })
      .then(message => console.log(message.sid));
  } catch (error) {
    console.log(error);
  }
}

export default sendSMS;

