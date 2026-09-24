const content = document.getElementById('content');
const counter = document.getElementById('counter');
const darkColor = document.getElementById('darkColor');
const lightColor = document.getElementById('lightColor');
const darkColorText = document.getElementById('darkColorText');
const lightColorText = document.getElementById('lightColorText');
const size = document.getElementById('size');
const sizeValue = document.getElementById('sizeValue');
const generateBtn = document.getElementById('generateBtn');
const clearBtn = document.getElementById('clearBtn');
const newBtn = document.getElementById('newBtn');
const result = document.getElementById('result');
const qrcode = document.getElementById('qrcode');
const error = document.getElementById('error');
const pngBtn = document.getElementById('pngBtn');

document.getElementById('year').textContent = new Date().getFullYear();

function updateCounter() {
  counter.textContent = content.value.length.toLocaleString('pt-BR');
}

function updateColorLabels() {
  darkColorText.textContent = darkColor.value.toUpperCase();
  lightColorText.textContent = lightColor.value.toUpperCase();
}

function showError(message) {
  error.textContent = message;
  error.hidden = false;
}

function hideError() {
  error.hidden = true;
  error.textContent = '';
}

function generate() {
  const text = content.value.trim();
  hideError();

  if (!text) {
    showError('Digite ou cole algum conteúdo para gerar o QR Code.');
    content.focus();
    return;
  }

  if (typeof QRCode === 'undefined') {
    showError('A biblioteca do gerador não carregou. Atualize a página e tente novamente.');
    return;
  }

  try {
    qrcode.innerHTML = '';
    const px = Number(size.value);
    new QRCode(qrcode, {
      text,
      width: px,
      height: px,
      colorDark: darkColor.value,
      colorLight: lightColor.value,
      correctLevel: QRCode.CorrectLevel.H
    });
    result.hidden = false;
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } catch (err) {
    showError('Não foi possível gerar este conteúdo. Tente um texto menor.');
    console.error(err);
  }
}

function resetGenerator() {
  content.value = '';
  qrcode.innerHTML = '';
  result.hidden = true;
  hideError();
  updateCounter();
  content.focus();
}

function downloadPng() {
  const canvas = qrcode.querySelector('canvas');
  const image = qrcode.querySelector('img');

  if (canvas) {
    const link = document.createElement('a');
    link.download = 'qrgratison.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    return;
  }

  if (image?.src) {
    const link = document.createElement('a');
    link.download = 'qrgratison.png';
    link.href = image.src;
    link.click();
    return;
  }

  showError('Gere o QR Code antes de baixar.');
}

content.addEventListener('input', updateCounter);
content.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') generate();
});
clearBtn.addEventListener('click', resetGenerator);
newBtn.addEventListener('click', resetGenerator);
generateBtn.addEventListener('click', generate);
pngBtn.addEventListener('click', downloadPng);
darkColor.addEventListener('input', updateColorLabels);
lightColor.addEventListener('input', updateColorLabels);
size.addEventListener('input', () => { sizeValue.textContent = `${size.value}px`; });

updateCounter();
updateColorLabels();
