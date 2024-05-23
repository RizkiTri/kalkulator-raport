var final = [];
var data = [
    [81, 89, 86, 95, 91, 82, 94], // Data Semester 1
    [80, 92, 83, 97, 87, 82, 86], // Data Semester 2
    [88, 87, 90, 91, 90, 85, 95], // Data Semester 3
    [92, 90, 93, 92, 95, 91, 96], // Data Semester 4
    [88, 85, 92, 97, 92, 89, 96]  // Data Semester 5
];

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fill(){
    for (var i = 1; i <= 5; i++) {
        // mengisi value
        document.getElementById(`s${i}a`).value = generateRandomNumber(70, 99);
        document.getElementById(`s${i}p`).value = generateRandomNumber(70, 99);
        document.getElementById(`s${i}i`).value = generateRandomNumber(70, 99);
        document.getElementById(`s${i}m`).value = generateRandomNumber(70, 99);
        document.getElementById(`s${i}b`).value = generateRandomNumber(70, 99);
        document.getElementById(`s${i}s`).value = generateRandomNumber(70, 99);
        document.getElementById(`s${i}e`).value = generateRandomNumber(70, 99);
        
        // menjalankan function 
        ragama(document.getElementById(`s${i}a`))
        rpkn(document.getElementById(`s${i}p`))
        rindo(document.getElementById(`s${i}i`))
        rmat(document.getElementById(`s${i}m`))
        ripa(document.getElementById(`s${i}b`))
        rips(document.getElementById(`s${i}s`))
        ringgris(document.getElementById(`s${i}e`))
    }
    
    
}

function rizkiNilai() {
    // Fungsi untuk mengonversi indeks ke huruf subjek
    function convertIndexToSubject(index) {
        var subjects = ['a', 'p', 'i', 'm', 'b', 's', 'e']; // Array huruf subjek sesuai urutan data
        return subjects[index]; // Mengembalikan huruf subjek sesuai indeks
    }
    
    // Mendapatkan semua elemen input
    var inputs = document.querySelectorAll('input[type="text"]');
    
    // Iterasi melalui setiap baris data
    for (var i = 0; i < data.length; i++) {
        var rowData = data[i]; // Mengambil satu baris data
        
        // Iterasi melalui setiap nilai dalam baris data
        for (var j = 0; j < rowData.length; j++) {
            var value = rowData[j]; // Mengambil nilai dari data
            
            // Mendapatkan id input untuk mata pelajaran dan semester yang sesuai
            var inputId = 's' + (i + 1) + convertIndexToSubject(j);
            
            // Mengisi nilai input dengan nilai data yang sesuai
            document.getElementById(inputId).value = value;
            
            // Memanggil fungsi lain sesuai dengan mata pelajaran yang diisi
            switch (inputId.slice(-1)) {
                case 'a':
                    ragama(document.getElementById(inputId));
                    break;
                case 'p':
                    rpkn(document.getElementById(inputId));
                    break;
                case 'i':
                    rindo(document.getElementById(inputId));
                    break;
                case 'm':
                    rmat(document.getElementById(inputId));
                    break;
                case 'b':
                    ripa(document.getElementById(inputId));
                    break;
                case 's':
                    rips(document.getElementById(inputId));
                    break;
                case 'e':
                    ringgris(document.getElementById(inputId));
                    break;
                default:
                    break;
            }
        }
    }
} 

var x = 0

function akhir(){
    var indeks = parseFloat(document.getElementById("indeks").value) ?? false
    var akred  = parseFloat(document.getElementById("akred").value) ?? false
    var rerata  = parseFloat(document.getElementById("jml").innerHTML) ?? false
    
    if((!indeks) || (!akred)) return;
    
    if(!rerata){
        var itung = (indeks * 30/100) + (akred * 20 / 100)
        document.getElementById("rsl").innerHTML = itung.toFixed(2)
        
    } else {
        var itung = (indeks * 3/10) + (akred * 1 / 5) + (rerata * 1/2)
        document.getElementById("rsl").innerHTML = itung.toFixed(2)
        
    }
    
}
