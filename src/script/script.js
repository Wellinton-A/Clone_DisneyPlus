document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const containers = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            hideContainer()
            const abaAlvo = botao.target.getAttribute('data-tab-button')
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            aba.classList.remove('shows__list--hide')
        })
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            hideBorder()
            const abaAlvo = botao.target
            abaAlvo.classList.add('shows__tabs__item--selected')
        })
    }

    function hideBorder() {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows__tabs__item--selected')
        }
    }

    function hideContainer() {
        for (let i = 0; i < containers.length; i++) {
            containers[i].classList.add('shows__list--hide')
        }
    }
})

