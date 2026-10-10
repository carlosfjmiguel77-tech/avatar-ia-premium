# Setup de Produção - Avatar IA Premium

## 1. Configuração do Supabase

### 1.1 Criar Projeto
1. Ir a https://supabase.com
2. Criar novo projeto
3. Escolher região mais próxima (PT - EU)
4. Criar base de dados
5. Copiar `Project URL` e `Anon Key`

### 1.2 Executar Schema SQL
Ir a SQL Editor no Supabase e executar:

```sql
-- Tabela de avatares
create table if not exists avatars (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  name text not null,
  style text,
  description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Tabela de fotos do avatar
create table if not exists avatar_photos (
  id uuid primary key default gen_random_uuid(),
  avatar_id uuid references avatars(id) on delete cascade,
  image_url text not null,
  style text,
  created_at timestamptz default now()
);

-- Tabela de mensagens de chat
create table if not exists chat_messages (
  id uuid primary key default gen_random_uuid(),
  avatar_id uuid references avatars(id) on delete cascade,
  user_message text not null,
  ai_response text not null,
  created_at timestamptz default now()
);

-- Tabela de compras
create table if not exists purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  package_name text not null,
  price numeric(10,2) not null,
  currency text default 'EUR',
  payment_id text,
  status text default 'pending',
  created_at timestamptz default now()
);

-- Tabela de referências
create table if not exists referrals (
  id uuid primary key default gen_random_uuid(),
  referrer_id uuid references auth.users(id) on delete cascade,
  referred_id uuid references auth.users(id) on delete cascade,
  reward_credits int default 0,
  created_at timestamptz default now()
);

-- Tabela de utilizadores
create table if not exists user_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  name text,
  email text,
  avatar_count int default 0,
  photos_generated int default 0,
  total_spent numeric(10,2) default 0,
  referral_code text unique,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

## 2. Configuração do .env.local

Cria ficheiro `.env.local` na raiz do projeto:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# APIs de IA
GROQ_API_KEY=your_groq_api_key
HUGGINGFACE_API_KEY=your_huggingface_api_key

# Pagamentos
SUMUP_API_KEY=your_sumup_api_key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Como obter as chaves:

#### Groq API Key
1. Ir a https://console.groq.com
2. Criar conta
3. Gerar API Key
4. Copiar e guardar

#### Hugging Face API Key
1. Ir a https://huggingface.co
2. Criar conta
3. Ir a Settings > Access Tokens
4. Criar novo token (read)
5. Copiar e guardar

#### SumUp API Key
1. Ir a https://sumup.com
2. Criar conta empresarial
3. Ir a Settings > API
4. Gerar API Key
5. Copiar e guardar

## 3. Deploy em Vercel

### 3.1 Preparar localmente
```bash
npm install
npm run build
```

### 3.2 Deploy
```bash
npx vercel --prod
```

### 3.3 Configurar variáveis em Vercel
1. Ir ao projeto em Vercel
2. Settings > Environment Variables
3. Adicionar todas as variáveis do .env.local
4. Redeploy

## 4. Testar em produção

- [ ] Testar landing page
- [ ] Testar signup
- [ ] Testar login
- [ ] Testar criação de avatar
- [ ] Testar dashboard
- [ ] Testar checkout
- [ ] Testar confirmação de pagamento
- [ ] Testar chat IA
- [ ] Testar geração de imagens

## 5. Próximas etapas

- Publicar conteúdo em Reddit
- Publicar em redes sociais
- Monitorar conversões
- Otimizar landing page
- Activar referência
- Expandir para mais canais
