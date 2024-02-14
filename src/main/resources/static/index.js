// Oppretter array for billettregister
const kinobillettRegister=[];

// Funksjon for valg av film
/*function VelgFilmer() {
    ut += "FilmValg : " + document.getElementById("filmer").value;
}

// Funksjon for antall billetter
function Antall() {
    document.getElementById("Antall").value;
    }
 */

// Funksjon for kjøp av billett
function kjøpAvBillett() {
    const film = document.getElementById("filmer").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    const registrert = {
        film : film,
        antall : antall,
        fornavn : fornavn,
        etternavn : etternavn,
        telefonnr : telefonnr,
        epost : epost
    };

    // Registrerer den nye infoen i arrayet
    kinobillettRegister.push(registrert);

    // Viser den nye infoen i arrayet
    visKinobillettRegister()

    // Sletter info fra input-boksene
    document.getElementById("filmer").value="";
    document.getElementById("antall").value="";
    document.getElementById("fornavn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("telefonnr").value="";
    document.getElementById("epost").value="";
}


// Skriver ut array med registrerte
function visKinobillettRegister() {
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let r of kinobillettRegister) {
        ut += "<tr>";
        ut += "<td>" + r.Film + "</td><td>" + r.Antall + "</td><td>" + r.Fornavn + "</td><td>" + r.Etternavn + "</td><td>" + r.Telefonnr + "</td><td>" + r.Epost + "</td>";
        ut += "</tr>";
    }

    document.getElementById("kinobillettRegister").innerHTML = ut;
}