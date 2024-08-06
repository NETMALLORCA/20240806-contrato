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
      let response = await fetch(https://catalegdades.caib.cat/resource/anss-9wx4.json)
      let data = await response.json()

      response = await fetch(data.datos)
      data = await response.json()

      data = data.map(element => {
        const newElement = {}

        Object.entries(element).forEach(([key, value]) => {
          newElement[key] = value.replace(',', '.')
        })

        return newElement
      })

      response = await fetch(`${import.meta.env.VITE_API_URL}/api/front/contrato`, {
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
