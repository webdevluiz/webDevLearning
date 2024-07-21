# webDevLearning

My personal essay on front-end learning journey through HTML, CSS, javascrypt and some useful content

> Esse documento será alimentado tanto por português quanto por inglês baseado em minha visão pessoal. A ideia geradora empenhasse em mostrar os conteúdos com certa divisão, seguindo HTML, CSS, JavaScrypt e quaisquer conteúdos adicionais, guardando seções de interações para sitações em trechos conveniêntes.

# HTML - HyperText Markup Language

|Linguagem de marcação utilizada para estruturar e definir o conteúdo de páginas web, baseada em **elementos/tags** que possuem funções especificas e **atributos** com **valores** personalizáveis que alteram sua aparência e comportamento. Estruturação baseada em aninhamento de elementos, os quais os descendentes herdam as características do ninho caso não tenham regras próprias.

# Estrutura básica de um arquivo HTML <!>

```
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTG-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My page</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
</html>
```

# Comentários em um arquivo HTML

`<!--comentário a ser lido mas não interpretado pela máquina-->`

# Tags

- marcadores utilizados para demonstrar o que aquele conteúdo representa, utilizado pelos algoritmos de busca para verificar a relevância do site em questão.

```
<header> - Cabeçalho do conteúdo
    <h1> - Titulos, Numeração mostra a hierarquia</h1>
</header>

<main> - Área do conteúdo principal
    <p> - Paragrafo.
        <a href="https://url.desejado ou nome_arquivo"> - Ancora o link entregue</a>
    </p>

    <nav> -
        <link href="nome_arquivo ou https://url.do.site" rel="a relação do link">
    </nav>

    <section> - Sessão para divisão
        <img src="nome_fonte.formato ou https://url.da.imagem" alt="Descrição da imagem.">
    </section>



    <article> - Estruturador de textos
        <ol> - Lista ordenada
            <li> - Rlemento da lista </li>
        </ol>

        <ul> - Lista desordenada
            <li> - Mesma tag </li>
            <li> - Mudança de estilos no CSS </li>
        </ul>
    </article>
</main>
<footer>
    <p>Rodapé da página</p>
</footer>
```

# Forms em sua página

- forms são a maneira de enviar e receber dados do usuário quando existe a interação na página.

**Tipos comuns de forms**

- form: Define o espaço que terão os elementos a serem coletados e enviados juntos, além do alvo a receber ou retornar a ação e o metodo que será aplicado nessa ação.
- input: o tipo mais comum, recebe diversos tipos, que definem sua entrada, name="" que define como será reconhecido no envio do form e id, que liga ele a estilização da página e a etiqueta que o caracteriza ao usuário.
- button: marca o envio ou pedido de uma ação.

# CSS - Cascading Style Sheets

|Linguagem de estilização utilizada para definir a apresentação visual dos conteúdos em páginas web, proporcionando aos desenvolvedores o controle necessário sobre a aparência e o comportamento visual dos elementos. Possuem diversas características e funcionalidades, bem como:

- **Seletores:** São utilizados para aplicar estilos a elementos específicos de uma página HTML, como tags, classes, IDs, atributos, entre outros.

- **Propriedades:** Definem como os elementos selecionados devem ser apresentados, incluindo cor, tamanho da fonte, margens, preenchimento, etc.

- **Hierarquia em Cascata:** O termo "cascata" refere-se à forma como as regras de estilo são aplicadas, com prioridades determinadas pela especificidade dos seletores e pela ordem de declaração. Sendo assim, direfentes regras podem afetas o mesmo elementos dependendo da hierarquai criada nos estilos

- **Responsividade:** CSS permite criar layouts responsivos que se adaptam a diferentes tamanhos de tela e dispositivos, utilizando técnicas como media queries e unidades flexíveis.

- **Modularidade e reutilização:** Estilos CSS podem ser organizados em arquivos separados e reutilizados em diversas páginas, facilitando a manutenção e a consistência visual de um site.

- **Compatibilidade:** CSS é suportado por todos os navegadores modernos e é uma tecnologia fundamental para a criação de interfaces web modernas e agradáveis ao usuário.

# Estrutura básica de um CSS global e um.

```
<head>
    <style>
        h1{
            font-family: Arial;
            text-align: center;
            color: RGB;
        }

        p {
            font-family: Arial;
            text-align: center;
            color: RGB;
        }

        a {
            color: value-1;
            text-decoration: none or underline(standart);
            property-3: value-3;
        }

        a:hover {
            color: value-2;
            text-decoration: underline;
        }
    </style>
        or
    <link href="style.css" rel="stylesheet">
</head>
```

- Cada linha dentro dos colchetes terá uma propriedade CSS e um valor, devendo terminar com ;

# Comentários em um arquivo CSS

`/*Comentário a ser lido mas não interpretado pela maquina*/`.

# Estado do elemento e suas implicações

O elemento `<a href="">ancora</a>`, quando estilizado simboliza todas as ancoras em seu estado padrão, os estilos entregues serão seguidos por todos os elementos que corresponderem a esse estado padrão.

Sendo assim, ao especificar `a:hover {texte-decoration: underline;}`, apenas o elemento ancora que possui o mouse acima dele herdará essa folha de estilo.

# Ordem de declaração para elementos CSS

A declaração de qual folha estilizará o elementos segue a ideia de especificidade, portanto, estilos inline são seguidos de estilos no body, com estilos externos tendo menos prioridade. Também vale salientar que a regra declarada por ultimo dentro de cada estilo prevalece.

# Seletores em CSS

| **Type**: Folha de estilo para elementos de um tipo ou grupos de tipos

```
<head>
    <style>
        p {;}
        h1 {;}
            or
        p, h1 {;}
    </style>
</head>
<body>
    <h1>Titulo</h1>
    <p>Paragrafo</p>
</body>
```

| **ID** : Especifíca qual elemento recebe aquele estilo

```
<head>
    <style>
        #nome{;}
            or
        p#nome{;}
    </style>
</head>
<body>
    <p id="nome">Paragrafo de id nome.</p>
</body>
```

- `#nome` ou `p#nome` Identifica especificamente o ID dado: regra seguida apenas por esse elemento, não nomeie diversos elementos com o mesmo ID.

| **Class** : Afeta quaisquer elementos que pertençam aquela classe.

```
<head>
    <style>
        .class{;}
    </style>
</head>
<body>
    <h1 ="class">Titulo da classe
    <p ="class">Paragrafo da classe</p>
</body>
```

# Combinações em CSS

| **Descendencia** :Qualquer elemento que, de alguma maneira, direta ou indireta, pertença aquela regra

> ```
> <style>
>    article p a {;}
> </style>
> ```
>
> Qualquer âncora aninha em uma lista que esteja em um article receberá esse estílo

| **Child** :Apenas elementos que obedecem a ordem direta de aninhamento receberão

> ```
> <style>
>    article > a {;}
> </style>
> ```
>
> Apenas uma âncora que esteja aninhada diretamente em um artigo receberá esse estilo, no caso abaixo, apenas a âncora dentro do article 2.
>
> ```
> <body>
>   <main>
>       <article id="1">
>           <p><a href=""></p>
>       </article>
>
>       <div></div>
>
>       <article id="2">
>           <a href="">
>       </article>
>   </main>
> </body>
> ```

# Propriedades comuns em CSS

```
<head>
    <style>
        h1, p {
            background-color: Define a cor de fundo;
            background-image: Define uma imagem de fundo;
            border: Define as propriedades da borda;
            border-radius: Define os cantos arredondados - px;
            box-shadow: Adiciona sombra ao elemento;
            color: Define a cor do texto;
            font-family: Define a fonte do texto;
            font-size: Define o tamanho do texto;
            font-weight: Define a espessura do texto;
            font-style: Define o estilo da fonte (normal, itálico, oblíquo);
            letter-spacing: Define o espaçamento entre as letras;
            line-height: Define a altura da linha;
            margin: Define a margem externa do elemento;
            opacity: Define a opacidade do elemento;
            padding: Define o espaçamento interno do elemento;
            text-align: Define o alinhamento do texto;
            text-decoration: Adiciona decoração (sublinhado, linha sobre o texto, etc.);
            text-shadow: Adiciona sombra ao texto;
            text-transform: Controla o capslock do texto (lowercase, uppercase, capitalize);
            transform: Aplica transformações 2D ou 3D;
            word-spacing: Define o espaçamento entre as palavras;
        }
        img {
            height: Define a altura da imagem;
            width: Define a largura da imagem;
            max-height: Define a altura máxima da imagem;
            max-width: Define a largura máxima da imagem;
            min-height: Define a altura mínima da imagem;
            min-width: Define a largura mínima da imagem;
            display: Controla a exibição da imagem (block, inline, inline-block);
            position: Controla o posicionamento da imagem (static, relative, absolute, fixed, sticky);
            float: Faz a imagem flutuar à esquerda ou à direita;
            object-fit: Controla como o conteúdo da imagem se ajusta ao seu container;
            opacity: Define a opacidade da imagem;
            filter: Aplica efeitos gráficos como blur, brightness, contrast, etc;
        }
        ol, ul, li {
            list-style: Modifica o marcador de elementos da lista;
        }

    </style>
</head>
```

# Box model no CSS

> box model pode ser visualizado nas guia de desenvolvedor do google Chrome.

![explicação visual no arquivo cssBoxModel.jpg](/imgs/models/boxModel.png)

- Cada elemento possui as características de uma caixa, sendo:
  - **margin** (Espaço exterior a caixa). - a margem pode ajudar a centralizar elementos.
  - **border** (Linha que representa as paredes da caixa).
  - **padding** (Espaço entre o conteúdo e as paredes da caixa).
  - **content** (O conteúdo mostrado na caixa).
  - **element** (A junção do conteúdo da caixa, de seu espaço interno e as paredes da caixa).

# Flexbox model no CSS

> consiste em tratar um elemento como container e manejar a posição de suas crianças dentro do mesmo.
>
> https://www.youtube.com/watch?v=siKKg8Y_tQY

![Explicação visual de características de um elementos flexbox https://medium.com/@MakeComputerScienceGreatAgain/understanding-flexbox-a-comprehensive-guide-992bcd5f04de](/imgs/models/flexBoxMenor.png)

```
#container {

    display: flex; - modifica a regra de alinhamento de elementos dentro do container
    flex-direction: row; - padrão, sentido esquerda para direita e cima para baixo;
    flex-direction: row-reverse; - inverte a ordem dos elementos em linha - direita para esquerda e cima para baixo;
    flex-direction: column; - mostra os elementos em coluna - cima para baixo e esquerda para direita;
    flex-direction: column-reverse; - inverte a ordem dos elementos em coluna = baixo para cima e esquerda para direita

    flex-wrap: nowrap; - padrão
    flex-wrap: wrap; /* - define se o container ira ou não se comprimir o conteúdo com a alteração de tamanho, definir tamanho inabilita essa opção*/

    justify-content: space-around; /* Desabilite o tamanho do container para ver a diferença */
    justify-content: space-between;/* Compara o tamanho do container e dos elementos e insere espaços no local especificado */

    align-items: center; define o alinhamento dos itens;
}
```

# Position em CSS

> define como o elemento se comportará em relação a página ou ao seus ancestrais.
>
> https://www.youtube.com/watch?v=wmAP2xvNs08 - parte 1
>
> https://www.youtube.com/watch?v=RdlEEfx912M - parte 2

```
style {
    div{
        position static; - valor padrão de comportamento na lógica do CSS.

        position: relative; - tornará esse elemento relativo a sua posição padrão e um container pai para elementos dentro dele.

        position: absolute; - Relaciona sua posição ao elemento pai ou ao container que pertence.

        position: fixed; - se torna fixo a posição configurada no elemento pai ou container.

        position: sticky; - mantêm a posição entregue enquant na viewport, age como fixado quando mudasse a visão do site.
    }
}
```

![Explicação visual do conceito position](/imgs/models/position.png)

# Grid em CSS

> O CSS Grid Layout é um sistema de layout bidimensional que permite criar designs complexos de forma mais simples e intuitiva. Ele oferece um controle preciso sobre a posição dos elementos dentro de um contêiner de grid. Aqui estão os conceitos e propriedades principais para entender o CSS Grid:
>
> https://www.youtube.com/watch?v=RSIclWvNTdQ

**Conceitos Básicos :**

- **Grid Container**: O elemento que tem display: grid aplicado a ele. Este contêiner define um contexto de grid para seus elementos filhos.

- **Grid Items:** Os filhos diretos do contêiner de grid. Cada item dentro do grid é um grid item.

- **Grid Lines:** As linhas que dividem o grid em células. As linhas podem ser horizontais ou verticais.

- **Grid Tracks:** As faixas ou trilhos que compõem o grid, que são as linhas horizontais (linhas) e verticais (colunas).

- **Grid Cells:** As células individuais do grid, onde cada célula é o espaço entre duas linhas horizontais e duas verticais.

- **Grid Areas:** Áreas retangulares no grid que podem abranger várias células e serem nomeadas para facilitar a organização.

**Propriedades do Contêiner de Grid :**

- **Display:** grid: Define um contêiner como um grid.

- **grid-template-columns:** Define a largura das colunas do grid.

- **grid-template-rows:** Define a altura das linhas do grid.

- **grid-template-areas:** Define áreas nomeadas no grid que podem ser referenciadas pelos grid items.

- **gap:** Define o espaçamento entre as linhas e colunas do grid. Pode ser especificado como row-gap e column-gap para espaçamentos individuais.

- **justify-items:** Alinha os itens ao longo do eixo horizontal.

- **align-items:** Alinha os itens ao longo do eixo vertical.

- **Propriedades dos Grid Items**
- **grid-column:** Define a posição e o tamanho da coluna para o item. Pode ser especificado como \* \* grid-column-start e grid-column-end.

- **grid-row:** Define a posição e o tamanho da linha para o item. Pode ser especificado como grid-row-start e grid-row-end.

- **grid-area:** Permite que o item ocupe uma área nomeada definida pelo grid-template-areas.

# Responsividade

Unidades responsivas :

![comparação entre medidas](/imgs/models/pixels_rem_em.png)

Mobile 1° :

![Exemplificação para MOBILE FIRST](/imgs/models/mobile_1_vertical.png)

Media query :

- Uma consulta de mídia (media query) é um recurso do CSS utilizado para aplicar estilos a conteúdos web com base nas características do dispositivo que está renderizando o conteúdo, como o tamanho da tela, resolução, orientação e outros.

- As consultas de mídia permitem o design responsivo, adaptando a aparência e o layout de sites a diferentes dispositivos e tamanhos de tela.
  ![demonstração visual de media queries](/imgs/models/media_queries.png)

# Javascript

- **Variaveis**: menor peça da linguagem

  - Em JavaScript, as variáveis são usadas para armazenar dados que podem ser posteriormente manipulados e referenciados no código. Aqui estão alguns pontos importantes sobre variáveis em JavaScript:

  1. **Declaração de variáveis:** Em JavaScript, você pode declarar uma variável usando as palavras-chave `var`, `let` ou `const`.

  2. **Tipos de variáveis:** JavaScript é uma linguagem dinamicamente tipada, o que significa que o tipo de uma variável é determinado automaticamente. Os tipos de variáveis em JavaScript incluem:

     - `number`: para valores numéricos
     - `string`: para texto
     - `boolean`: para valores verdadeiros/falsos
     - `object`: para estruturas de dados mais complexas
     - `undefined`: para variáveis que ainda não foram atribuídas
     - `null`: para variáveis com um valor nulo

  3. **Escopo de variáveis:** Em JavaScript, o escopo de uma variável pode ser global ou local, dependendo de onde a variável é declarada. Variáveis declaradas fora de uma função têm escopo global, enquanto as declaradas dentro de uma função têm escopo local.

  4. **Regras de nomenclatura:** As variáveis em JavaScript devem começar com uma letra, `$`, ou `_`. Elas também podem conter letras, números, `$` e `_`, mas não podem conter espaços ou começar com um número.

  5. **Exemplos de declaração de variáveis:**

     ```
       var numero = 10;
       let nome = "João";
       const PI = 3.14;
     ```

- **arrays/vetores**: união de valores diferentes em um endereço único, uma estrutura de dados que nos permite armazenar uma coleção de elementos.

  - Sintaxe: Para criar um array, usamos colchetes []. Dentro dos colchetes, listamos os elementos separados por vírgulas.

  ```
      const meuArray = [10, 'olá', true, { nome: 'Alice' }];
  ```

  - Índices: Os índices dos arrays começam em zero. Isso significa que o primeiro elemento está no índice 0, o segundo no índice 1 e assim por diante.

  - Tamanho dinâmico: Ao contrário de algumas linguagens, o tamanho de um array em JavaScript não é fixo. Podemos adicionar ou remover elementos a qualquer momento.

- **Funções**: É um procedimento que executa uma tarefa específica ou calcula um valor quantos vezes for evocada. Ela é como um assistente pessoal que você chama para fazer algo por você.

  - Declaração de Função:

  ```
      function nomeDaFuncao(parametro1, parametro2) {
        return resultado; // Opcional: retorna um valor
      }
          Explicando cada parte:
              nomeDaFuncao: Escolha um nome significativo para sua função.
              (parametro1, parametro2): Esses são os argumentos que a função pode receber. Eles são opcionais.
              return resultado: Opcionalmente, a função pode retornar um valor.

  ```

  - Chamando uma Função:
    Depois de definir uma função, você pode chamá-la (ou invocá-la) em qualquer lugar do seu código.

    ```
        function saudacao(nome) {
          return `Olá, ${nome}!`;
        }

        const mensagem = saudacao('Alice');
        console.log(mensagem); // Exibe "Olá, Alice!"
    ```

  - Funções Anônimas (Expressões de Função): Além da declaração de função, podemos criar funções anônimas (sem nome) usando

    ```
        const dobrar = function (numero) {
          return numero * 2;
        };

        console.log(dobrar(5)); // Exibe 10
    ```

  - Arrow Functions (Funções de Seta): Uma sintaxe mais concisa para criar funções é usando arrow functions:

    ```
        const quadrado = (x) => x * x;

        console.log(quadrado(3)); // Exibe 9
    ```

  - Escopo de Função: Variáveis declaradas dentro de uma função têm escopo local, ou seja, só são visíveis dentro dessa função.

  - Funções como Objetos de Primeira Classe: Em JavaScript, funções são objetos especiais. Elas podem ser atribuídas a variáveis passadas como argumentos e até mesmo retornadas por outras funções.

- **Objetos**: Uma coleção dinâmica de propriedades, onde cada propriedade é uma associação entre um nome (ou chave) e um valor. Esses valores podem ser simples, como strings, números ou booleanos, ou até mesmo estruturas mais complexas, como outros objetos ou arrays.

  - Criando um Objeto:
    Começamos definindo uma variável e atribuindo a ela um objeto vazio: `let variavel = {}`
  - Adicionando propriedades:

    ```
        let variavel = {
          nome: ['nome', 'sobrenome'],
          idade: 18,
          sexo: 'sexo',
          interesses: ['música', 'esquiar'],
          bio: function () {
            console.log(
              `${this.nome[0]} ${this.nome[1]} tem ${this.idade} anos de idade. Ele gosta de ${this.interesses[0]} e ${this.interesses[1]}.`
            );
          },
          saudacao: function () {
            console.log(`Oi! Eu sou ${this.nome[0]}.`);
          },
        };

    ```

    Cada elemento do objeto deve conter sua etiqueta e seu valor, seguido de uma virgula para diferenciar os elementos.

  - Acessando Propriedades: Em objetos, variaveis são chamadas propriedades e não precisam de let, var ou cosnt.
    ```
        console.log(pessoa.nome); // ['nome', 'sobrenome']
        console.log(pessoa.idade); // 18
        console.log(pessoa.interesses[1]); // esquiar
    ```
  - Chamando Métodos: Em objetos, funções são chamadas metodos e não precisam de function.
    ```
        pessoa.bio(); // Exibe informações sobre a pessoa
        pessoa.saudacao(); // Exibe uma saudação
    ```

- **Operações matemáticas**:

  - Soma: let n = n1 + n2; ou n += n1; ou n++;
  - subtração: let n = n1 - n2; ou n -= n1; ou n--;
  - multiplicação: let n = n1 _ n2; ou n _= n1;
  - divisão: let n = n1 / n2; ou n /= n1;
  - modulo: let n = n1 % n2; => retorna o resto da divisão de n1 por n2. ou ou n %= n1; resto de n/n1

- **concatenação**:

  - unindo duas strings: "Luiz"+" "+"Felipe" = "Luiz Felipe";

- **QuerySelector**:

  - É possível selecionar qual elemento será mudificado em seu HTML/CSS por javascript: `let pointer = document.querySelector('#id utilizado' ou p a ou '.classe escolhida')`, acessando assim o primeiro elemento que corresponder a essa busca.

  - `document.querySelectorAll(# . p)` selecioda todos os que forem similares.

- **Adicionar elementos no documento**: Para adicionar um elemento, é necessário primeiro cria-lo, identificar seu pai/ninho e então adiciona-lo.

  - criação:

  ```
    let elementoCriado = document.createElement(tag do elemento)
    elementoCriado.caracteristica se tiver = "valor a receber" - href, src...
    elementoCriado.textContent = "Texto a ser inserido"
  ```

  - Encontrar o pai/ninho:

  ```
    let elementoPai = document.queryselector(`#pai`);
  ```

  - Insira o elemento:

  ```
    elementoPai.append(elementoCriado);
  ```

- **Removendo elementos do documento**: Para remover, basta encontrar o elemento e remove-lo.

  - Encontra-ló:

  ```
      let elementoRemovido = document.querySelector(`#removido`);
  ```

  - remove-ló:

  ```
      elementoRemovido.remove();
  ```

  - Para navegadores antigos:

  ```
      elementoRemovido.parentElement.removeChild(elementoRemovido); //kk
  ```

- **Mover elementos existentes**: É necessário encontrar esse elemento e inseri-lo novamente para que o navegador o movimente

- **Inserir elementos HTML a um texto**: Similar a textContent, basta encontrar o elemento e utilizar = ou += para trocar ou adicionar o conteudo.
  - Encontra-ló:
  ```
      let inserir = document.querySelector(`#inserir`);
  ```
  - É possivel visualizar seu conteúdo.
  ```
      console.log(inserir.innerHTML);
  ```
  - modificar ou adicionar:
  ```
      inserir.innerHTML = ou += `Conteúdo preterido` ou `adicionando uma imagem <img src="url" alt="imagem">`
  ```

# Eventos em Javascript

- Eventos são gatilhos que ocorrem em todo o corpo da página e podem ser fiscalizados e utilizados.
  - Para adicionar um evento, basta encontrar o elemento que o receberá e utilizar a função preexistente, entregando o evento que será adicionado e o metodo que será evocado quando o evento ocorrer.
    ```
        let evento = document.querySelector("#elemento");
        evento.addEventListener("type", metodoEvocado);
    ```
  - O metodo deve ser evocado sem os parenteses para que ele ocorra quando o evento for percebido, caso o contrario ele ocorrerá imediatamente após o evento ser adicionado ao elemento.

# Adicionar classes a um elemento para ativar estilos pré formatados

- Para facilitar que folhas de estilos sejam ativadas na hora certa, é possivel utilizar js para adicionar e remover classes a elementos
  - Adicionar:
  ```
      let elemento = document.querySelector("elemento");
      elemento.classList.add("nome da classe");
  ```
  - Remover:
  ```
      let elemento = document.querySelector("elemento");
      elemento.classList.remove("nome da classe");
  ```

# estruturas de controle

- Por meio de estruturas de controle é possível criar condições que serão seguidas para atingir nosso objetivo.

  - Condicionais: estruturas que precisam que uma condição seja cumprida para seguir o fluxo, caso não seja, outro ou nenhum fluxo será entregue como caminho a ser seguido.
  - lógicos: Verifica as partes e decide se são suficientes para prosseguir no fluxo.

# Loops

- Estruturas que permitem que uma parte do código seja repetida diversas vezes.

  - for: repete n vezes.
  - for..on: passeia por todos os elementos de uma lista/vetor.
  - for..in: passa por todas as propriedades de um objeto.
  - while: repete até uma condição ser atendida.