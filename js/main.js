const shareBtn = document.getElementById('shareBtn');
if (shareBtn) {
shareBtn.addEventListener('click', (e) => {
e.preventDefault();
const shareData = {
title: 'Avós Digitais - Segurança na Internet',
text: 'Vamos juntos construir uma internet mais segura para todas as gerações. Conheça o Avós Digitais!',
url: window.location.href
};


if (navigator.share) {
navigator.share(shareData).catch(() => {});
} else {
navigator.clipboard?.writeText(window.location.href).then(() => {
alert('Link copiado para a área de transferência!');
}).catch(() => {
window.location.href = window.location.href;
});
}
});
}