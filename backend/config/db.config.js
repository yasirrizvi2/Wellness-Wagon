// File: config/db.js or config/db.config.js
class DatabaseConnection {

  constructor() {
    this.mongoose = require('mongoose');
    this.config = require('dotenv').config();
  } 
  
  async connect() {
    try {
      const conn = await this.mongoose.connect(process.env.MONGODB_URI, {
        dbName: "Wellness-Wagon",
      });
      console.log(`✅ MongoDB Connected: ${conn.connection.host} ${conn.connection.name}`);
    } catch (err) {
      console.error("❌ Connection failed:", err.message);
      process.exit(1);
    }
  }   

  async disconnect() {      
    try {
      await this.mongoose.connection.close();
      console.log("✅ MongoDB Disconnected");
    } catch (err) {
      console.error("❌ Disconnection failed:", err.message);
    }
  } 
}

const db = new DatabaseConnection();

module.exports = db;