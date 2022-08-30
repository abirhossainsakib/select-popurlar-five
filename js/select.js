document.getElementById('btn-select-mash').addEventListener('click', function(){
   const selectMash = document.getElementById('btn-mash');
   const selectMashString = selectMash.value;
   const previousSelectMash = parseFloat(selectMashString);
   const newSelectMash = previousSelectMash + '';
   selectMash.value = newSelectMash;
})