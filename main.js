const alternadorPesquisa = (pesquisa, button) =>{
    const pesquisaBar = document.getElementById(pesquisa),
        pesquisaButton = document.getElementById(button)
    
    pesquisaButton.addEventListener('click', () =>{
        pesquisaBar.classList.toggle('mostrar-pesquisa')
    })
}

alternadorPesquisa('barra-de-pesquisa','pesquisa-button')