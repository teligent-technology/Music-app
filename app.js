let SongIndex = 0
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('Myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songsItem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { SongName: "Bolo Har har", filePath: "./songs/1.mp3", coverpath: "./covers/1.jpg" },
    { SongName: "Brown rang", filePath: "./songs/2.mp3", coverpath: "./covers/2.jpg" },
    { SongName: "Deva Deva", filePath: "./songs/3.mp3", coverpath: "./covers/3.jpg" },
    { SongName: "Kesariya", filePath: "./songs/4.mp3", coverpath: "./covers/4.jpg" },
    { SongName: "Hold On", filePath: "./songs/5.mp3", coverpath: "./covers/5.jpg" },
    { SongName: "Millionaire", filePath: "./songs/6.mp3", coverpath: "./covers/6.jpg" },
    { SongName: "Namo Namo", filePath: "./songs/7.mp3", coverpath: "./covers/7.jpg" },
    { SongName: "Qaafirana", filePath: "./songs/8.mp3", coverpath: "./covers/8.jpg" },
    { SongName: "Baller", filePath: "./songs/9.mp3", coverpath: "./covers/9.jpg" },
    { SongName: "Warriyo", filePath: "./songs/10.mp3", coverpath: "./covers/10.jpg" },

];

songsItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerHTML = songs[i].SongName;

});


// audioElement.play();
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeplays = () => {
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('fa-pause-circle')) {
            audioElement.pause();
            target.classList.remove('fa-pause-circle');
            target.classList.add('fa-play-circle');
        } else if (target.classList.contains('fa-play-circle')) {
            audioElement.play();
            target.classList.remove('fa-play-circle');
            target.classList.add('fa-pause-circle');
        }
    });
});

Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        if(e.target===masterPlay){
            audioElement.pause
        }
    })
})

Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {

    element.addEventListener('click', (e) => {
        makeplays()
        SongIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `/songs/${SongIndex + 1}.mp3`
        mastersongname.innerHTML = songs[SongIndex].SongName
        audioElement.currentTime = 0
        audioElement.play()
        gif.style.opacity = 1
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

        Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
            element.addEventListener('click', (e) => {
                if (!audioElement.paused) {
                    audioElement.pause();
                    e.target.classList.remove('fa-pause-circle');
                    e.target.classList.add('fa-play-circle');
                } else {
                    audioElement.play();
                    e.target.classList.remove('fa-play-circle');
                    e.target.classList.add('fa-pause-circle');
                }
            });
        });

    })
})
document.getElementById('next').addEventListener('click', () => {
    if (SongIndex >= 9) {
        SongIndex = 0
    } else {
        SongIndex += 1
    }
    audioElement.src = `/songs/${SongIndex + 1}.mp3`
    mastersongname.innerText = songs[SongIndex].SongName
    audioElement.currentTime = 0
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('previous').addEventListener('click', () => {
    if (SongIndex <= 0) {
        SongIndex = 0
    } else {
        SongIndex -= 1
    }
    audioElement.src = `/songs/${SongIndex + 1}.mp3`
    mastersongname.innerText = songs[SongIndex].SongName;
    audioElement.currentTime = 0
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})




