import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config();

const bot = new TelegramBot(process.env.TG_TOKEN);

export const sendTgMsg = (text) =>
  bot.sendMessage(process.env.TG_CHAT_ID, text, {
    allow_sending_without_reply: true,
    reply_to_message_id: false,
    protect_content: true,
    parse_mode: "HTML",
  });
