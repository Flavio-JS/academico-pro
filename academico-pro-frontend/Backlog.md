# 📋 Backlog - Sistema de Gestão Acadêmica

Este backlog descreve as funcionalidades pendentes a serem implementadas no sistema. Futuramente serão separadas por `role` (**Aluno**, **Professor** e **Administrador (ADM)**).

---

## ✅ Implementações já concluídas

### 📄 Página: Dashboard (Aluno)

- [x] Listar Disciplinas Matriculadas
- [x] Mostrar Notas Recentes
- [x] Mostrar Notificações Recentes

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

### 📄 Página: Gestão de Matrículas

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

### 📄 Página: Dashboard

- [ ] Adicionar links rápidos para materiais nas disciplinas
- [ ] Listar próximas atividades/tarefas
  - Criar mock `upcomingTasks`
  - Exibir com prazo e status
- [ ] Exibir calendário acadêmico com datas importantes
  - Criar componente `<AcademicCalendar />`
  - Utilizar `academicDates` mock

### 📄 Página: Disciplinas

- [ ] Exibir disciplinas matriculadas no semestre atual
- [ ] Exibir informações da disciplina
  - Nome, professor, ementa resumida
- [ ] Acesso a materiais da disciplina (se houver integração futura)

### 📄 Página: Notas

- [ ] Consulta detalhada por disciplina
  - Listagem de avaliações e notas
  - Filtro por semestre
- [ ] Gráficos de desempenho ao longo do semestre
  - Criar componente `<StudentPerformanceChart />`
- [ ] Comparação com média da turma (se permitido)
  - Mostrar ao lado de cada nota, se habilitado

### 📄 Página: Boletim

- [ ] Histórico completo de todas as disciplinas cursadas
  - Navegação por semestre anterior ou dropdown para seleção

### 📄 Página: Notificações

- [ ] Visualização de notificações recebidas
  - Lista com data, assunto e remetente
  - Apenas leitura, sem envio

### 📄 Página: Perfil

- [ ] Alteração de senha (aba "Segurança")
- [ ] Definições de preferências gerais (tema, notificações etc.)

---

## 👨‍🏫 Funcionalidades para Professor

### 📄 Página: Dashboard

- [ ] Exibir turmas atuais
  - Criar mock `currentClasses`
- [ ] Listar disciplinas que leciona no semestre
  - Criar mock `teachingCourses`
- [ ] Mostrar avisos importantes da coordenação
  - Criar mock `coordinationNotices`
- [ ] Exibir próximas atividades a serem corrigidas
  - Criar mock `pendingCorrections`

### 📄 Página: Disciplinas

- [ ] Listar disciplinas atribuídas ao professor
- [ ] Gerenciar turmas e alunos matriculados
- [ ] Upload de materiais da disciplina
- [ ] Editar ementa e informações básicas

### 📄 Página: Notas

- [ ] Edição de notas já lançadas
  - Permitir atualização inline ou via modal
- [ ] Exportação de planilhas com notas
  - Botão “Exportar” com download em .csv ou .xlsx

### 📄 Página: Perfil

- [ ] Visualização e edição de dados pessoais e profissionais
  - Nome, e-mail institucional, telefone
  - Área de atuação e disciplina(s) vinculada(s)
- [ ] Link externo para currículo (Lattes/LinkedIn)
- [ ] Configurações de notificações (aba "Preferências")
- [ ] Alteração de senha

---

## 🧑‍💼 Funcionalidades para Administrador (ADM)

### 📄 Página: Dashboard

- [ ] Exibir estatísticas gerais da instituição
  - Criar componente `<InstitutionStats />`
  - Incluir gráficos (opcional)
- [ ] Mostrar números gerais:
  - Total de alunos
  - Total de professores
  - Total de disciplinas
- [ ] Exibir alertas do sistema (pendências, etc.)
  - Criar mock `systemAlerts`

### 📄 Página: Gestão de Usuários

- [ ] Criar novo usuário (formulário)
- [ ] Redefinir senha administrativa
- [ ] Implementar ativação/desativação funcional de contas
- [ ] Implementar backend completo de CRUD para todos os perfis
- [ ] Implementar backend da busca avançada

### 📄 Página: Gestão de Disciplinas

- [ ] Editar disciplinas existentes
- [ ] Atribuir professores a disciplinas
- [ ] Vincular disciplinas a cursos
- [ ] Definir status (ativa/inativa)
- [ ] Validação de código único e requisitos
- [ ] Implementar backend do CRUD de disciplinas

### 📄 Página: Gestão de Matrículas

- [ ] Matrícula em lote (importação via planilha)
  - Criar botão de upload
  - Validar estrutura e dados da planilha
  - Exibir feedback de sucesso/erros
- [ ] Ajuste manual de matrícula
  - Abrir modal com lista de disciplinas disponíveis
  - Adicionar/Remover disciplinas
- [ ] Exibir histórico de alterações
  - Criar botão “Ver histórico”
  - Modal com timeline de ações por matrícula

### 📄 Página: Perfil

- [ ] Gerenciamento de permissões e acessos (não disponível ao próprio perfil, mas via painel)
- [ ] Alteração de senha
- [ ] Preferências do sistema (idioma, fuso horário, etc.)

---

## 💡 Melhorias Técnicas Futuras

- [ ] Separar dashboards e páginas por `role` do usuário
  - Implementar autenticação e controle de acesso
- [ ] Refatorar componentes em arquivos reutilizáveis
- [ ] Implementar paginação/lazy loading real
- [ ] Garantir responsividade e acessibilidade
