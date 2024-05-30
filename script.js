const fieldset = document.querySelector(".fieldset");
let btnCalc = document.querySelector("#btn-calc");
let tab = document.getElementById("tab");

EventListener();

function EventListener() {
    btnCalc.addEventListener("click", gen_table);
}

function gen_table() {
    tab.innerHTML = "";
    let capital = Number(document.getElementById("capital").value);
    let cuota = Number(document.getElementById("cuota").value);
    let interes = Number(document.getElementById("interes").value);

    validation();

    function validation() {
        if(capital > 0){
            for(i = 1; i <= cuota; i++){
                //calculando capital
                capitales=capital/cuota;
                d1=capitales.toFixed(2);
                //calculando cuotas
                cuotas=((capital*intereses)/100)/cuota;
                d2=cuotas.toFixed(2);
                //calculando intereses
                intereses=capitales+cuotas;
                d3=intereses.toFixed(2);

                document.getElementById("tab").innerHTML = document.getElementById("tab").innerHTML+
                `<tr>
                <td>${i}</td>
                <td>${d1}</td>
                <td>${d2}</td>
                <td>${d3}</td>
                </tr>`
            }

            totalCapital= capital.toFixed(2);
            t_i=cuotas*cuota;
            totalCuota=t_i.toFixed(2);
            t_p=intereses*cuota;
            totalIntereses=t_p.toFixed(2);

            document.getElementById("t1").innerHTML = totalCapital;
            document.getElementById("t2").innerHTML = totalCuota;
            document.getElementById("t3").innerHTML = totalInteres; 
        }else {
            errorNumero();
        }
    }

    function errorNumero() {
        const errorNumero = document.createElement("div");
        errorNumero.classList.add("alerta", "error");
        errorNumero.textContent = "Ingrese un numero valido";
        fieldset.appendChild(errorNumero);

        setTimeout(() => {
            errorNumero.remove();
        }, 3000);
    }

}