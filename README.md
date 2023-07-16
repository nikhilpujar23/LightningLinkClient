# Lightning Link
## Hassle free Instant Video-Conferencing


Lghtning Link is a ReactJS+MongoDB powered website that can be used to create instant login free video conference meetings.



## Features

- Host Meetings by just entering your name and sharing the meeting ID
- Join Meetings by entering your name and an existing meeting
- Chat individually with people in the meeting.
- Group Chat facility
- If a user wants his/her name saved so that the repeated manual entry is avoided, Google OAuth 2.0 has been integrated with the project. Once Signed in, the name will automatically be filled in for future sessions.
- The code for the server is available at : [Server]
- Front-end hosted on Vercel and Backend on On-Render


Check out other stuff i've worked on at [Github]



## Tech

Venty uses a number of open source projects to work properly:

- ReactJS
- MongoDB
- NodeJS
- Express

And of course Venty itself is open source.

## Installation

Venty requires [Node.js](https://nodejs.org/)  to run.
## Edit the /server/config/keys.js
 Create a project on firebase and populate the following variables
 
```sh
module.exports = {
    google: {
        clientID: '',
        clientSecret: ''
    },
    session: {
        secretWord: ''
    },
    mongodb: {
        dbURI: ''
    }
};
```

Install the dependencies and devDependencies and start the server and client.

```sh
npm i
npm run start
```
  [Server]: <https://github.com/nikhilpujar23/LightningLinkServer>
   [GIthub]: <https://github.com/nikhilpujar23>
   [NextJS]: <https://nextjs.org/>
   [Firebase]: <https://firebase.google.com/>
   [TailwindCSS]: <https://tailwindcss.com/>
   [Vercel]: <https://vercel.com/dashboard>
   [Chakra UI]: <https://chakra-ui.com/>
   [node.js]: <http://nodejs.org>
   
   [express]: <http://expressjs.com>
 module.exports = {
    google: {
        clientID: '839635663381-8r1a5fdhla5r9opn5if1qlnr89n8t0lk.apps.googleusercontent.com',
        clientSecret: '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'
    },
    session: {
        secretWord: 'testtest'
    },
    mongodb: {
        dbURI: 'mongodb+srv://nikhilpujar:lightninglink@cluster0.e4rohul.mongodb.net/?retryWrites=true&w=majority'
    }
};
