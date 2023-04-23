//const chrome = window.chrome || {};
const inputel = document.getElementById("input-el");
const btnel = document.getElementById("btn-el");
const delel = document.getElementById("del-el");
const ulel = document.getElementById("ul-el");
const saveel = document.getElementById("save-el");
let myleads = [];
function render(leads)
    {
        let string = "";
        for(let i=0;i<leads.length;i++)
            {
                string += `<li>
                            <a href="${leads[i]}">${leads[i]}</a>
                           </li>`
            }
            ulel.innerHTML = string;
    }

    const leadsfromstorage = JSON.parse(localStorage.getItem("myleads"));
    if(leadsfromstorage)
    {
        myleads = leadsfromstorage;
        render(myleads);
    }
    delel.addEventListener('click',function(){
        localStorage.clear();
        myleads=[];
        render(myleads);
    })
    

saveel.addEventListener('click',function(){
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myleads.push(tabs[0].url);
        localStorage.setItem("myleads", JSON.stringify(myleads));
        render(myleads);
    });
    });
    
    

btnel.addEventListener('click',function()
    {
        myleads.push(inputel.value);
        inputel.value = "";
        localStorage.setItem("myleads",JSON.stringify(myleads));
        render(myleads);

    })
  

