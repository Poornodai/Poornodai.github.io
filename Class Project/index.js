let parentElement = document.createElement("div")
parentElement.className="card"

let img = document.createElement("img")
let path = "./cards/PNG/"
img.src=path+"blue_back.png"
img.alt="card"
parentElement.appendChild(img)
document.body.querySelector(".dealer").appendChild(parentElement)
let parentElement1 = document.createElement("div")
parentElement1.className="card"

let img1 = document.createElement("img")

img1.src=path+"4C.png"
img1.alt="card"
parentElement1.appendChild(img1)
document.body.querySelector(".dealer").appendChild(parentElement1)

let parentElement2 = document.createElement("div")
parentElement2.className="card"

let img2 = document.createElement("img")

img2.src=path+"3C.png"
img2.alt="card"
parentElement2.appendChild(img2)
document.body.querySelector(".dealer").appendChild(parentElement2)

let parentElement3 = document.createElement("div")
parentElement3.className="card"

let img3 = document.createElement("img")

img3.src=path+"2C.png"
img3.alt="card"
parentElement3.appendChild(img3)
document.body.querySelector(".dealer").appendChild(parentElement3)


// you
let pelement = document.createElement("div")
pelement.className="card"

let im1 = document.createElement("img")

im1.src=path+"5C.png"
im1.alt="card"
pelement.appendChild(im1)
document.body.querySelector(".you").appendChild(pelement)

let pelement1 = document.createElement("div")
pelement1.className="card"

let im2 = document.createElement("img")

im2.src=path+"5C.png"
im2.alt="card"
pelement1.appendChild(im2)
document.body.querySelector(".you").appendChild(pelement1)

let pelement2 = document.createElement("div")
pelement2.className="card"

let im3 = document.createElement("img")

im3.src=path+"5C.png"
im3.alt="card"
pelement2.appendChild(im3)
document.body.querySelector(".you").appendChild(pelement2)


let pelement3 = document.createElement("div")
pelement3.className="card"

let im4 = document.createElement("img")

im4.src=path+"5C.png"
im4.alt="card"
pelement3.appendChild(im4)
document.body.querySelector(".you").appendChild(pelement3)
