import './item.js';

class CustomListElement extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meals(meals) {
        this._meals = meals;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._meals.forEach(meal => {
            const CustomListElement = document.createElement("custom-item");
            CustomListElement.meal = meal;
            this.shadowDOM.appendChild(CustomListElement);
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
             .placeholder {
                   color: #E9B824;
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
           </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("custom-list", CustomListElement);