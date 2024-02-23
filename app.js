function palindromo() {
    var palavra = prompt('Digite uma palavra:').toUpperCase();
    var separandoAsLetrasDasPalavras = palavra.split('');
    var palavraInvertida = separandoAsLetrasDasPalavras.reverse();
    palavraInvertida = palavraInvertida.join('');

    if (palavra == palavraInvertida) {
        console.log(`A palavra ${palavra} é um palíndromo!`);
    } else {
        console.log(`A palavra ${palavra} não é um palíndromo!`);
    }
}