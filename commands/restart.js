module.exports = {
    name: 'restart',
    description: "Restarts bot iin the event of a crash",
    execute(message, args, cmd, bot, Discord) {
        message.channel.send('Restarting...')
            .then(() => bot.destroy()) 
    }
}