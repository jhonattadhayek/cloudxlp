import React, { useState } from 'react';
import { 
  Menu, X as XIcon, Check, X, ArrowRight, 
  Target, Rocket, Brain, Users, BarChart3, 
  Settings, ShieldCheck, Zap, Plus, Minus,
  Instagram
} from 'lucide-react';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { SectionHeader } from './components/SectionHeader';
import logoCloudX from './imgs/logocloudx.png';

// --- Placeholder for External Form Link ---
const FORM_LINK = "https://cloudx.typeform.com/agendar";
const LOGO_URL = "https://fal.media/files/koala/cloudx_logo.png"; // Linking to the provided asset

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navLinks = [
    { name: 'Problema', href: '#problema' },
    { name: 'Solução', href: '#solucao' },
    { name: 'Squad', href: '#squad' },
    { name: 'Resultados', href: '#resultados' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg-primary/95 backdrop-blur-sm border-b border-white/5 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center flex-shrink-0">
          {/* Logo Implementation */}
          {!logoError ? (
            <img 
              src={logoCloudX}
              alt="CloudX" 
              className="h-6 md:h-8 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              onError={() => setLogoError(true)}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          ) : (
            <span 
              className="text-xl font-bold text-white tracking-tight cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              CloudX Aceleradora
            </span>
          )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-text-muted hover:text-white transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
          <Button href={FORM_LINK} variant="primary" className="py-2 px-5 text-xs uppercase tracking-widest">
            Agendar
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-bg-primary border-b border-white/5 p-8 flex flex-col gap-6 h-[calc(100vh-6rem)]">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-text-primary text-xl font-light"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button href={FORM_LINK} fullWidth variant="primary" onClick={() => setIsOpen(false)}>
            Agendar Consultoria
          </Button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <Section enableReveal={false} className="pt-40 pb-24 md:pt-52 md:pb-32 min-h-screen flex flex-col justify-center border-b border-white/5">
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-start md:items-center md:text-center">
          
          <div className="inline-block mb-8">
            <span className="text-primary text-xs font-bold tracking-widest uppercase border border-primary/30 px-3 py-1 rounded-sm bg-primary/5">
              Cloudx - Aceleradora de Negócios
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-8 tracking-tight">
            Você Fatura +R$50K/mês, <br className="hidden md:block" />
            Mas <span className="text-primary italic font-serif">Travou</span> na Escala?
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Instale na sua empresa a mesma arquitetura de receita que empresas de 7 e 8 dígitos usam sem contratar dezenas de pessoas.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
            <Button href={FORM_LINK} variant="tertiary" withIcon className="w-full sm:w-auto">
              Destavar Crescimento
            </Button>
            <div className="flex items-center gap-3 text-text-muted text-xs uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Acompanhamento direto pelos Heads</span>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

const ProblemSection = () => {
  const painPoints = [
    { text: "Marketing gera leads, mas poucos viram clientes reais" },
    { text: "Você é o gargalo: sem você, a venda não acontece" },
    { text: "Operação funciona, mas o custo explode ao escalar" },
    { text: "Falta previsibilidade de receita recorrente" },
    { text: "Contratar e treinar time interno é lento e caro" },
  ];

  return (
    <Section id="problema" background="primary">
      <SectionHeader 
        title="Você Já Passou Disso. Agora Precisa de Estrutura." 
        highlightWord="Estrutura"
        center
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {painPoints.map((point, index) => (
          <div 
            key={index} 
            className="group p-8 bg-transparent border border-white/10 hover:border-white/30 transition-colors duration-300 rounded-sm"
          >
            <div className="mb-6 w-8 h-8 flex items-center justify-center">
              <X className="text-accent-error w-6 h-6" />
            </div>
            <p className="text-text-secondary text-base font-light leading-relaxed">{point.text}</p>
          </div>
        ))}
        <div className="p-8 bg-white/5 border border-white/10 rounded-sm flex flex-col justify-center items-center text-center">
          <p className="text-lg font-medium text-white mb-2">O problema não é você.</p>
          <p className="text-text-muted font-light text-sm">É a falta de um <span className="text-white">sistema integrado</span>.</p>
        </div>
      </div>
    </Section>
  );
};

const SolutionSection = () => {
  const pillars = [
    {
      title: "01. Aquisição Inteligente",
      icon: Target,
      desc: "Tráfego pago otimizado + captação omnichannel.",
      items: ["Meta Ads, Google Ads", "Funis Completos", "Testes A/B"]
    },
    {
      title: "02. Conversão via IA",
      icon: Brain,
      desc: "SDR virtual + CRM inteligente + follow-up.",
      items: ["IA SDR 24h", "Lead Scoring", "Scripts Otimizados"]
    },
    {
      title: "03. Inovação Estruturada",
      icon: Rocket,
      desc: "Novas ofertas + desenvolvimento tech.",
      items: ["High Ticket Offers", "Dev de Sistemas", "APIs & Apps"]
    }
  ];

  return (
    <Section id="solucao" background="secondary">
      <SectionHeader 
        title="Tríade Integrada™"
        subtitle="O framework proprietário que transforma empresas em máquinas de crescimento previsível."
        center
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="bg-bg-primary border border-white/5 p-10 hover:border-primary/50 transition-colors duration-300 group rounded-sm">
            <div className="mb-8">
              <pillar.icon className="w-10 h-10 text-primary stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">{pillar.title}</h3>
            <p className="text-text-muted mb-8 font-light leading-relaxed h-12">{pillar.desc}</p>
            <div className="border-t border-white/5 pt-6">
              <ul className="space-y-3">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-text-muted/80">
                    <span className="w-1 h-1 bg-primary rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Button href={FORM_LINK} variant="secondary">
          Implementar Tríade
        </Button>
      </div>
    </Section>
  );
};

const SquadSection = () => {
  const members = [
    { role: "Head de Marketing", icon: BarChart3 },
    { role: "Gestor de Projetos", icon: Target },
    { role: "Gestor de Tráfego", icon: Users },
    { role: "Designer & Criativos", icon: Zap },
    { role: "Dev de Software", icon: Settings },
  ];

  return (
    <Section id="squad" background="primary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        <div>
           <SectionHeader 
            title="Squad as a Service" 
            subtitle="Você não contrata uma agência. Você ganha um time completo e multidisciplinar dedicado ao seu crescimento."
          />
          
          <div className="grid grid-cols-1 gap-4 mt-10">
            {members.map((m, i) => (
              <div key={i} className="flex items-center gap-4 p-4 border-b border-white/5 hover:border-primary/50 transition-colors group">
                <m.icon className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
                <span className="text-white font-medium">{m.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-bg-secondary p-10 border border-white/5 rounded-sm">
          <h3 className="text-xl font-bold text-white mb-8">CloudX <span className="text-text-muted font-normal text-sm mx-2">vs</span> Tradicional</h3>
          
          <div className="space-y-6">
            {[
              { text: "Time rodando no Dia 1", cloud: true },
              { text: "Custo 60% menor que CLT", cloud: true },
              { text: "Zero risco trabalhista", cloud: true },
              { text: "Expertise Senior", cloud: true },
              { text: "Escalável sob demanda", cloud: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-text-muted text-sm">{item.text}</span>
                <div className="flex items-center gap-2">
                   <Check className="w-4 h-4 text-primary" />
                </div>
              </div>
            ))}
             <div className="pt-6 mt-6 border-t border-white/5">
                <p className="text-xs text-text-muted leading-relaxed">
                   <span className="text-accent-error">Modelo Tradicional:</span> Processos lentos, custos fixos altos e risco de turnover constante.
                </p>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const SocialProof = () => {
  const metrics = [
    { val: "+15 M", label: "+15 Milhões Investidos em Anúncio" },
    { val: "60%", label: "Redução no CAC" },
    { val: "24h", label: "SDR Response Time" },
    { val: "100+", label: "Sistemas Entregues" },
  ];

  return (
    <Section id="resultados" background="secondary" className="border-t border-white/5">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {metrics.map((m, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl md:text-5xl font-light text-white mb-3 group-hover:text-primary transition-colors duration-500">{m.val}</div>
              <div className="text-xs uppercase tracking-widest text-text-muted">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Depoimentos ocultos temporariamente */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="p-8 border-l border-white/10">
          <p className="text-xl text-text-secondary italic font-light mb-6 leading-relaxed">
            "Conseguimos aumentar nossa receita em 150% em apenas 6 meses. A estrutura que a CloudX montou tirou a operação das minhas costas."
          </p>
          <div>
            <div className="font-semibold text-white">Ricardo S.</div>
            <div className="text-xs text-text-muted uppercase tracking-wide">CEO, TechEdu</div>
          </div>
        </div>
        <div className="p-8 border-l border-white/10">
          <p className="text-xl text-text-secondary italic font-light mb-6 leading-relaxed">
            "A IA de vendas deles é surreal. Meus leads são atendidos em segundos e só chegam pra mim prontos pra fechar."
          </p>
          <div>
            <div className="font-semibold text-white">Mariana L.</div>
            <div className="text-xs text-text-muted uppercase tracking-wide">Fundadora, Clínica Estética</div>
          </div>
        </div>
      </div> */}
    </Section>
  );
};

const Deliverables = () => {
  const items = [
    { title: "Máquina de Aquisição", desc: "Ads e Funis rodando", icon: BarChart3 },
    { title: "Máquina de Conversão", desc: "IA e CRM Inteligente", icon: Brain },
    { title: "Inovação Tech", desc: "Apps e Sistemas", icon: Rocket },
    { title: "Squad Dedicado", desc: "Sem gestão de RH", icon: Users },
    { title: "BI & Dados", desc: "Dashboards reais", icon: Target },
    { title: "Acompanhamento", desc: "Suporte dos Heads", icon: ShieldCheck },
  ];

  return (
    <Section background="primary">
      <SectionHeader 
        title="Escopo de Entrega" 
        subtitle="Implementação completa, sem consultoria teórica."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {items.map((item, i) => (
          <div key={i} className="flex gap-6 p-8 bg-bg-primary border border-white/5 hover:bg-bg-secondary transition-colors">
            <div className="shrink-0 pt-1">
               <item.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white mb-2 uppercase tracking-wide">{item.title}</h4>
              <p className="text-sm text-text-muted font-light">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      q: "O que a CloudX faz exatamente?",
      a: "Somos uma Aceleradora de Negócios Full Stack. Não somos apenas uma agência. Integramos Tráfego Pago, Engenharia de Dados (CRM), Inteligência Artificial para vendas e Desenvolvimento de Software para criar uma infraestrutura de crescimento previsível e escalável para sua empresa."
    },
    {
      q: "Em quanto tempo verei resultados?",
      a: "O tempo varia conforme o estágio atual do negócio e o orçamento. No entanto, nosso foco é tração rápida. A maioria dos nossos parceiros nota um impacto significativo na qualificação de leads e no volume de vendas entre 30 a 60 dias de implementação da Tríade Integrada™."
    },
    {
      q: "A CloudX atende qualquer tipo de empresa?",
      a: "Nosso framework completo é desenhado para empresas que já possuem validação de mercado e faturamento recorrente (acima de R$30k/mês). Porém, possuímos soluções modulares para negócios em fase de crescimento que desejam escalar. Realizamos uma análise prévia para garantir que podemos entregar ROI real."
    },
    {
      q: "Vocês gerenciam redes sociais (Social Media)?",
      a: "Sim. Nossa vertical de Branding e Criativos cuida da identidade visual e posicionamento estratégico. Não fazemos apenas 'posts', criamos conteúdo intencional focado em autoridade e conversão, alinhado com as campanhas de tráfego pago para maximizar resultados."
    }
  ];

  return (
    <Section background="secondary" className="border-t border-white/5">
      <SectionHeader title="Dúvidas Frequentes" center />
      <div className="max-w-3xl mx-auto space-y-4">
        {questions.map((item, idx) => (
          <div 
            key={idx} 
            className={`border transition-all duration-300 rounded-sm overflow-hidden ${openIndex === idx ? 'border-primary/50 bg-white/5' : 'border-white/10 bg-transparent'}`}
          >
            <button 
              onClick={() => toggle(idx)}
              className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
            >
              <span className={`text-base md:text-lg font-medium transition-colors ${openIndex === idx ? 'text-white' : 'text-text-secondary'}`}>
                {item.q}
              </span>
              <div className={`p-1 rounded-full border transition-all ${openIndex === idx ? 'border-primary text-primary rotate-180' : 'border-white/20 text-text-muted'}`}>
                {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="px-6 pb-6 text-text-muted font-light leading-relaxed">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const FinalCTA = () => {
  return (
    <Section id="agendar" className="bg-bg-primary border-t border-white/5 py-32 text-center">
       <div className="max-w-3xl mx-auto">
         <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
           Pronto Para Instalar Uma Arquitetura de Receita Real?
         </h2>
         <p className="text-lg text-text-muted mb-12 font-light">
           Agende uma reunião estratégica. Vamos analisar seu cenário e mostrar como a Tríade pode destavar seu crescimento.
         </p>
         
         <Button href={FORM_LINK} variant="primary" className="text-base py-4 px-10">
           Agendar Reunião Estratégica
         </Button>

         <p className="mt-8 text-text-muted text-xs uppercase tracking-widest">
           Vagas limitadas para acompanhamento direto
         </p>

         {/* Instructions Section */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-20 text-left">
            <div className="bg-bg-secondary border border-white/10 p-6 rounded-sm flex gap-4 items-start hover:border-white/20 transition-colors">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary/10 text-primary font-bold rounded-sm border border-primary/20">1</span>
              <div>
                <h4 className="text-white font-medium mb-2">Preencha a Aplicação</h4>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  Informe os detalhes da sua operação e o seu cenário atual. Garantimos o sigilo absoluto dos seus dados.
                </p>
              </div>
            </div>

            <div className="bg-bg-secondary border border-white/10 p-6 rounded-sm flex gap-4 items-start hover:border-white/20 transition-colors">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary/10 text-primary font-bold rounded-sm border border-primary/20">2</span>
              <div>
                <h4 className="text-white font-medium mb-2">Aguarde o Contato</h4>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                   Em poucos minutos (horário comercial), nossos especialistas analisarão seu perfil e entrarão em contato.
                </p>
              </div>
            </div>
         </div>
       </div>
    </Section>
  );
};

const Footer = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-bg-secondary border-t border-white/5 py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div>
            {!logoError ? (
              <img 
                src={logoCloudX}
                alt="CloudX" 
                className="h-14 md:h-20 w-auto object-contain opacity-100 hover:opacity-90 transition-all duration-300"
                onError={() => setLogoError(true)}
              />
            ) : (
               <span className="text-lg font-bold text-text-muted hover:text-white transition-colors tracking-tight">CloudX Aceleradora</span>
            )}
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/cloudx.hub?igsh=NnQ3cW45MjQ1aGMx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary transition-colors p-2 border border-white/10 rounded-full hover:border-primary/50"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
        </div>

      </div>

      {/* Legal Info Row */}
      <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted font-light text-center md:text-left">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
           <span>Cloud Digital Ltda</span>
           <span className="hidden md:inline text-white/20">|</span>
           <span>CNPJ: 39.356.141/0001-87</span>
        </div>
        <div className="font-mono opacity-50">
          © {new Date().getFullYear()} CloudX
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-sans antialiased selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <SquadSection />
      <SocialProof />
      <Deliverables />
      <FinalCTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;