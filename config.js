const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "234029284352";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348183139975";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_35_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3LFxuICAgICAgICA3NixcbiAgICAgICAgMTQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNixcbiAgICAgICAgNDksXG4gICAgICAgIDYzLFxuICAgICAgICAyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NixcbiAgICAgICAgMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU1LFxuICAgICAgICA4NSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjksXG4gICAgICAgIDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzksXG4gICAgICAgIDM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc4LFxuICAgICAgICAzNyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDczLFxuICAgICAgICA5NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNixcbiAgICAgICAgMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI4LFxuICAgICAgICA2LFxuICAgICAgICAxNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiTFNkUmVoNk9jaVZ5OXBHN3diZ3pPdnh6LzVEbHpoTElLeTBtbGt5MmRzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvUG1OeXphV1RGNlFxcEIwSGhnY2hnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk0NGFkNWY4LTFkMTItNDFlMy1iYmZmLTliZTZhZWFlMWI0NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTUsXG4gICAgICAxNDYsXG4gICAgICA3MCxcbiAgICAgIDI0MyxcbiAgICAgIDIyLFxuICAgICAgNjUsXG4gICAgICA5OSxcbiAgICAgIDgxLFxuICAgICAgMjIwLFxuICAgICAgMTYsXG4gICAgICAzMyxcbiAgICAgIDg0LFxuICAgICAgMTg0LFxuICAgICAgMjA4LFxuICAgICAgODksXG4gICAgICAzNixcbiAgICAgIDEzNCxcbiAgICAgIDEyMCxcbiAgICAgIDIzMixcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAzNSxcbiAgICAgIDExMCxcbiAgICAgIDEwMSxcbiAgICAgIDE2MyxcbiAgICAgIDIxLFxuICAgICAgMTE4LFxuICAgICAgMTI2LFxuICAgICAgOTYsXG4gICAgICA0NyxcbiAgICAgIDIxMixcbiAgICAgIDYwLFxuICAgICAgMTA5LFxuICAgICAgMTAzLFxuICAgICAgMTU1LFxuICAgICAgMjM4LFxuICAgICAgMjQyLFxuICAgICAgODgsXG4gICAgICAyMDcsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRUxCTFNRUlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxODMxMzk5NzU6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNTY5MzY1MTUyOTgzNDo1MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJdlgrZEFERUxTK2hMVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZadnYyZitTL2djYmZxckdmUkJYdlF5MVF4MURHcnhTeGJVaVNveTNUWGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY3lRVWI2MldWYzFva0FCU0NjUmZ1Nm0vQUY5cGhGS1ZsSjFRM056RitldGZaRUZMWlUwbEdraVoySXRqS29yUFpHZkVFZDRCK0NpNlpmMHlwWEdFQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOVJoOEFBMnJGWlA0Z2ZnQ3N5cDZJNGR5MU1BUWZVWXNjeHNub1J6UXZOdEdlUEwxcTZSK2dkdWhTa2k5dXFHTC9vMkZ4T2lkcHZEZENZR0pqUW0vanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE4MzEzOTk3NTo1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4MzUzMjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBRW9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFFby5qc29uIjogIntcImtleURhdGFcIjpcIkZZR3VvcXcyVnU0c1NGZ2xkVXlidXkyOW5TVHVzWTJEZzZ1Y2c5aFl3clk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTc1MDcyMTM5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE4MjgzODI1MDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "&",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Kalukukuzi",
  packname: process.env.PACK_NAME || "Kalu",
  botname : process.env.BOT_NAME  || "KaluBot",
  ownername:process.env.OWNER_NAME|| "Kalu",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
