const Discord = require('discord.js');
const bot = new Discord.Client()

const token = 'NjgxMTc3MjUxMzkxNDcxNjIx.XlKqlA.lOVvFEo7SY1_BHcXiSxHWLRYS44';

const prefix = 'r!';

var season = '1'

bot.on('ready', () =>{
    console.log('The bot is online')
})

bot.on('message', msg=>{
    if(msg.content === "Здравей"){
        msg.reply('Здрасти')
    }
})

bot.on('message', msg=>{
    if(msg.content === "r!ip"){
        msg.reply('Все още сървъра не е завършен! Скоро! ')
    }
})

bot.on('message', message=>{

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]){
        case 'status':
            message.channel.sendMessage('`Сървъра е офлайн!`')
            break;
        case 'creator':
            message.channel.sendMessage('`@ReebenBG е създателя на този бот`')
            break;
        case 'info':
            if(args[1] === 'season'){
                message.channel.sendMessage('Сезон ' + season);
            }else{
                message.channel.sendMessage('r!info season - показва кой сезон сме')
            }
        break;
    }
})

bot.login(token);