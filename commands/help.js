module.exports = {
    name: 'help',
    description: 'Gives info on bot commands',
    execute(message, args, cmd, bot, Discord) {
        message.channel.send('PREFIX: $');
        message.channel.send('COMMANDS: ');
        message.channel.send('clear - Clears messages in the channel and turns off server tracker');
        message.channel.send('help - Lists bot commands');
    }
}