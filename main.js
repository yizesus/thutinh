// Thay đổi nội dung búc thư ở đây
var letterContent ="Gửi Mia, Anh viết những dòng này với tất cả sự biết ơn trong lòng, chỉ để nói một điều đơn giản mà thật ra anh đã muốn nói rất nhiều lần: Cảm ơn em. Cảm ơn em vì đã ở bên anh – trong những ngày vui, và cả những lúc anh chẳng được như ý. Cảm ơn em vì đã kiên nhẫn, vì đã mỉm cười, vì đã nhẹ nhàng khi anh cần một bờ vai. Không phải ai cũng có thể làm được điều đó – nhưng em đã làm, và còn làm tốt hơn cả những gì anh tưởng. Anh biết không phải lúc nào cũng dễ dàng, nhưng chính sự hiện diện của em, sự dịu dàng và ấm áp mà em mang đến, đã khiến mọi thứ trở nên nhẹ nhàng hơn. Nhờ có em, anh học cách yêu thương đúng nghĩa – không phải bằng lời nói, mà bằng hành động, bằng sự thấu hiểu và sẻ chia mỗi ngày. Anh thật sự trân trọng những khoảnh khắc mình có cùng nhau. Và anh hy vọng, rất hy vọng, rằng chúng ta sẽ còn tiếp tục viết nên những kỷ niệm đẹp nữa. Một lần nữa, cảm ơn em đã ở bên anh. Thương và yêu em ❤️ Quang"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Store timeouts to clear them later
let writeTimeouts = [];
let currentIndex = 0; // Track the current index of the text

// Hiệu ứng gõ chữ
function effectWrite() {
    var boxLetter = document.querySelector(".letterContent");
    letterContentSplited = letterContent.split("");

    // Clear previous timeouts
    writeTimeouts.forEach(timeout => clearTimeout(timeout));
    writeTimeouts = [];

    // Add new timeouts for writing text starting from the current index
    for (let i = currentIndex; i < letterContentSplited.length; i++) {
        const timeout = setTimeout(() => {
            boxLetter.innerHTML += letterContentSplited[i];
            currentIndex = i + 1; // Update the current index
        }, durationWrite * (i - currentIndex));
        writeTimeouts.push(timeout);
    }
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
    document.addEventListener("click", () => {
      const audio = document.getElementById("myAudio");
      audio.play().catch(error => {
        console.error("Audio play failed:", error);
      });
    }, { once: true }); // Only allows the audio to play once on first click
})

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
    const cardValentine = document.querySelector(".cardValentine");
    const container = document.querySelector(".container");

    // Activate the card and close the container
    cardValentine.classList.add("active");
    container.classList.add("close");

    // Reset text and index when reopening the card
    document.querySelector(".letterContent").innerHTML = "";
    currentIndex = 0;

    // Start the text animation when the card is opened
    setTimeout(effectWrite, 500);
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open");

    if (cardValentine.classList.contains("open")) {
        // Start the text animation when the card is opened
        setTimeout(effectWrite, 500);
    } else {
        // Clear timeouts and pause text when closing the card
        writeTimeouts.forEach(timeout => clearTimeout(timeout));
        writeTimeouts = [];
    }
});