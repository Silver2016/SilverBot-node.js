const Discord = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTE5OTk2MTEzMTg5NzMyNDAy.DzNI6g.Gs7nMzM-VUBZq-Lt3Wx1t_uSPMo'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('team', 'Team');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.currentTeamMembres = [];
global.servers = {};

bot.on('message', function(message){
    if(message.content == 'SilverBot')
    {
        message.channel.sendMessage( 'Dorm , ' + message.author + ' ce vrei frate? ');
    } 
});

bot.on('message', function(message){
    if(message.content == 'SilverBot info matei')
    {
        message.reply('De la silver la global. O muie iti va da... Nush :|');
    } 
});

bot.on('message', function(message){
    if(message.content == 'SilverBot info nicolas')
    {
        message.reply('Gainusa cea isteata. Fute rata cu o banana...');
    } 
});

bot.on('message', function(message){
    if(message.content == 'SilverBot info qaz')
    {
        message.reply('ai 100 lei si vrei sa ai skinuri pe fortnite? Atunci suna-ti cu incredere la QazSrl... ;)');
    } 
});

bot.on('message', function(message){
    if(message.content == 'SilverBot info past')
    {
        message.reply('PastTundra nu face prea multe....Cum te prinde , cum te fute....');
    } 
});

bot.on('message', function(message){
    if(message.content == 'SilverBot info georgica')
    {
        message.reply('asta e prost! ATAT!');
    } 
});

bot.on('message', function(message){
    if(message.content == 'SilverBot patrik')
    {
        message.reply('as vrea sa il intreb , pe Patrik ce mai face SpongeBob... :)');
    } 
});

bot.on('message', function(message){
    if(message.content == 'SilverBot ajutor')
    {
        message.reply('```1. SilverBot  2. SilverBot canal  3. SilverBot info silver  4. SilverBot info costy  5. SilverBot info matei  6. SilverBot info nicolas  7. SilverBot info qaz  8. SilverBot info past  9. SilverBot info georgica  10. SilverBot patrik```');
    } 
});

bot.on('message', function(message){
    if(message.content == 'SilverBot canal')
    {
        message.reply('https://www.youtube.com/channel/UCgaKWYpUxVtbx26FmyBPFvw?view_as=subscriber');
    } 
});

bot.on('message', function(message){
    if(message.content == 'SilverBot info silver')
    {
        message.reply('Este un baiat din Bucuresti , de 14 ani caruia ii plac jocurile video si scriptatul chiar daca e la inceput.');
    } 
});

bot.on('message', function(message){
    if(message.content == 'SilverBot info costy')
    {
        message.reply('Este un drogat care nu mai merge la scolala din cauza fallout 4 , de 16 ani care nu am mai mancat de 3 zile. Vrei sa ii donezi bani? Ar cam avea nevoie. :joy: ');
    } 
});

bot.on('message', function(message){
    if(message.content == 'SilverBot info troller')
    {
        message.reply('Ai nevoie de un clown? Vrei sa se prefaca ca e smeker? Atunci poti sa mergi aici! https://www.youtube.com/channel/UCLQerRmbpkJ88_rq-aCtb1Q ;)');
    } 
});


bot.on('ready',function(){
    console.log("Gata");
});

bot.login(TOKEN);
