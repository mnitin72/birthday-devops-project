import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<div class="fairy-bg"><div class="stars-container" id="stars"></div><div class="content"><div class="crown">👑</div><div class="title-box"><div class="subtitle-tag">✦ Once Upon A Birthday ✦</div><div class="main-title">Happy Birthday</div><div class="main-title big">NS</div><div class="divider"></div><div class="birthday-label">A Fairy Tale Celebration</div></div><div class="yt-box"><iframe width="300" height="80" src="https://www.youtube.com/embed/oPXULAExv4g?controls=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="wish-card"><p class="wish-text">Aaj ke is khaas din mein, jab tare bhi muskura rahe hain — tujhe duniya ki saari khushiyaan milengi, har sapna sach hoga. Tere liye yeh fairy tale sirf shuru hoti hai aaj. 🌟</p></div><div class="footer-glow">✦ May your every wish come true ✦</div></div></div>`

const starsContainer = document.getElementById('stars')!
for (let i = 0; i < 80; i++) {
  const star = document.createElement('div')
  star.className = 'star'
  const size = Math.random() * 3 + 1
  star.style.cssText = `width:${size}px;height:${size}px;top:${Math.random()*100}%;left:${Math.random()*100}%;--dur:${Math.random()*3+1.5}s;animation-delay:${Math.random()*3}s;`
  starsContainer.appendChild(star)
}
