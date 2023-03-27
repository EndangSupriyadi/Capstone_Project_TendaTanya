class NavBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <header class="header-area">
            <a href="/"><img src="" class="logo" alt="gambar_logo"></a>
        </header>
        `;
    }
}
customElements.define('nav-bar', NavBar);