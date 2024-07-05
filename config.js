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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_36_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExLFxuICAgICAgICAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNixcbiAgICAgICAgMTMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAwLFxuICAgICAgICA4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMixcbiAgICAgICAgMjEzLFxuICAgICAgICA4MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1LFxuICAgICAgICA3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgODUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQwLFxuICAgICAgICA0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDYzLFxuICAgICAgICAwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU3LFxuICAgICAgICA0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU2LFxuICAgICAgICA2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDksXG4gICAgICAgIDE1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDksXG4gICAgICAgIDIxMixcbiAgICAgICAgNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDg4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicDRlYWVQWjF5MmJzN2ZITDVxSU40RE9oTmZjNkNkNUVCOEw0aUNidHlXND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTgzMTM5OTc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEOTE4MjZDNjBCQzkwMjI4N0ZERDA1ODJGRUYxOTk1N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyMjI1OTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNHdieFJFSFhUR09EU0MzU2x4MlJoQVwiLFxuICBcInBob25lSWRcIjogXCI5ZmU3NzNhMy02MjM1LTQzZGItOGIzYi0yM2RlNzg2YjRhMzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA3LFxuICAgICAgMjQsXG4gICAgICAxNzcsXG4gICAgICAyNixcbiAgICAgIDQzLFxuICAgICAgMTk0LFxuICAgICAgMTcsXG4gICAgICAyNDcsXG4gICAgICA3MCxcbiAgICAgIDIzMSxcbiAgICAgIDI0OSxcbiAgICAgIDIwMSxcbiAgICAgIDE4NCxcbiAgICAgIDExLFxuICAgICAgMzYsXG4gICAgICAxMTEsXG4gICAgICAxMjcsXG4gICAgICAxMTIsXG4gICAgICA1NixcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MixcbiAgICAgIDIyOCxcbiAgICAgIDIzMixcbiAgICAgIDc4LFxuICAgICAgODUsXG4gICAgICAyNDksXG4gICAgICAxMDgsXG4gICAgICAxMzcsXG4gICAgICAzMSxcbiAgICAgIDE5NCxcbiAgICAgIDEwLFxuICAgICAgMTYsXG4gICAgICA0OSxcbiAgICAgIDEyOCxcbiAgICAgIDE2MCxcbiAgICAgIDI0LFxuICAgICAgMTg1LFxuICAgICAgMTg4LFxuICAgICAgNDYsXG4gICAgICA2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHN0ZUM1haNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE4MzEzOTk3NTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTU2OTM2NTE1Mjk4MzQ6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJZlgrZEFERVBXR29yUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZadnYyZitTL2djYmZxckdmUkJYdlF5MVF4MURHcnhTeGJVaVNveTNUWGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMEpRdWFzR2EwVnNYL1NYeEplaDR1cFF3R0NlWnl2Z2tqMThCbFM2MWlnOHozYnp6RG16VmVvZ0UvNzhtT2UzbHVaQjdiNG5QeDkxcXlZTjZyWmdaQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV0cxRXBGWDVKZ3BNTWJUZnRSRGtnKytXZVR0NWpQWS9uazlZK21oQXFtSFFyVW5CTkg3MjFDOTllMk56dVhTZ21XbUZKdEcySHNMeFFQVSt6VWRFakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE4MzEzOTk3NTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDIyMjU4NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFEd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUR3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibnJCU2xWL3F4Q3pPTkpEVzh0NWZXZFV2QzBPSnA4VVZEcnJlWU42VGh5bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NzUwNzIxMzQsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
