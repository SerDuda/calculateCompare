const outputStorage = document.querySelector('#volueStorage')
const inputStorage = document.querySelector('#storage')

const outputTransfer = document.querySelector('#volueTransfer')
const inputTransfer = document.querySelector('#transfer')

const inputs = document.querySelectorAll('input')

const priceTotalBackblaze = document.querySelector('#total-price__backblaze')
const priceTotalBunny = document.querySelector('#total-price__bunny')
const priceTotalScaleway = document.querySelector('#total-price__scaleway')
const priceTotalVultr = document.querySelector('#total-price__vultr')

const radioTypeBunny = document.querySelectorAll('input[name="bunny"]')
const radioTypeScaleway = document.querySelectorAll('input[name="scaleway"]')


function handleStorage() {
    outputStorage.value = inputStorage.value
}
inputStorage.addEventListener('input', handleStorage)


function handleTransfer() {
    outputTransfer.value = inputTransfer.value;
}
inputTransfer.addEventListener('input', handleTransfer)

//--------------1
function summaryPriceBackblaze(inputStorage, inputTransfer) {
    const partPriceStorage = 0.005;

    let inputPriceStorage = parseInt(inputStorage.value)
    let totalPriceStorage = inputPriceStorage * partPriceStorage

    const partPriceTransfer = 0.01;
    let inputPriceTransfer = parseInt(inputTransfer.value);
    let totalPriceTransfer = inputPriceTransfer * partPriceTransfer

    const totalPrice = +totalPriceStorage + +totalPriceTransfer;
    const totalPriceCompared = totalPrice <= 7
        ? priceTotalBackblaze.innerText = 7
        : priceTotalBackblaze.innerText = totalPrice.toFixed(2)

    //---------------barFill
    function move() {
        let elem = document.getElementById('backblaze-bar__value');
        let width = +priceTotalBackblaze.textContent;
        let compareAllValues = Math.min(+priceTotalBackblaze.textContent, +priceTotalBunny.textContent, +priceTotalScaleway.textContent, +priceTotalVultr.textContent);

        if(compareAllValues === width) {
            elem.style.width = `${width}%`;
            elem.style.backgroundColor = 'green'
        }else if(compareAllValues !== width) {
            elem.style.width = `${width}%`;
            elem.style.backgroundColor = 'grey'
        }
    }
    move()
}
//----------------2
function summaryPriceBunny(inputStorage, inputTransfer) {
    let inputPriceCheck;

    for (const radio of radioTypeBunny) {
        if (radio.checked) {
            inputPriceCheck = +radio.value
        }
    }

    let inputPriceStorage = parseInt(inputStorage.value)
    let totalPriceStorage = inputPriceStorage * inputPriceCheck

    const partPriceTransfer = 0.01;
    let inputPriceTransfer = parseInt(inputTransfer.value);
    let totalPriceTransfer = inputPriceTransfer * partPriceTransfer

    const totalPrice = +totalPriceStorage + +totalPriceTransfer;
    const totalPriceCompared = totalPrice > 10 ? priceTotalBunny.innerText = 10 : priceTotalBunny.innerText = totalPrice.toFixed(2)

    //------barFill
    function move() {
        let elem = document.getElementById('bunny-bar__value');
        let width = +priceTotalBunny.textContent;
        let compareAllValues = Math.min(+priceTotalBackblaze.textContent, +priceTotalBunny.textContent, +priceTotalScaleway.textContent, +priceTotalVultr.textContent);

        if(compareAllValues === width) {
            elem.style.width = `${width}%`;
            elem.style.backgroundColor = 'green'
        }else if(compareAllValues !== width) {
            elem.style.width = `${width}%`;
            elem.style.backgroundColor = 'grey'
        }
    }
    move()
}
//--------------3
function summaryPriceScaleway(inputStorage, inputTransfer) {
    let inputPriceCheck;

    for (const radio of radioTypeScaleway) {
        if (radio.checked) {
            inputPriceCheck = +radio.value
        }
    }

    let inputPriceStorage = parseInt(inputStorage.value)
    let totalPriceStorage = inputPriceStorage <= 75
        ? priceTotalScaleway.innerText = 0
        : (inputPriceStorage - 75) * inputPriceCheck;


    let partPriceTransfer = 0.02
    let inputPriceTransfer = parseInt(inputTransfer.value);

    let totalPriceTransfer = inputPriceTransfer <= 75
        ? priceTotalScaleway.innerText = 0
        : (inputPriceTransfer - 75) * partPriceTransfer

    const totalPrice = +totalPriceStorage + +totalPriceTransfer;
    priceTotalScaleway.innerText = totalPrice.toFixed(2)

    //---------------barFill
    function move() {
        let elem = document.getElementById('scaleway-bar__value');
        let width = +priceTotalScaleway.textContent;
        let compareAllValues = Math.min(+priceTotalBackblaze.textContent, +priceTotalBunny.textContent, +priceTotalScaleway.textContent, +priceTotalVultr.textContent);

        if(compareAllValues === width) {
            elem.style.width = `${width}%`;
            elem.style.backgroundColor = 'green'
        }else if(compareAllValues !== width) {
            elem.style.width = `${width}%`;
            elem.style.backgroundColor = 'grey'
        }
    }
    move()
}



//--------------4
function summaryPriceVultr(inputStorage, inputTransfer) {
    const partPriceStorage = 0.01;
    let inputPriceStorage = parseInt(inputStorage.value)
    let totalPriceStorage = inputPriceStorage * partPriceStorage


    const partPriceTransfer = 0.01;
    let inputPriceTransfer = parseInt(inputTransfer.value);
    let totalPriceTransfer = (inputPriceTransfer * partPriceTransfer)

    const totalPrice = +totalPriceStorage + +totalPriceTransfer;
    const totalPriceCompared = totalPrice <= 5 ? priceTotalVultr.innerText = 5 : priceTotalVultr.innerText = totalPrice.toFixed(2)

    //---------------barFill
    function move() {
        let elem = document.getElementById('vultr-bar__value');
        let width = +priceTotalVultr.textContent;
        let compareAllValues = Math.min(+priceTotalBackblaze.textContent, +priceTotalBunny.textContent, +priceTotalScaleway.textContent, +priceTotalVultr.textContent);

        if(compareAllValues === width) {
            elem.style.width = `${width}%`;
            elem.style.backgroundColor = 'green'
        }else if(compareAllValues !== width) {
            elem.style.width = `${width}%`;
            elem.style.backgroundColor = 'grey'
        }
    }
    move()
}

for (const input of inputs) {
    input.addEventListener('input', function () {
        summaryPriceBackblaze(inputStorage, inputTransfer);
        summaryPriceVultr(inputStorage, inputTransfer);
        summaryPriceBunny(inputStorage, inputTransfer);
        summaryPriceScaleway(inputStorage, inputTransfer)
    })
}
