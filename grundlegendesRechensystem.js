console.log("SCRIPT GELADEN");

document.getElementById("enter").addEventListener("click", () => {
    const rawInput = document.getElementById("input").value;

    const number = formatNumber(rawInput);

    const rounded = roundNumbers(number);

    document.getElementById("output").value = rounded;
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

    return Math.round((number + Number.EPSILON) * 100) / 100;
}