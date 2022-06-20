let mongoose = require('mongoose');

const MONGO_DB_CONNECT = 'mongodb+srv://nicholasdbrooks:U7w48Bd8fJJ8aiA8@nbalosersbelt.5vbhe.mongodb.net/beltdb?retryWrites=true&w=majority';

mongoose.connect(MONGO_DB_CONNECT,
    { useNewUrlParser: true }
)

const db = mongoose.connection;

db.once("open", () => {
    console.log("db connected");
})

const loserSchema = mongoose.Schema({
    loser: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    next: { type: String, required: true}
});

const Loser = mongoose.model("2021-2022", loserSchema);

let beltpath = `[
  
]`


let loser = JSON.parse(beltpath);

for(let i = 0; i < 39; i++) {
    addtodb(loser[i]);
}

async function addtodb({ loser, start_date, end_date, next }) {
    const team = await new Loser({loser: loser, start: start_date, end: end_date, next: next});
    return team.save();
};