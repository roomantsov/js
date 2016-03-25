function check(){
    // Проверка на пробелы
    var checked = document.getElementById('input').value.replace(/  /g," ");
    checked = checked.replace(/^ /, "");
    checked = checked.replace(/([a-zA-Zа-яА-Я\!\"\№\;\%\:\?\*\(\)\_\+\-\=])/g, "");
    document.getElementById('input').value = checked;
}

function typing(){
    check();
    var output = '';
    var symbols = document.getElementById('input').value.split(' ');
    for (var i = 0; i < symbols.length; i++){
        output += '<td id="td_'+i+'">'+symbols[i]+'</td>';

        // Genius code start's here >>>
        // Проверяем на число, т.к. результатом деления неЧисла на любое чило будет NaN
        if(isNaN((symbols[i]+1/*+1 для того чтоб если был введен + или -, то дождатся следующего числа*/)/10)){
            alert('error of input data');
            document.getElementById('input').value = '';
            document.getElementById('tr').innerHTML = '';

            return;
        }
        // end of genius code >>>

    }
    document.getElementById('tr').innerHTML = output;
    return true;
}
// Массивы рисования
for_drow = [];
drow_back = [];
function sort(){
    var current = document.getElementById('input').value.split(' ');
    var check = true;
    for( position = 0 ; position < current.length; position++){
        if((current[position+1] - current[position]) < 0){
            t = current[position];
            current[position] = current[position+1];
            current[position+1] = t;
            drow_back = for_drow;
            for_drow = [ position , position+1 ];
            check = false;
            document.getElementById('input').value = current.join(' ');
            break;
        }
    }
    if(check == true){
        alert('Completed');
        completedDrow(current.length);
        return;
    }
    output = '';
    for(i = 0; i < current.length; i++){
        output += '<td id="td_'+i+'">'+current[i]+'</td>';
        document.getElementById('tr').innerHTML = output;	
    }
    if (drow_back.length == 2){
        document.getElementById('td_'+drow_back[0]).style.backgroundColor = 'yellow';
        document.getElementById('td_'+drow_back[1]).style.backgroundColor = 'yellow';
    }
    document.getElementById('td_'+for_drow[0]).style.borderColor = 'red';
    document.getElementById('td_'+for_drow[1]).style.borderColor = 'red';	
    document.getElementById('td_'+for_drow[0]).style.backgroundColor = 'red';
    document.getElementById('td_'+for_drow[1]).style.backgroundColor = 'red';
     if (drow_back.length == 2){
        document.getElementById('td_'+drow_back[0]).style.borderColor = 'yellow';
        document.getElementById('td_'+drow_back[1]).style.borderColor = 'yellow';
    }	
}

function reset(){
    document.getElementById('input').value = '';
    document.getElementById('tr').innerHTML = '';
}