// Thay đổi nội dung búc thư ở đây
var letterContent ="Gửi Mia, Anh viết những dòng này với tất cả sự biết ơn trong lòng, chỉ để nói một điều đơn giản mà thật ra anh đã muốn nói rất nhiều lần: Cảm ơn em. Cảm ơn em vì đã ở bên anh – trong những ngày vui, và cả những lúc anh chẳng được như ý. Cảm ơn em vì đã kiên nhẫn, vì đã mỉm cười, vì đã nhẹ nhàng khi anh cần một bờ vai. Không phải ai cũng có thể làm được điều đó – nhưng em đã làm, và còn làm tốt hơn cả những gì anh tưởng. Anh biết không phải lúc nào cũng dễ dàng, nhưng chính sự hiện diện của em, sự dịu dàng và ấm áp mà em mang đến, đã khiến mọi thứ trở nên nhẹ nhàng hơn. Nhờ có em, anh học cách yêu thương đúng nghĩa – không phải bằng lời nói, mà bằng hành động, bằng sự thấu hiểu và sẻ chia mỗi ngày. Anh thật sự trân trọng những khoảnh khắc mình có cùng nhau. Và anh hy vọng, rất hy vọng, rằng chúng ta sẽ còn tiếp tục viết nên những kỷ niệm đẹp nữa. Một lần nữa, cảm ơn em đã ở bên anh. Thương và yêu em"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
	const audio = document.getElementById("myAudio");
	audio.play().catch(e => {
	console.log("Autoplay failed. Waiting for user interaction.");
	});
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})