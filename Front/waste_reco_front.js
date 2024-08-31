// script.js
document.getElementById("moreBtn").addEventListener("click", function() {
    // 페이지 전환 로직
    window.location.href = "recycling-detection.html";
});

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onstart = function() {
        console.log('음성 인식이 시작되었습니다.');
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        console.log('인식된 텍스트:', transcript);
        if (transcript.toLowerCase().includes('more')) {
            window.location.href = "recycling-detection.html";
        }
    };

    // 음성 인식을 시작하기 위한 버튼이나 자동 시작할 수 있습니다.
    recognition.start();
} else {
    console.log('이 브라우저는 음성 인식을 지원하지 않습니다.');
}
