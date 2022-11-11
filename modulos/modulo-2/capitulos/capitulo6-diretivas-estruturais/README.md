# Diretivas (directives) estruturais

Diretivas alteram ou adicionam comportamento a elementos HTML ou componentes Angular. Os próprios componentes, tecnicamente, são tipos de diretivas, mas por sua importância são tratados com outros termos. Existem dois tipos principais de diretivas:

- **Diretivas de atributos**: Alteram ou adicionam comportamento. Sua sintaxe é semelhante a um atributo da tag;
- **Diretivas estruturais**: Alteram a estrutura, removendo ou repetindo elementos na página, por exemplo. Sua sintaxe sempre começa com o caractere *. Diretivas estruturais são similares a estruturas de controle em linguagens de programação: `IF`, `FOR`, `SWITCH` e etc.

`*ngIf`

Esta diretiva permite a inclusão condicional de um componente ou tag HTML, com base numa expressão booleana, por exemplo:

```html
<div *ngIf="situacao == 'enviado'">
 	Seu produto foi enviado para entrega.
</div>
```

`*ngFor`

Esta diretiva permite repetir um componente ou tag HTML iterando em um `array`. A diretiva permite capturar o item atual e o índice da iteração, definindo variáveis acessíveis no escopo dos elementos englobados pela diretiva. Por exemplo:

```html
<table>
     <tr *ngFor="let task of tasks; let i = index">
         <td>{{i + 1}}</td>
         <td>{{task.description}}</td>
     </tr>
</table>
```

`ngSwitch`, `*ngSwitchCase` e `*ngSwitchDefault`

Com estas diretivas, é possível criar uma estrutura de decisão com múltiplas alternativas, semelhante ao comando switch da linguagem JavaScript. Por exemplo:

```html
<div [ngSwitch]="tasks.length">
    <div *ngSwitchCase="0">Nenhuma tarefa</div>
    <div *ngSwitchCase="1">Uma tarefa</div>
    <div *ngSwitchDefault>{{tasks.length}} tarefas</div>
</div>
```

`ng-container`

Não é possível utilizar mais de uma diretiva estrutural na mesma tag ou elemento. Para esse tipo de caso, podemos usar a tag `ng-container`, que cria um elemento“virtual”que pode ter diretivas estruturais, mas não gera um elemento real na página:

```html
<table>
    <tr *ngFor="let task of tasks; let i = index">
        <ng-container *ngIf="!task.done">
            <td>{{task.description}}</td>
        </ng-container>
    </tr>
</table>
```
