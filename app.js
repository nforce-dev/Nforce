alert("JS Loaded");

function checkPin() {

    const pin = document.getElementById("pin").value;

    if (pin === "1234") {

        document.body.innerHTML = `
        <div style="text-align:center;color:white;padding-top:50px;">
            <h1>NFORCE</h1>

            <h2>Secret Space</h2>

            <button onclick="openGallery()">Gallery</button>
            <br><br>

            <button onclick="openBrowser()">Browser</button>
            <br><br>

            <button onclick="openNotes()">Notes</button>
            <br><br>

            <button onclick="openSettings()">Settings</button>

        </div>
        `;

    } else {

        document.getElementById("result").innerText =
        "Invalid PIN";

    }
}


function openGallery(){

    document.body.innerHTML = `
    <div style="text-align:center;color:white;padding-top:50px;">
        <h1>NFORCE Gallery</h1>
        <p>Gallery Section</p>
        <button onclick="location.reload()">Back</button>
    </div>
    `;

}


function openBrowser(){

    document.body.innerHTML = `
    <div style="text-align:center;color:white;padding-top:50px;">
        <h1>NFORCE Browser</h1>
        <p>Web Section</p>
        <button onclick="location.reload()">Back</button>
    </div>
    `;

}


function openNotes(){

    document.body.innerHTML = `
    <div style="text-align:center;color:white;padding-top:50px;">
        <h1>NFORCE Notes</h1>
        <p>Notes Section</p>
        <button onclick="location.reload()">Back</button>
    </div>
    `;

}


function openSettings(){

    document.body.innerHTML = `
    <div style="text-align:center;color:white;padding-top:50px;">
        <h1>NFORCE Settings</h1>
        <p>Settings Section</p>
        <button onclick="location.reload()">Back</button>
    </div>
    `;

}
