# Sponge - Educational IP Logger

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)
[![Version](https://img.shields.io/badge/Version-1.0-blue.svg)](https://github.com/Spongeward/Sponge)






### Description

Sponge is an open-source IP logger designed specifically for educational purposes. Upon a user's entry to your website, Sponge captures their IP address and sends it as an embed through a webhook. This tool serves as an educational resource, allowing users to explore and understand IP logging concepts in a controlled environment. Please note that Sponge is intended solely for educational use and should be used responsibly and in compliance with applicable laws and regulations.

<details>
<summary><strong>Table of Contents</strong></summary>
 
- [Features](#features)
- [Usage](#usage)
- [Developers Section](#developer)
- [License](#license)

</details>


## Features

Sponge offers three key features that make it valuable:

1. IP Logging and Discord Integration: Sponge logs user IP addresses and can send them to a Discord channel using Webhook.

2. Open Source and Community-Driven: As an open-source project, Sponge encourages collaboration and allows the community to contribute, improving the tool based on needs.

3. Flexibility and Customization: Sponge offers flexibility for users to customize the code, and Upgrade the user interface to meet their specific requirements.




## Usage

## Tutorial: Adding JavaScript code and Webhook Integration
In this tutorial, we will walk through the process of adding an Internal JavaScript IP-Logger code to your HTML file and integrating a webhook to log the IPs. We will use a JavaScript code called [Sponge.js](Project/Sponge.js) from the GitHub repository. Follow the steps below to incorporate it into your "index.html" file and set up the webhook integration.

### Step 1: Open `index.html`
Open your `index.html` file, which represents the main page of your website, in a text editor or integrated development environment (IDE) of your choice.

### Step 2: Locate the `<head>` Tag
In your `index.html` file, find the `<head>` tag. It typically appears near the top of the HTML file, right after the opening `<html>` tag. The `<head>` tag is used to define meta-information about your web page.

### Step 3: Add the [Sponge.js](Project/Sponge.js) Script
Inside the `<head>` tag, add a new line to insert the script tag for the [Sponge.js](Project/Sponge.js) code. The script tag is used to link an internal JavaScript code to your HTML file. Enter the following code:
```html
<script>
 Here you enter the Sponge.js code.
</script>
```

### Step 4: Create a Webhook
1. Click on "Channel Settings" in your desired platform or application.
2. Go to "Integrations" and select "Create a New Webhook".
3. Rename the webhook and update the profile picture if desired.
4. Copy the generated URL for the webhook.

### Final Step: Update the Webhook URL
1. Navigate back to the [Sponge.js](Project/Sponge.js) code that you entered in the `<head>` tag as a script.
2. Locate the part of the code that references the webhook URL.
3. Replace the existing URL with the URL you copied in Step 4.
4. Save the changes and let's Test if it works!



## Developers Section

### Whitelist IPs

Description: With the Whitelist IPs feature, you can block specific IP addresses from being logged or shown in Sponge.js. This provides an additional layer of control over the IP logs, allowing you to exclude certain IPs, such as your own, from being displayed.

## One Person
```javascript
function getDescription(ip) {
  // Check if the input IP address is equal to the value of the IP address you entered below
  if (ip === 'ENTER YOUR IP ADDRESS HERE') {
    // If the input IP matches the predefined secure IP, return "Secured IP"
    return "Secured IP";
  } else {
    // If the IP does not match any of the predefined secure IP addresses, return it as Diffrent user.
    return ip;
  }
}

```

## Multiple People
```javascript
function getDescription(ip) {
  // Check if the input IP address is equal to the value of your IP address
  if (ip === 'YOUR IP ADDRESS') {
    // If the input IP matches your IP address, return "Secured IP"
    return "Secured IP";
  } else if (ip === 'FRIENDS IP ADDRESS') {
    // Check if the input IP address is equal to the value of your friend's IP address
    // If the input IP matches your friend's IP address, return "Secured IP"
    return "Secured IP";
  } else if (ip === 'FRIENDS IP ADDRESS') {
    // Check if the input IP address is equal to the value of your friend's IP address
    // If the input IP matches your friend's IP address, return "Secured IP"
    return "Secured IP";
  } else {
    // If the IP does not match any of the predefined secure IP addresses, return it as Diffrent user.
    return ip;
  }
}

```


### Decorate embed
The Embed Scripts let you effortlessly customize and modify embeds for the Logs. With these scrips, you can easily edit the appearance and content of embeds without the need for a step-by-step tutorial. However, it is recommended to have some coding experience to make the most of this tool.

## Fields
![Image Description](path/to/your/image.png)
With the versatile function of fields, you can effortlessly create two or three captivating titles accompanied by their respective descriptions placed side by side!
Heres an Example:
```Javascript
fields: [
        {
          name: 'IP Address',
          value: `**${getDescription(ip)}**`,
          inline: true
        },
        {
          name: 'Idk',
          value: 'Test',
          inline: true
        },
        {
          name: 'USAGE',
          value: '*Educational purposes!*',
          inline: false
        }
      ]
```


## License
This project is licensed under the [MIT License](LICENSE.md).
