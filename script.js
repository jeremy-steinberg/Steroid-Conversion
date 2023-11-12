const steroids = {
    "Betamethasone": 0.75,
    "Dexamethasone": 0.75,
    "Hydrocortisone": 20,
    "MethylPrednisoLONE": 4,
    "Triamcinolone": 4
};



function convertSteroids(fromSteroid, toSteroid, amount) {
    if (steroids[fromSteroid] && steroids[toSteroid]) {
        return (amount * (steroids[toSteroid]) / steroids[fromSteroid]).toFixed(1) + " mg";
    } else {
        return "Invalid steroid name";
    }
}



function calculate() {
    const amount = document.getElementById('amount').value;
    const fromSteroid = document.getElementById('fromSteroid').value;
    const toSteroid = document.getElementById('toSteroid').value;
    const result = convertSteroids(fromSteroid, toSteroid, amount);
    document.getElementById('result').innerText = `Equivalent amount: ${result}`;
}
