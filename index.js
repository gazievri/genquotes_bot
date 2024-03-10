import 'dotenv/config'
import { Bot, GrammyError, HttpError } from 'grammy';
import { getRandomQuote } from './quotes.js';

const bot = new Bot(process.env.BOT_API_KEY);

// Добавление команд в меню бота
bot.api.setMyCommands([
    {
        command: "quote",
        description: "Прислать цитату",
    },
    {
        command: "id",
        description: "Узнать мой id",
    }
])

// Обработчики команд
bot.command('quote', async (ctx) => {
    const {quote, author} = getRandomQuote()
    await ctx.reply(`"${quote}" ©${author}`);
})

bot.command('id', async (ctx) => {
    await ctx.reply(`${ctx.from.first_name}, вот твой id: ${ctx.from.id}`);
})

// Слушатель сообщений
bot.hears(/Цитата/, async (ctx) => {
    const {quote, author} = getRandomQuote()
    await ctx.reply(`${ctx.from.first_name}, а вот кстати и цитата:\n"${quote}" ©${author}`, {
        reply_parameters: {message_id: ctx.msg.message_id},
        parse_mode: 'HTML'
    })
})

// Обработчик ошибок
bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;
    if (e instanceof GrammyError) {
      console.error("Error in request:", e.description);
    } else if (e instanceof HttpError) {
      console.error("Could not contact Telegram:", e);
    } else {
      console.error("Unknown error:", e);
    }
  });

bot.start();