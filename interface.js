
         // por que devemos lincar o "game.js" primeiro?
          //Devido a "interface" conhecer o "game", quer dizer que a interface vai chamar algo do game.
           //Por isso, é ideal que o game já esteje carregado.
    
//Primeiramente quero saber qual quadrado será clicado e para garantir isso, preciso garantir que o html foi carregado
document.addEventListener('DOMContentLoaded', () => {

    //vou criar uma variavel para pegar todos os elementos "square"
    let squares = document.querySelectorAll(".square");
    
    squares.forEach((square) => {
        square.addEventListener('click', handleClick); 
    
    
    })
    
    })
    
    function handleClick(event) {          

        let square = event.target;
        let position = square. id;          ;

        if (handleMove(position)){


            setTimeout(() => {
            alert("game over");
                             }, 10);

        };            
        updateSquare(position);                 

    } 

    function updateSquare(position){

        let square = document.getElementById(position.toString());
        let symbol = board[position];
        square.innerHTML =`<div class="${symbol}"></div>`

    }

    

   /* function updateSquares(){

        let squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            let position = square.id;
            let symbol = board[position];  

            if (symbol != ''){                  
                square.innerHTML =`<div class="${symbol}"></div>`
            }



        })
    }                         */
    
