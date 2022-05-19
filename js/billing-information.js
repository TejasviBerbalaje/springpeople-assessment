$(document).ready(function () {

    var memberslistdata = localStorage.getItem('lists');
    //pase the value 
    var finalvalue = JSON.parse(memberslistdata);

    console.log(finalvalue)

});
window.addEventListener('load', () => {
    
    const name = sessionStorage.getItem('lists');
    var gfg = JSON.stringify(name);
    console.log(gfg);

 

})