const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Joins and plays audio from YouTube video',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        const permissions = voiceChannel.permissionsFor(message.client.user);

        if (!voiceChannel) return message.channel.send('You must be in a channel to use this feature');
        if (!permissions.has('CONNECT')) return message.channel.send('You do not have permission to use this feature');
        if (!permissions.has('SPEAK')) return message.channel.send('You do not have permission to use this feature');
        if (!args.length) return message.channel.send('Please use a YouTube URL');

        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

        }

        const video = await videoFinder(args.join(' '));

        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () => {
                voiceChannel.leave();
            });

            await message.reply(`Now Playing: ${video.title}`);
        } else {
            message.channel.send('Error: We had trouble finding your video :(');
        }
    }
}