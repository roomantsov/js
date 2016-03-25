function completedDrow(n){
    for (var i = 0; i < n; i++){
        document.getElementById('td_'+i).style.borderColor = 'green';
        document.getElementById('td_'+i).style.backgroundColor = 'green';
        document.getElementById('td_'+i).style.color = 'white';
    }
}