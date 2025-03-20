# Gerador-de-links-AT-TP-Infnet
# Gerador Automático de Links de Exercícios AT/TP (Infnet)

Este projeto foi desenvolvido para ajudar alunos que utilizam o **Codesandbox** e **GitHub** em suas tarefas da faculdade, automatizando o processo de geração de links para múltiplos exercícios. Ele cria links para cada exercício com base no repositório GitHub e no link do Codesandbox, poupando tempo e tornando o processo mais organizado.

Este projeto visa automatizar a criação e organização de links para os exercícios da faculdade, especialmente para aqueles que utilizam o editor de código **Codesandbox** em conjunto com um repositório no **GitHub**. Em cada tarefa, os alunos são desafiados a resolver múltiplos exercícios (geralmente 16) e, ao final, precisam gerar um documento PDF com os links para cada exercício, facilitando a correção pelos monitores.

Este programa facilita o processo de **geração de links** no **Codesandbox**, combinando-os com os links dos repositórios no GitHub. Ao preencher os campos necessários com o link do seu repositório GitHub e o link padrão do Codesandbox, o sistema cria automaticamente os links para cada exercício, prontos para serem copiados e colados em um documento. 

Com um simples clique, você gera todos os links de que precisa, poupando o tempo gasto com tarefas repetitivas e deixando seu trabalho mais organizado e eficiente.

---

### Como Usar

1. **Baixar o Projeto**

   Faça o download ou clone este repositório para o seu computador. Para clonar o repositório, basta executar o seguinte comando no terminal:

      ```git clone https://github.com/seu-usuario/gerador-links.git```

3. **Abrir o Arquivo HTML**

   Após baixar o projeto, abra o arquivo ´index.html´ em seu navegador de preferência, ou execute localmente utilizando um servidor de sua escolha.

4. **Preencher os Campos**

   Na página, você verá três campos de entrada:

   **Link do GitHub:** Preencha com o link do repositório do GitHub onde estão armazenados os exercícios.

   **Exemplo:**
   
   ```nome-usuario/repositorio/tree/master/pasta-do-exercicio-1```

   **Link do Codesandbox:** Este campo já estará preenchido com o link padrão do Codesandbox, mas você pode personalizá-lo. O formato padrão é:

   **Exemplo:**
   
   ```https://codesandbox.io/p/github/```

   **Número de Questões:** Digite o número total de questões para o exercício. Por exemplo, se você tem 16 questões, coloque 16.

   **Exemplo:**

   **Link do GitHub:**

   ```usuario/exemplo-repositorio/tree/master/exercicio-1```

   **Link do Codesandbox:**

   ```https://codesandbox.io/p/github/```

   **Número de questões:** ```16```

   **Gerar os Links**

   Após preencher todos os campos, clique no botão **Gerar Links**. O programa vai gerar os links para cada questão automaticamente, utilizando o link do seu repositório GitHub e o link    do Codesandbox. Por exemplo, se você tem 16 questões, ele irá gerar 16 links no formato:

   ```
   https://codesandbox.io/p/github/nome-usuario/repositorio/tree/master/pasta-do-exercicio-1/questao-1
   https://codesandbox.io/p/github/nome-usuario/repositorio/tree/master/pasta-do-exercicio-1/questao-2
   https://codesandbox.io/p/github/nome-usuario/repositorio/tree/master/pasta-do-exercicio-1/questao-3
   ...
   ```

5. **Copiar os Links**

   Após gerar os links, um botão **Copiar todos os links** aparecerá abaixo dos links gerados. Clique nesse botão para copiar todos os links para sua área de transferência.
   
   **Colar em um Documento**
   
   Depois de copiar os links, basta colá-los em um documento de **Word** ou **PDF** para enviá-los ao monitor para correção.
   
   **Exemplo:** Após clicar em "Copiar todos os links", você pode colar os links diretamente em um documento, que pode se parecer com isso:
   
   ```
   https://codesandbox.io/p/github/usuario/exemplo-repositorio/tree/master/exercicio-1/questao-1
   https://codesandbox.io/p/github/usuario/exemplo-repositorio/tree/master/exercicio-1/questao-2
   https://codesandbox.io/p/github/usuario/exemplo-repositorio/tree/master/exercicio-1/questao-3
   ...
   ```

6. **Enviar o Trabalho**

   Agora, com os links copiados e colados no documento, você está pronto para enviar o arquivo para o monitor corrigir.
   
   **Exemplo:** Você pode criar um PDF ou arquivo de Word com todos os links e enviá-lo ao monitor. Os links estarão prontos para revisão.

**Contribuição**

Se você tiver sugestões de melhorias ou quiser colaborar com o projeto, fique à vontade para abrir uma issue ou enviar um pull request.

