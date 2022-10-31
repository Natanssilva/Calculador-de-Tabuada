
let tab = document.getElementById('seltab')
function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length === 0) {
        window.alert('ERRO, Digite um número')
    }else{
        tab.innerHTML = ''
        let n = Number(num.value)
        for (let c = 1; c <=10; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item) 
        }
       
    }
}

function limpartabuada (){
    tab.innerHTML = '<option>Digite outro valor</option>'
}

