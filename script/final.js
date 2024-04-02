var final = [];

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fill(){
    for (var i = 1; i <= 5; i++) {
        // mengisi value
        document.getElementById(`s${i}a`).value = generateRandomNumber(80, 99);
        document.getElementById(`s${i}p`).value = generateRandomNumber(80, 99);
        document.getElementById(`s${i}i`).value = generateRandomNumber(80, 99);
        document.getElementById(`s${i}m`).value = generateRandomNumber(80, 99);
        document.getElementById(`s${i}b`).value = generateRandomNumber(80, 99);
        document.getElementById(`s${i}s`).value = generateRandomNumber(80, 99);
        document.getElementById(`s${i}e`).value = generateRandomNumber(80, 99);
        
        // menjalankan function 
        ragama(document.getElementById(`s${i}a`))
        rpkn(document.getElementById(`s${i}p`))
        rindo(document.getElementById(`s${i}i`))
        rmat(document.getElementById(`s${i}m`))
        ripa(document.getElementById(`s${i}b`))
        rips(document.getElementById(`s${i}s`))
        ringgris(document.getElementById(`s${i}s`))
    }
    
    
}

function akhir(){
    var indeks = parseInt(document.getElementById("indeks").value) ?? false
    var akred  = parseInt(document.getElementById("akred").value) ?? false
    var rerata  = parseFloat(document.getElementById("jml").innerHTML) ?? false
    
    if((!indeks) || (!akred)) return;
    
    if(!rerata){
        var itung = (indeks * 30/100) + (akred * 20 / 100)
        document.getElementById("rsl").innerHTML = itung.toString().slice(0,4)
    } else {
        var itung = (indeks * 30/100) + (akred * 20 / 100) + (rerata * 1/2)
        document.getElementById("rsl").innerHTML = itung.toString().slice(0,4)
    }
    
}
