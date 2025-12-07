const axios = require("axios");

module.exports = {
  config: {
    name: "cat",
    version: "1.0",
    author: "Danny Çodex",
    countDown: 5,
    role: 0,
    shortDescription: "Get a random cat pic",
    longDescription: "Sends a random picture of a cat",
    category: "fun",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
    try {
      const res = await axios.get("https://api.thecatapi.com/v1/images/search");
      const imageUrl = res.data[0].url;
      const stream = await global.utils.getStreamFromURL(imageUrl);
      return message.reply({
        body: "Here’s a random cat 🐱",
        attachment: stream
      });
    } catch (err) {
      console.log("CAT API ERROR:", err.message);
      return message.reply("Couldn't fetch a cat right now 😿");
    }
  }
};
