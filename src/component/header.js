class Header extends HTMLElement {
    
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
                         .hero-text-box
                         {
                             position: absolute;
                             width: 1140px;
                             top: 50%;
                             left: 50%;
                             transform: translate(-50%, -50%);
                             color: #f7fff7;
                         }
                             .btn:link,
                             .btn:visited,
                             input[type=submit]
                             {
                                display: inline-block;
                                 padding: 10px 30px;
                                 font-weight: 300;
                                 text-decoration: none;
                                 border-radius: 200px;
                                 transition: background-color 0.2s; color: 0.2s; border: 0.2s;
                             }
 
                             .btn-full:link,
                             .btn-full:visited,
                             input[type=submit]
                             {
                                 background-color:#E9B824;
                                 border: 1px solid #E9B824;
                                 color: #fff;
                                 margin-right: 15px;
                             }
 
                             .btn-ghost:link,
                             .btn-ghost:visited
                             {
                                 border: 1px solid #E9B824;
                                 color: #E9B824;
                             }
 
                             .btn:hover,
                             .btn:active,
                             input[type=submit]:hover,
                             input[type=submit]:active
                             {
                                 background-color: #219C90;
                             }
 
                             .btn-full:hover,
                             .btn-full:active
                             {
                                 border: 1px solid #219C90;
                             }
 
                             .btn-ghost:hover,
                             .btn-ghost:active
                             {
                                 border: 1px solid #219C90;
                                 color: #fff;
                             }
                             h1 {
                                font-size: 35px; 
                              }
                              
                              a {
                                font-size: 18px; 
                              }
                             @media only screen and (max-width: 1200px) 
                             {
                                 .hero-text-box 
                                 {
                                     width: 100%;
                                     padding: 0 2%;
                                     margin-left : 25px;
                                 }
 
                                 h1 {
                                    font-size: 32px;
                                  }
                                
                                  a {
                                    font-size: 17px;
                                  }
 
                             }
 
                             @media only screen and (max-width: 970px) 
                             {
 
                                h1 {
                                    font-size: 29px;
                                  }
                                
                                  a {
                                    font-size: 16px;
                                  }
                             }
 
                             @media only screen and (max-width: 780px) 
                             {
                                 .hero-text-box 
                                 {
                                     width: 90%;
                                     padding: 0 2%;
                                     margin-left : 15px;
                                 }
                                 h1 {
                                    font-size: 28px;
                                  }
                                
                                  a {
                                    font-size: 15px;
                                  }
 
                             }
 
                             @media only screen and (max-width: 730px) 
                             {
                                 .hero-text-box 
                                 {
                                     width: 90%;
                                     padding: 0 2%;
                                     margin-left : 12px;
                                 }
 
                                 h1
                                 {
                                     font-size: 28px;
                                 }
 
                                 a
                                 {
                                     font-size: 16px;
                                 }
 
                             }
 
                             @media only screen and (max-width: 615px) 
                             {
                                 .hero-text-box 
                                 {
                                     width: 90%;
                                     padding: 0 2%;
                                     margin-left : 12px;
                                 }
 
                                 h1 {
                                    font-size: 25px;
                                  }
                                
                                  a {
                                    font-size: 14px;
                                  }
 
                             }
 
                             @media only screen and (max-width: 552px) 
                             {
                                 .hero-text-box 
                                 {
                                     width: 85%;
                                     padding: 0 2%;
                                     margin-left : 12px;
                                 }
 
                                 h1 {
                                    font-size: 23px;
                                  }
 
                             }
 
                             @media only screen and (max-width: 430px) 
                             {
                                 .hero-text-box 
                                 {
                                     width: 90%;
                                     padding: 0 2%;
                                     margin-left : 10px;
                                 }
 
                                 h1 {
                                    font-size: 21px;
                                  }
                                
                                  a {
                                    font-size: 14px;
                                  }
 
                             }
 
                             @media only screen and (max-width: 350px) 
                             {
                                 .hero-text-box 
                                 {
                                     width: 80%;
                                     padding: 0 2%;
                                     margin-left : 9px;
                                 }
 
                                 h1 {
                                    font-size: 20px;
                                  }
                                
                                  a {
                                    font-size: 13px;
                                  }
 
                             }
                             
                             .gmbar {
                                position: relative;
                                overflow: hidden;
                                max-width: 100%; 
                              }
                              
                              .gmbar img {
                                float: right;
                                margin-left: 10px;
                                width: 50%;
                             }
                         </style>
                         <div class="gmbar">
                         <img src="/src/aset/bg2.png" alt="prang memasak">
                       </div>
                         <div class="hero-text-box">
                             <h1>Rasakan Sensaisi Resep Makanan Baru </h1>
                             <h3>Sensasi Rasa Baru ......</h3>
                             <a class="btn btn-full" href="#searching">Pencarian</a>
                         </div>`;
    }
 }
  
 customElements.define("add-header", Header);