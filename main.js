const dlg = document.getElementById('player');
const vid = dlg.querySelector('video');
const title = dlg.querySelector('strong');

function closePlayer() {
  vid.pause();
  dlg.close();
}

document.querySelectorAll('[data-video]').forEach(btn => {
  btn.addEventListener('click', () => {
    vid.src = btn.dataset.video;
    vid.poster = btn.dataset.poster || '';
    title.textContent = btn.dataset.title;
    dlg.showModal();
    vid.play().catch(() => {});
  });
});

dlg.querySelector('button').addEventListener('click', closePlayer);
dlg.addEventListener('click', e => { if (e.target === dlg) closePlayer(); });
dlg.addEventListener('close', () => vid.pause());
