#  WhatsApp Class Reminder Bot 

An automated WhatsApp bot that sends **class schedules and reminders** directly to users — built using Node.js and WhatsApp Web automation.

---

##  Features

*  Auto-replies to user messages (`hi`, `1`, `2`)
*  Shows today's class schedule
*  Sends automatic reminders at the correct time
*  Supports multiple users (no hardcoded phone numbers)
*  No API cost — runs using WhatsApp Web

---

##  Tech Stack

* Node.js
* whatsapp-web.js
* Puppeteer
* JSON (for schedule storage)

---

##  Project Structure

```
whatsapp-class-reminder-bot/
│
├── src/
│   ├── index.js
│   ├── bot.js
│   ├── scheduler.js
│   │
│   ├── handlers/
│   │   └── messageHandler.js
│   │
│   ├── data/
│   │   └── schedule.json
│   │
│   └── utils/
│       └── time.js
│
├── package.json
├── .gitignore
└── README.md
```

---

##  Setup Guide

### 1️ Clone the Repository

```
git clone https://github.com/your-username/whatsapp-class-reminder-bot.git
cd whatsapp-class-reminder-bot
```

---

### 2️ Install Dependencies

```
npm install
```

If Puppeteer causes issues:

```
set PUPPETEER_SKIP_DOWNLOAD=true
npm install
```

---

### 3️ Configure Schedule

Edit `src/data/schedule.json`:

```json
[
  {
    "subject": "DBMS",
    "time": "14:00"
  },
  {
    "subject": "Operating Systems",
    "time": "16:00"
  }
]
```

Use **24-hour format (HH:MM)**

---

### 4️ Run the Bot

```
npm start
```

---

### 5️ Connect WhatsApp

* Scan the QR code using WhatsApp
* Go to: **Linked Devices → Link a Device**
* Scan the QR from terminal

---

##  Usage

Send messages from WhatsApp:

| Message | Response        |
| ------- | --------------- |
| `hi`    | Welcome message |
| `1`     | Today's classes |
| `2`     | Help            |

---

##  Reminder System

* Bot checks time every minute
* Sends reminders to all users who interacted
* Example:

```
⏰ Reminder: DBMS class is starting now!
```

---

##  Security Notes

* Do NOT upload:

  * `.wwebjs_auth/` (session data)
  * `node_modules/`
* These are already included in `.gitignore`

---

##  Example

```
User: hi  
Bot: Hello 👋  
     1. Today's Classes  
     2. Help  

User: 1  
Bot: 📅 Today's Classes:
     - DBMS at 14:00
     - OS at 16:00
```

---

##  Future Improvements

*  AI chatbot integration
*  Web dashboard for schedules
*  Database support (MongoDB/MySQL)
*  Multi-device syncing

---

## 👩 Author

**Sathmi Rajapaksha**

---

##  Support

If you like this project, give it a ⭐ on GitHub!

---

##  License

This project is open-source and free to use for learning purposes.
