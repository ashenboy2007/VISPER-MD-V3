const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'VISPER-MD&69IGmQaa#8ul0bbG5ZRhxRs60sqrCdivZPJMxlF0kOowvcg0rEbo' : process.env.SESSION_ID, 
PORT: process.env.ＰORT === undefined ? '8000' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'ashenboy2007' : process.env.SESSION_NAME, 

};

