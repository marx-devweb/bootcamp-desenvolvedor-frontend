function soma(a: number, b: number): number {
    return a + b;
}

soma(2, `olá`) // ao chamar a função com esses valores, o compilador irá apresentar erro, pois é esperado que receba dois valores do tipo number.