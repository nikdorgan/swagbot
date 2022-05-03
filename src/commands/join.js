module.exports = {
    name: 'join',
    aliases: ['j'],
    description: "Make EuterpeBot join your current voice channel.",
    execute(message, args, cmd, bot, Discord) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send("Please join a voice channel to use this command.");

        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send("You do not have permission to use this command.");
        if (!permissions.has('SPEAK')) return message.channel.send("You do not have permission to use this command.");

        voiceChannel.join();
    }
}