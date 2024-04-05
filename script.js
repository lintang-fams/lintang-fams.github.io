function home(event) {
    event.preventDefault(); 
    $('#welcomeText').text('Selamat datang di website resmi Lintang Family').show(); 
    $('.gallery-container').hide();
    $('.content audio').remove();
    $('.content p').remove();
    $('#aboutDescription').hide();
    $('#anggotaFamily').hide();
    $('#audioContent').hide(); 
}

function about() {
    $('#welcomeText').hide();
    $('.gallery-container').hide();
    $('.content p').hide();
    $('#aboutDescription').show(); 
    $('#aboutDescriptionContent').show();
    $('#anggotaFamily').hide();
        $('#aboutDescription').html(`
            <h3> Tentang Lintang : </h3>
            <div class="aboutDescriptionContent">
                <p>Lintang didirikan pada tanggal 5 September 2022, dengan 60% anggota berasal dari migrasi NET Family, dan Je sebagai ketua. </p>
                <p>Devi yang saat ini menjabat sebagai admin, adalah orang yg memiliki ide untuk mengunakan nama lintang sebagai family di lismet</p>
                <p>Lintang dibuat sebagai respons terhadap hiruk-pikuk yang ada di aplikasi Litmatch, bahkan mungkin tidak peduli dengan semua aturan yg ada di Litmatch</p>
                <p>Tidak ada aturan pendaftaran yang kaku, dan tidak diwajibkan menggunakan title namun anggota dihimbau untuk tetap menjaga kewajiban solat</p>
            </div>
            `).show();
    
}


function addMedia(event) {
    event.preventDefault();
    $('.content p').remove();
    $('.content audio').remove();
    $('#welcomeText').text('Audio Lintang').show(); 
    $('.gallery-container').hide();
    $('#aboutDescription').hide();
    $('#anggotaFamily').hide(); 
    $('#audioContent').show();

    var div = document.createElement("div");
    div.innerHTML = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1782701706&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/its-tur" title="It&#x27;s Tur" target="_blank" style="color: #cccccc; text-decoration: none;">It&#x27;s Tur</a> · <a href="https://soundcloud.com/its-tur/l-lintang" title="L~ Lintang" target="_blank" style="color: #cccccc; text-decoration: none;">L~ Lintang</a></div>';
    
    document.querySelector('#audioContent').innerHTML = ''; 
    document.querySelector('#audioContent').appendChild(div);
}

function admin(event) {
    event.preventDefault(); 
    $('#welcomeText').hide();
    $('.gallery-container').hide();
    $('.content p').hide();
    $('#aboutDescription').hide(); 
    $('#anggotaFamily').html(`
        <h3>Anggota Family :</h3>
        <table class="anggotaFamilyTable">
            <tr>
                <th>Nama</th>
                <th>Jabatan</th>
            </tr>
            <tr>
                <td>Je</td>
                <td>Kapten</td>
            </tr>
            <tr>
                <td>its Ar</td>
                <td>Co Kapten</td>
            </tr>
            <tr>
                <td>its Tur</td>
                <td>Co Kapten</td>
            </tr>
            <tr>
                <td>its Ap</td>
                <td>Co Kapten</td>
            </tr>
            <tr>
                <td>Yila</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>Iyo</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>Icha</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>Aren</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>Lov</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>Ris</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>Yaya</td>
                <td>Admin</td>
            </tr>
        </table>
    `).show(); 
    $('#audioContent').hide();
}


function gallery(event) {
    event.preventDefault();
    $('#welcomeText').text('Logo').show();
    $('.content audio').remove();
    $('.gallery-container').show();
    $('#aboutDescription').hide(); 
    $('#anggotaFamily').hide(); 
    $('#audioContent').hide();

    $('.gallery-container').empty();

    var paragraph = document.createElement("p");
    var text = document.createTextNode("");
    paragraph.appendChild(text);
    document.querySelector('.gallery-container').appendChild(paragraph);

    var images = [
        'img/Artboard 10.jpg',
        'img/Artboard 20.jpg',
        'img/Artboard 30.jpg',
        'img/Artboard 40.jpg',
    ];

    images.forEach(function(imageUrl) {
        var img = document.createElement('img');
        img.src = imageUrl;
        document.querySelector('.gallery-container').appendChild(img);
    });
}

