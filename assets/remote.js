console.log("%cSlay.one Patcher: remote.js", "font-size:20px;color:#540052;font-weight:900;font-family:sans-serif;");



// ----------- BEGIN REQUIRED FUNCTIONS  -----------

const prefix5 = "[One]"; // Patcher Prefix
const filename5 = "remote.js"; // Filename
const filecat5 = "remote file"; // File Category

function log (message) {
    return console.log(prefix5 + " *at " + filecat5 + " " + filename5 + "* " + message);
}

log("Slay.one Patcher is running: " + filename5);
log(filename + " is not a modified file from Slayone. It is loaded from Patcher, by using loader.js");

// ----------- END REQUIRED FUNCTIONS  -----------



// remote.js is a file for QUICKLY loading updatable code into Craftnite, no pull on the patcher instance required.
// this is very useful for notifying when hacks are down, pushing hotfixes, etc.



// ----------- BEGIN MAIN CODE  -----------


console.log("Hacks are currently WORKING!");


// ----------- END MAIN CODE  -----------
