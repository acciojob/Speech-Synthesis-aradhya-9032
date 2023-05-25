// Your script here.

// Get the necessary elements
const voiceSelect = document.getElementById('voices');
const rateInput = document.querySelector('input[name="rate"]');
const pitchInput = document.querySelector('input[name="pitch"]');
const textInput = document.querySelector('textarea[name="text"]');
const speakButton = document.getElementById('speak');
const stopButton = document.getElementById('stop');
let speechSynthesis = window.speechSynthesis;
let voices = [];

// Function to populate the voice selection dropdown
function populateVoices() {
  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

// Function to start speaking
function startSpeaking() {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }

  const selectedVoice = voiceSelect.value;
  const selectedRate = rateInput.value;
  const selectedPitch = pitchInput.value;
  const text = textInput.value.trim();

  if (text !== '') {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices.find(voice => voice.name === selectedVoice);
    utterance.rate = selectedRate;
    utterance.pitch = selectedPitch;

    speechSynthesis.speak(utterance);
  }
}

// Function to stop speaking
function stopSpeaking() {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
}

// Event listeners
speechSynthesis.addEventListener('voiceschanged', populateVoices);
speakButton.addEventListener('click', startSpeaking);
stopButton.addEventListener('click', stopSpeaking);




 // const textInput = document.getElementById('text');
 //    const voiceSelect = document.getElementById('voices');
 //    const startButton = document.getElementById('start');
 //    const stopButton = document.getElementById('stop');
 //    const rateInput = document.getElementById('rate');
 //    const pitchInput = document.getElementById('pitch');
 //    let speechSynthesis = window.speechSynthesis;
 //    let voices = [];

 //    function populateVoices() {
 //      voices = speechSynthesis.getVoices();
 //      voiceSelect.innerHTML = voices
 //        .filter(voice => voice.lang.includes('en'))
 //        .map(voice => `<option value="${voice.name}">${voice.name}</option>`)
 //        .join('');
 //    }

 //    function startSpeaking() {
 //      if (speechSynthesis.speaking) {
 //        speechSynthesis.cancel();
 //      }

 //      const text = textInput.value.trim();
 //      if (text !== '') {
 //        const selectedVoice = voiceSelect.value;
 //        const selectedRate = rateInput.value;
 //        const selectedPitch = pitchInput.value;

 //        const utterance = new SpeechSynthesisUtterance(text);
 //        utterance.voice = voices.find(voice => voice.name === selectedVoice);
 //        utterance.rate = selectedRate;
 //        utterance.pitch = selectedPitch;

 //        speechSynthesis.speak(utterance);
 //      }
 //    }

 //    function stopSpeaking() {
 //      if (speechSynthesis.speaking) {
 //        speechSynthesis.cancel();
 //      }
 //    }

 //    // Initialize the voice selection dropdown
 //    populateVoices();

 //    // Event listeners
 //    speechSynthesis.addEventListener('voiceschanged', populateVoices);
 //    startButton.addEventListener('click', startSpeaking);
 //    stopButton.addEventListener('click', stopSpeaking);