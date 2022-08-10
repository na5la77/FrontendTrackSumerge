title = document.querySelector('#header');
var turn = 'x';
var cells = [];
function endHelper (num1,num2,num3){
        title.innerHTML = `The winner is ${cells[num1]}`;
        document.getElementById('box'+num1).style.background = '#111';
        document.getElementById('box'+num2).style.background = '#111';
        document.getElementById('box'+num3).style.background = '#111';
        setInterval(function(){title.innerHTML +='.'},1000);
        setTimeout(function(){location.reload()},4000);
}
function winner (){
    for (let i = 1; i < 10; i++) {
        cells [i] = document.getElementById('box' + i).innerHTML;
    }
    if(cells[1]==cells[2]&&cells[2]==cells[3]&&cells[2]!=''){
        
        endHelper(1,2,3);
        
    }
    else if(cells[4]==cells[5]&&cells[5]==cells[6]&&cells[5]!=''){
        endHelper(4,5,6);
    }
    else if(cells[7]==cells[8]&&cells[8]==cells[9]&&cells[7]!=''){
        endHelper(7,8,9);
    }
    else if(cells[1]==cells[4]&&cells[4]==cells[7]&&cells[4]!=''){
        endHelper(1,4,7);
    }
    else if(cells[2]==cells[5]&&cells[5]==cells[8]&&cells[5]!=''){
        endHelper(2,5,8);
    }
    else if(cells[3]==cells[6]&&cells[6]==cells[9]&&cells[6]!=''){
        endHelper(3,6,9);
    }
    else if(cells[1]==cells[5]&&cells[5]==cells[9]&&cells[5]!=''){
        endHelper(1,5,9);
    }
    else if(cells[3]==cells[5]&&cells[5]==cells[7]&&cells[5]!=''){
        endHelper(3,5,7);
        
    }
    

}
function game(id){
   var element = document.getElementById(id)
   if(turn === 'x' && element.innerHTML=='X'){
       alert('YOU ALREADY PLAYED HERE!!!');
    }
   else if(turn === 'x' && element.innerHTML=='O'){
        alert('YOUR OPPONENT ALREADY PLAYED HERE!!!');
    }
   else if(turn === 'x' && element.innerHTML==''){
        element.innerHTML='X';
        turn='o';
        title.innerHTML="'O' Player's turn";
    }
    else if(turn === 'o' && element.innerHTML=='O'){
        alert('YOU ALREADY PLAYED HERE!!!');
    }
    else if(turn === 'o' && element.innerHTML=='X'){
        alert('YOUR OPPONENT ALREADY PLAYED HERE!!!');
    }
    else if(turn === 'o' && element.innerHTML==''){
    element.innerHTML='O';
    turn='x';
    title.innerHTML="'X' Player's turn";
    }
    winner();
}