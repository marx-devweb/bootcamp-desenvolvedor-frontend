# Introdução a TypeScript

TypeScript é uma extensão da linguagem JavaScript que adiciona um sistema de verificação de tipos em tempo de compilação. Ou seja, em JavaScript, erros de tipo ocorrem durante a execução caso não sejam devidamente tratados; em TypeScript, erros de tipo são encontrados pelo compilador TypeScript. Com isso, o desenvolvimento se torna menos propenso a erros, trazendo maior facilidade de manutenção.

#### Verificação de tipos

Todo código JavaScript é também um código TypeScript. Ou seja, TypeScript apenas adiciona novos recursos à linguagem. O mais importante destes recursos é a capacidade de declarar tipos em variáveis, parâmetros de funções, retornos de funções e em várias outras situações. Por exemplo, considere a função abaixo:

```typescript
function soma(a: number, b: number): number {
 return a + b;
}
```

No exemplo, os parâmetros da função são anotados com o tipo `number`, assim como o tipo de retorno da função é `number`. Dessa forma, se tentarmos chamar tal função passando parâmetros do tipo incorreto, por exemplo:

```typescript
soma(3, 'olá'); // erro!
```

O compilador acusaria um erro, pois é esperado que o segundo parâmetro seja `number`, não `string`. De forma semelhante, não podemos atribuir um valor do tipo incorreto para uma variável, quando declaramos seu tipo. O Visual Studio Code está preparado para lidar com código TypeScript, e exibe erros de tipo dentro do próprio editor.

---

#### Interfaces

Podemos declarar uma interface para descrever a estrutura de um objeto, por exemplo:

```typescript
interface Aluno {
 matricula: number,
 nome: string,
 dataNascimento?: string
}
```

Cabe ressaltar que interfaces existem apenas em TypeScript: elas desaparecem quanto o código é transformado em JavaScript. Seu propósito, portanto, é apenas a verificação de tipos.

---

#### Classes

TypeScript, assim como JavaScript moderno, aceita a sintaxe de declaração de classes, facilitando a programação orientada à objetos. Adicionalmente, podemos definir tipos para os membros da classe:

```typescript
class Retangulo {
 altura: number;
 largura: number;
 calculaArea(): number {
 // ...
 }
}
```

---

#### Decorators

Decorators são funções que modificam declarações da linguagem, como classes, propriedades de uma classe, parâmetros de funções, entre outras. O Angular utiliza decorators para definir uma série de configurações. 

```typescript
@Component({
 selector: 'meu-componente'
})
class MeuComponente {}
```
