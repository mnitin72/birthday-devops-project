import './style.css'

const audio = new Audio('/song.mp3')
audio.loop = true
let playing = false

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="fairy-bg">
  <div class="stars-container" id="stars"></div>
  <div class="content">
    <div class="crown">👑</div>
    <div class="title-box">
      <div class="subtitle-tag">✦ Once Upon A Birthday ✦</div>
      <div class="main-title">Happy Birthday</div>
      <div class="main-title big">NS</div>
      <div class="divider"></div>
      <div class="birthday-label">A Fairy Tale Celebration</div>
    </div>
    <button id="music-btn">🎵 Play Music</button>
    <div class="wish-card">
      <p class="wish-text">
        Aaj ke is khaas din mein,<br>
        jab tare bhi muskura rahe hain<br>
        aur farishte bhi gungunaa rahe hain —<br><br>
        <em>tujhe duniya ki saari khushiyaan milengi,</em><br>
        har sapna sach hoga,<br>
        har raat mein chand roshan rahega,<br>
