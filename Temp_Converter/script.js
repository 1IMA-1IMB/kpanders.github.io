function TempConv(valNum) {
    valNum = parseFloat(valNum);

    document.getElementById("Celsius").innerHTML = (valNum - 32) / 1.8;
}

