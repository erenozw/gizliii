document.addEventListener('DOMContentLoaded', function () {
    const heart = document.getElementById('heart');
    const envelope = document.getElementById('envelope');
    const messageContainer = document.getElementById('messageContainer');
    const surpriseMessage = document.getElementById('surpriseMessage');
    const closeButton = document.getElementById('closeButton');

    // Sevgilinize yazacağınız notu buraya girin!
    const yourMessage = "Canım sevgilim, bu küçücük sürprizle sana olan sevgimi bir kez daha göstermek istedim. Hayatıma kattığın her an için teşekkür ederim. Sen benim için her şeyden daha değerlisin. Seni çok seviyorum! ❤️";

    heart.addEventListener('click', function () {
        envelope.classList.add('envelope-open'); // Zarfı açma animasyonu
        setTimeout(() => {
            envelope.style.display = 'none'; // Zarfı gizle
            surpriseMessage.textContent = yourMessage; // Mesajı ayarla
            messageContainer.style.display = 'flex'; // Mesaj kutusunu göster
        }, 500); // Zarf animasyonunun süresi kadar bekler
    });

    closeButton.addEventListener('click', function () {
        messageContainer.style.display = 'none'; // Mesaj kutusunu gizle
        envelope.style.display = 'block'; // Zarfı tekrar göster
        envelope.classList.remove('envelope-open'); // Zarfı kapalı hale getir
    });
});