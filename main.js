const github = document.getElementById("input__github");
const codesandbox = document.getElementById("input__codesandbox").value;
const number = document.getElementById("input__number");

const generate = document.getElementById("input__generate");

const linkContainer = document.getElementById("link__container");

const copy = document.getElementById("button__copy");
let text = ""

generate.addEventListener("click", () => {
    const maxValueNumber = Number(number.value);
    linkContainer.innerHTML = ""
    for (let i = 1; i <= maxValueNumber; i++) {

        const item = github.value.substring(0, github.value.length-1)
        const itemFull = item.toString() + i.toString();

        const linkItem = document.createElement("p")
        linkItem.innerText = codesandbox + itemFull
        linkContainer.appendChild(linkItem)
        
        text += `${i}. ${linkItem.innerText}\n\n`
    }

    linkContainer.classList.remove("hide")
    copy.classList.remove("hide")
})

copy.addEventListener("click", () => {
    console.log(text)
    navigator.clipboard.writeText(text)
})