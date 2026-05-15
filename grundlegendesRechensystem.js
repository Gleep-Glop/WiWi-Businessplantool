console.log("SCRIPT GELADEN");

document.getElementById("enter").addEventListener("click", () => {
    
    const währung = document.getElementById("Währung").value;
    
    const rawInput = document.getElementById("input").value;

    const number = formatNumber(rawInput);

    const rounded = roundNumbers(number);
    
    const userNumber = userReadableNumber(rounded)

    document.getElementById("output").value = rounded;
    document.getElementById("outputUser").value = userNumber+währung;
});


function formatNumber(input) {
    if (input == null) return null;

    input = String(input);

    input = input
        .replace("€", "")
        .replace("$", "")
        .replace("¥", "")
        .replace(",", ".");

    if (isNaN(input)) return null;

    return Number(input);
}

function roundNumbers(number) {
    if (number == null) return "Kein Zahlenwert";

    let roundedNumber = Math.round((number + Number.EPSILON) * 100) / 100;
    return roundedNumber.toFixed(2)
}
function userReadableNumber(number){
    let userNumber = number.toString();
    userNumber = userNumber.replace(".",",");
    return userNumber;
}