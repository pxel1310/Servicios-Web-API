// Gracias por no usaso ; , pero al final el interprete los agrega xD

const doujutsus = "./src/json/dojutsus.json"

let rango = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)

const info = async (idB) => {
  const portador = document.querySelector(".modal-header")
  const portador2 = document.querySelector(".modal-body")

  const fragment = new DocumentFragment()
  const fragment2 = new DocumentFragment()

  const response = await fetch(doujutsus)
  const data = await response.json()
  portador.innerHTML = ""

  data.forEach((douj) => {
    if (douj["id"] == idB) {
      const h2 = document.createElement("h2")
      h2.textContent = douj.title
      h2.setAttribute("class", "modal-title")

      fragment.appendChild(h2)

      if (!document.getElementById("modalP")) {
        var p = document.createElement("p")
        p.setAttribute("id", "modalP")
        // Porqueria y media xd, hasta apenas me entero que exite el setAtribute
        fragment2.appendChild(p)
        portador2.appendChild(fragment2)
      }
      document.getElementById("modalP").textContent = douj.description
    }
  })
  portador.appendChild(fragment)
}

const getDo = async () => {
  const portador = document.querySelector(".cards_doujutsus")
  const fragment = new DocumentFragment()

  const response = await fetch(doujutsus)
  const data = await response.json()
  portador.innerHTML = ""

  const min = 1
  const max = 9

  data.forEach((douj) => {
    if (
      douj["id"] == rango(max, min) ||
      douj["id"] == rango(max, min) ||
      douj["id"] == rango(max, min)
    ) {
      const div = document.createElement("div")
      div.classList.add("dou-item")

      const h2 = document.createElement("h2")
      h2.textContent = douj.title

      const img = document.createElement("img")
      img.src = douj.url

      const button = document.createElement("button")
      const buttonText = document.createTextNode("+ Info")
      button.appendChild(buttonText)
      button.type = "button"
      button.setAttribute("data-bs-toggle", "modal")
      button.setAttribute("data-bs-target", "#mimodal")
      button.onclick = () => info(douj.id)

      div.appendChild(h2)
      div.appendChild(img)
      div.appendChild(button)

      if (douj["sound"] != "") {
        const buttonSd = document.createElement("button")
        const buttonTextSd = document.createTextNode("Sonido")
        buttonSd.appendChild(buttonTextSd)
        buttonSd.type = "button"
        buttonSd.setAttribute("id", "sd")

        buttonSd.addEventListener("click", () => {
          let etiquetaAudio = document.createElement("audio")
          etiquetaAudio.setAttribute("src", douj.sound)
          etiquetaAudio.play()
        })

        div.appendChild(buttonSd)
      }

      fragment.appendChild(div)
    }
  })
  portador.appendChild(fragment)
}

const getUsu = async () => {
  const portador = document.querySelector(".cards_usuarios")
  const fragment = new DocumentFragment()

  const response = await fetch(doujutsus)
  const data = await response.json()

  portador.innerHTML = ""
  
  // GOD 20/10
  const min = 1
  const max = 51

  data.forEach((dou) => {
    const usu = dou["usuarios"]

    usu.forEach((douj) => {
      if (
        douj["id"] == rango(max, min) ||
        douj["id"] == rango(max, min) ||
        douj["id"] == rango(max, min) ||
        douj["id"] == rango(max, min) ||
        douj["id"] == rango(max, min) ||
        douj["id"] == rango(max, min)
      ) {
        const div = document.createElement("div")
        div.classList.add("user-item")
        const h2 = document.createElement("h2")
        h2.textContent = douj.usuario

        const p = document.createElement("p")
        p.textContent = "Clan: " + douj.clan
        // Nerfeen a los Uchihas
        const p2 = document.createElement("p")
        p2.textContent = douj.dojutsu

        const img = document.createElement("img")
        img.src = douj.url

        div.appendChild(h2)
        div.appendChild(p2)
        div.appendChild(p)
        div.appendChild(img)
        fragment.appendChild(div)
      }
    })
  })
  portador.appendChild(fragment)
}

const getUsuSearch = async () => {
  const portador = document.querySelector(".cards_usuarios")
  const fragment = new DocumentFragment()

  const response = await fetch(doujutsus)
  const data = await response.json()

  portador.innerHTML = ""

  let serch = String(document.querySelector("#bMiem").value)
  serch = serch.toLowerCase().trim()
  console.log(serch)

  data.forEach((dou) => {
    const usu = dou["usuarios"]

    usu.forEach((douj) => {
      let qwe = douj["usuario"]
      let weq = douj["dojutsu"]
      let ewq = douj["usuario"]

      qwe = qwe.toLowerCase().trim()
      weq = weq.toLowerCase().trim()
      ewq = ewq.toLowerCase().trim()

      if (qwe.includes(serch) || weq.includes(serch) || ewq.includes(serch)) {
        const div = document.createElement("div")
        div.classList.add("user-item")
        // Hola, Goku SSJ 100 por favor
        const h2 = document.createElement("h2")
        h2.textContent = douj.usuario

        const p = document.createElement("p")
        p.textContent = "Clan: " + douj.clan
        const p2 = document.createElement("p")
        p2.textContent = douj.dojutsu

        const img = document.createElement("img")
        img.src = douj.url

        div.appendChild(h2)
        div.appendChild(p2)
        div.appendChild(p)
        div.appendChild(img)
        fragment.appendChild(div)
      }
    })
  })
  portador.appendChild(fragment)
}

const getDoAll = async () => {
  const portador = document.querySelector(".cards_doujutsus")
  const fragment = new DocumentFragment()

  const response = await fetch(doujutsus)
  const data = await response.json()
  portador.innerHTML = ""

  data.forEach((douj) => {
    const div = document.createElement("div")
    div.classList.add("dou-item")

    const h2 = document.createElement("h2")
    h2.textContent = douj.title

    const img = document.createElement("img")
    img.src = douj.url

    const button = document.createElement("button")
    const buttonText = document.createTextNode("+ Info")
    button.appendChild(buttonText)
    button.type = "button"
    button.setAttribute("data-bs-toggle", "modal")
    button.setAttribute("data-bs-target", "#mimodal")
    button.onclick = () => info(douj.id)

    div.appendChild(h2)
    div.appendChild(img)
    div.appendChild(button)

    if (douj["sound"] != "") {
      const buttonSd = document.createElement("button")
      const buttonTextSd = document.createTextNode("Sonido")
      buttonSd.appendChild(buttonTextSd)
      buttonSd.type = "button"
      buttonSd.setAttribute("id", "sd")

      buttonSd.addEventListener("click", () => {
        let etiquetaAudio = document.createElement("audio")
        etiquetaAudio.setAttribute("src", douj.sound)
        etiquetaAudio.play()
      })

      div.appendChild(buttonSd)
    }

    fragment.appendChild(div)
  })
  portador.appendChild(fragment)
}

const getUsuAll = async () => {
  const portador = document.querySelector(".cards_usuarios")
  const fragment = new DocumentFragment()

  const response = await fetch(doujutsus)
  const data = await response.json()

  portador.innerHTML = ""

  data.forEach((dou) => {
    const usu = dou["usuarios"]

    usu.forEach((douj) => {
      const div = document.createElement("div")
      div.classList.add("user-item")
      const h2 = document.createElement("h2")
      h2.textContent = douj.usuario

      const p = document.createElement("p")
      p.textContent = "Clan: " + douj.clan
      const p2 = document.createElement("p")
      p2.textContent = douj.dojutsu

      const img = document.createElement("img")
      img.src = douj.url

      div.appendChild(h2)
      div.appendChild(p2)
      div.appendChild(p)
      div.appendChild(img)
      fragment.appendChild(div)
    })
  })
  portador.appendChild(fragment)
}

getDoAll()
getUsuAll()
// SIUUUUUUUUUUUUUUUUUUUUUUUUUUU
