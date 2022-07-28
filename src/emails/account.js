const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    
    sgMail.send({
        to: email,
        from: 'ealjkj@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app ${name}. Let me know how you get along with the app.`
    });
}

const cancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ealjkj@gmail.com',
        subject: 'Good bye. Hope to see you soon',
        text: `Good bye ${name}. We are sorry for you having to leave us. Could you tell us what we could have done to make you stay?`
    })
}

module.exports = {
    sendWelcomeEmail, 
    cancelationEmail
}