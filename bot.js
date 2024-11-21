import { Bot, Keyboard } from "grammy";
import { config } from "dotenv";
config();
const bot = new Bot(process.env.TOKEN);
bot.command("start", async (ctx) => {
    const keyboards = new Keyboard().text(`Malumotlarni ulashish`).row();
    await ctx.reply(`Qay biri kerak? Tanlang ⬇️`, {
        reply_markup: keyboards,
    });
});
bot.hears(`Malumotlarni ulashish`, async (ctx) => {
    console.log(ctx.message.from.first_name);
    await ctx.reply(
        `Hello: ${ctx.message.from.first_name} @${ctx.message.from.username}`
    );
});
bot.command("time", async (ctx) => {
    const keyboards = new Keyboard()
        .text("soat")
        .row()
        .text("sana")
        .row()
        .text("yil")
        .row();
    await ctx.reply(`Qay biri kerak? Tanlang ⬇️`, {
        reply_markup: keyboards,
    });
});
bot.hears("soat", async (ctx) => {
    const t = new Date();
    await ctx.reply(
        `🕔 O'zbekistonda soat: ${t.getHours()} : ${t.getMinutes()}`
    );
});
bot.hears("sana", async (ctx) => {
    const date = new Date();
    await ctx.reply(`📅 Sana:  ${date.getDate()}.${date.getMonth()}`);
});
bot.hears("yil", async (ctx) => {
    const date = new Date();
    await ctx.reply(`📅 Yil:  ${date.getFullYear()}`);
});
bot.on("message", (ctx) => ctx.reply("Bot xabarlarni yozib olmoqda !"));
export default bot;
