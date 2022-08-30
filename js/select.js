// document.getElementById('btn-select-mash').addEventListener('click', function(){
//    const selectMash = document.getElementById('btn-mash');
//    const selectMashString = selectMash.value;
//    const previousSelectMash = parseFloat(selectMashString);
//    const newSelectMash = previousSelectMash + '';
//    selectMash.value = newSelectMash;
// })

document.getElementById('btn-per-player').addEventListener('click', function(){
    const budegtPerPlayer = document.getElementById('btn-per-player');
    const budgetPlayer = budegtPerPlayer * 1;
    console.log(budgetPlayer);
})