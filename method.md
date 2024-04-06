# METHODE PENGHITUNGAN RATA RATA NILAI RAPORT

Hai semuanya 👋

Di sini saya akan menjelaskan beberapa metode perhitungan nilai rapot yang saya temukan baru - baru ini. 
Metode ini belum tentu ada yang digunakan oleh [ppdb jatim](https://ppdbjatim.net/), tapi kita mungkin bisa 
memperkirakan range dari nilai akhir kita. Di sini saya menemukan 4 methode yang berbeda beda tetapi hampir serupa
langsung saja ke data

# Data Nilai yang Digunakan

| Semester |  Agama  |  PKN  | B. Indonesia | Matematika |   IPA   |   IPS   | B. Inggris  |
|:---------|:-------:|:-----:|:------------:|:----------:|:-------:|:-------:|:-----------:|
|    1.    |   81    |   89  |      86      |     95     |    91   |    82   |     94      |
|    2.    |   80    |   92  |      83      |     97     |    87   |    82   |     96      |
|    3.    |   88    |   87  |      90      |     91     |    90   |    85   |     95      |
|    4.    |   92    |   90  |      93      |     92     |    95   |    91   |     96      |
|    5.    |   88    |   85  |      92      |     97     |    92   |    89   |     96      |

Nilai di atas merupakan data yang akan kita gunakan untuk menghitung rata rata menggunakan 4 method 
yang saya temukan. 

# Membuat program test untuk memudahkan

Dalam hal ini saya perlu membuat program untuk melakukan test untuk memperoleh hasil dari
4 metode penghitungan rata rata nilai raport 
```js
var data = [
    [81, 89, 86, 95, 91, 82, 94], // Data Semester 1
    [80, 92, 83, 97, 87, 82, 96], // Data Semester 2
    [88, 87, 90, 91, 90, 85, 95], // Data Semester 3
    [92, 90, 93, 92, 95, 91, 96], // Data Semester 4
    [88, 85, 92, 97, 92, 89, 96]  // Data Semester 5
];

function nilai() {
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
```
Setelah itu mari langsung menghitung nilai rerata

# Menghitung rerata

Jika kita berbicara mengenai menghitung rerata kita pasti mengetahui hanya ada 1 cara untuk menghitung nya, tetapi ada banyak cara dalam penerapannya 
nah cara penerapan nya ini yang membuat kita bisa mendapatkan hasil berbeda beda dalam hal ini saya akan mencoba semua
metode tersbeut.

1. Metode membulatkan hasil akhir rerata seluruh mapel \
Metode ini sendir cukup umum digunaka dimana kita membulatkan 2 angka di belakang koma untuk memudahkan dalam membaca hasil rerata sekarang mari kita coba metode tersebut.
   - pertama saya isi nilai
        ```js
        nilai() // Mengisi kan nilai ke dalam field
        ```
   - saya memastikan bahwa nilai sudah di bulatkan
        ```js
        // Rerata per mapel
        document.getElementById("jml").innerHTML =  (yu.reduce((a,b) => a + b , 0) / 7).toFixed(2)
        ```
        ```js
        // Rerata akhir
        var itung = (indeks * 3/10) + (akred * 1 / 5) + (rerata * 1/2)
        document.getElementById("rsl").innerHTML = itung.toFixed(2)
        ```
   - Saya memasukkan nilai indeks dan akred
        Saya memasukkan nilai indeks 85.42 dan akreditasi 91
   - Hasil 
        Setalah di hitung retata yang di dapatkan ialah ``88.67``

2. Metode tanpa membulatkan hasil akhir rerata seluruh mapel \
Metode ini sendir jarang digunakan karena membuat angka jadi sulit di baca dan juga sulit di hitung, maka dari itu mari kita coba metode ini
   - pertama saya isi nilai
        ```js
        nilai() // Mengisi kan nilai ke dalam field
        ```
   - saya memastikan bahwa nilai tidak akan dibulatkan 
        ```js
        // Rerata per mapel
        document.getElementById("jml").innerHTML =  (yu.reduce((a,b) => a + b , 0) / 7)
        ```
        ```js
        // Rerata akhir
        var itung = (indeks * 3/10) + (akred * 1 / 5) + (rerata * 1/2)
        document.getElementById("rsl").innerHTML = itung
        ```
   - Saya memasukkan nilai indeks dan akred
        Saya memasukkan nilai indeks 85.42 dan akreditasi 91
   - Hasil 
        Setalah di hitung retata yang di dapatkan ialah ``88.86885714285714``
