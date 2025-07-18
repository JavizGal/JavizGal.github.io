const music = new Audio('/Audio/2.mp3');

const songs = [{id:'1', songName:`<a class="D" href="/audio/1.mp3" download="Everthings Fine">Everthings Fine</a><br><div class="subtitle"><a class="S" href="Royal.html">Royal Blood</a></div>`, poster:"img/1.jpg"},
    {id:'2', songName:`<a class="D" href="/audio/2.mp3" download="Robot.mp3">Robot</a><br><div class="subtitle"><a class="S" href="Dytto.html">Dytto</a></div>`, poster:"img/2.jpg"},
    {id:"3", songName:`<a class="D" href="/audio/3.mp3" download="9MM.mp3">9MM</a><br><div class="subtitle"><a class="S" href="Brutal.html">Brutalismus 3000</a></div>`, poster:"img/3.jpg"},
    {id:"4", songName:`<a class="D" href="/audio/4.mp3" download="High Waters.mp3">High Waters</a><br><div class="subtitle"><a class="S" href="Royal.html">Royal Blood</a></div>`, poster:"img/4.jpg"},
    {id:"5", songName:`<a class="D" href="/audio/5.mp3" download="Debilidad.mp3">Debilidad</a><br><div class="subtitle">Rorro</div>`, poster: "img/5.jpg"},
    {id:"6", songName:`<a class="D" href="/audio/6.mp3" download="Satan Was a Babybommer.mp3">Satan Was a Babybommer</a><br><div class="subtitle"><a class="S" href="Brutal.html">Brutalismus 3000</a></div>`, poster: "img/6.jpg"},
    {id:"7", songName:`<a class="D" href="/audio/7.mp3" download="How Many More Times.mp3">How Many More Times</a><br><div class="subtitle"><a class="S" href="Royal.html">Royal Blood</a></div>`, poster:"img/7.jpg"},
    {id:"8", songName:`<a class="D" href="/audio/8.mp3" download="Juguete Roto.mp3">Juguete Roto</a><br><div class="subtitle">Rorro</div>`, poster:"img/8.jpg"},
    {id:"9", songName:`<a class="D" href="/audio/9.mp3" download="Europätraume.mp3">Europätraume</a><br><div class="subtitle"><a class="S" href="Brutal.html">Brutalismus 300</a></div>`, poster:"img/9.jpg"},
    {id:"10", songName:`<a class="D" href="/audio/10.mp3" download="Pull Me Through.mp3">Pull Me Through</a><br><div class="subtitle"><a class="S" href="Royal.html">Royal Blood</a></div>`, poster:"img/10.jpg"},
    {id:"11", songName:`<a class="D" href="/audio/11.mp3" download="Ain´t Shit.mp3">Ain't Shit</a><br><div class="subtitle">Doja Cat</div>`, poster:"img/11.jpg"},
    {id:"12", songName:`<a class="D" href="/audio/12.mp3" download="Romantika.mp3">Romantika</a><br><div class="subtitle"><a class="S" href="Brutal.html">Brutalismus 3000</a></div>`, poster:"img/12.jpg"},
    {id:"13", songName:`<a class="D" href="/audio/13.mp3" download="Shiner In The Dark.mp3">Shiner In The Dark</a><br><div class="subtitle"><a class="S" href="Royal.html">Royal Blood</a></div>`, poster: "img/13.jpg"},
    {id:"14", songName:`<a class="D" href="/audio/14.mp3" download="Loser.mp3">Loser</a><br><div class="subtitle"><a class="S" href="Fall.html">Falling In Reverse</a></div>`, poster: "img/14.jpg"},
    {id:"15", songName:`<a class="D" href="/audio/15.mp3" download="Protection Charm.mp3">Protection Charm</a><br><div class="subtitle">Miguel Angeles</div>`, poster:"img/15.jpg"},
    {id:"16", songName:`<a class="D" href="/audio/16.mp3" download="SuperModel.mp3">Supermodel</a><br><div class="subtitle"><a class="S" href="Royal.html">Royal Blood</a></div>`, poster:"img/16.jpg"},
    {id:"17", songName:`<a class="D" href="/audio/17.mp3" download="On Melancholy Hill.mp3">On Melancholy Hill</a><br><div class="subtitle"><a class="S" href="Gor.html">Gorillaz</a></div>`, poster:"img/17.jpg"},
    {id:"18", songName:`<a class="D" href="/audio/18.mp3" download="Metamorphosis.mp3">Metamorphosis</a><br><div class="subtitle"><a class="S" href="Inter.html">InterWorld</a></div>`, poster: "img/18.jpg"},
    {id:"19", songName:`<a class="D" href="/audio/19.mp3" download="Thell Me When It´s Too Late.mp3">Tell Me When It's Too Late</a><br><div class="subtitle"><a class="S" href="Royal.html">Royal Blood</a></div>`, poster:"img/19.jpg"},
    {id:"20", songName:`<a class="D" href="/audio/20.mp3" download="Sex, Drougs, Etc.mp3">Sex, D0rougs, Etc</a><br><div class="subtitle">Reverb Tazzy</div>`, poster:"img/20.jpg"},
    {id:"21", songName:`<a class="D" href="/audio/21.mp3" download="The Firing Line.mp3">The Firing Line</a><br><div class="subtitle"><a class="S" href="Royal.html">Royal Blood</div>`, poster:"img/21.jpg"},
    {id:"22", songName:`<a class="D" href="/audio/22.mp3" download="Baby Doll.mp3">Baby Doll</a><br><div class="subtitle">Ari</div>`, poster:"img/22.jpg"},
    {id:"23", songName:`<a class="D" href="/audio/23.mp3" download="Rosa Pastel.mp3">Rosa Pastel</a><br><div class="subtitle"><a class="S" href="Bela.html">Belanova</a></div>`, poster:"img/23.jpg"},
    {id:"24", songName:`<a class="D" href="/audio/24.mp3" download="There Goes My Cool.mp3">There Goes My Cool</a><br><div class="subtitle"><a class="S" href="Royal.html">Royal Blood</a></div>`, poster:"img/24.jpg"},
    {id:"25", songName:`<a class="D" href="/audio/25.mp3" download="I Like The Way You Kiss Me.mp3">I Like The Way You Kiss Me</a><br><div class="subtitle">Artemas</div>`, poster:"img/25.jpg"},
    {id:"26", songName:`<a class="D" href="/audio/26.mp3" download="Ride Or Die Pt.2.mp3">Ride Or Die Pt.2</a><br><div class="subtitle">Sevdaliza</div>`, poster:"img/26.jpg"},
    {id:"27", songName:`<a class="D" href="/audio/27.mp3" download="Triggers.mp3">Triggers</a><br><div class="subtitle"><a class="S" href="Royal.html">Royal Blood</a></div>`, poster:"img/27.jpg"},
    {id:"28", songName:`<a class="D" href="/audio/28.mp3" download="Icewhore.mp3">Icewhore</a><br><div class="subtitle">Lumi Athena</div>`, poster:"img/28.jpg"},
    {id:"29", songName:`<a class="D" href="/audio/29.mp3" download="Waves.mp3">Waves</a><br><div class="subtitle"><a class="S" href="Royal.html">Royal Blood</a></div>`, poster:"img/29.jpg"},
    {id:"30", songName:`<a class="D" href="/audio/30.mp3" download="The Lost Soul Down.mp3">The Lost Soul Down</a><br><div class="subtitle">NBSPLV</div>`, poster:"img/30.jpg",},
];

Array.from(document.getElementsByClassName('Cancion')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let Boton_Play = document.getElementById('Plays');

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];





Boton_Play.onclick = function(){
    index = 7
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    music.play();
};

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('Cancion')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('Cancion'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('Cancion')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('Cancion'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index += 1;
    if (index > Array.from(document.getElementsByClassName('Cancion')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('Cancion'))[`${index}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})