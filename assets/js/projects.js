const projects = [
    {
        "name":"Minicrafter Maker",
        "description": "A 2d character creator based on minecraft characters",
        "image": "/assets/images/projects/minicrafter-maker.png",
        "link": "https://hatchibombotar.com/minicrafter-maker/"
    },
    {
        "name":"Minecraft Addons",
        "description": "All of my minecraft addons",
        "image": "/assets/images/projects/addons.png",
        "link": "https://mcpedl.com/user/hatchibombotar/"
    },
    {
        "name":"Minecraft Manifest Generator",
        "description": "Creates a basic manifest.json file for Minecraft: Bedrock Addons.",
        "image": "/assets/images/projects/manifest-generator.png",
        "link": "https://hatchibombotar.com/manifest-generator/"
    },
    {
        "name":"Magic Hat",
        "description": "Pick things out of a hat",
        "image": "/assets/images/projects/magic-hat.png",
        "link": "https://hatchibombotar.com/magic-hat/"
    }
]
const projectContainer = document.getElementById("project-container")
for (const project of projects) {
    const main = document.createElement("div")
    main.classList.add("project-card")
    main.style["background-image"] = `url('${project.image}')`
    main.setAttribute("onclick", `window.location.href = '${project.link}'`)
    main.setAttribute("alt", `An image depicting my project: '${project.description}'`)
    projectContainer.appendChild(main)

    const title = document.createElement("h3")
    title.appendChild(document.createTextNode(project.name))
    main.appendChild(title)

    const desc = document.createElement("p")
    desc.appendChild(document.createTextNode(project.description))
    main.appendChild(desc)
}