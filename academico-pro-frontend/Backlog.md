# 📋 Backlog - Sistema de Gestão Acadêmica

Este backlog descreve as funcionalidades pendentes a serem implementadas no sistema. Futuramente serão separadas por `role` (**Aluno**, **Professor** e **Administrador (ADM)**).

---

## ✅ Implementações já concluídas

### 📄 Página: Dashboard (Aluno)

- [x] Listar Disciplinas Matriculadas
- [x] Mostrar Notas Recentes
- [x] Mostrar Notificações Recentes
- [x] Exibir calendário acadêmico com datas importantes
  - Criar componente `<AcademicCalendar />`
- [X] Adicionar links rápidos para materiais nas disciplinas
- [X] Listar próximas atividades/tarefas
  - Exibir com prazo e status

### 📄 Página: Gestão de Usuários (ADM)

- [x] Listagem de usuários com paginação
- [x] Filtros por tipo (aluno, professor, administrador)
- [x] Filtros por status (ativo, inativo)
- [x] Busca por nome, e-mail ou CPF
- [x] Botões de ações: visualizar, editar, desativar

### 📄 Página: Gestão de Disciplinas (ADM)

- [x] Listagem de disciplinas
- [x] Filtros por status, departamento e semestre
- [x] Busca por nome, código ou professor
- [x] Formulário de criação de disciplina (modal)
- [x] Campos: nome, código, carga horária, professor, pré-requisitos, ementa, status

### 📄 Página: Gestão de Matrículas ( ADM )

- [x] Listagem de matrículas com filtros
  - Filtro por semestre, curso e status
  - Exibição de aluno, disciplinas e status
  - Ações por linha (ex: desvincular, ver detalhes)

### 📄 Página: Notas ( Professor )

- [x] Lançamento de notas por atividade
  - Seleção de disciplina, turma e avaliação
  - Campo de nota por aluno (0 a 10)
- [x] Visualização do desempenho da turma (médias, gráficos)
  - Exibir estatísticas e componente `<PerformanceChart />`

### 📄 Página: Boletim ( Aluno )

- [x] Visualização web organizada por semestre
  - Exibe nome, matrícula, curso e semestre atual
  - Tabela com disciplinas, notas (P1, P2), média, frequência e situação
- [x] Opção de download em PDF
  - Botão “Exportar PDF” com estilo de relatório acadêmico

### 📄 Página: Notificações ( Professor )

- [x] Envio de notificações
  - Seleção de destinatários: todos os alunos, turma específica ou aluno individual
  - Campos: assunto, corpo da mensagem (com formatação básica), anexos
  - Botões de ação: Cancelar e Enviar
- [x] Histórico de notificações enviadas
  - Lista com data, assunto, destinatários e status (Entregue, Falha)
  - Filtros por status e data

### 📄 Página: Notificações ( ADM )

- [x] Envio de notificações
  - Seleção de destinatários: todos os alunos, turma específica ou aluno individual
  - Campos: assunto, corpo da mensagem (com formatação básica), anexos
  - Botões de ação: Cancelar e Enviar
- [x] Histórico completo
  - Visualização de todas as notificações enviadas pelo sistema
  - Filtros avançados por tipo de usuário, status e data

### 📄 Página: Perfil ( Aluno )

- [x] Visualização e edição de dados pessoais
  - Nome, matrícula (não editável), telefone, endereço
- [x] Upload de foto de perfil

---

## 🧑‍🎓 Funcionalidades para Aluno

### 📄 Página: Disciplinas

- [ ] Exibir disciplinas matriculadas no semestre atual
- [ ] Exibir informações da disciplina
  - Nome, professor, ementa
- [ ] Acesso a materiais da disciplina

### 📄 Página: Detalhes da Disciplina

- [ ] Cabeçalho com nome, código, professor, status, período, horário e local
- [ ] Visão geral: ementa, objetivos, pré-requisitos
- [ ] Materiais por tipo e unidade, com filtros e datas
- [ ] Atividades e avaliações com status, notas e calendário
- [ ] Presenças e cronograma de aulas
- [ ] Desempenho: quadro de notas, média e gráfico
- [ ] Anúncios recentes e equipe da disciplina
- [ ] Ações rápidas: envio de trabalho e download de materiais

### 📄 Página: Notas

- [ ] Consulta detalhada por disciplina
  - Listagem de avaliações e notas
  - Filtro por semestre
- [ ] Gráficos de desempenho por semestre
  - Criar componente `<StudentPerformanceChart />`

### 📄 Página: Boletim

- [ ] Histórico completo com navegação por semestre

### 📄 Página: Notificações

- [ ] Visualizar notificações recebidas
  - Lista com data, assunto e remetente
  - Apenas leitura

### 📄 Página: Perfil

- [ ] Alteração de senha
- [ ] Preferências gerais (tema, notificações)

### 📄 Página: Mensagens Internas / Contato

- [ ] Enviar mensagem para professor ou ADM
- [ ] Visualizar histórico de conversas
- [ ] Notificações de nova mensagem

### 📄 Página: Solicitações

- [ ] Enviar requerimentos (segunda chamada, revisão, etc.)
- [ ] Acompanhar status da solicitação
- [ ] Visualizar histórico

---

## 👨‍🏫 Funcionalidades para Professor

### 📄 Página: Dashboard

- [ ] Exibir turmas atuais
- [ ] Disciplinas atribuídas
- [ ] Avisos da coordenação
- [ ] Atividades a corrigir

### 📄 Página: Disciplinas

- [ ] Listar disciplinas atribuídas ao professor
- [ ] Gerenciar turmas e alunos
- [ ] Upload de materiais
- [ ] Editar ementa e informações

### 📄 Página: Notas

- [ ] Editar notas
- [ ] Exportar planilhas

### 📄 Página: Perfil

- [ ] Editar dados pessoais e profissionais
- [ ] Currículo externo (Lattes, LinkedIn)
- [ ] Preferências / senha

### 📄 Página: Mensagens Internas / Contato

- [ ] Enviar mensagem para alunos ou ADM
- [ ] Visualizar histórico de conversas

### 📄 Página: Solicitações

- [ ] Visualizar solicitações recebidas
- [ ] Aprovar ou rejeitar

---

## 🧑‍💼 Funcionalidades para Administrador (ADM)

### 📄 Página: Dashboard

- [ ] Estatísticas gerais
- [ ] Números institucionais
  - Total de alunos
  - Total de professores
  - Total de disciplinas
- [ ] Alertas do sistema

### 📄 Página: Gestão de Usuários

- [ ] Criar novo usuário
- [ ] Redefinir senha
- [ ] Ativar/desativar contas
- [ ] CRUD completo para todos os perfis

### 📄 Página: Gestão de Disciplinas

- [ ] Editar disciplinas
- [ ] Atribuir professores
- [ ] Vincular a cursos

### 📄 Página: Gestão de Matrículas

- [ ] Matrícula em lote (planilha)
  - Disponibilizar modelo de planilha
  - Upload da planilha preenchida
  - Validar planilha
  - Exibir feedback de sucesso/erros
- [ ] Ajuste manual
- [ ] Histórico de alterações

### 📄 Página: Perfil

- [ ] Permissões e acessos
- [ ] Senha / preferências

### 📄 Página: Mensagens Internas / Contato

- [ ] Enviar mensagens para alunos e professores
- [ ] Visualizar histórico

### 📄 Página: Solicitações

- [ ] Gerenciar e auditar
- [ ] Atribuir responsáveis
- [ ] Visualizar histórico completo

---

## 💡 Melhorias Técnicas Futuras

- [ ] Separar dashboards e páginas por `role`
- [ ] Refatorar componentes reutilizáveis
- [ ] Implementar paginação real
- [ ] Garantir responsividade e acessibilidade
