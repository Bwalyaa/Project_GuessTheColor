
document.addEventListener("DOMContentLoaded", () => {
    const result = document.querySelector(".output");
    const resetBtn = document.querySelector(".resetMe");
    const boxes = document.querySelectorAll(".div");
    const colorRgb = document.querySelector(".colorRgb");

    const generateRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    const applyRandomColorToBoxes = () => {
        boxes.forEach(box => {
            box.style.backgroundColor = generateRandomColor();
        })
    }

    const updateRgbText = () => {
        const randomColor = generateRandomColor();
        colorRgb.textContent = `Guess what color rgb(${parseInt(randomColor.slice(1, 3), 16)}, ${parseInt(randomColor.slice(3, 5), 16)}, ${parseInt(randomColor.slice(5, 7), 16)}) is:`;
        return randomColor;
    }

    const checkColorMatch = (clickedBoxColor, targetColor) => {
        return clickedBoxColor === targetColor;
    }

    const handleBoxClick = (box) => {
        const targetColor = colorRgb.getAttribute("data-color");
        const clickedBoxColor = box.style.backgroundColor;
        if (checkColorMatch(clickedBoxColor, targetColor)) {
            result.textContent = "Du hast die richtige Farbe erraten, super!";
        } else {
            result.textContent = "Leider bist du falsch! Drücke auf reset um es erneut zu versuchen.";
        }
    }

    window.addEventListener("load", () => {
        applyRandomColorToBoxes();
        const targetColor = updateRgbText();
        colorRgb.setAttribute("data-color", targetColor);
    })

    resetBtn.addEventListener("click", () => {
        applyRandomColorToBoxes();
        const targetColor = updateRgbText();
        colorRgb.setAttribute("data-color", targetColor);
        result.textContent = "";
    })

    boxes.forEach(box => {
        box.addEventListener("click", () => {
            handleBoxClick(box);
        })
    })
})

