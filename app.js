// дом элементы: инпуты и кнопка
let textElem = document.querySelector('.main__text')
let amountElem = document.querySelector('.main__amount')
let addBtn = document.querySelector('.main__add')
let mainOut = document.querySelector('.main__out')
let mainRemove = document.querySelector('.main__remove')

addBtn.disabled = true
// значения инпутов
let textValue = ''
let amountValue = null

// массивы данных

let allProducts = [
    {name: 'имбирь', value: 0},
    {name: 'облепиха', value: 0},
    {name: 'мята', value: 0},
    {name: 'апельсин', value: 0},
    {name: 'лайм', value: 0},
    {name: 'лимон', value: 0},
    {name: 'грейпфрут', value: 0},
    {name: 'мёд', value: 0},
    {name: 'сироп', value: 0},
    {name: 'клюква', value: 0},
    {name: 'апельсиновый сок', value: 0},
    {name: 'чай черный', value: 0},
    {name: 'сахар', value: 0},
]   


let drinks = [
    {
        name: 'мб/облепиховый чай с имбирем',
        products: [
            {name: 'сироп', value: 0, q: 0.04},
            {name: 'имбирь', value: 0, q: 0.012},
            {name: 'облепиха', value: 0, q: 0.05},
            {name: 'мята', value: 0, q: 0.008},
            {name: 'мёд', value: 0, q: 0.04}
        ]
    },
    {
        name: 'мб/вечерний чай/клюквенный', 
        products: [
            {name: 'клюква', value: 0, q: 0.064},
            {name: 'грейпфрут', value: 0, q: 0.2},
            {name: 'мёд', value: 0, q: 0.053}
        ]
    },
    {
        name: 'мб/имунный сбор', 
        products: [
            {name: 'лайм', value: 0, q: 0.027},
            {name: 'имбирь', value: 0, q: 0.018},
            {name: 'апельсин', value: 0, q: 0.08},
            {name: 'мята', value: 0, q: 0.006},
            {name: 'мёд', value: 0, q: 0.08}
        ]
    },
    {
        name: 'мб/согревающий чай', 
        products: [
            {name: 'имбирь', value: 0, q: 0.02},
            {name: 'лимон', value: 0, q: 0.11},
            {name: 'мёд', value: 0, q: 0.09}
        ]
    },
    {
        name: 'мб/чай черный с облепихой', 
        products: [
            {name: 'облепиха', value: 0, q: 0.1},
            {name: 'мята', value: 0, q: 0.006},
            {name: 'апельсин', value: 0, q: 0.035},
            {name: 'сироп', value: 0, q: 0.01},
            {name: 'апельсиновый сок', value: 0, q: 0.05},
            {name: 'чай черный', value: 0, q: 0.006}
        ]
    }
]



// получение данных из инпутов 
function addData(callback1, callback2) {
textElem.addEventListener('input', (event) => {
    textValue = event.target.value
    callback1(textValue)
})

amountElem.addEventListener('input', (event) => {
    amountValue = event.target.value
    callback2(amountValue)
})
}

addData(test1, test2)
let tr = false
function test1(text) {
    if(text) {
        return tr = true
    }
}

let tr2 = false
function test2(amount) {
    if(amount && tr) {
        addBtn.disabled = false
    }
}



// добавление данных из инпутов в массив

addBtn.addEventListener('click', () => {
    let filtered = drinks.find(el => el.name === textValue)
    filtered.products.forEach(el => el.value += amountValue * el.q)
    for (let i = 0; i < allProducts.length; i++) {
        cache = allProducts[i].name
        for(let i = 0; i < filtered.products.length; i++) {
            if(cache === filtered.products[i].name) {
                let res = allProducts.filter(e => {
                    return e.name === filtered.products[i].name
                })
                res.forEach(e => e.value = filtered.products[i].value)
            }
        }
    }
    mainOut.innerHTML = ''
    allProducts.filter(e => e.value !== 0).forEach(e => {
        mainOut.insertAdjacentHTML('afterbegin', `<li>${e.name}: ${e.value}</li>`)
        
    })
})

mainRemove.addEventListener('click', () => {
    textElem.value = ''
})
