
customElements.define('fire-round1', class extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = `<!DOCTYPE html>
  <html><head>
    <style type="text/css">
    * {  box-sizing: border-box;
        -webkit-user-drag: none;}
    .r1{ animation: animate 3s infinite;}   
    .r2{ animation: animate 3s infinite; 
         animation-delay: 1.2s;}    
    .r3{ animation: animate 3s infinite; 
         animation-delay: 2.2s;}   
    .r{  position: absolute;
         top: 0; 
         left: 0; 
         right: 0; 
         bottom: 0; 
         margin: auto; 
         opacity: 0; 
         border-style: solid; 
         border-radius: 25px; 
         border-width: 2px; 
         border-color: red;
         background-color: orange;  
       }  

      @keyframes animate{ 
           from { width: 0px; height: 0px; 
                  opacity: 0.7;
                  border-width: 1px;}             
           to {   width: 50px; 
                  height: 50px;  
                  opacity: 0.3; 
                  border-width: 3px;}  
    </style>
    </head>
     <body>
      <div class="r1 r"></div>
      <div class="r2 r"></div>
      <div class="r3 r"></div>
    </body>
  </html>`;
  }
}); 


customElements.define('fire-round2', class extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = `<!DOCTYPE html>
  <html><head>
    <style type="text/css">
    * {  box-sizing: border-box;
        -webkit-user-drag: none;}
    .r1{ animation: animate 3s infinite;}   
    .r2{ animation: animate 3s infinite; 
         animation-delay: 1.2s;}    
    .r3{ animation: animate 3s infinite; 
         animation-delay: 2.2s;}   
    .r{  position: absolute;
         top: 0; 
         left: 0; 
         right: 0; 
         bottom: 0; 
         margin: auto; 
         opacity: 0; 
         border-style: solid; 
         border-radius: 25px; 
         border-width: 2px; 
         border-color: red;
         background-color: orange;}  

      @keyframes animate{ 
           from { width: 0px; height: 0px; 
                  opacity: 0.7;
                  border-width: 1px;}             
           to {   width: 30px; 
                  height: 30px;  
                  opacity: 0.3; 
                  border-width: 3px;}  
    </style>
    </head>
     <body>
      <div class="r1 r"></div>
      <div class="r2 r"></div>
      <div class="r3 r"></div>
    </body>
  </html>`;
  }
}); 



customElements.define('fire-round3', class extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = `<!DOCTYPE html>
  <html><head>
    <style type="text/css">
    * {  box-sizing: border-box;
        -webkit-user-drag: none;}
    .r1{ animation: animate 3s infinite ;}   
    .r2{ animation: animate 3s infinite; 
         animation-delay: 1.2s;}    
    .r3{ animation: animate 3s infinite; 
         animation-delay: 2.2s;}   
    .r{  position: absolute;
         top: 0; 
         left: 0; 
         right: 0; 
         bottom: 0; 
         margin: auto; 
         opacity: 0; 
         border-style: solid; 
         border-radius: 25px; 
         border-width: 2px; 
         border-color: red;
         background-color: orange;}  

      @keyframes animate{ 
           from { width: 0px; height: 0px; 
                  opacity: 0.7;
                  border-width: 1px;}             
           to {   width: 15px; 
                  height: 15px;  
                  opacity: 0.3; 
                  border-width: 3px;}  
    </style>
    </head>
     <body>
      <div class="r1 r"></div>
      <div class="r2 r"></div>
      <div class="r3 r"></div>
    </body>
  </html>`;
  }
}); 

