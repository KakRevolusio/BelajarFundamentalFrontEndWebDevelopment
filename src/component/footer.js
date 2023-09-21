class Footer extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
     
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
             <style>
             footer 
                 {
                    padding: 5px;
                    color: white;
                    background-color: #EE9322;
                    text-align: center;
                    font-weight: bold;
                    text-decoration : none;
                 }
 
                 @media only screen and (max-width: 1100px) 
                 {
                     footer
                     {
                         font-size : 18px;
                         padding : 3.5px;
                     }
                 }
 
                 @media only screen and (max-width: 1000px) 
                 {
                     footer
                     {
                         font-size : 17px;
                         padding : 2.5px;
                     }
                 }
 
                 @media only screen and (max-width: 850px) 
                 {
                     footer
                     {
                         font-size : 16px;
                         padding : 2px;
                     }
                 }
 
                 @media only screen and (max-width: 671px) 
                 {
                     footer
                     {
                         font-size : 15px;
                         padding : 1px;
                     }
                 }
 
                 @media only screen and (max-width: 440px) 
                 {
                     footer
                     {
                         font-size : 14px;
                         padding : 1px;
                     }
                 }
 
                 @media only screen and (max-width: 390px) 
                 {
                     footer
                     {
                         font-size : 13px;
                         padding : 0.5px;
                     }
                 }
 
                 @media only screen and (max-width: 351px) 
                 {
                     footer
                     {
                         font-size : 12px;
                         padding : 0.5px;
                     }
                 }
 
             </style>
             <footer>    
             <h2>Pencarian Resep Makanan 2023</h2>
             <footer>`;
    }
 }
  
 customElements.define("custom-footer", Footer);