//como será a regra do jogo?
//um tabuleiro com 9 quadrados
//3 posibilidades do tabuleiro: o,x e vazio ao clicar
//vez do jogador
//o estado de "GAMER OVER" vamos ver mais adiante
// primeiro vamos iniciar criando as variaveis

let board = ["","","","","","","","","",];
let playerTime = 0;  
let symbols = ["o","x"];   
let gameOver = false;           
let winStates = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]



function handleMove(position){

        if (gameOver){                      //se o "gameOver" for verdadeiro dou um return

            return; 
        }


        if (board[position] == ''){    

        board[position] = symbols[playerTime];  

        gameOver = isWin();      //se tiver um vencedor posso dar final um "return gameOver"   

        if (gameOver == false){ //se eu fiz uma jogada e deu gamerOver, eu não posso passar p/ outro jogador
                                //Ou seja,só passo se o gamer for igual a false;

       /* if(playerTime == 0){                   
            playerTime = 1;    
        }else{
            playerTime = 0; */


    // Vamos melhorar o Codigo acima usando "if ternario"

    playerTime = (playerTime == 0)?1:0;


    }
} 
        return gameOver
}

function isWin() {                  

   

        for (let i = 0 ; i < winStates.length; i++){     

            let seq = winStates[i];    

            let pos1 = seq[0];
            let pos2 = seq[1];          
            let pos3 = seq[2];

            if (board[pos1] == board[pos2] &&   
                board[pos1] == board[pos3] &&
                board[pos1] != ''){

                    return true;


                }

        }

                   return false;

}





