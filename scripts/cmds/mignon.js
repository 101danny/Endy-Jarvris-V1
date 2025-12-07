const axios = require("axios");

module.exports = {
  config: {
    name: "mignon",
    version: "1.0",
    author: "Danny Çodex",
    countDown: 5,
    role: 0,
    shortDescription: "Send a cute animal picture",
    longDescription: "",
    category: "fun",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
    try {
      const res = await axios.get("https://api.thecatapi.com/v1/images/search");
      const img = res.data[0].url;

      message.send({
        body: "Here’s something mignon for you! 🐾",
        attachment: await global.utils.getStreamFromURL(img)
      });
    } catch (err) {
      message.reply("Couldn't fetch image right now. Try again later.");
    }
  }
};
