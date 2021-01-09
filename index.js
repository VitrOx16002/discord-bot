const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "!"

Client.on("ready" , () => {
    console.log("bot opreationnel")
}); 

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné");
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + " a été banni avec succès");
                }
                else{
                    message.reply("Impossible de bannir se membre");
                }
            }
        }
        else if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre mal ou non mentionné.");
            }
            else {
                if(mention.kick){
                    mention.kick();
                    message.channel.send(mention.displayName + " a été kick avec succés.");
                }
                else {
                    message.reply("Imposible kick ce membre.");
                }
            }
        }
        else if(message.content.startsWith(prefix + "mute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                mention.roles.add("763803054981644289");
                message.channel.send(mention.displayName + " est mute avec succès.");
            }
        }
        else if(message.content.startsWith(prefix + "unmute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                mention.roles.remove("763803054981644289");
                message.channel.send(mention.displayName + " est unmute avec succès.");
           }
        }
        else if(message.content.startsWith(prefix + "tempmute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné");
            }
            else {
                let args = message.content.split(" ");

                mention.roles.add("763803054981644289");
                setTimeout(function() {
                    mention.roles.remove("763803054981644289");
                    message.channel.send("<@" + mention.id + "> tu peux désormais parler de nouveau!");
               }, args[2] * 1000); 
            }
        }
    }
});
   
Client.on("message", message => {
    if(message.member.permissions.has("MANAGE_MESSAGES")){
        if(message.content.startsWith(prefix + "clear")){
            let args = message.content.split(" ");
            
            if(args[1] == undefined){
                message.reply("nombre de message non ou mal défini.");
            }
            else {
                let number = parseInt(args[1]);

                if(isNaN(number)){
                    message.reply("nombre de message non ou mal défini.");
                }
                else {
                    message.channel.bulkDelete(number).then(message => {
                        console.log("Supression de " + message.size + " messages réussi !");
                    }).catch(err => {
                        console.log("Erreure de clear :" + err);
                    });
                }
            }
        }
    }
});














Client.login("Nzk3MjIzMDkxNzEzMjEyNDQ3.X_jV3A.Ui4-CW6vF591xs6pwAgRJWIhVj8");
