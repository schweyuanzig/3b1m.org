const resimler = [
            './storage/img/1.png',
            './storage/img/2.png',
            './storage/img/3.png',
            './storage/img/4.png'
        ];
const rastgeleIndex = Math.floor(Math.random() * resimler.length);
document.body.style.backgroundImage = `url('${resimler[rastgeleIndex]}')`;