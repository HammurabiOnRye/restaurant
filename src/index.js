import './style.css';
import './reset.css';

const domElement = (tag) => {
    const element = document.createElement(tag);
    
    const setClass = (className) => {
        element.classList.add(className);
    }
    const setId = (idName) => {
        element.setAttribute('id', idName)
    }
    const addToDom = (cssTag) => {
        const appendLocation = document.querySelector(cssTag)
        appendLocation.append(element)
    }
    const setText = (text) => {
        element.innerHTML = text
    }
    return {
        setClass,
        setId,
        addToDom,
        setText
    }

}

const webPages = () => {
    //add the 3 pages to this
    const cardCreater = (id, heading, cardText) =>{
        const body = document.querySelector("#body")
        const container = domElement('div')
        const header = domElement('h2')
        const text = domElement("p")

        container.setClass("card")
        container.setId(id)
        
        header.setText(heading)
        text.setText(cardText)
        container.addToDom('#body')
        header.addToDom(`#${id}`)
        text.addToDom(`#${id}`)
        

    }
    const removeCards = () => {
        const cards = document.querySelectorAll(".card")
        cards.forEach(card => card.remove())
    }
    const home = () => {
        removeCards()
        const about = cardCreater(
            "about",
            "About",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis odio in lectus commodo laoreet eu in nulla. Nunc massa elit, porta vitae condimentum vitae, ornare id leo. Curabitur fermentum turpis ut orci aliquam, et eleifend eros dictum. Mauris pharetra tempor elit, nec porta dolor malesuada eget. Aenean vestibulum imperdiet mauris sit amet interdum. Ut id porta sapien. Proin rutrum sodales tellus ut egestas. Nunc pharetra tempor pellentesque. Nulla facilisi. Fusce sed elementum felis, venenatis facilisis dolor. Etiam id mi faucibus, fermentum justo quis, malesuada eros. Ut interdum massa sed dui congue tristique. Aenean id massa nibh. Donec in elit."
        )
        const hours = cardCreater(
            "hours",
            "Hours",
            "Monday: 5pm-2am<br>Tuesday: 5pm-2am<br>Wednsday: 5pm-2am<br>Thursday: 5pm-2am<br>Friday: 5pm-2am<br>Saturday: 5pm-2am<br>Sunday: 5pm-2am"
            
        )
    }
    const menu = () => {    
        removeCards()
        cardCreater(
        "display-menu",
        "Menu",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper sodales bibendum. Aliquam tristique arcu velit, vel imperdiet purus mattis eget. Duis cursus sem at euismod finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vitae aliquet mauris, eget ullamcorper quam. Phasellus sed lorem aliquam, fermentum quam non, volutpat tellus. Morbi lobortis eu diam quis rhoncus. Quisque pulvinar massa quis eros eleifend lobortis. Integer vitae pharetra elit. Sed porta egestas enim a efficitur. Nunc ultricies consectetur lorem, in accumsan tortor maximus eleifend. Phasellus est mi, semper nec consequat a, faucibus a nunc. Fusce non mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper sodales bibendum. Aliquam tristique arcu velit, vel imperdiet purus mattis eget. Duis cursus sem at euismod finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vitae aliquet mauris, eget ullamcorper quam. Phasellus sed lorem aliquam, fermentum quam non, volutpat tellus. Morbi lobortis eu diam quis rhoncus. Quisque pulvinar massa quis eros eleifend lobortis. Integer vitae pharetra elit. Sed porta egestas enim a efficitur. Nunc ultricies consectetur lorem, in accumsan tortor maximus eleifend. Phasellus est mi, semper nec consequat a, faucibus a nunc. Fusce non mauris."
        )
    }
    const contact = () => {   
        removeCards()
        const location = cardCreater(
            "location",
            "Location",
            "123 Main St<br>Huntsville ON<br>P1H 1F2<br>Phone Number: 705-555-5432"
        )
    }
    return {
        home,
        menu,
        contact
    }
}

const websiteContent = (() => {
    const homeButton = document.querySelector("#home")
    const menuButton = document.querySelector("#menu")
    const contactButton = document.querySelector("#contact")
    
    const pages = webPages()
    pages.home()

    homeButton.addEventListener("click", () => pages.home())
    menuButton.addEventListener("click", () => pages.menu())
    contactButton.addEventListener("click", () => pages.contact())
})() 



