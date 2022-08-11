//song list
let All_song = [
   {
     name: "FIGO",
     path: "music/HOLY TEN - FIGO.mp3",
     img: "img/maxresdefault.jpg",
     singer: "Holy 10"
   },
   {
     name: "BIKE BACK",
     path: "music/Charly Black - Bike BackEquiknoxx MusicDancehall 2014.mp3",
     img: "img/R.png",
     singer: "Charly Black"
   },
   {
    name: "MAGATE",
    path: "music/Enzo Ishall - Magate (Official Video).mp3",
    img: "img/OIP (2).jpg",
    singer: "Enzo Ishall"
  },
  {
    name: "YUH FUCK SWEET",
    path: "music/Charly Black - Yuh Fuck Sweet (Raw) - April 2013 - Notnice Records.mp3",
    img: "img/OIP (1).jpg",
    singer: "CHARLY MUTEMA"
   },
   {
     name: "ZUVA RESE",
     path: "music/EXQ_-_Zuva_Rese_(Official_Audio)_ft._Ti_Gonzi.mp3",
     img: "img/R (5).jpg",
     singer: "Mr PUTITI"
   },
   {
    name: "SAHWIRA",
   path: "music/Holy_Ten_-_Sahwira(256k).mp3",
   img: "img/maxresdefault.jpg",
   singer: "HOLY TEN"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/