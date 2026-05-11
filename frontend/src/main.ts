// Audio setup
const audio = new Audio('/song.mp3')  // apni file ka naam likho
audio.loop = true

const btn = document.getElementById('music-btn')!
let playing = false

btn.addEventListener('click', () => {
  if (playing) {
    audio.pause()
    btn.textContent = '🎵 Play Music'
  } else {
    audio.play()
    btn.textContent = '⏸ Pause Music'
  }
  playing = !playing
})
