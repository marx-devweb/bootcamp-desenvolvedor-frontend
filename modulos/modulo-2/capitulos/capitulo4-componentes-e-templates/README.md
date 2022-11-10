# Componentes e Templates

####  Declaração de componentes

Componentes são declarados por meio de uma classe anotada com o decorator `@Component`. Exemplo:

```typescript
import { Component } from '@angular/core';
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html'
})
export class AppComponent {
 // ...
}
```

Todo componente deve ter um `selector`, que é o nome da tag que corresponderá ao elemento na página. Além disso, o componente deve ter um `template`, que é responsável por sua exibição. O `template` pode ser especificado pela configuração `templateUrl`, informando o caminho de um arquivo, ou pela configuração `template`, informando o conteúdo do `template` como uma string.

A maneira mais prática de adicionar um componente à uma aplicação é com o Angular CLI, por meio do comando:

`ng generate component nomeComponente`

### Templates

Templates possuem sintaxe semelhante a HTML, mas com algumas extensões do Angular, conforme exemplo abaixo:

```typescript
<h1>Este é um template</h1>
<p>Olá {{nome}}</p>
<img [src]="urlFoto" />
<button (click)="umaFuncao()">Clique aqui</button>
```

Note que no `template` de exemplo temos, além da sintaxe HTML, outras três construções específicas do angular, descritas a seguir. Estes recursos são denominados no Angular pelo termo mais geral data/event binding.

---

### Data Binding

#### Interpolação

Usa a sintaxe `{{expressao}}`. Uma expressão Angular pode acessar propriedades ou funções do componente, usar operadores lógicos e aritméticos, entre outros recursos. No entanto, essa expressão não pode executar um código JavaScript arbitrário.

#### Property binding

Usa a sintaxe `[property]="expressao"`. Com isso, é possível definir propriedades de tags HTML dinamicamente. É importante ressaltar que se deve usar o nome da propriedade HTML, não de um atributo HTML (e nem todo atributo HTML tem uma propriedade com o mesmo nome). Também podemos usar a sintaxe alternativa `bindproperty="expressao"` ou mesmo a interpolação `property="{{expressao}}"`. Porém, o uso de interpolação só é válido se a propriedade esperar uma string.

#### Event binding

Usa a sintaxe `(event)="comando"`. Com isso, é possível tratar eventos chamando funções (métodos) do componente. Também é possível fazer atribuições em propriedades do componente. Nestes comandos, existirá sempre a variável implícita `$event` para capturar o evento disparado.
