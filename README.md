# 📚 Acadêmico PRO - Sistema Cliente-Servidor

Este é um sistema acadêmico desenvolvido com arquitetura cliente-servidor utilizando:

- Frontend: [Next.js](https://nextjs.org/)
- Backend: [NestJS](https://nestjs.com/) com [Prisma ORM](https://www.prisma.io/)
- Banco de Dados: PostgreSQL
- Orquestração: Docker + Kubernetes

---

## 🧱 Estrutura do Projeto

```
academico-pro/
├── frontend/             # Aplicação Next.js
├── backend/              # API NestJS com Prisma
├── k8s/                  # Manifests do Kubernetes
│   ├── postgres.yaml
│   ├── backend.yaml
│   └── frontend.yaml
└── README.md
```

---

## 🚀 Como executar o projeto localmente

### ✅ Pré-requisitos

- [Docker](https://www.docker.com/)
- [Kubernetes (via minikube ou Docker Desktop)](https://kubernetes.io/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)

---

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/academico-pro.git
cd academico-pro
```

---

### 2️⃣ Buildar as imagens Docker localmente

```bash
docker build -t academico-pro-frontend ./academico-pro-frontend
docker build -t academico-pro-backend ./academico-pro-backend
```

---

### 3️⃣ Aplicar os manifests do Kubernetes

```bash
kubectl apply -f k8s/postgres.yaml
kubectl apply -f k8s/backend.yaml
kubectl apply -f k8s/frontend.yaml
```

---

### 4️⃣ Rodar as migrations do Prisma no container do backend

```bash
kubectl exec -it $(kubectl get pods -l app=academico-pro-backend -o jsonpath='{.items[0].metadata.name}') -- npx prisma migrate deploy
```

---

## 🌐 Acessando o sistema

- Frontend: http://localhost (ou IP exposto pelo `LoadBalancer`)
- Backend API: http://localhost:30080
- PostgreSQL: acessível internamente no cluster (via `postgres:5432`)

---

## 👨‍🏫 Autor

Flávio JS – [flaviojs.com](https://www.flaviojs.com)

---

## ❌ Remover imagens e containers locais

### 1️⃣ Pare todos os recursos Kubernetes

```bash
kubectl delete -f k8s/backend.yaml -f k8s/frontend.yaml -f k8s/postgres.yaml
```

---

### 2️⃣ Remova as imagens Docker

```bash
docker rmi academico-pro-frontend academico-pro-backend postgres:15
```
