var filter_btn = document.querySelector(".filter_btn").children;
var parent_div = document.querySelector(".parent_div").children;

for (var i = 0; i < filter_btn.length; i++){
    filter_btn[i].addEventListener("click", function () {
        for (let j = 0; j < filter_btn.length; j++){
            filter_btn[j].classList.remove("active");
        }
        this.classList.add("active");
        let target = this.getAttribute("data-target");
        for (let k = 0; i < parent_div.length; k++){
            parent_div[k].style.display = "none";
            if (target == parent_div[k].getAttribute("data-id")) {
                parent_div[k].style.display = "block";
            }
            if (target == "all") {
                parent_div[k].style.display = "block";
            }
        }
    })
}
