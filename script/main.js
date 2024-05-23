
/**
.* @var agama
 * @var ppkn
 * @var indonesia
 * @var matematika
 * @var ipa
 * @var ips
 * @var inggris 
 * 
 */
var agama   = [];
var pkn     = [];
var indo    = [];
var mat     = [];
var ipa     = [];
var ips     = [];
var inggris = [];



function ragama(object){
    if(!parseInt(object.value)){
        return;
    }
    
    if(object.value.length === 2){
        agama.push(parseInt(object.value));
    }
    
    if(agama.length > 5){
        agama = [];
        agama.push(parseInt(document.getElementById("s1a").value));
        agama.push(parseInt(document.getElementById("s2a").value));
        agama.push(parseInt(document.getElementById("s3a").value));
        agama.push(parseInt(document.getElementById("s4a").value));
        agama.push(parseInt(document.getElementById("s5a").value));
    }
    
    if (agama.length === 5) {
        const a = agama.reduce((a, b) => a + b , 0); 
        // console.log(a)
        document.getElementById("nilaia").innerHTML = a
        document.getElementById("rerataa").innerHTML = (a / 5)
        rerata();
        
    }
    
}

function rpkn(object){
    if(!parseInt(object.value)){
        return;
    }
    
    if(object.value.length === 2){
        pkn.push(parseInt(object.value));
    }
    
    if(pkn.length > 5){
        pkn = [];
        pkn.push(parseInt(document.getElementById("s1p").value));
        pkn.push(parseInt(document.getElementById("s2p").value));
        pkn.push(parseInt(document.getElementById("s3p").value));
        pkn.push(parseInt(document.getElementById("s4p").value));
        pkn.push(parseInt(document.getElementById("s5p").value));
    }
    
    if (pkn.length === 5) {
        const a = pkn.reduce((a, b) => a + b , 0); 
        // console.log(a)
        document.getElementById("nilaip").innerHTML = a
        document.getElementById("reratap").innerHTML = (a / 5)
        rerata();
        
    }
    
}

function rindo(object){
    if(!parseInt(object.value)){
        return;
    }
    
    if(object.value.length === 2){
        indo.push(parseInt(object.value));
    }
    
    if(indo.length > 5){
        indo = [];
        indo.push(parseInt(document.getElementById("s1i").value));
        indo.push(parseInt(document.getElementById("s2i").value));
        indo.push(parseInt(document.getElementById("s3i").value));
        indo.push(parseInt(document.getElementById("s4i").value));
        indo.push(parseInt(document.getElementById("s5i").value));
    }
    
    if (indo.length === 5) {
        const a = indo.reduce((a, b) => a + b , 0); 
        // console.log(a)
        document.getElementById("nilaii").innerHTML = a
        document.getElementById("reratai").innerHTML = (a / 5)
        rerata();
        
    }
    
}

function ripa(object){
    if(!parseInt(object.value)){
        return;
    }
    
    if(object.value.length === 2){
        ipa.push(parseInt(object.value));
    }
    
    if(ipa.length > 5){
        ipa = [];
        ipa.push(parseInt(document.getElementById("s1b").value));
        ipa.push(parseInt(document.getElementById("s2b").value));
        ipa.push(parseInt(document.getElementById("s3b").value));
        ipa.push(parseInt(document.getElementById("s4b").value));
        ipa.push(parseInt(document.getElementById("s5b").value));
    }
    
    if (ipa.length === 5) {
        const a = ipa.reduce((a, b) => a + b , 0); 
        // console.log(a)
        document.getElementById("nilaib").innerHTML = a
        document.getElementById("reratab").innerHTML = (a / 5)
        rerata();
        
    }
    
}

function rmat(object){
    if(!parseInt(object.value)){
        return;
    }
    
    if(object.value.length === 2){
        mat.push(parseInt(object.value));
    }
    
    if(mat.length > 5){
        mat = [];
        mat.push(parseInt(document.getElementById("s1m").value));
        mat.push(parseInt(document.getElementById("s2m").value));
        mat.push(parseInt(document.getElementById("s3m").value));
        mat.push(parseInt(document.getElementById("s4m").value));
        mat.push(parseInt(document.getElementById("s5m").value));
    }
    
    if (mat.length === 5) {
        const a = mat.reduce((a, b) => a + b , 0); 
        // console.log(a)
        document.getElementById("nilaim").innerHTML = a
        document.getElementById("reratam").innerHTML = (a / 5)
        rerata();
        
    }
    
}

function rips(object){
    if(!parseInt(object.value)){
        return;
    }
    
    if(object.value.length === 2){
        ips.push(parseInt(object.value));
    }
    
    if(ips.length > 5){
        ips = [];
        ips.push(parseInt(document.getElementById("s1s").value));
        ips.push(parseInt(document.getElementById("s2s").value));
        ips.push(parseInt(document.getElementById("s3s").value));
        ips.push(parseInt(document.getElementById("s4s").value));
        ips.push(parseInt(document.getElementById("s5s").value));
    }
    
    if (ips.length === 5) {
        const a = ips.reduce((a, b) => a + b , 0); 
        // console.log(a)
        document.getElementById("nilais").innerHTML = a
        document.getElementById("reratas").innerHTML = (a / 5)
        rerata();
        
    }
    
}

function ringgris(object){
    if(!parseInt(object.value)){
        return;
    }
    
    if(object.value.length === 2){
        inggris.push(parseInt(object.value));
    }
    
    if(inggris.length > 5){
        inggris = [];
        inggris.push(parseInt(document.getElementById("s1e").value));
        inggris.push(parseInt(document.getElementById("s2e").value));
        inggris.push(parseInt(document.getElementById("s3e").value));
        inggris.push(parseInt(document.getElementById("s4e").value));
        inggris.push(parseInt(document.getElementById("s5e").value));
    }
    
    if (inggris.length === 5) {
        const a = inggris.reduce((a, b) => a + b , 0); 
        // console.log(a)
        document.getElementById("nilaie").innerHTML = a
        document.getElementById("reratae").innerHTML = (a / 5)
        rerata();
        
    }
    
}

function cekArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return false; // Mengembalikan false jika ada elemen yang bukan angka
    }
  }
  return true; // Mengembalikan true jika semua elemen adalah angka
}

var yu = [];
function rerata(){
    
    yu.push(
        parseFloat(document.getElementById("rerataa").innerHTML),
        parseFloat(document.getElementById("reratap").innerHTML),
        parseFloat(document.getElementById("reratai").innerHTML),
        parseFloat(document.getElementById("reratab").innerHTML),
        parseFloat(document.getElementById("reratam").innerHTML),
        parseFloat(document.getElementById("reratas").innerHTML),
        parseFloat(document.getElementById("reratae").innerHTML)
    )
    
    var res = yu.every(function(element) {
        return !isNaN(element)
    });
    
    if(!res){
        console.log(yu)
        yu = [];
        return;
    } else {
        
        
        if(yu.length === 7){
            document.getElementById("jml").innerHTML =  (yu.reduce((a,b) => a + b , 0) / 7).toFixed(2)
        
            x = (yu.reduce((a,b) => a + b , 0) / 7)
        }
     
        if(yu.length > 7) {
            console.log("cleared")
            yu = [];
            yu.push(
                parseFloat(document.getElementById("rerataa").innerHTML),
                parseFloat(document.getElementById("reratap").innerHTML),
                parseFloat(document.getElementById("reratai").innerHTML),
                parseFloat(document.getElementById("reratab").innerHTML),
                parseFloat(document.getElementById("reratam").innerHTML),
                parseFloat(document.getElementById("reratas").innerHTML),
                parseFloat(document.getElementById("reratae").innerHTML)
            )
            document.getElementById("jml").innerHTML =  (yu.reduce((a,b) => a + b , 0) / 7).toFixed(2)
            
            x = (yu.reduce((a,b) => a + b , 0) / 7)
        }
    }
    akhir();
    
}