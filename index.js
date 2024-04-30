 let songIndex=0;
 let audioElement=new Audio('assests/1.mp3');
 let masterPlay=document.getElementById("masterPlay");
 let myProgressBar=document.getElementById("myProgressBar");
 let gif=document.getElementById('gif');
 let songItems=Array.from(document.getElementsByClassName('songItem'));
 let songList = document.querySelector(".songList");
 let masterSongName=document.getElementById("masterSongName");
let bannerImg = document.getElementById("banner");
//  console.log(bannerImg.id);
//  let songItemPlay=document.getElementsByClassName("songItemPlay");
 
let song = [

    {songName:"Arjan Vailly" ,filePath:"assests/1.mp3" , coverPath :"assests/cover1.jpg"},
    {songName:"Chaleya" ,filePath:"assests/2.mp3" , coverPath :"assests/cover2.jpg"},
    {songName:"Pal" ,filePath:"assests/4.mp3" , coverPath :"assests/cover3.jpg"},
    {songName:"Agar Tum Sath Ho" ,filePath:"assests/3.mp3" , coverPath :"assests/cover4.jpg"},
    {songName:"Humdard" ,filePath:"assests/5.mp3" , coverPath :"assests/cover5.jpg"},
    {songName:"Salamat" ,filePath:"assests/6.mp3" , coverPath :"assests/cover6.jpg"},
    {songName:"Laree Chhoote" ,filePath:"assests/7.mp3" , coverPath :"assests/cover7.jpg"},
    {songName:"Kachcha Ghada" ,filePath:"assests/8.mp3" , coverPath :"assests/cover8.webp"},
    

]




songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=song[i].songName;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");

    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        gif.style.opacity=1;
        audioElement.src=`assests/${songIndex+1}.mp3`;
        masterSongName.innerText=song[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        songList.innerHTML = ""
        var img = document.createElement('img');
        img.src = `assests/cover${songIndex+1}.jpg`;
        img.width = "400"
        img.height = "400"
        img.alt = 'Song cover';
        songList.appendChild(img);
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })

})

// audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused  ||  audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
       
        gif.style.opacity=1;
       

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
        
    }
})
audioElement.addEventListener('timeupdate',()=>{

    console.log('timeupdate');
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
    
})

document.getElementById('next').addEventListener('click',()=>{

    if(songIndex>=6){
        songIndex=-1;
    }
    else{
   songIndex+=1;
    

    audioElement.src=`${songIndex+1}.mp3`;
    masterSongName.innerText=song[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");  
    } 
})

document.getElementById('previous').addEventListener('click',()=>{

    if(songIndex<=0){
        songIndex=0;
    }
    else{
   songIndex-=1;
    
    audioElement.src=`${songIndex+1}.mp3`;
    
     masterSongName.innerText=song[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    }
 
})