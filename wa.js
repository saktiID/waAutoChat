
/*================[konfigurasi pengguna]================*/
var pesan = "Isi ke-";        // isi pesan
var count = 5;                      // jumlah
var int = 100;                      // kecepatan milisecond
/*======================================================*/




/*=======================[script]=======================*/
var x = 0;
var i = 1;
var kotakPesan = "div._2HE1Z._1hRBM div._1awRl";	// sesuaikan versi class
var tombol = "button._2Ujuu";				// sesuaikan versi class
if (x < count) {

    var timer = setInterval('kirim(pesan)', int);
    timer;
    function kirim(t) {
        window.InputEvent = window.Event || window.InputEvent;
        var event = new InputEvent('input', { bubbles: true });
        var textbox = document.querySelector(kotakPesan);
        textbox.textContent = t + i++;
        textbox.dispatchEvent(event);
        document.querySelector(tombol).click();
        x++;
        console.log(x);

        if (x == count) {
            clearInterval(timer);
        }
    }

}
