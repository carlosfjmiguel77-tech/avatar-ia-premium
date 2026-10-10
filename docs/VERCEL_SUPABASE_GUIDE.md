# Guia Completo: Passo a Passo para Vercel + Supabase

## Requisitos Prévios
- Node.js 18+ instalado
- Conta GitHub
- Conta Vercel
- Conta Supabase

## Step 1: Setup Local

```bash
# Clone o repositório
git clone https://github.com/carlosfjmiguel77-tech/avatar-ia-premium.git
cd avatar-ia-premium

# Instale as dependências
npm install

# Crie o ficheiro .env.local
cp .env.local.example .env.local

# Edite o .env.local com as suas chaves
nano .env.local

# Teste localmente
npm run dev
```

A app deve estar disponível em http://localhost:3000

## Step 2: Setup Supabase

### 2.1 Criar Projeto

1. Ir a https://supabase.com
2. Login ou criar conta
3. Clique em "New project"
4. Preencha os dados:
   - Name: "avatar-ia-premium"
   - Database password: Use uma password forte
   - Region: Choose the closest to Portugal
5. Clique "Create new project"

### 2.2 Obter Chaves

1. Ir a Settings > API
2. Copiar:
   - `Project URL` → NEXT_PUBLIC_SUPABASE_URL
   - `anon public` → NEXT_PUBLIC_SUPABASE_ANON_KEY
   - `service_role secret` → SUPABASE_SERVICE_ROLE_KEY

### 2.3 Executar Schema

1. Ir a SQL Editor
2. Clique em "New Query"
3. Cole o schema do ficheiro `docs/PRODUCTION_SETUP.md`
4. Clique "Run"
5. Verifique que as tabelas foram criadas

### 2.4 Configurar Auth

1. Ir a Authentication > Providers
2. Email/Password deve estar ativado (default)
3. Ir a Authentication > Email Templates
4. Customizar se necessário

## Step 3: Configurar APIs Externas

### 3.1 Groq API

1. Ir a https://console.groq.com
2. Create account
3. Ir a API Keys
4. Create new key
5. Copiar a chave
6. Adicionar a .env.local: `GROQ_API_KEY=sua_chave`

### 3.2 Hugging Face

1. Ir a https://huggingface.co
2. Create account
3. Ir a Settings > Access Tokens
4. Create new token (Read)
5. Copiar o token
6. Adicionar a .env.local: `HUGGINGFACE_API_KEY=seu_token`

### 3.3 SumUp

1. Ir a https://sumup.com
2. Create business account
3. Ir a Settings > API
4. Generate API key
5. Copiar a chave
6. Adicionar a .env.local: `SUMUP_API_KEY=sua_chave`

## Step 4: Testar Localmente

```bash
# Testes funcionais
npm run dev

# Em outro terminal, execute testes
npm test

# Ou teste manualmente:
# 1. Aceda a http://localhost:3000
# 2. Clique em "Gerar meu avatar"
# 3. Crie uma conta
# 4. Verifique dashboard
# 5. Teste criação de avatar
# 6. Teste chat
# 7. Teste geração de imagens
```

## Step 5: Deploy em Vercel

### 5.1 Preparar Build

```bash
# Build localmente
npm run build

# Se tudo passou, faça commit
git add .
git commit -m "Pronto para produção"
git push origin main
```

### 5.2 Conectar Vercel

1. Ir a https://vercel.com
2. Login com GitHub
3. Clique em "New Project"
4. Selecione o repositório `avatar-ia-premium`
5. Clique "Import"
6. Configure:
   - Framework: Next.js
   - Root Directory: ./

### 5.3 Adicionar Variáveis de Ambiente

1. Na página de configuração, vá a "Environment Variables"
2. Adicione cada variável do `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
SUPABASE_SERVICE_ROLE_KEY=your_key
GROQ_API_KEY=your_key
HUGGINGFACE_API_KEY=your_key
SUMUP_API_KEY=your_key
NEXT_PUBLIC_APP_URL=https://seu-dominio.vercel.app
```

3. Clique "Deploy"

### 5.4 Verificar Deploy

1. Aguarde que o build terminar (~3-5 minutos)
2. Acesse o URL gerado (seu-projeto.vercel.app)
3. Teste todas as funcionalidades
4. Verifique logs em Deployment > Build Logs

## Step 6: Configurar Domínio Customizado

1. Ir a Settings > Domains
2. Adicione o seu domínio
3. Configure DNS conforme instruções
4. Aguarde propagação (até 24h)

## Step 7: Monitoria e Logs

### Em Vercel
- Ir a Deployments
- Clicar em deployment atual
- Ir a Logs
- Ver logs de erro e performance

### Em Supabase
- Ir a Database > Logs
- Ir a API > Logs
- Monitorar queries e erros

## Troubleshooting

### Erro: "NEXT_PUBLIC_SUPABASE_URL não encontrado"
- Verificar se variáveis estão em Vercel
- Redeploy após adicionar variáveis

### Erro: "Auth failed"
- Verificar chaves em .env
- Verificar que Auth está ativado em Supabase

### Erro: "Database connection failed"
- Verificar Supabase Project URL
- Verificar que database está online
- Verificar RLS policies

### Erro: "Image generation failed"
- Verificar HUGGINGFACE_API_KEY
- Verificar que token é válido e tem acesso read

### Erro: "Chat not responding"
- Verificar GROQ_API_KEY
- Verificar rate limits
- Verificar modelo disponível

## Próximas Etapas

1. Publicar conteúdo em Reddit
2. Publicar em redes sociais
3. Monitorar conversões
4. Otimizar landing page
5. Ativar sistema de referência
6. Expandir para novos canais

## Suporte

- **Vercel Docs:** https://vercel.com/docs
- **Supabase Docs:** https://supabase.com/docs
- **Next.js Docs:** https://nextjs.org/docs
