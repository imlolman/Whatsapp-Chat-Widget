# WhatsApp Chat widget for websites

Demo: https://imlolman.github.io/Whatsapp-Chat-Widget/


https://user-images.githubusercontent.com/11874560/222985797-3aeca0e5-c162-4346-967a-ed35be3cdf66.mp4


## Instructions

* Download <a href="https://raw.githubusercontent.com/imlolman/whatsapp-bottom-button/main/dist/WhatsappChatBox.min.js">WhatsappChatBox.min.js</a> from here.<br>
* Add the file to your header
```<script src="WhatsappChatBox.min.js"></script>```

* Initiate with the configuration
Configure with your settings
```javascript
  new WAChatBox({
    link: "https://wa.me/919999999999",
    user: {
      name: "Alice",
      avatar: "https://randomuser.me/api/portraits/women/66.jpg",
      status: "Typically replies within an hour",
    },
    text: `Hey There 👋<br><br>I'm here to help, so let me know what's up and I'll be happy to find a solution 🤓`,
    button_text: "Need Help?",
  });
 ```
