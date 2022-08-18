# Chi-Ji--P-
A censorship / crypto-tracker discordjs bot

Description:

Built before discord had implemented its moderation functionality.
It deletes messages with sexual / racist content, and also serves as a quick crypto-currency price-checker.

Features:

  Moderation: Messages containing racism / sex are deleted and the sender is publicly warned.

  Crypto-currencies: Search for BTC, ETH and a few more, and the bot will return its current price in USD.

  Clean up: If you got a lot of bot-messages in a channel, this bot will delete all of them when asked to.

  Scan previous infractions: The bot can be told to scan a channel for unwanted messages (would be usefull if it has been down for some time, or just got invited to the server)

 How to build a bot: If requested it will send you a video on how to build discord bots.


How it works:

The bot uses the “createMessage” eventhandler to read all new messages in a server.

Every message is read backwards and forwards, as well as taking into consideration that numbers might be used as a substitute for letters and that spacing might be used to conceal the word from the bot.

The results are then compared to a list of banned words (which I will not repeat here), if there is a match the bot will delete the message and send a warning to the sender.

If a user asks for the current price of a certain crypto-currency then the bot will do a http-request to finance.yahoo.com to extract the current value and then send that to the user.

issues:


This was the first bot I built, so using proper exception-handling was not my strong-suit at that time.

Yahoo finance is not the most reliable source of information during rapid price-movement.

Since it is only being used on my personal discord-server I have not prioritized updating it (it works well enough as is).
