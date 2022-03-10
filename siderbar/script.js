const btn = document.getElementById('btn')
const sidebar = document.getElementById('sidebar')
let count = 2
function evt(){
    if(count%2==0){
        sidebar.style.marginLeft="0"
        count++
    }
    else{

        sidebar.style.marginLeft="-20rem"
        count++
    }

}