const convertButton = document.querySelector(".convert-button") //variável do botão
const currencySelectConvert = document.querySelector(".currency-select-convert") //variável do seletor de qual converter
const currencySelect = document.querySelector(".currency-select") //variável do seletor para qual converter


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value //valor do input
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor a ser convertido
    const currencyValueConverted = document.querySelector(".currency-value") //valor convertido

    //variável do real
    const dolarTodayR = 5.2
    const euroTodayR = 6.2
    const libraTodayR = 7.4
    const bitcoinTodayR = 593022.90

    //variável dolar
    const realTodayD = 0.18
    const euroTodayD = 1.18
    const libraTodayD = 1.37
    const bitcoinTodayD = 108090.10

    //variável euro
    const realTodayE = 0.16
    const libraTodayE = 1.16
    const bitcoinTodayE = 91780.43
    const dolarTodayE = 0.85

    //variável libra
    const realTodayL = 0.14
    const bitcoinTodayL = 79316.44
    const dolarTodayL = 0.73
    const euroTodayL = 0.86

    //variável bitcoin
    const realTodayB = 0.0000017
    const libraTodayB = 0.000013
    const dolarTodayB = 0.0000092
    const euroTodayB = 0.000011

    //CONVERÇÃO PARA REAL:

    if (currencySelectConvert.value == "real" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarTodayR)
    }

    if (currencySelectConvert.value == "real" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroTodayR)
    }

    if (currencySelectConvert.value == "real" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraTodayR)
    }

    if (currencySelectConvert.value == "real" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinTodayR)
    }

    if (currencySelectConvert.value == "real" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    //CONVERÇÃO PARA DÓLAR:

    if (currencySelectConvert.value == "dolar" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realTodayD)
    }

    if (currencySelectConvert.value == "dolar" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroTodayD)
    }

    if (currencySelectConvert.value == "dolar" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraTodayD)
    }

    if (currencySelectConvert.value == "dolar" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinTodayD)
    }

    if (currencySelectConvert.value == "dolar" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }


//CONVERÇÃO PARA EURO:

    if (currencySelectConvert.value == "euro" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realTodayE)
    }

    if (currencySelectConvert.value == "euro" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarTodayE)
    }

    if (currencySelectConvert.value == "euro" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraTodayE)
    }

    if (currencySelectConvert.value == "euro" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinTodayE)
    }

    if (currencySelectConvert.value == "euro" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }


//CONVERÇÃO PARA LIBRA:

    if (currencySelectConvert.value == "libra" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realTodayL)
    }

    if (currencySelectConvert.value == "libra" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarTodayL)
    }

    if (currencySelectConvert.value == "libra" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroTodayL)
    }

    if (currencySelectConvert.value == "libra" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinTodayL)
    }

    if (currencySelectConvert.value == "libra" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }


    //CONVERÇÃO PARA BITCOIN:

    if (currencySelectConvert.value == "bitcoin" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realTodayB)
    }

    if (currencySelectConvert.value == "bitcoin" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarTodayB)
    }

    if (currencySelectConvert.value == "bitcoin" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroTodayB)
    }

    if (currencySelectConvert.value == "bitcoin" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraTodayB)
    }

    if (currencySelectConvert.value == "bitcoin" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }




    //pegar o valor do input e colocar no valor a ser convertido (neste caso ainda só tem o real)
    if (currencySelectConvert.value == "real")
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    if (currencySelectConvert.value == "dolar")
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue)

    if (currencySelectConvert.value == "euro")
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue)

    if (currencySelectConvert.value == "libra")
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue)

    if (currencySelectConvert.value == "bitcoin")
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name") //variável do nome da moeda a ser convertida
    const currencyimage = document.querySelector(".currency-img") //variável da imagem da moeda a ser convertida

    //se é selecionado o dolar no seletor então escreva dólar americano no nome da moeda a ser convertida e troque a imagem
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyimage.src = "./assets/dolar.png"
    }

    //se é selecionado o euro no seletor então escreva euro no nome da moeda a ser convertida e troque a imagem
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyimage.src = "./assets/euro.png"
    }

    //se é selecionado o libra no seletor então escreva libra no nome da moeda a ser convertida e troque a imagem
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyimage.src = "./assets/libra.png"
    }

    //se é selecionado o bitcoin no seletor então escreva bitcoin no nome da moeda a ser convertida e troque a imagem
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyimage.src = "./assets/bitcoin.png"
    }

    convertValues()

}

function changeCurrencyConvert() {
    const currencyNameConvert = document.getElementById("currency-name-convert") //variável do nome da moeda a converter
    const currencyImageConvert = document.querySelector(".currency-img-convert") ////variável da imagem da moeda a converter

    //se é selecionado o dolar no 1º seletor então escreva dolar no nome da moeda a converter e troque a imagem
    if (currencySelectConvert.value == "dolar") {
        currencyNameConvert.innerHTML = "Dólar Americano"
        currencyImageConvert.src = "./assets/dolar.png"
    }

    //se é selecionado o euro no 1º seletor então escreva euro no nome da moeda a converter e troque a imagem
    if (currencySelectConvert.value == "euro") {
        currencyNameConvert.innerHTML = "Euro"
        currencyImageConvert.src = "./assets/euro.png"
    }

    //se é selecionado o libra no 1º seletor então escreva libra no nome da moeda a converter e troque a imagem
    if (currencySelectConvert.value == "libra") {
        currencyNameConvert.innerHTML = "Libra"
        currencyImageConvert.src = "./assets/libra.png"
    }

    //se é selecionado o bitcoin no 1º seletor então escreva bitcoin no nome da moeda a converter e troque a imagem
    if (currencySelectConvert.value == "bitcoin") {
        currencyNameConvert.innerHTML = "Bitcoin"
        currencyImageConvert.src = "./assets/bitcoin.png"
    }

    //se é selecionado o bitcoin no 1º seletor então escreva bitcoin no nome da moeda a converter e troque a imagem
    if (currencySelectConvert.value == "real") {
        currencyNameConvert.innerHTML = "Real"
        currencyImageConvert.src = "./assets/real.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency) //quando ouver uma mudança no valor do 2º seletor, chame a função para trocar o nome e a imagem

convertButton.addEventListener("click", convertValues) //quando ouver um clique no botão, chame a função para converter os valores

currencySelectConvert.addEventListener("change", changeCurrencyConvert) //quando ouver uma mudança no valor do 1º seletor, chame a função para trocar o nome e a imagem
