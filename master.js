
// prendo il container della mia scacchiera dal documento(html) e lo inserisoc in una costante
const containerScacchiera = document.getElementById("container_scacchiera");
// vado a creare un elemento di tipo div che dovrà essre la riga in cui verranno inserite le celle
const row = document.createElement("div")
// qui prendo l'elemento div appena creato e vado ad assegnargli delle classi bootstrap
row.classList.add("row" , "g-0")
//qui vado ad inserire (appendere)  la riga dentro il contenitore 
containerScacchiera.append(row)

// qui sono andato a creare 100 colonne con un ciclo
for (let i = 1; i <= 100; i++){
    console.log(i)
    // qui sono andato a creare una variabile assegnando la classe iniziale di sfondo già creata su css
    let bgColor = "mybox";
    // qui sono andato a creare una variabile per poter inserire il contenuto(testo) nelle celle 
    let contentBox = i;
    // qui sono andato a creare una variabile per poter cambiare dinamicamente il contenuto 
    
    // qui sono andato a creare nuovamente un'altra variabile che successivamente verrà assegnata alla mia row(variabile creata prima)
    const col = document.createElement("div")

    col.classList.add("col","ratio","ratio-1x1")
    // qui vado a inserirla nella mia riga
    row.append(col)
    // qui sono andato a creare un'altra variabile da inserire successivamente all'interno della col successivamente
    const box = document.createElement("div")
    col.append(box)

    box.classList.add("d-flex","justify-content-center","align-items-center")
    


    // in questa fase sono andato ad assegnare lo sfondo e il testo attraverso le condizioni
    //se i (il contatore dei cicli) modulato(multipli) e divisibile per 3 e anche per 5 con resto zero verranno applicate queste specifiche
    if (i % 3 === 0 && i % 5 === 0){
        bgColor = "fizzbuzz"
        contentBox= "Fizzbuzz"
        
    }

//    altrimenti 
    else if (i % 3 === 0 ){
        bgColor = "fizz"
        contentBox = "Fizz"
    }
    else if(i % 5 === 0){
        bgColor = "buzz"
        contentBox = "Buzz"
    }



    box.classList.add(bgColor)

    box.textContent= contentBox;
    


    
}

