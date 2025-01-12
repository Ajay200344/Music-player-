const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const progressBar = document.getElementById('progress-bar');
const duration=document.getElementById('duration');
const sources = {
 src1:"Beast Mass Bgm _ Thalapathy 65 Bgm Ringtone _ Beast Theme _ Beast Thalapathy Theme Music _ AA BGM.m4a",
 scr2:"Marco Teaser Theme  Unni Mukundan  Shareef Muhammed  Haneef Adeni  Ravi Basrur.mp3",
 src3:"Kaththi Theme…The Sword of Destiny - Full Audio.m4a",
 src4:"Devara _ The Revelation BGM  Jr. NTR  Anirudh  High Quality BGM  FLM  Nadh Brothers.mp3",
 src5:"Maari Theme - Dhanush - Kajal Agarwal - Balaji Mohan - Anirudh Ravichander.m4a",
 src6:"Master JD Intro Bgm (Original Background Score).m4a",
 src7:"Once Upon A Time Lyric Video Song _ Vikram Hit List _ Kamal Haasan, Fahadh Faasil, Vijay Sethupathi.m4a",
 src8:"Rolex Entry Bgm _ Rolex Entry Full Bgm _ Lokiverse Bgm _ [Download Link].m4a",
 src9:"The Real Og.mp3"
};

// Toggle play/pause
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸'; // Pause icon
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶'; // Play icon
    }
});
next.addEventListener("click",()=>{
    const run=audio.getAttribute('src');
    let match=false;
    const keys =Object.keys(sources);
    const last= keys[keys.length-1];

    for (let key in sources){     
        if(match){
       
            audio.src= sources[key];
            audio.play();
            playPauseBtn.textContent = '⏸';
            break;
        }
        if(run==sources[key]){
             match=true;
             
        }
        if(run===sources[last]){
            const first= keys[0];
            audio.src=sources[first];
            audio.play();
            playPauseBtn.textContent = '⏸';
        } 
    } 
});
const revobj={};
const rev=Object.keys(sources).reverse();
rev.forEach(key2 =>{
    revobj[key2]=sources[key2];
});

previous.addEventListener("click",()=>{
    const run2=audio.getAttribute('src');
    let match2=false;
    const rev2 =Object.keys(revobj);
    const last2= rev2[rev2.length-1];

    for (let j in revobj){      
        if(match2){

            audio.src= revobj[j];
            audio.play();
            playPauseBtn.textContent = '⏸';
            console.log(revobj[j]);
            break;
        }
        if(run2==revobj[j]){
             match2=true;
             
        }
        if(run2===revobj[last2]){
            const first2= rev2[0];
            audio.src=revobj[first2];
            audio.play();
            playPauseBtn.textContent = '⏸';
        } 
    } 
});
// Update progress bar
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress+'%';
    const seconds=Math.floor(audio.currentTime);
     let min=Math.floor(seconds/60);
     let sec= seconds % 60;
    duration.innerHTML=min+":"+(sec<10 ? "0" : "")+sec;
    if(progress==100){
        playPauseBtn.textContent = '▶';
    }
});