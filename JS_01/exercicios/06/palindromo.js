word = window.prompt('entre com uma palavra');
nbrWordRigth = 0;
for (i = word.length; i > 0; i--) {
   for(j = 0; j < word.length; j++) {
    if(word[i] === word[j]){
        nbrWordRigth++;
    }
   }
}
if (nbrWordRigth == word.length){
    alert('essa palavra é um palindromo');
}else{
    alert('essa palavra não é um palindromo')
}