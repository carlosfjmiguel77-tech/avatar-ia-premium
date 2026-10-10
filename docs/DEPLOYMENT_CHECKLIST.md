# Checklist de Desenvolvimento e Deployment

## Phase 1: Setup Local (Dia 1)

### Instalação
- [ ] Clone o repositório
- [ ] `npm install`
- [ ] Criar `.env.local`
- [ ] Preencheer variáveis de ambiente
- [ ] `npm run dev`
- [ ] Validar que app funciona em localhost:3000

### Testes Locais
- [ ] Testar landing page
- [ ] Testar navegação
- [ ] Testar botões e links
- [ ] Verificar responsiveness (mobile/desktop)
- [ ] Verificar performance

## Phase 2: Setup Supabase (Dia 2)

### Projeto Supabase
- [ ] Criar projeto em https://supabase.com
- [ ] Copiar Project URL
- [ ] Copiar Anon Key
- [ ] Copiar Service Role Key
- [ ] Atualizar `.env.local`

### Database Schema
- [ ] Ir a SQL Editor
- [ ] Executar schema completo
- [ ] Validar tabelas criadas
- [ ] Validar relacionamentos
- [ ] Testar queries básicas

### Auth Setup
- [ ] Ativar Email Auth
- [ ] Configurar email de confirmação
- [ ] Testar signup localmente
- [ ] Testar login localmente
- [ ] Testar logout

## Phase 3: API Keys (Dia 2-3)

### Groq API
- [ ] Ir a https://console.groq.com
- [ ] Criar conta
- [ ] Gerar API Key
- [ ] Adicionar a `.env.local`
- [ ] Testar chamada básica

### Hugging Face
- [ ] Ir a https://huggingface.co
- [ ] Criar conta
- [ ] Gerar Access Token
- [ ] Adicionar a `.env.local`
- [ ] Testar geração de imagem

### SumUp
- [ ] Ir a https://sumup.com
- [ ] Criar conta empresarial
- [ ] Gerar API Key
- [ ] Adicionar a `.env.local`
- [ ] Testar checkout básico

## Phase 4: Features Críticas (Dia 3-5)

### Autenticação
- [ ] Signup funcional
- [ ] Login funcional
- [ ] Logout funcional
- [ ] Proteção de rotas
- [ ] Redirecionamento pós-login

### Dashboard
- [ ] Mostrar dados do utilizador
- [ ] Mostrar avatares criados
- [ ] Mostrar histórico
- [ ] Mostrar pacotes ativos

### Criação de Avatar
- [ ] Seleção de estilo
- [ ] Input de nome
- [ ] Input de descrição
- [ ] Salvar no Supabase
- [ ] Redirecionar para dashboard

### Pacotes e Pagamento
- [ ] Mostrar 4 pacotes
- [ ] Destaque do pacote popular
- [ ] Criar checkout via SumUp
- [ ] Redirecionar para pagamento
- [ ] Confirmar pagamento
- [ ] Guardar no Supabase

### Chat IA
- [ ] Chamar Groq API
- [ ] Manter histórico
- [ ] Exibir respostas
- [ ] Salvar no Supabase

### Geração de Imagens
- [ ] Chamar Hugging Face API
- [ ] Upload para Supabase Storage
- [ ] Guardar URL no Supabase
- [ ] Mostrar na galeria

## Phase 5: Deploy em Vercel (Dia 6)

### Preparação
- [ ] `npm run build` localmente
- [ ] Verificar que build passa
- [ ] Testar build localmente
- [ ] Commit e push para main

### Vercel Setup
- [ ] Ir a https://vercel.com
- [ ] Conectar repositório GitHub
- [ ] Importar projeto
- [ ] Configurar variáveis de ambiente
- [ ] Deploy inicial

### Testes em Produção
- [ ] Testar landing page
- [ ] Testar signup
- [ ] Testar login
- [ ] Testar dashboard
- [ ] Testar criação de avatar
- [ ] Testar checkout
- [ ] Testar chat
- [ ] Testar geração de imagens
- [ ] Verificar performance
- [ ] Verificar logs de erro

## Phase 6: Otimizações (Dia 6-7)

### Performance
- [ ] Lazy load images
- [ ] Minify CSS/JS
- [ ] Otimizar Lighthouse
- [ ] Verificar Core Web Vitals

### Segurança
- [ ] Validar inputs
- [ ] Proteger rotas
- [ ] HTTPS ativado
- [ ] Rate limiting

### SEO
- [ ] Meta tags corretas
- [ ] Open Graph tags
- [ ] Sitemap.xml
- [ ] robots.txt

## Phase 7: Marketing Launch (Dia 8)

### Preparação
- [ ] Landing page validada
- [ ] CTA claro e funcional
- [ ] Checkout testado
- [ ] Analytics setup
- [ ] Tracking de conversão

### Publicação Conteúdo
- [ ] 3 posts em Reddit
- [ ] 2 posts em redes
- [ ] Email para contatos
- [ ] Compartilhar com comunidades

### Monitoramento
- [ ] Setup de analytics
- [ ] Tracking de cliques
- [ ] Tracking de conversão
- [ ] Alertas de erro
- [ ] Dashboard de métricas

## Daily Checklist (Semanas 1-4)

### Manhã
- [ ] Verificar métricas do dia anterior
- [ ] Responder a comentários em Reddit
- [ ] Responder a mensagens
- [ ] Verificar logs de erro

### Tarde
- [ ] Publicar novo conteúdo
- [ ] Otimizar landing page
- [ ] Testar fluxo completo
- [ ] Atualizar documentação

### Noite
- [ ] Análise de conversão
- [ ] A/B test adjustments
- [ ] Preparar conteúdo para dia seguinte
- [ ] Relatório de progresso

## Success Metrics

- [ ] 100+ visitantes únicos no primeiro dia
- [ ] 5%+ conversão na landing page
- [ ] 3+ compras na primeira semana
- [ ] 10+ comentários por post
- [ ] 100+ pontos de engajamento no Reddit
- [ ] 50%+ taxa de retorno
- [ ] <2s tempo de carregamento
- [ ] 0 erros críticos em produção

## Contatos de Suporte

- **Supabase:** https://supabase.com/support
- **Vercel:** https://vercel.com/support
- **Groq:** https://console.groq.com/docs
- **Hugging Face:** https://huggingface.co/docs
- **SumUp:** https://developer.sumup.com
