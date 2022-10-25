# Estrutura e metodologia para front-end

### HTML Semântico

O HTML semântico tem como objetivo deixar nosso site com suas informações bem explicadas e compreensíveis para o computador, facilitando o entendimento de leitores de acessibilidade. 

Um elemento semântico descreve claramente seu significado tanto para o navegador quanto para o desenvolvedor.

Em termos de especificação HTML, seus elementos se enquadram em um dos três grupos:

**- Elementos de seção**: e os que definem as seções da página, conforme as tags abaixo:

- `<header>` - tag que define um cabeçalho para o site;
- `<nav>` - tag que define um menu de navegação;
- `<main>` - tag que define o conteúdo principal.  Essa tag só pode ser utilizada uma única vez por página;
- `<aside>` - tag que define um conteúdo complementar, é normalmente utilizada para barras laterais;
- `<section>` - tag que define seções genéricas;
- `<article>` - tag que é usada para envolver uma parte independente do conteúdo, ou seja, o conteúdo que você pretende usar em uma tag `<article>` pode ser copiado e colado em um site diferente e ainda assim fazer todo o sentido;
- `<footer>` - tag que define um rodapé.

**- Elementos de agrupamento (ou de nível de parágrafo)**: são usados para agrupar elementos associados, como parágrafos, blockquotes e outros conteúdos dessa natureza.

- `<p>` - tag que define um parágrafo;
- `<blockquote>` - tag que define uma citaçao;
- `<hr>` - tag que define uma quebra de parágrafo;
- `<ol>` - tag que define uma lista ordenada;
- `<ul>` - tag que define uma lista não ordenada;
- `<dl>` - tag que define uma lista de descrição;
- `<figure>` - tag que define um conteúdo (opcionalmente com uma legenda) pode ser usada para fazer anotações em ilustrações, diagramas, fotos, listagens de código etc;
- `<figcaption>` - tag que define uma legenda para o conteúdo do elemento pai `<figure>`
- `<div>` - tag que é utilizada para agrupar algo sem um significado especial.

**- Elementos em nível de texto**: são os elementos que usamos para designar áreas especiais (ênfase), como uma seção de texto ou código em negrito ou itálico.

- `<a>` - tag que define uma ancora, que é utilizado para lincar paginas.
- `<em>` - tag que define um texto enfatizado;
- `<strong>` - tag que define um texto com uma importância maior;
- `<small>` - tag que define um texto menor (como direitos autorais e outros comentários);
- `<cite>` - tag que define um título de um trabalho com direitos autorais;
- `<time>` - tag que define uma hora especifica;
- `<sub>` - tag que define um texto subscrito;
- `<sup>` - tag que define um texto sobrescrito;
- `<i>` - tag que define uma voz alternativa;
- `<b>` - tag que define um texto em negrito;
- `<span>` - tag que define um contêiner embutido usado para marcar uma parte de um texto ou uma parte de um documento;
- `<br>` - tag que define uma quebra de linha;

---

### Abordagem (ou mindset) de desenvolvimento

Uma abordagem ou mindset de desenvolvimento é o que regerá quais as tecnologias que vamos utilizar e com que essas tecnologias serão aplicadas no nosso projeto. 

Para qualquer tipo de desenvolvimento em programação, é necessário escolher uma abordagem de quais tecnologias serão usadas. Existem duas abordagens (ou mindset) de desenvolvimento: o **Graceful Degradation** e o **Progressive Enhancement**.

**Graceful Degradation (Degradação graciosa) **

Esta é uma filosofia de design que se concentra em tentar construir um site/aplicativo moderno que funcionará nos navegadores mais novos, isso não quer dizer que as aplicações não funcionarão em navegadores mais antigos, mas que a experiência nestes será mais simples, não comprometendo a usabilidade.

**Progressive Enhancement (Aprimoramento Progressivo)**

Esta é uma filosofia de design que fornece uma linha de base de conteúdo e funcionalidade essenciais para o maior número possível de usuários, ao mesmo tempo em que oferece a melhor experiência possível apenas para usuários dos navegadores mais modernos que podem executar todo o código necessário.

A palavra *progressiva* em *aprimoramento progressivo* significa criar um design que alcance uma experiência mais simples, mas ainda utilizável para usuários de navegadores e dispositivos mais antigos com recursos limitados, ao mesmo tempo em que é um projeto que **progride a experiência do usuário até** uma experiência mais atraente e totalmente caracterizada para usuários de navegadores e dispositivos mais novos com recursos mais ricos.

- O Progressive Enhancement é geralmente considerado uma boa prática, pois começa com o básico e vai aprimorando aos poucos.

**Progressive Enhancement VS Graceful Degradation**

|                     Graceful Degradation                     |                   Progressive Enhancement                    |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| É uma abordagem **topdown**, ou seja, essa abordagem irá focar nas tecnologias mais modernas para nosso projeto, que pode favorecer a criatividade nos projetos, uma vez que já começa do melhor dispositivo possível. | É uma abordagem **bottom-up** que possui suporte para todos os navegadores, criando uma base onde todos os navegadores ira funcionar. |
| Surgiu primeiro, quando não havia suporte padronizado aos recursos mais básicos dentro do browser. | Surgiu depois, quando sugiram também os polyfills e shims e quando a marcação semântica ganhava força. |
| Enfrentou muitos bugs de CSS nos navegadores dominantes do mercado e falta de suporte a APIs do HTML5 e do JavaScript em geral. | Conseguiu lidar melhor no nivelamento de recursos com polyfills e se favoreceu com os ciclos de atualização mais rápidos dos navegadores. |
| Ênfase na degradação dos recursos. Entrega o conteúdo “feio”, se não houver outro jeito melhor. | Ênfase no aprimoramento do conteúdo entregue, isso é, entrega o conteúdo “pelado” e acrescenta-se camadas para quem puder aproveitá-las. |
| Trocou o browser sniffing (ou browser detection) pelo feature detection. | Surgiu quando já existia o conceito de feature detection e continuou usando, somando-se a um cuidado especial com uma marcação com mais |
| Mais difícil de ser testado em diferentes ambientes, já que o desenvolvimento começa com a tecnologia mais avançada. | Mais fácil de ser testada em diferentes ambientes, já que podemos testar cada camada de desenvolvimento e verificar se algo se quebra ao implementar algo mais novo. |

**Progressive Enhancement no HTML**

- Se um navegador encontrar um elemento que não reconhece, ele deve tentar renderizar seu conteúdo;
- Se um navegador encontrar um atributo que não reconhece, ele deve ignorar a declaração completa deste atributo, isto é, o atributo e seu valor;
- Se um navegador encontrar um valor de atributo que não reconhece, ele deve usar o valor padrão para aquele atributo.

**Progressive Enhancement no CSS**

- Se um navegador encontrar uma propriedade CSS que não reconhece, ele deve ignorá-la;
- Se um navegador encontrar um valor para um propriedade que não reconhece, ele deve usar o valor padrão para aquela propriedade  (estilo em cascata).
- Para facilitar o Progressive Enhancement de CSS, podemos utilizar o conceito de estilo em cascata ao nosso favor, pois quando uma propriedade aparece duplicada, somente a última declaração é considerada.

**Progressive Enhancement no JS**

- É sempre importante não usar JS onde é possível resolver os problemas de maneira satisfatória com HTML e CSS;

- Se existir uma funcionalidade que depende de JS para funcionar, uma boa prática é usar apenas JS para acrescentá-la no código;
- JS não á tolerante a falha como HTML e CSS. Se tentar acessar uma funcionalidade que não existe, nosso código irá quebrar. Por tanto, devemos utilizar **feature detection**.

---

### Metodologia CSS

Metodologias CSS são padrões de nomenclatura para organizar códigos de CSS.

Abaixo as metodologias mais utilizadas:

**OOCSS (Object Oriented CSS)**

- Essa metodologia utiliza conceitos de design orientados a objetos, onde ira fornecer uma estrutura CSS baseado na aparência do objeto em vez do conteúdo ou funcionalidade.

- Separa estrutura da skin:
  - propriedade de estrutura: refere-se ao tamanho e posição dos elementos (height, width, margin, padding, overflow, etc.);
  - propriedade de skin: refere-se ao aspecto visual dos elementos (color, border, box-shadow, font, opacity, etc.).
- Separa container do conteúdo: estilos com base em atributos em vez de localização.

Vantagens:

- Possui uma melhor consistência;
- Tem mais facilidade na manutenção.

Desvantagens: 

- Documentação vaga;
- Não possui padrões para nomenclatura que diferencie classes de estruturação e de skins.

<br>

**SMACSS**

- Essa metodologia resume-se em um sistema de categorização para conjuntos de regras, conforme as as categorias abaixo:
  - BASE: estabelece um padrão para cada elemento (não utiliza seletores como classes ou IDs);
  - LAYOUT: utiliza elementos agregadores, como o header, footer e sidebar. Por padrão, usa-se **l-** como prefixo nos IDs e classes;
  - MÓDULO: São os demais componentes da página, ele não possui um padrão para a nomenclatura. Normalmente utiliza-se classes com nomes significativos à sua funcionalidade;
  - ESTADO: define o estado visualmente dentro dos componentes do design (visible/hidden, active/inactive, etc.) por padrão, usa-se **is-** como prefixo nos IDs e classes;
  - TEMA: são as declarações que impactam na aparência de forma genérica, por exemplo cores padrões.

Vantagens:

- Possui uma semântica mais clara para melhor entendimento;
- É mais facil de reestruturar, caso seja necessário uma mudança  no HTML;

Desvantagens: 

- Não nomeia elementos descendentes, sendo assim, é mais difícil de executar grandes aplicações;

<br>

**BEM (Block, Element, Modifier)**

- Essa é uma metodologia baseada em componentes para desenvolvimento web.
  - Block: componente de página logicamente e funcionalmente independente, ou seja, ele e um container que possui todos os elementos dentro dele;
  - Element: parte constituinte de um bloco que não pode ser usada fora dele;
  - Modifier: define a aparência e o comportamento de um bloco ou elemento.

Vantagens: 

- Sugere nomenclatura adequada para elementos descendentes;
- Padrão de organização de arquivos.

Desvantagens:

- Não possui categorias;
- Não fala nada sobre regras aplicadas diretamente a elementos.
