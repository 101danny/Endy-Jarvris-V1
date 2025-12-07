const moment = require("moment-timezone");

module.exports = {
  config: {
    name: "duck",
    version: "1.0",
    author: "Danny Çodex",
    countDown: 5,
    role: 0,
    description: {
      en: "Get a daily duck and coins"
    },
    category: "fun"
  },

  langs: {
    en: {
      alreadyClaimed: "🦆 You’ve already met the duck today. Come back tomorrow!",
      duckMsg: "🦆 %1\nYou received 200 coins!"
    }
  },

  onStart: async function ({ message, event, usersData, getLang }) {
    const duckQuotes = [
      "Quack! I’m your lucky duck.",
      "Waddle waddle... here’s your reward!",
      "You found the golden duck!",
      "Today’s duck is proud of you.",
      "Duck says: Be kind, get coins."
    ];

    const { senderID } = event;
    const user = await usersData.get(senderID);
    const today = moment.tz("Africa/Lagos").format("DD/MM/YYYY");

    if (user.data.lastDuck === today)
      return message.reply(getLang("alreadyClaimed"));

    const randomMsg = duckQuotes[Math.floor(Math.random() * duckQuotes.length)];

    // Reward and update
    user.data.lastDuck = today;
    await usersData.set(senderID, {
money: user.money + 200,
      exp: user.exp,
      data: user.data
    });

    message.reply(getLang("duckMsg", randomMsg));
  }
};
