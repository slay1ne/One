


function loaderMain () {

console.log("%cSlay.one Patcher: loader.js", "font-size:20px;color:#540052;font-weight:900;font-family:sans-serif;");



    // ----------- BEGIN REQUIRED FUNCTIONS  -----------

    const prefix3 = "[One]"; // Patcher Prefix
    const filename3 = "loader.js"; // Filename
    const filecat3 = "added file"; // File Category

    function log_l (message) {
        return console.log(prefix3 + " *at " + filecat3 + " " + filename3 + "* " + message);
    }

    log_l("Slay.one is running: " + filename3);
    log_l("loader.js is not a modified file from Slayone. It is loaded from Patcher.");

    // ----------- END REQUIRED FUNCTIONS  -----------





    // ----------- BEGIN HACK STATUS  -----------

    fetch(`https://raw.githubusercontent.com/slay1ne/One/master/status.json?updated=${Date.now()}`).then(response => response.json()).then(async data => {
                if (data.offline == true) {
                    eval(await (await fetch("https://unpkg.com/sweetalert2")).text())
                    if (swal) {
                        swal.fire({
                            title: "Oh no!",
                            html: `Our hacks are currently having some issues, and we're working on it.`,
                            icon: "error"
                        })
                    } else {
                        const res = confirm(`Uh Oh! Hacks look to be down. Hit OK to go to our discord to get updates on when they'll go back up!`);

                        if (res) location = "https://disboard.org/server/893975758677086238";
                    }
                } else {

                    eval(await (await fetch("https://unpkg.com/sweetalert2")).text())
                        if (swal) {
                            swal.fire({
                                title: "Hacks are ready.",
                                html: `Successfully loaded the Slayone hacks!`,
                                icon: "success"
                            })
                        } else {
                            alert("Successfully loaded the Slayone hacks!");
                        }

                }

    // ----------- END HACK STATUS  -----------




    // ----------- BEGIN MAIN CODE  -----------


    (async () => { // Asynchronous function won't hold up the program.
        // Load the remote code. This'll be used for hack status, hotfixes, etc.
        eval(await (await fetch(`https://raw.githubusercontent.com/slay1ne/One/master/assets/remote.js?updated=${Date.now()}`)).text());
         // ?updated parameter is so browser ignores cached version
    })()



    // ----------- END MAIN CODE  -----------



}


// export { loaderMain };