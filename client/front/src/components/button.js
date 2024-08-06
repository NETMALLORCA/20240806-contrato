class Button extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
            *{
                box-sizing: border-box;
            }
        </style>

        <button class="send-button">Enviar</button>
        `

    const button = this.shadow.querySelector('.send-button')

    button.addEventListener('click', async () => {
      let response = await fetch('https://catalegdades.caib.cat/resource/anss-9wx4.json')
      const data = await response.json()

      response = await fetch(`${import.meta.env.VITE_API_URL}/api/front/contratos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    })
  }
}

customElements.define('button-component', Button)
