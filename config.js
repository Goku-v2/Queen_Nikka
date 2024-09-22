//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Goku-v2/Queen_Nikka";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/E9gwnn6w48dKPLez1BBNt5";
global.website = process.env.GURL || "https://chat.whatsapp.com/E9gwnn6w48dKPLez1BBNt5";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/uNGxigM.mp4";
global.devs = "2349045613439";
global.sudo = process.env.SUDO || "2349045613439";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/GcAZyuC.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUZTTjB2SFRHbTIrZTVVNUkrVkRWRXBzUXFzK01IZktLcmQ2ZWRCTHBsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmJDbmpob0Q5OFNxaE96NU5UaWVpd2k1dE5vRk9XVWZBRFdlZ2tOVmhYND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRGNHKzlZZVBlMVlHSFB6VEJGdStITzY2NkpTeWsxK1ExdU5wUlNXcm5FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4WDNwcWpmeHdJLzIzUWdHWVdsQ0NsN0w2VHNrVnF4U1QvWUg1eENlRDI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJCdkcvVENIWlBsejFReWx3cm5LbEpWRWM0dXVsVDQ3dE1aQTBDeHBEazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVValhKdjNsbXZiNkNUZWRuWVZpU3Y5UW54WEp0TERnbDlwUTZIa1FGQnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEE3TloydFNlUkU3Vi9OL0hwUXI2RERHYlJYQ1c3bW9CWUIzZ3U1TllWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ09lbFF6aWdZVkJkNVhHdDFMd25mZDR6elluTVRVNUUxb0JhWGNxZlRqRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNhWFFibUlNT05VOGJsZmpkTDAwZGRHbmNEczhBeFNHbERCeU83TlU2UDlQQkJUdE9OYTFQekhvVXEyd0ZFSzQzQnBXckhKM0d1a1Z3QlhIVGhrSWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMyLCJhZHZTZWNyZXRLZXkiOiJhbWorYUtvWkdXVFVHYnQrc01yaHBTRUc1RDNJbUwrMmJHT3NKajdXaHFnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhTHVZNEVrX1JSRzNvWkRTeTdzekt3IiwicGhvbmVJZCI6ImQwMGM4NDg0LTY3ODEtNDk2Yi04ZjExLWFiNTkzOWIzYzk5MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsaitieUZGRURpdXpBQUZNM3NkN3JCTUNFOEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWhiLzlQRG5qaXU2bFhURHhsc1Y1NFpWQXMwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjEzTEw1R05GIiwibWUiOnsiaWQiOiIyMzQ5MDQ1NjEzNDM5OjY1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLS0NxL3NIRUwrZ3U3Y0dHQklnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYMlRqeEdpYmlxL1BjeU9haHNRVjdDejdlMWw2QVBrWHgxanhHWTRzdzF3PSIsImFjY291bnRTaWduYXR1cmUiOiJRQThCaFJPdm9oZjdkbmw5eXhjVDRmZ0RsaFgzd0k3K3lCa1lTRjhlcUNyRkhOSFdac1RuS0NtWEN4K0xzb0R5Y09nL3AzMlVidzFBU29YUUwzRWNEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUzFoZHBpTk55V0dDOVhYeWpBQ2VSV0JqM1ZqSG9vS0hYcHhwNjBzN1hSZDh4bzk4MzBtQTR5RTM0QjFsNE1zNkdzTzg3QVBOSjdEL1YzQkFtU3MzalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDQ1NjEzNDM5OjY1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlY5azQ4Um9tNHF2ejNNam1vYkVGZXdzKzN0WmVnRDVGOGRZOFJtT0xNTmMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY5MjY5MjR9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`✞ꪻ᥇ꪮꪗ™™`",
  author: process.env.PACK_AUTHER || "✞ꪻ᥇ꪮꪗ™",
  packname: process.env.PACK_NAME || "✞",
  botname: process.env.BOT_NAME || "✞ꪻ᥇ꪮꪗ™",
  ownername: process.env.OWNER_NAME || "✞ꪻ᥇ꪮꪗ™",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
