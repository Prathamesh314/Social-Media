# Social-Media
This is a Social media platform made with MERN Stack

## Requrements before running project

- You need to create an account on **Mongodb Atlas** (if you have an account then ignore)
- create a database in atlas and copy connection url for mongodb
- now to come project and create `.env` file and copy your monogodb connection url in it with name **MONGODB_URL**
- next add another attribute named **PORT=3001** in `.env` file
- add last attribute **JWT_SECRET=XXXXXXXXX** , you can keep any secret as your wish

# How to Setup

- Clone this repository on your local device
- open a new terminal in project directory and `cd server`
- run script `node index.js`
- then open a new terminal again, and don't close the previous one
- run `cd client`
- run script `npm run start`
- Open `localhost:3001` on your device
