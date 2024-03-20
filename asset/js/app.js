const playerButton = document.querySelector("#play-btn");
const audio = document.querySelector("#audio");
const timeline = document.querySelector(".timeline");
const soundButton = document.querySelector("#sound-button");
const sequenceBtn = document.getElementById("sequenceBtn");

const backwardButton = document.querySelector(".backward-button");
const forwardButton = document.querySelector(".forward-button");
const backwardSongButton = document.querySelector(".backward-song-button");
const forwardSongButton = document.querySelector(".forward-song-button");

const songImg = document.querySelector(".songImage");

const playIcon = `<i class="fa-solid fa-circle-play icons opct1"></i>`;
const pauseIcon = `<i class="fa-solid fa-circle-pause icons opct1"></i>`;
const soundIcon = `<i class="fa-solid fa-volume-high icons"></i>`;
const muteIcon = `<i class="fa-solid fa-volume-off icons"></i>`;
const randomIcon = '<i class="fa-solid fa-repeat icons" ></i>';
const notRandomIcon = '<i class="fa-solid fa-shuffle icons"></i>';

var songs = [
  {
    path: "asset/music/Halamithi Habibo (Hindi) - Lyric Video _ Beast _ Thalapathy Vijay _ Sun Pictures _ Nelson _ Anirudh ( 256kbps cbr ).mp3",
    title: "Halamithi Habibo (Hindi)",
    image: "asset/img/music12.jpeg",
  },
  {
    path: "asset/music/Ye Mumkin To Nahi Jo Dil Ne Chaha Tha Wo Mil Jaye (LYRICS) - SAHIR ALI BAGGA _ NEW SAD SONG 2020 _.m4a",
    title: "Ye Mumkin To Nahi Jo Dil Ne Chaha",
    image: "asset/img/music15.jpeg",
  },
  {
    path: "asset/music/Deva Deva - Brahmāstra _ Amitabh B _ Ranbir Kapoor _ Alia Bhatt _ Pritam _ Arijit _ Amitabh _ Jonita.m4a",
    title: "Deva Deva - Brahmāstra",
    image: "asset/img/music11.jpeg",
  },
  {
    path: "asset/music/Teri Baaton Mein Aisa Uljha Jiya (Title Track)_ Shahid Kapoor, Kriti Sanon _ Raghav,Tanishk, Asees.m4a",
    title: "Teri Baaton Mein Aisa Uljha Jiya",
    image: "asset/img/music1.jpg",
  },
  {
    path: "asset/music/KHULLARG - HMM (OFFICIAL MUSIC VIDEO).m4a",
    title: "KHULLARG - HMM ",
    image: "asset/img/music2.png",
  },
  {
    path: "asset/music/PAISA - Seven Hundred Fifty (Official song )- kushal pokhrel.m4a",
    title: "PAISA - Seven Hundred Fifty",
    image: "asset/img/music9.jpeg",
  },
  {
    path: "asset/music/Tu Jo Mila Raabta _ Shirley Setia Jubin Nautiyal _ T-Series Mixtape _ Bhushan Kumar Ahmed K Abhijit.m4a",
    title: "Tu Jo Mila Raabta",
    image: "asset/img/music7.jpg",
  },
  {
    path: "asset/music/Maan Meri Jaan _ Official Music Video _ Champagne Talk _ King.m4a",
    title: "Maan Meri Jaan",
    image: "asset/img/music17.jpeg",
  },
  {
    path: "asset/music/Dekha Hazaro Dafaa _ Rustom _ Akshay Kumar & Ileana D_cruz _ Arijit Singh , Palak M_ Jeet Gannguli.m4a",
    title: "Dekha Hazaro Dafaa _ Rustom",
    image: "asset/img/music20.jpeg",
  },
  {
    path: "asset/music/LYRICAL_ Tera Ban Jaunga _ Kabir Singh _ Shahid K, Kiara A, Sandeep V _ Tulsi Kumar, Akhil Sachdeva.m4a",
    title: "Tera Ban Jaunga _ Kabir Singh ",
    image: "asset/img/music24.jpeg",
  },
  {
    path: "asset/music/Main Agar Kahoon_Bol Do Na Zara _ T-Series Mixtape _ Armaan Malik & Jonita Gandhi  _ Bhushan Kumar.m4a",
    title: "Bol Do Na Zara",
    image: "asset/img/music23.jpeg",
  },
  {
    path: "asset/music/Samjhawan Lyric Video - Humpty Sharma Ki Dulhania_Varun,Alia_Arijit Singh, Shreya Ghoshal.m4a",
    title: "Samjhawan Lyric Song",
    image: "asset/img/music19.jpg",
  },
  {
    path: "asset/music/Mast Magan Full Song with Lyrics _ 2 States _ Arijit Singh _ Arjun Kapoor, Alia Bhatt.m4a",
    title: "Mast Magan Full Song",
    image: "asset/img/music22.jpeg",
  },
  {
    path: "asset/music/Agar Tum Saath Ho FULL AUDIO Song _ Tamasha _ Ranbir Kapoor, Deepika Padukone _ T-Series.m4a",
    title: "Agar Tum Saath Ho FULL AUDIO Song",
    image: "asset/img/music8.jpg",
  },
  {
    path: "asset/music/Teri nazron ne kuch aisa jadoo kiya❤❤❤... (lyrics video).m4a",
    title: "Teri Nazron Ne Kuch Aisa Jadoo Kiya",
    image: "asset/img/music3.jpg",
  },
  {
    path: "asset/music/Baatein Ye Kabhi Na Full Video - Khamoshiyan_Arijit Singh_Ali Fazal, Sapna_Jeet Gannguli.m4a",
    title: "Baatein Ye Kabhi Na ",
    image: "asset/img/music10.jpeg",
  },
  {
    path: "asset/music/Mana Hum Yaha Hai Dil Magar Vaha Hai Full Song _ Jubin Nautiyal  _ Badi Door Unse Humsafar Mera Hai.m4a",
    title: "Mana Hum Yaha Hai Dil Magar Vaha Hai",
    image: "asset/img/music13.jpeg",
  },
  {
    path: "asset/music/Tera Naam Doon - Its Entertainment _ Akshay Kumar, Tamannaah, Atif Aslam _ Latest Song Video.m4a",
    title: "Tera Naam Doon",
    image: "asset/img/music14.jpeg",
  },
  {
    path: "asset/music/Lehanga _ Jass Manak (Official Video) Satti Dhillon _ Punjabi Songs _ GK DIGITAL _ Geet MP3.m4a",
    title: "Lehanga _ Jass Manak (Official Video)",
    image: "asset/img/music4.jpeg",
  },
  {
    path: "asset/music/Nai Jaana Video _ Tulsi Kumar, Sachet Tandon, Tanishk Bagchi _ Nirmaan  _ Awez D,Musskan S,Anmol.m4a",
    title: "Nai Jaana_ Tulsi Kumar",
    image: "asset/img/music18.jpeg",
  },
  {
    path: "asset/music/DAKU (Remix) _ Chani Nattan _ INDERPAL Moga _ AP Bass Boosted.m4a",
    title: "DAKU (Remix)",
    image: "asset/img/music5.jpeg",
  },
  {
    path: "asset/music/Raanjhana Ve_ Antara Mitra _ Soham Naik _ Uddipan _ Sonu _ Latest Hindi Love Songs _ New Song 2022.m4a",
    title: "Raanjhana Ve_ Antara Mitra",
    image: "asset/img/music16.jpeg",
  },
  {
    path: "asset/music/King - Tu Aake Dekhle _ The Carnival _ The Last Ride _ Prod. by Shahbeatz _ Latest Hit Songs 2020.m4a",
    title: " Tu Aake Dekhle",
    image: "asset/img/music6.jpeg",
  },
  {
    path: "asset/music/Chanda Chamke _ Full Song _ Fanaa _ Aamir Khan, Kajol, Rishi Kapoor, Ali Haji _ Jatin-Lalit, Prasoon.m4a",
    title: "Chanda Chamke",
    image: "asset/img/music25.jpeg",
  },
  {
    path: "asset/music/Hum Toh Deewane Huye Yaar - Shahrukh Khan & Twinkle Khanna _ Baadshah _ 90_s Romantic Song.m4a",
    title: "Hum Toh Deewane Huye Yaar",
    image: "asset/img/music26.jpeg",
  },
  {
    path: "asset/music/Aisa Deewana Hua Hai Ye Dil Aapke Pyar Mein Hd Video _ Sonu Nigam Hits _ Sahid Kapoor & Tulip Joshi.m4a",
    title: "Aisa Deewana Hua Hai Ye Dil Aapke Pyar Mein",
    image: "asset/img/music27.jpeg",
  },
  {
    path: "asset/music/asset/music/Kumar Sanu 90_s Hits _ Chand Se Parda Kijiye _ Aao Pyar Karen [1994] _ Saif Ali Khan & Shilpa Shetty.m4a",
    title: "Chand Se Parda Kijiye",
    image: "asset/img/music28.jpeg",
  },
  {
    path: "asset/music/LYRICAL_ Tujhe Kitna Chahne Lage _ Kabir Singh _ Mithoon Feat. Arijit Singh _ Shahid Kapoor, Kiara A.m4a",
    title: "Tujhe Kitna Chahne Lage",
    image: "asset/img/music21.jpeg",
  },
  // Add more music files as needed
];

// ========================music-player-album============================
function updateSongInfo(songs) {
  // Set the song title
  document.getElementById("songTitle").textContent = songs.title;

  // Set the song image
  document.getElementById("songImage").src = songs.image;

  // Set the song backgroundImage
  const body = document.querySelector("body");

  body.style.backgroundImage = `url('${songs.image}')`;
 
}

// =========================music-player-btn=======================
// ------Audio play------
function toggleAudio() {
  if (audio.paused) {
    audio.play();
    playerButton.innerHTML = pauseIcon;
    songImg.classList.add("spinAnimation");
  } else {
    audio.pause();
    playerButton.innerHTML = playIcon;
    songImg.classList.remove("spinAnimation");
  }
}
playerButton.addEventListener("click", toggleAudio);

//_______________forword and backword___________
// --5sec--
function backward() {
  audio.currentTime -= 5;
}
function forward() {
  audio.currentTime += 5;
}
backwardButton.addEventListener("click", backward);
forwardButton.addEventListener("click", forward);

// -------repeat song icon toggle-----
let isRandomIcon = true;
function toggleSequence() {
  if (isRandomIcon) {
    sequenceBtn.innerHTML = notRandomIcon;
  } else {
    sequenceBtn.innerHTML = randomIcon;
  }
  isRandomIcon = !isRandomIcon;
  return isRandomIcon;
}
sequenceBtn.addEventListener("click", toggleSequence);

// -------change song next and prev-----
let currentSongIndex = 0;
function playSong(index) {
  var music = songs[index];
  audio.src = music.path;
  audio.play();
  playerButton.innerHTML = pauseIcon;
  updateSongInfo(music);
  songImg.classList.add("spinAnimation");
}
// ------prev song---------
function backwardSong() {
  if (isRandomIcon) {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  } else {
    currentSongIndex = Math.floor(Math.random() * songs.length);
  }
  playSong(currentSongIndex);
}
// -----next song------------
function forwardSong() {
  if (isRandomIcon) {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  } else {
    currentSongIndex = Math.floor(Math.random() * songs.length);
  }
  playSong(currentSongIndex);
}
backwardSongButton.addEventListener("click", backwardSong);
forwardSongButton.addEventListener("click", forwardSong);

// -------------udate current time and duration--------
var currentTimeDisplay = document.getElementById("currentTime");
var totalTimeDisplay = document.getElementById("totalTime");

function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return minutes + ":" + seconds;
}
function updateTime() {
  var currentTime = formatTime(audio.currentTime);
  var totalTime = formatTime(audio.duration);
  currentTimeDisplay.textContent = currentTime;
  totalTimeDisplay.textContent = totalTime;
}

// -----------player-progress-bar------
function changeTimelinePosition() {
  const percentagePosition = (100 * audio.currentTime) / audio.duration;
  timeline.style.backgroundSize = `${percentagePosition}% 100%`;
  timeline.value = percentagePosition;
  updateTime();
}
audio.ontimeupdate = changeTimelinePosition;

function audioEnded() {
  playerButton.innerHTML = playIcon;
}
audio.onended = audioEnded;

function changeSeek() {
  const time = (timeline.value * audio.duration) / 100;
  audio.currentTime = time;
}
timeline.addEventListener("change", changeSeek);

// ========================volume-controls-btn=======================

// ------sound mute and unmute-----
function toggleSound() {
  audio.muted = !audio.muted;
  if (audio.muted) {
    soundButton.innerHTML = muteIcon;
    volumeControl.value = 1;
  } else {
    soundButton.innerHTML = soundIcon;
    volumeControl.value = 100;
  }
}
soundButton.addEventListener("click", toggleSound);

// ------volume range-------
const volumeControl = document.querySelector(".volume-control");
function changeVolume() {
  const volume = volumeControl.value / 100;
  audio.volume = volume;
  if (volumeControl.value <= 1) {
    soundButton.innerHTML = muteIcon;
  } else {
    soundButton.innerHTML = soundIcon;
  }
}
volumeControl.addEventListener("input", changeVolume);
