const mongoose = require("mongoose");
const {DB_HOST,DB_USER,DB_PASSWORD,IP_SERVER,API_VERSION} = require("./constants");
const app = require("./app");


const PORT = process.env.PORT || 3977;
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`, 
    (error) => {
        if(error) throw error;

        app.listen(PORT, () => {
            console.log("##############");
            console.log("## API REST ##");
            console.log("##############");
            console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`);
        });
    }
)