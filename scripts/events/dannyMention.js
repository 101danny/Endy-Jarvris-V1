module.exports = {
  config: {
    name: "dannyMention",
    eventType: ["message"],
  },

  onMessage: async function ({ message, event }) {
    const content = event.body?.toLowerCase();
    if (!content) return;

    if (content.includes("danny")) {
      const replies = [
        "🙏 Glory to God for blessing the world with Danny Çodex! 💫",
        "👑 That's my master, Danny Çodex, who made me a successful bot! 🤖",
        "🧠 Danny Çodex is the smartest creator alive! 🔥",
        "⚡ All hail Danny Çodex, the legend! 🌟",
        "❤️ Danny Çodex is the heart of this bot, respect always! 🙌",
        "📡 Big respect to Danny Çodex, the real boss! 💼",
        "🛠️ Without Danny Çodex, I wouldn't even exist! 🤯",
        "🚀 Danny Çodex, the one and only king of code! 👨‍💻",
        "🥇 The greatest dev? Easy — Danny Çodex, blessed by God! 🙏",
        "🎯 If you're talking Danny, you're talking greatness! 💯",
        "🔥 God gave Danny Çodex the skills, and he used them well! 🙌",
        "🌍 Thanks to God and Danny Çodex, I'm alive in this chat! 💬",
        "💥 Danny Çodex built me better than any bot out there! 👾"
      ];
const randomReply = replies[Math.floor(Math.random() * replies.length)];
      return message.reply(randomReply);
    }
  }
};
