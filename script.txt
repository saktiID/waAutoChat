
/* HANYA UNTUK PC / DESKTOP */


/* 
@tool       : Chat WhatsApp Boomber
@version    : 1.0
@date       : 03/11/2020
@author     : RomoSakti
@match      : https://web.whatsapp.com/
@phone      : 085607369678 (jangan spam!)
*/




/*================[konfigurasi pengguna]================*/
var pesan = "iki isi pesan";        // isi pesan
var count = 50;                      // jumlah
var int = 1000;                      // kecepatan milisecond
/*======================================================*/




/*=======================[script]=======================*/
var x = 0;
if (x < count) {

    var timer = setInterval('kirim(pesan)', int);
    timer;
    function kirim(t) {
        window.InputEvent = window.Event || window.InputEvent;
        var event = new InputEvent('input', { bubbles: true });
        var textbox = document.querySelector('div._2FVVk._2UL8j div._3FRCZ');
        textbox.textContent = t;
        textbox.dispatchEvent(event);
        document.querySelector('button._1U1xa').click();
        x++;
        console.log(x);

        if (x == count) {
            clearInterval(timer);
        }
    }

}