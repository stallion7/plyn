console.log('ahoj');

let stav = {
pstav: '',
kstav: '',
pouziti: '',
dodavatel: '',
cena: '',

m3tokWh: function(m3){
 return m3 * 10.55;
},

stav: function(p = this.pstav,k = this.kstav){

    return ((this.m3tokWh(k)) - (this.m3tokWh(p))).toFixed(2);
},

castka: function(c = this.cena,p = this.pstav,k = this.kstav) {
    return (c * ((this.m3tokWh(k)) - (this.m3tokWh(p)))).toFixed(2); 
}
}


document.getElementById('calc').addEventListener('click',function() {
    stav.pstav = document.getElementById('pstav').value;
    stav.kstav = document.getElementById('kstav').value;
    stav.pouziti = document.getElementById('spotreba1').checked ? 'ohřev vody' : 'vytápění';
    stav.dodavatel = document.getElementById('dodavatel').value;
    stav.cena = document.getElementById('cena').value;
    document.getElementById('result').innerHTML = `Největší spotřeba za ${stav.pouziti}, Dodavatel plynu : ${stav.dodavatel}, Spotřeba = ${stav.stav()}kWh, cena za plyn = ${stav.castka()}Kč`;
});