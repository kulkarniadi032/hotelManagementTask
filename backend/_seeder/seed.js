const env = require("dotenv");
env.config({ path: "../config/.env" });

const db = require("../config/db");

// DATA FILES
const hotels = require("./data/hotel");

// MODELS
const hotelModel = require("../model/Hotel");

const insertdata = async () => {
  try {
    db();
    await hotelModel.deleteMany();
    const data = await hotelModel.create(hotels);
    console.log("DATA INSERTED SUCCESS!!!");
    console.log(data);
    console.log("````````````````````````````````");
    console.log(hotels);
    process.exit();
  } catch (error) {
    console.log(`ERRO : ${error}`);
    process.exit();
  }
};
const deletedata = async () => {
  try {
    db();
    await hotelModel.deleteMany();
    console.log("Data Destroyed");
    process.exit();
  } catch (error) {
    console.log(`ERRO : ${error}`);
    process.exit();
  }
};

if (process.argv[2] === "-c") {
  insertdata();
} else if (process.argv[2] === "-d") {
  deletedata();
} else {
  console.log("INVALID OPRATION");
}
