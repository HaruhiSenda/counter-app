let total = 0;
/*結果表示設定*/
const result = document.querySelector("#counter");
function updateCounterDisplay(){
    result.textContent = total;
}
/*ボタン処理エリア*/
const increaseButton = document.querySelector("#increase");
const decreaseButton = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");
increaseButton.addEventListener("click", () => {
    total ++;
    updateCounterDisplay()
});
decreaseButton.addEventListener("click", () => {
    total --;
    updateCounterDisplay()
});
resetButton.addEventListener("click", () => {
    total = 0;
    updateCounterDisplay()
});


