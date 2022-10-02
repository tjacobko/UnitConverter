let conversions = document.getElementById("conversions")
let inputNum = document.getElementById("input-num")
const convertBtn = document.getElementById("convert-btn")

const typeArr = [
    {
        type: "Length",
        metric: "meters",
        imperial: "feet"
    },
    {
        type: "Volume",
        metric: "liters",
        imperial: "gallons"
    },
    {
        type: "Mass",
        metric: "kilos",
        imperial: "pounds"
    }
]

convertBtn.addEventListener("click", function() {
    let str = ""
    let num = inputNum.value

    if (!isNumeric(num)) {
        str = `
        <div class="item">
            <h3>${num} is not a valid unit</h3>
            <p>Please enter a number</p>
        </div>
        `
    }
    else {
        for (i in typeArr) {
            let type = typeArr[i].type
            let metric = typeArr[i].metric
            let imperial = typeArr[i].imperial
            str += `
                <div class="item">
                    <h3>${type} (${metric}/${imperial})</h3>
                    <p class="par">${num} ${metric} = ${doMath(metric, num)} ${imperial} | ${num} ${imperial} = ${doMath(imperial, num)} ${metric}</p>
                </div>
            `
        }
    }

    conversions.innerHTML = str
})

function doMath(type, num) {
    if (type === "meters") {
        return (num*3.2808).toFixed(3)
    }
    else if (type === "feet") {
        return (num/3.2808).toFixed(3)
    }
    else if (type === "liters") {
        return (num/3.7854).toFixed(3)
    }
    else if (type === "gallons") {
        return (num*3.7854).toFixed(3)
    }
    else if (type === "kilos") {
        return (num*2.2046).toFixed(3)
    }
    else if (type === "pounds") {
        return (num/2.2046).toFixed(3)
    }
    else {
        return "Error!"
    }
}

function isNumeric(str) {
    if (typeof str != "string") {
        return false
    }
    return !isNaN(str) && !isNaN(parseFloat(str))
}