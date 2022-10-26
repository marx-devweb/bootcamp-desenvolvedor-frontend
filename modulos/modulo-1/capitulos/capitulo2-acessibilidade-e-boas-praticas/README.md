# **Acessibilidade e boas práticas**

Acessibilidade na web é a prática de tornar conteúdos e funcionalidades acessíveis a todos os usuários, sejam eles:

- Deficientes (visual, auditivo, físicas, de fala, cognitivas e neurológicas etc.);
- Usuários com restrições temporárias (operações, acidentes etc.);
- Usuários idosos ou com pouco contato com tecnologia

**Princípios e diretrizes para alcançar a acessibilidade**:

- **Princípio 1: Perceptível** - "O usuário precisa perceber/entender o conteúdo"  (WCAG, 2020).
  - Diretriz 1.1-  **Alternativas em Texto**: é necessário ter alternativas de texto para os conteúdos não textual (imagens, gráficos, vídeos etc.);
  - Diretriz 1.2 - **Mídias com base em tempo**: é necessário dar alternativas de legendas ou transcrição em texto para as mídias baseadas em tempo, como os vídeos, áudios, entrevistas ao vivo etc;
  - Diretriz 1.3 - **Adaptável**: é necessário elaborar conteúdo que possa der adaptado a diferentes formas sem perder seu significado, (ex: quando o usuário for aumentar a fonte de um texto);
  - Diretriz 1.4 - **Discernível**: é necessário separar o conteúdo em camadas a fim de facilitar a visualização e audição do conteúdo principal. Também podemos ter a opção de disponibilizar nosso site/sistema coloria e em preto e branco.
- **Princípio 2: Operável** – “Os componentes de interface de usuário e a navegação devem ser operáveis” (WCAG, 2020).
  - Diretriz 2.1 - **Acessível por Teclado**: Tornar toda funcionalidade disponível a partir de um teclado;
  - Diretriz 2.2 - **Tempo Suficiente**: Dar ao público tempo o bastante para ler e usar o conteúdo;
  - Diretriz 2.3 - **Convulsões**: Não criar materiais de uma forma conhecida por provocar convulsões;
  - Diretriz 2.4 - **Navegável**: Dar maneiras de ajudar o público a navegar, encontrar conteúdos e escolher onde se encontram.
- **Princípio 3: Compreensível** – “A informação e a operação da interface de usuário devem ser compreensíveis” (WCAG, 2020).
  - Diretriz 3.1 - **Legível **: Fazer com que o conteúdo seja fácil de entender e legível;
  - Diretriz 3.2 - **Previsível **: Fazer com que o funcionamento das páginas web funcionem de modo previsível;
  - Diretriz 3.3 - **Assistência de Entrada **: Auxiliar o público para encontrar e corrigir erros.
- **Princípio 4: Robusto** – “O conteúdo deve ser robusto o suficiente para poder ser interpretado de forma confiável por uma ampla variedade de agentes de usuário, incluindo tecnologias assistivas” (WCAG, 2020).
  - Diretriz 4.1 - **Compatível**: Fazer com que o conteúdo seja compatível aos atuais e futuros agentes de usuário, principalmente tecnologias assistivas. 

<br>

**Aural StyleSheets**

Aural StyleShets (ou folhas de estilo auditivo) usam uma combinação de síntese de fala e efeitos sonoros para fazer o usuário ouvir as informações, em vez de ler as informações. A apresentação auditiva pode ser usada:

- Por cegos;
- Para ajudar os usuários a aprender a ler;
- Para ajudar os usuários com problemas de leitura;
- Para entretenimento doméstico;
- No carro;
- Por comunidades com problemas de entendimento de entonação.

A apresentação auditiva converte o documento em texto simples e o alimenta em um leitor de tela (um programa que lê todos os caracteres na tela).

| Propriedade         | Descrição                                                    |
| ------------------- | ------------------------------------------------------------ |
| azimuth / elevation | Define de onde o som deve vir.                               |
| cue                 | Define as propriedades da sugestão em uma declaração.        |
| cue-after           | Especifica um som a ser reproduzido depois de falar o conteúdo de um elemento. |
| cue-before          | Especifica um som a ser reproduzido antes de falar o conteúdo de um elemento. |
| pause               | Define as propriedades de pausa em uma declaração.           |
| pause-after         | Especifica uma pausa após falar o conteúdo de um elemento.   |
| pause-before        | Especifica uma pausa antes de falar o conteúdo de um elemento. |
| pitch               | Especifica a voz falada.                                     |
| pitch-range         | Especifica a variação na voz falada. (Voz monótona ou voz animada?) |
| play-during         | Especifica um som a ser reproduzido ao falar o conteúdo de um elemento. |
| richness            | Especifica a riqueza da voz falada. (Voz grossa ou voz fina?) |
| speak               | Especifica se o conteúdo será renderizado auditivamente.     |
| speak-header        | Especifica como lidar com os cabeçalhos da tabela. Os cabeçalhos devem ser falados antes de cada célula ou apenas antes de uma célula com um cabeçalho diferente da célula anterior. |
| speak-numeral       | Especifica como falar os números.                            |
| speak-punctuation   | Especifica como falar os caracteres de pontuação.            |
| speech-rate         | Especifica a velocidade da fala.                             |
| stress              | Especifica a "intensidade" na voz falada                     |
| voice-family        | Especifica a família de voz do falante.                      |
| volume              | Especifica o volume da fala.                                 |

<br>

**Por que se preocupar com acessibilidade?**

- Dar aos usuários a capacidade de acessar informações, serviços e entretenimento de forma independente;
- Fator de ranqueamento que pode fortalecer ou comprometer o SEO;
- Sites acessíveis, sendo mais fáceis de usar, geralmente requerem menos suporte para os usuários.

<br>

**Boas práticas em acessibilidade**

- Marcação ~e semântica coerentes;
- Usabilidade da interface pelo teclado e com o JS desabilitado;
- Correto uso das tags, atributos e descrições;
- Conteúdo em texto para todo conteúdo não-texto (atributo "alt" em imagens, gráficos e outros conteúdos não textuais);
- Resumo do conteúdo para leitores de tela (scren-readers);
- Texto deve dar leitura com alto contraste;

- Descrição das imagens (alt);
- Não usar captcha (letras distorcidas)
- Não utilizar teclado virtual;
- Não ter conteúdo sobreposto (poup-ups);
- Ter atalhos no teclado (principalmente tab);
- Botões com frases em imagens (texto alternativo);
- Não utilizar vermelho e verde juntos para fazer distinções entre funcionalidades chaves. 

