// Sign-out confirmation modal — shared across all pages
(function () {
  const css = `
    .so-overlay{position:fixed;inset:0;background:rgba(5,12,22,0.88);z-index:2000;display:none;align-items:center;justify-content:center;padding:1rem}
    .so-overlay.show{display:flex}
    .so-card{background:#162234;border:1px solid rgba(255,255,255,0.08);border-top:3px solid #C0150F;padding:2.25rem 2rem;max-width:360px;width:100%;text-align:center}
    .so-icon{font-size:2.2rem;margin-bottom:0.85rem}
    .so-card h3{font-family:'Bebas Neue',sans-serif;font-size:1.7rem;letter-spacing:0.04em;margin-bottom:0.4rem;color:#F8F6F2}
    .so-card p{font-size:0.84rem;color:#A8A8A4;margin-bottom:1.75rem;line-height:1.65}
    .so-btns{display:flex;gap:0.75rem}
    .so-btns button{flex:1;padding:0.8rem;font-family:'Barlow',sans-serif;font-size:0.76rem;letter-spacing:0.12em;text-transform:uppercase;font-weight:600;cursor:pointer;transition:all 0.2s;border:1px solid}
    .so-btn-cancel{background:transparent;border-color:rgba(255,255,255,0.12);color:#A8A8A4}
    .so-btn-cancel:hover{border-color:rgba(255,255,255,0.3);color:#F8F6F2}
    .so-btn-confirm{background:#C0150F;border-color:#C0150F;color:#fff}
    .so-btn-confirm:hover{background:#8B0E09;border-color:#8B0E09}
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const modal = document.createElement('div');
  modal.id = 'soModal';
  modal.className = 'so-overlay';
  modal.innerHTML = `
    <div class="so-card">
      <div class="so-icon">&#128274;</div>
      <h3>Sign Out</h3>
      <p>Are you sure you want to sign out of your account?</p>
      <div class="so-btns">
        <button class="so-btn-cancel" onclick="closeSoModal()">Cancel</button>
        <button class="so-btn-confirm" onclick="signOut()">Yes, Sign Out</button>
      </div>
    </div>
  `;

  // Wait for DOM to be ready
  if (document.body) {
    document.body.appendChild(modal);
  } else {
    document.addEventListener('DOMContentLoaded', () => document.body.appendChild(modal));
  }

  // Close on backdrop click
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeSoModal();
  });
})();

function confirmSignOut() {
  document.getElementById('soModal').classList.add('show');
}
function closeSoModal() {
  document.getElementById('soModal').classList.remove('show');
}
