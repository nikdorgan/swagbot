# EuterpeBot

EuterpeBot – A Discord Bot for Playing Music in a Voice Channel


BACKGROUND

This bot accepts both a search query or a URL, and scours YouTube to find the most applicable video or playlist. It extracts the audio from the videos it finds and then plays it back in the voice channel of the user that queried it, so discord users can enjoy their favorite videos while calling their friends! This bot is written in JavaScript, and makes use of the dependencies yt-search, ytdl-core, and ytpl which finds the YouTube videos based on the query. It then uses ffmpeg and opus to extract the audio to play it back in the call.


COMMANDS

$play URL  ($p) - Play music from the given URL.

$play words  ($p) - Search for a track on YouTube.

$queue  ($q) - Display the queue of the current tracks (up to 25).

$nowplaying  ($np) - Display the currently playing track.

$skip  ($s) - Remove the currently playing track from the queue.

$voteskip  ($v) - Vote to skip the current track. Must have at least 50% of the votes.

$stop  ($st) - Stop the player and clear the queue.

$pause - Pause the player.

$resume - Resume the player.

$join  ($j) - Make EuterpeBot join your current voice channel.

$leave  ($lv) - Make EuterpeBot leave the current voice channel.

$repeat  ($rep) - Change to repeat mode.

$clear - Remove 100 messages from the text channel.

$help - Show bot commands.


CREDIT
  
This project was coded exclusively by me: https://github.com/nikdorgan


LICENCE
  
Due to YouTube’s terms of service, EuterpeBot is not public, only useful for private, non-commercial use, and because of this the code is not licensed. If you would like to use EuterpeBot, you are free to make use of my code!