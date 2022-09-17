var select = 0;

function selected(rate){
    select = rate;
    document.getElementById('rate').innerHTML=rate;
}

function received(){
    if(select != 0){
        document.getElementById("results").style.display="block";
        document.getElementById("main-card").style.display="none";
    }

}