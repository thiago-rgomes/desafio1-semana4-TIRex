## Compass Uol - Desafio 1

## Descrição

Recriar as três páginas mantendo-se fiel ao design original do Figma, utilizando apenas HTML, CSS e JS.

## Requisitos obrigatórios

### Gerais

- Utilizar apenas HTML, CSS e JS. **Não podendo usar bibliotecas externas**.

- Criar um repositório **privado** em seu Github e adicione os instrutores como colaboradores do projeto.

- Todas as páginas devem conter header e footer.

- Adicionar corretamente os links nos botões e ícones, como os de redes sociais, no footer.

- Os campos de formulário devem ser todos validados com **JavaScript**, isso é válido para todos os campos para preenchimento nas duas páginas.

- Dê preferência por separar em arquivos diferentes os códigos de styles e script (ou seja, um .html, um .css e um .js).

- Utilizar tags semânticas para montagem do HTML.

- Adicionar um README ao projeto.

- Fazer pequenos commits e usar Convencionais Commits para manter seu repositório organizado.

### Descrição Header e Footer:

- Header
    - A Header deve estar em todas as páginas.
    - Botões "Login" e "Get started" devem redirecionar para a página de login.
    - Botão “Home” deve redirecionar para a página de início.
- Footer
    - O Footer deve estar em todas as páginas, com o design fiel ao Figma.
    - Os ícones de ‘Facebook’, ‘Instagram’, e ‘LinkedIn’ devem ser clicáveis, direcionando para a página inicial de cada rede social.


### 🔶 Home

- O formulário de inscrição valida:
  - Se o campo de email está preenchido e com formato válido.
  - Se o campo de nome não está vazio.

- Caso os campos estejam corretos, os dados são armazenados no **LocalStorage**.


### 🔶 Login

- O formulário de login valida:
  - Se o campo de email está preenchido e com formato válido.
  - Se o campo de senha não está vazio.

- Se os campos estiverem corretos, o login redireciona para a página **Kanban**.


### 🔶 Kanban

- A página contém 3 colunas: "To Do", "In Progress", "Complete".

- O layout foi mantido fiel ao design do Figma, mas sem a implementação de funcionalidades interativas.


### → Os requisitos <span style="color: lightblue;">**OPCIONAIS**</span> são:

- Aplicar responsividade em seu projeto.
- Aplicar efeitos de Hover.
- Mensagem de confirmação ao enviar os dados do formulário corretamente. [Design livre]