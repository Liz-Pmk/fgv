import Head from "next/head";
import Script from "next/script";

export default function Home() {
  const htmlContent = `<header id="header" class="bg-white/90 backdrop-blur-lg sticky top-0 z-50 shadow-md">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <div class="flex-shrink-0">
                    <h1 class="text-2xl font-extrabold text-[#023047]">Lojas Cem: A Próxima Era</h1>
                </div>
                <nav class="hidden lg:flex lg:space-x-10">
                    <a href="#1" class="nav-link font-semibold text-gray-600 hover:text-[#0077b6]">Empresa</a>
                    <a href="#2" class="nav-link font-semibold text-gray-600 hover:text-[#0077b6]">Justificativa</a>
                    <a href="#3" class="nav-link font-semibold text-gray-600 hover:text-[#0077b6]">Canais</a>
                    <a href="#4" class="nav-link font-semibold text-gray-600 hover:text-[#0077b6]">Estratégia</a>
                    <a href="#5" class="nav-link font-semibold text-gray-600 hover:text-[#0077b6]">Logística</a>
                    <a href="#6" class="nav-link font-semibold text-gray-600 hover:text-[#0077b6]">Shopper</a>
                    <a href="#7" class="nav-link font-semibold text-gray-600 hover:text-[#0077b6]">Trade</a>
                    <a href="#conclusao" class="nav-link font-semibold text-gray-600 hover:text-[#0077b6]">Conclusão</a>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <section id="hero" class="relative py-24 md:py-32 bg-white overflow-hidden">
            <div class="container mx-auto px-4 text-center z-10 relative">
                <h2 class="text-4xl md:text-6xl font-extrabold tracking-tighter text-[#023047] leading-tight reveal">Estratégia de Expansão e Modernização de Canais de Venda</h2>
                <p class="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto reveal">Uma Proposta Omnichannel para o Futuro do Varejo, convertendo a confiança tradicional da Lojas Cem em liderança no ecossistema digital do futuro.</p>
                <p class="mt-2 text-sm text-gray-500 reveal">Apresentado por: Lilian Brito | Pós-Graduação em Marketing, FGV</p>
            </div>
        </section>

        <!-- CONTEXTUALIZAÇÃO ESTRATÉGICA -->
        <section id="contexto" class="py-20 md:py-28">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div class="section-header p-8 rounded-lg mb-16 reveal">
                    <h3 class="text-4xl font-bold text-[#023047] sm:text-5xl text-center">Contextualização Estratégica</h3>
                    <p class="mt-4 text-lg text-gray-600 max-w-4xl mx-auto text-center">Para uma marca com o legado da Lojas Cem, a questão é: como inovar sem perder a "alma" do negócio? A resposta não está em negar o que funciona, mas em <strong class="text-[#0077b6]">amplificar seus pontos fortes</strong> com tecnologia.</p>
                </div>

                <div class="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 reveal">
                    <h4 class="text-2xl md:text-3xl font-bold text-center text-[#023047] mb-10">Analisando Estratégias Vencedoras de Canal</h4>
                    <div class="grid md:grid-cols-2 gap-10">
                        <!-- Case Natura -->
                        <div class="border border-gray-200 rounded-lg p-6">
                            <h5 class="text-2xl font-bold mb-3" style="color: #FF8C00;">Case Natura</h5>
                            <h6 class="font-bold text-lg text-gray-800 mb-3">A Força do Relacionamento como Canal</h6>
                            <p class="text-gray-700 mb-4 text-sm">A Natura transformou suas consultoras, que já eram <strong class="text-gray-900">influenciadoras orgânicas</strong>, na base de sua expansão digital, dando-lhes ferramentas para prosperar online.</p>
                            <ul class="space-y-2 text-sm">
                                <li class="flex items-start"><span class="text-green-500 mr-2">✔</span><span><strong>Confiança como Moeda:</strong> A confiança na consultora foi transferida para o ambiente digital, vencendo a barreira da compra online.</span></li>
                                <li class="flex items-start"><span class="text-green-500 mr-2">✔</span><span><strong>Atendimento Humanizado em Escala:</strong> A figura da consultora digital manteve o toque humano, reduzindo a impessoalidade do e-commerce.<span class="neuro-insight" data-title="Análise e Fonte" data-content="A história da Natura é um exemplo notável de como o modelo de vendas diretas, fundamentado no relacionamento pessoal de suas consultoras, evoluiu para canais digitais mantendo a essência da conexão humana. O sucesso da Natura ilustra que a confiança e a recomendação pessoal — pilares do 'comércio raiz' da Lojas Cem — podem ser replicadas e ampliadas em escala no ambiente digital. A interação com uma pessoa de confiança ativa a liberação de oxitocina, o 'hormônio da confiança', criando um poderoso senso de reciprocidade. (EXAME, 2021; NATURA, s.d.)"></span></span></li>
                            </ul>
                        </div>
                        <!-- Case O Boticário -->
                        <div class="border border-gray-200 rounded-lg p-6">
                            <h5 class="text-2xl font-bold mb-3" style="color: #006400;">Case O Boticário</h5>
                            <h6 class="font-bold text-lg text-gray-800 mb-3">A Sinergia dos Canais como Experiência</h6>
                             <p class="text-gray-700 mb-4 text-sm">O Boticário provou que o digital pode fortalecer a experiência na loja, e vice-versa, criando uma jornada onde o cliente transita entre os mundos físico e online <strong class="text-gray-900">sem atritos</strong>.</p>
                             <ul class="space-y-2 text-sm">
                                <li class="flex items-start"><span class="text-green-500 mr-2">✔</span><span><strong>Canais que se Ajudam:</strong> O site leva clientes para a loja, e a loja reforça a confiança para futuras compras online.</span></li>
                                <li class="flex items-start"><span class="text-green-500 mr-2">✔</span><span><strong>Tecnologia a Serviço da Experiência:</strong> A tecnologia foi usada para ampliar o bom relacionamento e a qualidade da experiência, que já eram a alma da marca.<span class="neuro-insight" data-title="Análise e Fonte" data-content="A expansão nacional do Boticário, integrando lojas físicas, franquias, venda direta e e-commerce, demonstrou que a digitalização pode fortalecer a essência relacional da marca, oferecendo conveniência digital sem abrir mão do toque humano e da experiência sensorial. Ambos os cases provam que a integração de canais pode ser feita de forma a amplificar os pontos fortes tradicionais. (VALOR ECONÔMICO, 2022)"></span></span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="mt-16 reveal">
                    <h4 class="text-2xl md:text-3xl font-bold text-center text-[#023047] mb-10">Princípios para a Estratégia de Trade Marketing Omnichannel</h4>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="card bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                            <div class="text-4xl mb-3">‍</div>
                            <h5 class="font-bold text-lg text-[#0077b6] mb-2">Capital Humano como PDV Digital</h5>
                            <p class="text-sm text-gray-600">Transformar o vendedor em um ponto de venda (PDV) digital, usando sua credibilidade para gerar vendas e relacionamento online.</p>
                        </div>
                        <div class="card bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                            <div class="text-4xl mb-3"></div>
                            <h5 class="font-bold text-lg text-[#0077b6] mb-2">Prova Social como Merchandising</h5>
                             <p class="text-sm text-gray-600">Utilizar a recomendação e a validação de clientes e influenciadores como a principal ferramenta de merchandising no ambiente digital.</p>
                        </div>
                        <div class="card bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                            <div class="text-4xl mb-3"></div>
                            <h5 class="font-bold text-lg text-[#0077b6] mb-2">Jornada de Compra Humanizada</h5>
                            <p class="text-sm text-gray-600">Desenvolver uma experiência de compra online que seja consultiva e pessoal, especialmente para produtos de alto valor, aumentando a segurança e a conversão.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 1. Informações sobre a empresa -->
        <section id="1" class="py-20 md:py-28 bg-white">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="section-header p-8 rounded-lg mb-16 reveal">
                    <h3 class="text-4xl font-bold text-[#023047] sm:text-5xl text-center">1. Informações sobre a empresa</h3>
                    <p class="mt-4 text-lg text-gray-600 max-w-4xl mx-auto text-center">A Lojas Cem é um ícone do varejo brasileiro. Seu sucesso é fruto de um modelo de negócios focado na experiência presencial e no relacionamento direto, sob o lema "A Loja da Família Brasileira".</p>
                </div>
                
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div class="reveal text-center">
                        <lottie-player src="https://lottie.host/embed/77341e0a-36d2-4529-9f53-27359a352136/i3rD9Qh5sP.json" background="transparent" speed="1" style="width: 100%; height: 100%; max-width: 450px; margin: auto;" loop autoplay></lottie-player>
                    </div>

                    <div class="space-y-6 reveal">
                        <h4 class="text-3xl font-bold text-[#023047] mb-6">Os Pilares do Sucesso: A Conexão com o Cliente</h4>
                         <div class="card bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <h5 class="font-bold text-xl text-[#0077b6] mb-2">Acessibilidade Financeira</h5>
                            <p class="text-gray-700 text-sm">O famoso crediário próprio dá segurança e facilita o pagamento, sendo um diferencial decisivo para o cliente.<span class="neuro-insight" data-title="Análise Detalhada" data-content="O robusto sistema de crediário próprio, com carnê e condições facilitadas, democratiza o acesso a bens duráveis. Este mecanismo opera como um potente redutor de aversão à perda e ao risco financeiro, ativando áreas do cérebro associadas à segurança e recompensa de longo prazo. Esta característica alinha-se à importância do financiamento nos fluxos distributivos. (DComércio, 2023; Seabra & Paula, 2025, p. 61)."></span></p>
                        </div>
                         <div class="card bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <h5 class="font-bold text-xl text-[#0077b6] mb-2">Confiança e Tradição</h5>
                            <p class="text-gray-700 text-sm">Décadas de história criam uma reputação de solidez, fazendo com que o cliente se sinta seguro ao comprar na loja.<span class="neuro-insight" data-title="Análise Detalhada" data-content="Uma reputação de solidez e proximidade construída em mais de sete décadas gera forte lealdade e reconhecimento. A familiaridade reduz a carga cognitiva na tomada de decisão e ativa o circuito de segurança e pertencimento no cérebro límbico, elementos cruciais para a fidelização. (Mundo das Marcas, 2022)."></span></p>
                        </div>
                         <div class="card bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <h5 class="font-bold text-xl text-[#0077b6] mb-2">Atendimento Consultivo</h5>
                            <p class="text-gray-700 text-sm">O vendedor que conhece o cliente e ajuda de verdade cria um vínculo forte, que vai além de uma simples venda.<span class="neuro-insight" data-title="Análise Detalhada" data-content="Vendedores que estabelecem uma relação próxima e consultiva oferecem um serviço personalizado que transcende a transação. Esta interação humana ativa a liberação de oxitocina, o hormônio da confiança e conexão social, gerando um poderoso senso de reciprocidade e bem-estar, que é profundamente gravado na memória afetiva do cliente."></span></p>
                        </div>
                    </div>
                </div>

                <div class="mt-16 bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg reveal">
                    <h4 class="font-bold text-xl text-amber-800">Cenário Atual: A Vulnerabilidade Oculta no Sucesso</h4>
                    <p class="text-amber-700 mt-2">A Lojas Cem opera exclusivamente com vendas presenciais e, mesmo assim, registrou um crescimento impressionante em 2023. No entanto, este sucesso mascara um risco: a ausência de um canal de vendas digital. Ignorar a rápida mudança no comportamento do consumidor, que hoje inicia sua jornada de compra online, significa ceder terreno para a concorrência e perder a chance de se conectar com o cliente nos momentos iniciais de sua decisão.<span class="neuro-insight" data-title="Análise e Fonte" data-content="A ausência de uma presença digital transacional impõe um limite tácito ao potencial de expansão e expõe a empresa a vulnerabilidades. Conforme Seabra e De Paula (2025, p. 24) apontam, o mercado atual é caracterizado por 'mudanças significativas' impulsionadas pela 'multiplicação das mídias', 'tecnologia' e 'comportamento do consumidor'. Ignorar essa transformação significa falhar em interceptar e influenciar o cliente nos estágios iniciais de sua jornada de compra neurodigital. (DComércio, 2023; Lojas Cem, 2022b)."></span></p>
                </div>
            </div>
        </section>

        <!-- 2. Justificativa para novos canais -->
        <section id="2" class="py-20 md:py-28">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="section-header p-8 rounded-lg mb-16 reveal">
                    <h3 class="text-4xl font-bold text-[#023047] sm:text-5xl text-center">2. Justificativa para novos canais de vendas e distribuição</h3>
                    <p class="mt-4 text-lg text-gray-600 max-w-4xl mx-auto text-center">A criação de canais digitais é uma necessidade estratégica para sustentar o crescimento, ampliar o alcance e garantir a relevância da marca no futuro.</p>
                </div>
                <div class="space-y-16">
                    <!-- Nível de serviço -->
                    <div class="grid md:grid-cols-2 gap-12 items-center reveal">
                        <div class="order-2 md:order-1">
                            <h4 class="font-bold text-3xl text-[#0077b6] mb-4">Nível de serviço</h4>
                            <p class="text-gray-700">O excelente atendimento da Lojas Cem tem horário para acabar. No mundo digital, a "loja" está sempre aberta. Isso significa permitir que o cliente pesquise produtos, simule o crediário e verifique o estoque a qualquer hora, de qualquer lugar. Oferecer essa conveniência, transparência e controle não é apenas um luxo, é uma nova forma de demonstrar respeito pelo tempo do cliente, aumentando o valor percebido da marca.<span class="neuro-insight" data-title="Análise e Fonte" data-content="Após uma análise minuciosa, constato que o nível de serviço atual da Lojas Cem, embora reconhecido por sua excelência no ambiente físico, opera sob limitações intrínsecas ao modelo tradicional. A implementação de canais digitais permitiria uma expansão significativa da oferta de valor percebido ao cliente, especialmente nos quesitos de 'valor de tempo' e 'valor de informação' (Seabra e De Paula, 2025, p. 13). Canais digitais oferecem ampliação da disponibilidade, atendendo à 'sensibilidade do cliente ao tempo' (p. 64), e transparência com a consulta de estoque em tempo real, evitando a 'ruptura virtual', o 'calcanhar de Aquiles das empresas' (p. 14). Além disso, o agendamento de entregas e o rastreamento online dariam ao cliente maior 'valor de informação' e uma sensação de controle. A eficiência no pós-venda, com agendamento online de assistência, contribui para 'atingir melhores resultados mercadológicos' (p. 42), pois o atendimento eficiente é crucial para o encantamento do consumidor (p. 56)."></span></p>
                        </div>
                        <div class="order-1 md:order-2 chart-container h-64 md:h-80"><canvas id="chart1"></canvas></div>
                    </div>
                    <!-- Mudanças nas preferências dos consumidores -->
                    <div class="grid md:grid-cols-2 gap-12 items-center reveal">
                        <div class="chart-container h-64 md:h-80"><canvas id="chart2"></canvas></div>
                        <div>
                            <h4 class="font-bold text-3xl text-[#0077b6] mb-4">Mudanças nas preferências dos consumidores</h4>
                            <p class="text-gray-700">Hoje, a jornada de compra quase sempre começa no celular. Mesmo o cliente mais fiel à loja física pesquisa, compara e se informa online antes de sair de casa. Ao não estar presente nessa fase inicial, a Lojas Cem perde a chance de ser a primeira escolha, deixando o campo livre para que os concorrentes conquistem a preferência do consumidor antes mesmo que ele pise na loja.<span class="neuro-insight" data-title="Análise e Fonte" data-content="O comportamento do consumidor brasileiro passou por uma metamorfose digital. Com 86,6% da população online por mais de 9 horas diárias (Digital 2024: Brazil), a ausência digital faz a Lojas Cem perder a oportunidade de influenciar o cliente nos estágios iniciais de sua jornada. A 'multiplicação das mídias' tornou a informação onipresente (Seabra e De Paula, 2025, p. 25). A ausência digital impede que a empresa participe da 'árvore de decisão de compra do consumidor' (p. 110). A pesquisa da PwC (2023) indica que 50% dos brasileiros planejam aumentar as compras online (apud Seabra e De Paula, 2025, p. 134), e relatórios como Webshoppers 2024 reforçam essa tendência de crescimento do e-commerce."></span></p>
                        </div>
                    </div>
                     <!-- Possibilidade de entrar em novos mercados -->
                     <div class="grid md:grid-cols-2 gap-12 items-center reveal">
                        <div class="order-2 md:order-1">
                            <h4 class="font-bold text-3xl text-[#0077b6] mb-4">Possibilidade de entrar em novos mercados</h4>
                            <p class="text-gray-700">Expandir com lojas físicas é caro e demorado. O digital, por outro lado, elimina fronteiras. Um site de e-commerce pode alcançar clientes em cidades e estados onde a Lojas Cem ainda não chegou, com um investimento muito menor. É também a principal porta de entrada para se conectar com as gerações mais jovens, que já vivem no ambiente online e serão os principais consumidores do futuro.<span class="neuro-insight" data-title="Análise e Fonte" data-content="A expansão física é limitada por barreiras geográficas e de capital. O e-commerce oferece 'alcance global', permitindo 'comprar (e atender consumidores) de qualquer lugar do mundo' (Seabra e De Paula, 2025, p. 120). Isso permitiria à Lojas Cem validar a demanda em novas regiões com menor custo. O digital é o ambiente natural das gerações mais jovens (Geração Z e Alfa), que possuem um 'comportamento de consumo muito diferenciado' (p. 14, 26). O modelo digital permite crescimento mais ágil e com menor custo de entrada, permitindo à empresa testar novos mercados e garantir sua perenidade."></span></p>
                        </div>
                         <div class="order-1 md:order-2 text-center">
                            <lottie-player src="https://lottie.host/embed/84103859-9923-4467-9195-25755e3e29f1/I282a55h5s.json" background="transparent" speed="1" style="width: 100%; height: 100%; max-width: 400px; margin: auto;" loop autoplay></lottie-player>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 3. Proposta de canal(is) digital(is) -->
        <section id="3" class="py-20 md:py-28 bg-white">
             <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="section-header p-8 rounded-lg mb-16 reveal">
                    <h3 class="text-4xl font-bold text-[#023047] sm:text-5xl text-center">3. Proposta de canal(is) digital(is)</h3>
                    <p class="mt-4 text-lg text-gray-600 max-w-4xl mx-auto text-center">Propomos um ecossistema digital integrado e inteligente, onde cada peça, impulsionada por IA, trabalha em sintonia para transformar a confiança da Lojas Cem em resultados online.</p>
                </div>

                <div class="space-y-12">
                    <!-- Site Próprio -->
                    <div class="card bg-white p-8 rounded-xl shadow-lg border border-gray-100 reveal grid md:grid-cols-3 gap-8 items-center">
                        <div class="text-center">
                            <svg class="w-16 h-16 text-[#0077b6] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <h4 class="font-bold text-2xl text-[#0077b6]">Site Próprio (E-commerce)</h4>
                        </div>
                        <div class="md:col-span-2">
                             <p class="text-gray-700 mb-4"><strong>Por que é essencial?</strong> Este será o território 100% controlado pela Lojas Cem. É a garantia de que a experiência do cliente seguirá o nosso padrão de excelência, e onde o crediário, nosso maior diferencial, ganha vida no mundo digital.<span class="neuro-insight" data-title="Análise Detalhada" data-content="<strong>Vantagens Específicas:</strong><br/>- <strong>Soberania da Marca:</strong> Controle total sobre a experiência (Seabra & Paula, 2025, p. 121).<br/>- <strong>Digitalização do Crediário Próprio:</strong> Amplia o alcance do principal diferencial competitivo (p. 137).<br/>- <strong>Geração de Dados Primários:</strong> Alimenta o CRM para personalização (p. 137).<br/>- <strong>Preservação da Margem:</strong> Elimina comissões de terceiros (p. 121).<br/><br/><strong>Desvantagens Específicas:</strong><br/>- Investimento Inicial e Geração de Tráfego."></span></p>
                            <ul class="text-sm space-y-2">
                                <li class="flex items-start"><strong class="text-green-600 mr-2">✔ Vantagem Estratégica:</strong> Controle total sobre a marca, a experiência do cliente e, mais importante, a margem de lucro.</li>
                                <li class="flex items-start"><strong class="text-green-600 mr-2">✔ Vantagem Estratégica:</strong> Digitalização do crediário, transformando nosso maior ativo físico em uma poderosa ferramenta online.</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Redes Sociais -->
                    <div class="card bg-white p-8 rounded-xl shadow-lg border border-gray-100 reveal grid md:grid-cols-3 gap-8 items-center">
                         <div class="text-center">
                             <svg class="w-16 h-16 text-[#0077b6] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.292c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                            <h4 class="font-bold text-2xl text-[#0077b6]">Redes Sociais & Influenciadores</h4>
                        </div>
                        <div class="md:col-span-2">
                            <p class="text-gray-700 mb-4"><strong>Por que é essencial?</strong> Estar no Instagram e Facebook é onde a conversa com o cliente começa. A estratégia é usar essas plataformas para modernizar a marca e transformar nossos vendedores, que já têm a confiança do público, nos melhores influenciadores para a Lojas Cem.<span class="neuro-insight" data-title="Análise Detalhada" data-content="<strong>Vantagens Específicas:</strong><br/>- <strong>Capilaridade e Viés Local:</strong> Vendedores-influenciadores capitalizam o 'viés de familiaridade' e a 'prova social local'.<br/>- <strong>Redução da Dissonância Cognitiva:</strong> Vídeos e lives minimizam a 'lacuna sensorial' da compra online (Kahneman, 2011).<br/><br/><strong>Desvantagens Específicas:</strong><br/>- Governança da Mensagem e Capacitação da Equipe."></span></p>
                            <ul class="text-sm space-y-2">
                                <li class="flex items-start"><strong class="text-green-600 mr-2">✔ Vantagem Estratégica:</strong> Conecta a marca com o público mais jovem e engajado de forma autêntica e orgânica.</li>
                                <li class="flex items-start"><strong class="text-green-600 mr-2">✔ Vantagem Estratégica:</strong> Amplifica o "boca a boca" digitalmente, usando a confiança da nossa equipe como marketing.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- WhatsApp -->
                    <div class="card bg-white p-8 rounded-xl shadow-lg border border-gray-100 reveal grid md:grid-cols-3 gap-8 items-center">
                        <div class="text-center">
                            <svg class="w-16 h-16 text-[#0077b6] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                            <h4 class="font-bold text-2xl text-[#0077b6]">Social Selling (WhatsApp)</h4>
                        </div>
                        <div class="md:col-span-2">
                            <p class="text-gray-700 mb-4"><strong>Por que é essencial?</strong> Para levar nosso maior ativo, o atendimento humano, para o bolso do cliente. O WhatsApp é o canal para tirar dúvidas, enviar propostas, fechar vendas e, crucialmente, oferecer um suporte pós-venda que encanta e fideliza.<span class="neuro-insight" data-title="Análise Detalhada" data-content="<strong>Vantagens Específicas:</strong><br/>- <strong>Confiança e Atendimento Humano em Escala:</strong> Ativa o circuito de oxitocina, crucial para a confiança.<br/>- <strong>Alta Adoção e Baixa Fricção:</strong> Usa o app mais popular do Brasil (Seabra & Paula, 2025, p. 125).<br/>- <strong>Eficiência no Pós-Venda:</strong> Facilita o suporte e a fidelização (p. 42).<br/><br/><strong>Desvantagens Específicas:</strong><br/>- Desafio de Escalabilidade e Dependência da Plataforma."></span></p>
                            <ul class="text-sm space-y-2">
                                <li class="flex items-start"><strong class="text-green-600 mr-2">✔ Vantagem Estratégica:</strong> Aumenta a taxa de conversão ao adicionar o toque humano e pessoal à jornada digital.</li>
                                <li class="flex items-start"><strong class="text-green-600 mr-2">✔ Vantagem Estratégica:</strong> Cria um canal direto e pessoal para recompra, suporte e construção de um relacionamento duradouro.</li>
                            </ul>
                        </div>
                    </div>

                    <!-- IA -->
                    <div class="card bg-white p-8 rounded-xl shadow-lg border border-gray-100 reveal">
                        <div class="grid md:grid-cols-3 gap-8 items-center">
                            <div class="text-center">
                                <svg class="w-16 h-16 text-[#0077b6] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 16v-2M6 12H4m16 0h-2M7.757 7.757L6.343 6.343M17.657 17.657l-1.414-1.414M16.243 7.757l1.414-1.414M7.757 16.243l-1.414 1.414M9 12a3 3 0 106 0 3 3 0 00-6 0z"></path></svg>
                                <h4 class="font-bold text-2xl text-[#0077b6]">Assistente com IA (Gemini)</h4>
                            </div>
                            <div class="md:col-span-2">
                                <p class="text-gray-700 mb-4"><strong>Por que é essencial?</strong> A IA é mais do que um canal; é o cérebro da nossa nova operação. Para o cliente, será um assistente pessoal que antecipa desejos e simplifica a jornada de compra. Para a nossa equipa, será o superpoder para criar argumentos de venda, posts para redes sociais e ofertas personalizadas em segundos, mantendo a voz e a confiança da Lojas Cem em cada interação.<span class="neuro-insight" data-title="Análise Detalhada" data-content="<strong>Vantagens Específicas do Canal de IA:</strong><br/><br/><strong>Hiper-Personalização Preditiva e Ofertas Antecipadas:</strong> A IA aprende com cada interação e histórico de compras. Com base nesse 'Big Data' (Seabra & De Paula, 2025, p. 37), a IA pode antecipar as necessidades do cliente, como sugerir produtos complementares ou seguros. A personalização é a chave para a conversão, e a IA potencializa isso ao prever o próximo passo do cliente. 43% dos consumidores consideram a IA uma fonte confiável de informações (Seabra & De Paula, 2025, p. 28), o que pode ser explorado para construir confiança.<br/><br/><strong>Eficiência Operacional Massiva e Atendimento 24/7:</strong> A IA gerencia milhares de conversas simultaneamente, liberando a equipe humana para casos complexos. A autonomia da IA no 'processamento de informações, em tempo real' (Seabra & De Paula, 2025, p. 37) permite um atendimento 24/7, garantindo que a demanda do cliente seja atendida no 'momento, no local e da forma que desejar' (p. 13).<br/><br/><strong>Otimização do Funil de Vendas com Análise Preditiva:</strong> A IA atua em todas as etapas do funil. Através de 'Intelligence Fulfillment' (p. 144), pode otimizar a cadeia de suprimentos. Analisando 'dados como padrão de consumo, número de visitas...' (p. 115), a IA refina continuamente as estratégias de marketing e vendas.<br/><br/><strong>Integração Omnichannel Sem Emendas:</strong> A IA unifica a experiência do cliente. Se uma conversa começa no WhatsApp e continua na loja, o vendedor tem todo o contexto. Isso cria uma experiência 'consistente para o consumidor, independentemente do canal' (p. 133) e alinha-se ao 'foco no cliente (customer centricity)' (p. 133).<br/><br/><strong>Desvantagens Específicas do Canal de IA:</strong><br/><br/><strong>Investimento Substantivo e Complexidade:</strong> Exige investimento significativo em tecnologia e talentos. A complexidade está na implementação, treinamento e otimização contínua.<br/><br/><strong>Risco de Desumanização:</strong> Se mal implementada, pode criar um atendimento robótico. É crucial projetá-la para complementar o toque humano, com transição suave para um agente humano para 'manter a confiança do consumidor' (p. 28).<br/><br/><strong>Dependência de Dados de Qualidade:</strong> A performance da IA depende da qualidade dos dados. A falta de 'informações sincronizadas e em tempo real' (p. 143) pode comprometer o sistema.<br/><br/><strong>Necessidade de Adaptação Contínua:</strong> A IA precisa ser constantemente treinada e otimizada para acompanhar as 'mudanças que vêm ocorrendo no comportamento do consumidor' (p. 29)."></span></p>
                            </div>
                        </div>
                        <div id="gemini-interactive-panel" class="mt-6 pt-6 border-t">
                             <h3 class="text-xl font-semibold mb-4 text-center text-[#023047]">✨ Potencialize sua Equipe: IA em Ação</h3>
                            <div class="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg">
                                <div class="grid sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label for="gemini-product" class="block text-sm font-medium text-gray-700 mb-1">Produto</label>
                                        <select id="gemini-product" class="w-full p-2 border border-gray-300 rounded-md">
                                            <option>Smart TV 4K</option>
                                            <option>Geladeira Frost-Free</option>
                                            <option>Máquina de Lavar 15kg</option>
                                            <option>Sofá Retrátil</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="gemini-profile" class="block text-sm font-medium text-gray-700 mb-1">Perfil do Cliente</label>
                                        <select id="gemini-profile" class="w-full p-2 border border-gray-300 rounded-md">
                                            <option>Jovem Casal</option>
                                            <option>Família Grande</option>
                                            <option>Entusiasta de Tecnologia</option>
                                            <option>Pessoa que mora sozinha</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="grid sm:grid-cols-2 gap-4 mb-6">
                                    <button id="gemini-generate-pitch-btn" class="w-full bg-[#023047] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center">
                                        Gerar Pitch de Venda
                                    </button>
                                    <button id="gemini-generate-post-btn" class="w-full bg-[#0077b6] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center">
                                        Criar Post para Social
                                    </button>
                                </div>
                                <div id="gemini-result-container" class="mt-6 bg-white p-4 rounded-md border hidden">
                                    <div id="gemini-spinner" class="gemini-spinner mx-auto my-4 hidden"></div>
                                    <p id="gemini-result" class="text-gray-700 whitespace-pre-wrap"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-16 text-center reveal">
                    <div class="bg-gray-100 p-8 rounded-2xl inline-block">
                        <h4 class="font-bold text-xl text-gray-800 mb-4">Minha Escolha Estratégica</h4>
                        <p class="text-gray-600 mb-6 max-w-2xl mx-auto">Atrás desta proposta de canais, existe uma justificativa estratégica clara. Clique abaixo para entender o racional completo pensado para o melhor desempenho.</p>
                        <button id="open-justificativa-modal" class="bg-[#0077b6] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#005f8a] transition-colors shadow-lg hover:shadow-xl">
                            Saiba Mais: A Estratégia por Trás da Proposta
                        </button>
                    </div>
                </div>
             </div>
        </section>

        <!-- 4. Estratégia: omnichannel ou multicanal? -->
        <section id="4" class="py-20 md:py-28 bg-white">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div class="section-header p-8 rounded-lg mb-16 reveal">
                    <h3 class="text-4xl font-bold text-[#023047] sm:text-5xl text-center">A Nossa Proposta: Social Selling Relacional</h3>
                </div>

                <div class="bg-white p-6 sm:p-8 rounded-xl shadow-lg reveal">
                    <p class="text-lg mb-6 text-center max-w-3xl mx-auto">Em vez de canais genéricos, propomos a construção de um ecossistema de <strong class="text-[#fb8500]">Social Selling Relacional</strong>, culminando numa <strong class="text-[#fb8500]">Estratégia Omnichannel Neuro-focada</strong><span class="rich-nav-icon" data-fundamento="omnichannel"></span>.</p>
                    <blockquote class="text-center italic text-lg text-[#023047] bg-blue-50 p-6 rounded-lg my-8">"O cliente é o neurónio central da rede. A jornada de compra será contínua, contextualizada e customizada, independentemente do ponto de contacto."</blockquote>
                    
                    <h3 class="text-2xl font-semibold mt-16 mb-8 text-center reveal text-[#023047]">Pilar Central: Rede de Consultores Digitais Lojas Cem</h3>
                    <div class="max-w-3xl mx-auto text-center reveal">
                        <p class="text-gray-700">A Lojas Cem capacitará a sua equipa de vendas para se tornarem <strong class="text-[#023047]">“Consultores Digitais”</strong>. Eles utilizarão WhatsApp, Instagram e Live Commerce como extensões dos seus “balcões de atendimento” digitais, atuando como microinfluenciadores locais e humanizando a presença digital da marca. <span class="rich-nav-icon" data-fundamento="consultor-digital"></span></p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- 5. Desafios logísticos -->
        <section id="5" class="py-20 md:py-28">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div class="section-header p-8 rounded-lg mb-16 reveal">
                    <h3 class="text-4xl font-bold text-[#023047] sm:text-5xl text-center">5. Desafios Logísticos</h3>
                    <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto text-center">Uma logística eficiente é a espinha dorsal da experiência do cliente. É aqui que a promessa da marca se torna realidade.</p>
                </div>
                 <div class="grid md:grid-cols-2 gap-8">
                    <div class="card bg-white p-8 rounded-xl shadow-lg border border-gray-100 reveal">
                        <svg class="w-12 h-12 text-[#0077b6] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-2h8a1 1 0 001-1zM21 11V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2"></path></svg>
                        <h4 class="font-bold text-xl text-[#0077b6] mb-3">Transporte e distribuição</h4>
                        <p class="text-gray-700">O desafio da entrega de produtos grandes ("última milha"). Solução: sistemas de roteirização, frotas adaptadas e agendamento flexível para dar controle ao cliente.<span class="neuro-insight" data-title="Análise e Fonte" data-content="A logística tradicional da Lojas Cem é otimizada para o transporte de grandes volumes para suas lojas. Com o omnichannel, a empresa enfrentará a fragmentação de entregas e a complexidade do 'last mile' para produtos de grande porte. O transporte é o componente mais oneroso dos custos logísticos (até 70%). (Seabra & Paula, 2025, p. 19, 122). A superação desses desafios é uma oportunidade para criar um diferencial competitivo."></span></p>
                    </div>
                     <div class="card bg-white p-8 rounded-xl shadow-lg border border-gray-100 reveal">
                        <svg class="w-12 h-12 text-[#0077b6] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7l8 5 8-5M12 22V12"></path></svg>
                        <h4 class="font-bold text-xl text-[#0077b6] mb-3">Armazenagem e estoque</h4>
                        <p class="text-gray-700">Ter uma visão única e em tempo real do estoque é essencial. Solução: sistemas de gestão (WMS/OMS) e mini-centros de distribuição (Dark Stores) para evitar a venda de produtos indisponíveis.<span class="neuro-insight" data-title="Análise e Fonte" data-content="O principal desafio é alcançar a visibilidade unificada do estoque em tempo real. Sem essa integração, o risco de 'ruptura virtual' (vender um produto online que não está fisicamente disponível) ou de manter 'estoque parado' (Seabra e De Paula, 2025, p. 42) seria alto, gerando frustração e prejuízos. A ineficiência logística gera ansiedade e desconfiança no cliente (p. 56)."></span></p>
                    </div>
                     <div class="card bg-white p-8 rounded-xl shadow-lg border border-gray-100 reveal">
                        <svg class="w-12 h-12 text-[#0077b6] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 16v-2M6 12H4m16 0h-2M7.757 7.757L6.343 6.343M17.657 17.657l-1.414-1.414M16.243 7.757l1.414-1.414M7.757 16.243l-1.414 1.414M9 12a3 3 0 106 0 3 3 0 00-6 0z"/>
                        </svg>
                        <h4 class="font-bold text-xl text-[#0077b6] mb-3">Tecnologia e automação</h4>
                        <p class="text-gray-700">A tecnologia que conecta tudo. Solução: uso de APIs para integrar os sistemas e Inteligência Artificial (IA) para prever a demanda e otimizar a operação, tornando-a mais ágil.<span class="neuro-insight" data-title="Análise e Fonte" data-content="A transição para o omnichannel exige uma modernização tecnológica profunda para garantir a fluidez da informação. A 'ausência de sistemas inovadores' (Seabra e De Paula, 2025, p. 26) poderia gerar gargalos operacionais. APIs e uma arquitetura 'headless' são cruciais para conectar sistemas e reduzir o esforço cognitivo do cliente. A IA é 'diretamente ligada à transformação digital nas empresas' (p. 37)."></span></p>
                    </div>
                    <div class="card bg-white p-8 rounded-xl shadow-lg border border-gray-100 reveal">
                         <div class="w-full h-24 mb-4 flex justify-center">
                           <lottie-player src="https://lottie.host/embed/d9236173-0480-4835-a586-319e782e04e8/g3w2u1e1XG.json" background="transparent" speed="1" style="width: 120px; height: 120px;" loop autoplay></lottie-player>
                        </div>
                        <h4 class="font-bold text-xl text-[#0077b6] mb-3">Conexão Inteligente: Loja & Influenciador</h4>
                        <p class="text-gray-700">Use a IA para transformar o interesse online em uma visita à loja. Podemos mostrar ao cliente a loja mais próxima e conectá-lo a um vendedor-influenciador da sua região, humanizando a jornada.<span class="neuro-insight" data-title="Análise e Fonte" data-content="Esta ação visa reduzir a fricção entre a pesquisa online e a visita física. Ao conectar o cliente com um consultor local, ativamos o 'viés de familiaridade' e a 'prova social local', que são neuropsicologicamente mais poderosos do que a publicidade genérica em massa, aumentando a probabilidade de conversão."></span></p>
                    </div>
                </div>
                <div class="mt-16 reveal">
                    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h3 class="text-2xl font-semibold mb-6 text-center text-[#023047]">✨ Resolvendo Desafios Logísticos com IA</h3>
                        <p class="text-center text-gray-600 max-w-3xl mx-auto mb-8">A complexidade logística do omnichannel exige soluções inteligentes. Veja como a IA do Gemini pode nos ajudar a planejar e otimizar nossas operações.</p>
                        <div class="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg">
                            <div class="mb-4">
                                <label for="logistics-challenge-select" class="block text-sm font-medium text-gray-700 mb-1">Selecione um Desafio Logístico:</label>
                                <select id="logistics-challenge-select" class="w-full p-2 border border-gray-300 rounded-md">
                                    <option>Otimizar rotas de entrega da 'última milha'</option>
                                    <option>Prever demanda de estoque para a Black Friday</option>
                                    <option>Gerenciar estoque unificado entre lojas e online</option>
                                </select>
                            </div>
                            <button id="gemini-generate-logistics-btn" class="w-full bg-[#0077b6] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center">
                                Gerar Solução com IA
                            </button>
                            <div id="gemini-logistics-result-container" class="mt-6 bg-white p-4 rounded-md border hidden">
                                <div id="gemini-logistics-spinner" class="gemini-spinner mx-auto my-4 hidden"></div>
                                <p id="gemini-logistics-result" class="text-gray-700 whitespace-pre-wrap"></p>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="mt-8 reveal">
                    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h3 class="text-2xl font-semibold mb-6 text-center text-[#023047]"> Conectando o Digital ao Físico com IA</h3>
                        <p class="text-center text-gray-600 max-w-3xl mx-auto mb-8">Vamos transformar o interesse online em uma visita à loja. Insira um CEP e veja como a IA pode encontrar a Lojas Cem mais próxima e um consultor digital para um atendimento personalizado.</p>
                        <div class="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg">
                            <div class="mb-4">
                                <label for="cep-input" class="block text-sm font-medium text-gray-700 mb-1">Digite seu CEP:</label>
                                <input type="text" id="cep-input" class="w-full p-2 border border-gray-300 rounded-md" value="13320-005">
                            </div>
                            <button id="gemini-generate-route-btn" class="w-full bg-[#0077b6] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center">
                                Encontrar Minha Loja & Consultor
                            </button>
                            <div id="gemini-route-result-container" class="mt-6 bg-white p-4 rounded-md border hidden">
                                <div id="gemini-route-spinner" class="gemini-spinner mx-auto my-4 hidden"></div>
                                <p id="gemini-route-result" class="text-gray-700 whitespace-pre-wrap"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6. Estímulo ao shopper -->
        <section id="6" class="py-20 md:py-28 bg-white">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div class="section-header p-8 rounded-lg mb-16 reveal">
                    <h3 class="text-4xl font-bold text-[#023047] sm:text-5xl text-center">As Ações: Alavancando Gatilhos Neurais</h3>
                </div>

                <div id="shopperactions" data-tab-group class="bg-white p-6 sm:p-8 rounded-lg shadow-lg reveal">
                    <p class="text-lg mb-8 text-center max-w-3xl mx-auto">Propomos três ações guiadas por insights de Neuromarketing para ativar sistemas de recompensa, reduzir aversão à perda e construir um engagement profundo.</p>
                    <div class="border-b border-gray-200 overflow-x-auto">
                        <nav class="-mb-px flex justify-center space-x-6 sm:space-x-8" aria-label="Tabs">
                            <button class="tab-button shrink-0 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-[#fb8500] active" data-tab="retira"> Retira & Entrega</button>
                            <button class="tab-button shrink-0 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-[#fb8500]" data-tab="clube">⭐ Clube Lojas Cem</button>
                            <button class="tab-button shrink-0 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-[#fb8500]" data-tab="live"> Live Commerce</button>
                        </nav>
                    </div>
                    <div class="mt-8">
                        <div id="retira" class="tab-content active">
                           <h3 class="font-bold text-xl text-[#023047] mb-4">Ação 1: Retira Rápida & Entrega Programada<span class="rich-nav-icon" data-fundamento="bopis-neuro"></span></h3>
                           <p class="mb-4">Esta ação transforma a conveniência numa oportunidade de encantamento. Ao vir à loja para a "Retira Rápida", o cliente não só recebe o seu produto, como entra num <strong class="text-[#023047]">showroom de experiências</strong>, um espaço sensorial e "instagramável" que reforça a imagem da marca.</p>
                           <ul class="text-sm space-y-2 list-disc list-inside">
                               <li><strong>Retira Rápida 2h:</strong> Para itens leves (ex: celulares). Atende ao desejo de agilidade.</li>
                               <li><strong>Entrega Programada (D+1/D+2):</strong> Para produtos volumosos (ex: sofás), com agendamento e processo de qualidade.</li>
                           </ul>
                        </div>
                        <div id="clube" class="tab-content">
                            <h3 class="font-bold text-xl text-[#023047] mb-4">Ação 2: Fidelidade Neuro-Programada<span class="rich-nav-icon" data-fundamento="clube-cem"></span></h3>
                            <p class="mb-4">Um programa de fidelidade omnichannel gamificado, onde pontos são ganhos por compras e interações. O resgate pode ser feito para experiências exclusivas ou "surpresas" (brindes não anunciados), ativando o sistema de recompensa dopaminérgico.</p>
                        </div>
                        <div id="live" class="tab-content">
                            <h3 class="font-bold text-xl text-[#023047] mb-4">Ação 3: Consultoria e Gatilho FOMO<span class="rich-nav-icon" data-fundamento="live-commerce"></span></h3>
                            <p class="mb-4">Sessões de Live Commerce com Consultores Digitais, oferecendo ofertas exclusivas por tempo limitado. A interação ao vivo com um consultor humano estabelece prova social, enquanto a urgência ativa o "medo de ficar de fora" (FOMO).</p>
                        </div>
                    </div>
                </div>

                <div class="mt-16 reveal">
                    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h3 class="text-2xl font-semibold mb-6 text-center text-[#023047]">✨ Assistente Virtual para o Lar: Soluções com IA</h3>
                        <p class="text-center text-gray-600 max-w-3xl mx-auto mb-8">Vamos além da venda. Use a IA do Gemini para ajudar os clientes a resolver problemas do dia a dia, transformando a Lojas Cem em uma verdadeira parceira do lar.</p>
                        <div class="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg">
                            <div class="mb-4">
                                <label for="gemini-solution-input" class="block text-sm font-medium text-gray-700 mb-1">Qual é o seu desafio em casa hoje?</label>
                                <input type="text" id="gemini-solution-input" class="w-full p-2 border border-gray-300 rounded-md" placeholder="Ex: Como posso agilizar o preparo de comidas?">
                            </div>
                            <button id="gemini-generate-solution-btn" class="w-full bg-[#0077b6] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center">
                                Encontrar Solução com IA
                            </button>
                            <div id="gemini-solution-result-container" class="mt-6 bg-white p-4 rounded-md border hidden">
                                <div id="gemini-solution-spinner" class="gemini-spinner mx-auto my-4 hidden"></div>
                                <p id="gemini-solution-result" class="text-gray-700 whitespace-pre-wrap"></p>
                            </div>
                        </div>
                    </div>
                </div>

                 <div class="mt-8 reveal">
                    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h3 class="text-2xl font-semibold mb-6 text-center text-[#023047]"> Suporte Pós-Venda Inteligente: Seu Consultor Virtual</h3>
                        <p class="text-center text-gray-600 max-w-3xl mx-auto mb-8">Problemas acontecem. Um pós-venda ágil e eficiente é o que transforma um problema numa oportunidade de encantar o cliente. Teste nosso chatbot de suporte.</p>
                        <div class="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg">
                            <div class="mb-4">
                                <label for="gemini-support-input" class="block text-sm font-medium text-gray-700 mb-1">Descreva seu problema ou dúvida:</label>
                                <textarea id="gemini-support-input" rows="3" class="w-full p-2 border border-gray-300 rounded-md" placeholder="Ex: Minha TV não liga na tomada. O que posso fazer?"></textarea>
                            </div>
                            <button id="gemini-generate-support-btn" class="w-full bg-[#0077b6] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all">
                                Obter Ajuda da IA
                            </button>
                            <div id="gemini-support-result-container" class="mt-6 bg-white p-4 rounded-md border hidden">
                                <div id="gemini-support-spinner" class="gemini-spinner mx-auto my-4 hidden"></div>
                                <p id="gemini-support-result" class="text-gray-700 whitespace-pre-wrap"></p>
                            </div>
                        </div>
                    </div>
                </div>

                 <div class="mt-8 reveal">
                    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h3 class="text-2xl font-semibold mb-6 text-center text-[#023047]"> Otimizador de Frete Inteligente com IA<span class="neuro-insight" data-title="Análise e Fonte" data-content="O custo do frete é um dos maiores fatores de abandono de carrinho. A transparência e a otimização deste custo ativam o gatilho de 'redução da aversão à perda'. Ao usar a nossa rede de lojas como mini-hubs logísticos (ship-from-store), otimizamos o 'last mile', atendendo à 'sensibilidade do cliente ao tempo' e ao custo, que são fatores críticos na decisão de compra (Seabra & Paula, 2025, p. 19, 64). A IA, ao analisar dados de vendas e estoque, pode prever a demanda regional e posicionar os produtos de forma mais inteligente, garantindo eficiência."></span></h3>
                        <p class="text-center text-gray-600 max-w-3xl mx-auto mb-8">Ninguém gosta de pagar frete caro. Use nossa IA para simular uma compra e descobrir a opção de entrega mais rápida e económica, com base na sua localização e no nosso estoque unificado em tempo real.</p>
                        <div class="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg">
                            <div class="grid sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label for="frete-product" class="block text-sm font-medium text-gray-700 mb-1">Selecione o Produto:</label>
                                    <select id="frete-product" class="w-full p-2 border border-gray-300 rounded-md">
                                        <option>Geladeira Frost-Free</option>
                                        <option>Smart TV 4K</option>
                                        <option>Sofá Retrátil</option>
                                        <option>Micro-ondas</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="frete-cep-input" class="block text-sm font-medium text-gray-700 mb-1">Digite seu CEP:</label>
                                    <input type="text" id="frete-cep-input" class="w-full p-2 border border-gray-300 rounded-md" placeholder="Apenas números" maxlength="8">
                                </div>
                            </div>
                            <button id="gemini-generate-frete-btn" class="w-full bg-[#0077b6] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center">
                                Otimizar Meu Frete com IA
                            </button>
                            <div id="gemini-frete-result-container" class="mt-6 bg-white p-4 rounded-md border hidden">
                                <div id="gemini-frete-spinner" class="gemini-spinner mx-auto my-4 hidden"></div>
                                <p id="gemini-frete-result" class="text-gray-700 whitespace-pre-wrap"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 7. Estratégias de trade marketing -->
        <section id="7" class="py-20 md:py-28">
             <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div class="section-header p-8 rounded-lg mb-16 reveal">
                    <h3 class="text-4xl font-bold text-[#023047] sm:text-5xl text-center">7. Estratégias de Trade Marketing</h3>
                </div>
                
                <div data-tab-group class="bg-white p-6 sm:p-8 rounded-xl shadow-lg reveal">
                    <p class="text-lg mb-6 text-center max-w-3xl mx-auto">Em vez de ações isoladas, propomos uma <strong class="text-[#fb8500]">Jornada de Compra Omnichannel Neuro-focada</strong>. Navegue pelas etapas para ver como as estratégias de trade marketing se conectam.</p>
                    
                    <div class="border-b border-gray-200 overflow-x-auto">
                        <nav class="-mb-px flex justify-center space-x-6 sm:space-x-8" aria-label="Tabs">
                             <button class="tab-button shrink-0 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-[#fb8500] active" data-tab="atracao">1. Atração Digital</button>
                             <button class="tab-button shrink-0 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-[#fb8500]" data-tab="fisica">2. Experiência Física</button>
                             <button class="tab-button shrink-0 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-[#fb8500]" data-tab="engajamento">3. Engajamento</button>
                        </nav>
                    </div>
                     <div class="mt-8">
                        <div id="atracao" class="tab-content active">
                           <h3 class="font-bold text-xl text-[#023047] mb-4">A Vitrine Cognitiva <span class="rich-nav-icon" data-fundamento="vitrine-cognitiva"></span></h3>
                           <p>Usamos IA e conteúdo otimizado para guiar o cliente no site, simplificando a escolha e construindo confiança antes mesmo do primeiro contato. A jornada começa com uma experiência digital que reduz a ansiedade e facilita a decisão.</p>
                        </div>
                        <div id="fisica" class="tab-content">
                            <h3 class="font-bold text-xl text-[#023047] mb-4">O Showroom Límbico <span class="rich-nav-icon" data-fundamento="showroom-limbico"></span></h3>
                            <p>A loja física se torna um showroom de experiências multissensoriais, com ambientes que ativam a emoção e o desejo de compra. Marketing olfativo, sonoro e tátil criam uma memória emocional rica, influenciando diretamente a decisão.</p>
                        </div>
                        <div id="engajamento" class="tab-content">
                            <h3 class="font-bold text-xl text-[#023047] mb-4">Gatilhos Neurais em Ação <span class="rich-nav-icon" data-fundamento="acoes-neurais"></span></h3>
                            <p>Lançamos ações como o Clube de Fidelidade e o Live Commerce para criar um senso de comunidade, urgência e recompensa, ativando gatilhos de dopamina e oxitocina para construir uma lealdade duradoura.</p>
                        </div>
                    </div>
                </div>

                 <div class="mt-16 reveal">
                    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h3 class="text-2xl font-semibold mb-6 text-center text-[#023047]">✨ Gerador de Experiência de Trade Marketing com IA</h3>
                        <p class="text-center text-gray-600 max-w-3xl mx-auto mb-8">Vamos co-criar experiências de compra memoráveis. Selecione as opções abaixo e veja como a IA do Gemini pode gerar um plano de ação de trade marketing para encantar nossos clientes.</p>
                        <div class="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg">
                            <div class="grid sm:grid-cols-3 gap-4 mb-4">
                                <div>
                                    <label for="trade-channel" class="block text-sm font-medium text-gray-700 mb-1">Canal</label>
                                    <select id="trade-channel" class="w-full p-2 border border-gray-300 rounded-md">
                                        <option>Loja Física</option>
                                        <option>Site E-commerce</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="trade-category" class="block text-sm font-medium text-gray-700 mb-1">Ambiente/Categoria</label>
                                    <select id="trade-category" class="w-full p-2 border border-gray-300 rounded-md">
                                        <option>Cozinha dos Sonhos</option>
                                        <option>Home Theater Inteligente</option>
                                        <option>Quarto Conforto</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="trade-trigger" class="block text-sm font-medium text-gray-700 mb-1">Gatilho Neural</label>
                                    <select id="trade-trigger" class="w-full p-2 border border-gray-300 rounded-md">
                                        <option>Conexão Emocional</option>
                                        <option>Redução da Carga Cognitiva</option>
                                        <option>Prova Social</option>
                                    </select>
                                </div>
                            </div>
                            <button id="gemini-generate-trade-btn" class="w-full bg-[#0077b6] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center">
                                Gerar Plano de Ação com IA
                            </button>
                            <div id="gemini-trade-result-container" class="mt-6 bg-white p-4 rounded-md border hidden">
                                <div id="gemini-trade-spinner" class="gemini-spinner mx-auto my-4 hidden"></div>
                                <p id="gemini-trade-result" class="text-gray-700 whitespace-pre-wrap"></p>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="mt-16 reveal">
                    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h3 class="text-2xl font-semibold mb-2 text-center text-[#023047]"> A Visão em Movimento: O Novo Varejo Começa Agora</h3>
                        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-8">As palavras definem a estratégia, mas uma imagem (em movimento) vale mais. Dê o play e veja o futuro do varejo em ação – a jornada omnichannel que propomos para a Lojas Cem.</p>
                        <div class="max-w-3xl mx-auto aspect-video bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                            <video controls class="w-full h-full">
                                <source src="fileId:uploaded:invideo-ai-1080 Você já viveu o novo varejo_ Descubra o  2025-10-02 (1).mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
             </div>
        </section>

        <!-- Conclusão -->
        <section id="conclusao" class="py-20 md:py-28">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="section-header p-8 rounded-lg mb-16 reveal">
                    <h3 class="text-4xl font-bold text-[#023047] sm:text-5xl text-center">Conclusão: A Imperatividade Neuro-Estratégica</h3>
                </div>

                <div class="space-y-12">
                    <div class="card bg-white p-8 rounded-xl shadow-lg border border-gray-100 reveal">
                        <div class="grid md:grid-cols-2 gap-12 items-center">
                            <div class="order-2 md:order-1">
                                <h4 class="font-bold text-2xl text-[#fb8500] mb-4">Para a Lojas Cem: Uma Proposta de Valor Inquestionável </h4>
                                <p class="text-gray-700 mb-6">Esta não é apenas uma proposta; é um convite para redefinir o futuro do varejo. Vocês construíram um legado de confiança inigualável. Agora, vamos transformar essa credibilidade numa vantagem competitiva irresistível, criando uma jornada de compra tão fluida e pessoal que o cliente se sentirá em casa, não importa onde esteja. Juntos, vamos construir o futuro, honrando a tradição.</p>
                            </div>
                            <div class="order-1 md:order-2 flex items-center justify-center">
                               <lottie-player src="https://lottie.host/embed/8b958869-2315-4081-8636-7013824f9c52/a9Ea6L7wz7.json" background="transparent" speed="1" style="width: 100%; height: 100%; max-width: 300px;" loop autoplay></lottie-player>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-white p-8 rounded-xl shadow-lg border border-gray-100 reveal">
                        <h4 class="font-bold text-2xl text-[#0077b6] mb-4">Para a Avaliação Acadêmica: Fundamentação e Rigor <span class="neuro-insight" data-title="Análise Acadêmica Detalhada" data-content="A presente proposta para a Lojas Cem transcende a mera implementação tecnológica, configurando-se como uma redefinição estratégica fundamental, firmemente ancorada nos preceitos teóricos e práticos explorados na disciplina 'Estratégias de Distribuição Omnichannel e Trade Marketing' (Seabra & De Paula, 2025). O diagnóstico inicial revela um mercado em constante e rápida evolução, caracterizado pelo 'Paradoxo da Escolha' (p. 24), onde a abundância de opções complexifica a decisão do consumidor. Nesse cenário, as 'mudanças no mercado' (p. 24-27) exigem uma adaptabilidade sem precedentes.<br/><br/>A estratégia Omnichannel (p. 131-133) não é apenas uma opção, mas uma 'necessidade imperativa' diante do 'novo normal' de consumo, especialmente com a ascensão da Geração Z e Alfa, que exibem 'paradoxos' como a busca por interação online e offline simultaneamente (Kotler et al., 2017, apud Seabra & De Paula, 2025, p. 127-129). A Lojas Cem, com seu legado, pode converter seu capital relacional em uma vantagem competitiva poderosa, mitigando os 'custos de vendas perdidas' decorrentes da 'ruptura' (p. 14).<br/><br/>A integração do Trade Marketing (Arbache, 2015, apud Seabra & De Paula, 2025, p. 73-74) é vital, atuando como a ponte que otimiza o PDV, físico e digital. A aplicação de 'gerenciamento por categorias' (p. 105) e a análise da 'árvore de decisão de compra do consumidor' (p. 110) garantem uma experiência intuitiva. O diferencial neuro-estratégico reside na modulação dos 'gatilhos neurais de confiança e segurança', otimizando a 'sensibilidade do cliente ao tempo e ao local de recebimento' (p. 64-65) e transformando a logística em um vetor de valor.<br/><br/>A concretização desta visão exige 'execução disciplinada', 'investimento estratégico em tecnologia e pessoas', e 'transparência e visibilidade do estoque' (p. 143), pilares da 'intelligence fulfillment' (p. 144). Em síntese, este trabalho demonstra a aplicação aprofundada dos conceitos da disciplina a um desafio de mercado complexo, validando a utilidade do conhecimento transmitido."></span></h4>
                        <p class="text-gray-700">Esta proposta representa a aplicação direta e aprofundada dos conceitos da disciplina "Estratégias de Distribuição Omnichannel e Trade Marketing". Cada recomendação, desde a escolha dos canais até às táticas de trade marketing, está rigorosamente fundamentada na apostila de Seabra & De Paula (2025), dados de mercado e teorias de neuromarketing, demonstrando a utilidade prática do conhecimento académico na resolução de desafios complexos do varejo moderno.</p>
                    </div>
                </div>

                 <div class="mt-16 reveal">
                    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h3 class="text-2xl font-semibold mb-6 text-center text-[#023047]"> Simulador de ROI Omnichannel: O Futuro em Números</h3>
                        <p class="text-center text-gray-600 max-w-3xl mx-auto mb-8">Esta transformação é um investimento com retorno claro. Use a IA do Gemini para simular o potencial impacto financeiro da estratégia omnichannel, com base em dados de mercado e nas nossas projeções.</p>
                        <div class="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg">
                            <div class="grid sm:grid-cols-3 gap-4 mb-4">
                                <div>
                                    <label for="roi-retention" class="block text-sm font-medium text-gray-700 mb-1">Aumento na Retenção (%)</label>
                                    <input type="number" id="roi-retention" class="w-full p-2 border border-gray-300 rounded-md" value="25">
                                </div>
                                <div>
                                     <label for="roi-ltv" class="block text-sm font-medium text-gray-700 mb-1">Aumento no LTV (%)</label>
                                    <input type="number" id="roi-ltv" class="w-full p-2 border border-gray-300 rounded-md" value="50">
                                </div>
                                 <div>
                                    <label for="roi-investment" class="block text-sm font-medium text-gray-700 mb-1">Investimento (R$)</label>
                                    <input type="number" id="roi-investment" class="w-full p-2 border border-gray-300 rounded-md" value="5000000">
                                </div>
                            </div>
                            <button id="gemini-generate-roi-btn" class="w-full bg-[#0077b6] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all">
                                Calcular Impacto com IA
                            </button>
                            <div id="gemini-roi-result-container" class="mt-6 bg-white p-4 rounded-md border hidden">
                                <div id="gemini-roi-spinner" class="gemini-spinner mx-auto my-4 hidden"></div>
                                <p id="gemini-roi-result" class="text-gray-700 whitespace-pre-wrap"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-12 bg-gray-50">
            <div class="container mx-auto px-4 text-center">
                 <h3 class="text-2xl font-bold text-[#023047] mb-4">Base de Conhecimento</h3>
                 <p class="text-gray-600 mb-6">Toda a análise e estratégia apresentada é fundamentada em fontes académicas e de mercado. <br>Consulte a base bibliográfica completa para um aprofundamento nos conceitos.</p>
                <a href="referencias.html" target="_blank" class="bg-[#0077b6] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#005f8a] transition-colors shadow-lg">
                    Ver Referências Bibliográficas (ABNT)
                </a>
            </div>
        </section>
    </main>
    
    <footer class="bg-[#023047] text-white py-8">
        <div class="container mx-auto px-4 text-center text-sm opacity-80">
            <p>&copy; 2025 | Proposta Estratégica elaborada por Lilian Brito para a Pós-Graduação em Marketing, FGV.</p>
            <p class="mt-2">Prazo de Entrega: 05.10.2025</p>
        </div>
    </footer>
    
    <!-- Modals and Popovers -->
    <div id="info-popover-premium" class="fixed bg-white p-4 rounded-lg shadow-xl text-sm max-w-sm z-[100] opacity-0 pointer-events-none" style="transform-origin: top left;">
        <h5 class="font-bold text-[#0077b6] mb-2" id="popover-title"></h5>
        <div id="popover-content" class="text-gray-600 text-xs"></div>
    </div>

    <div id="justificativa-modal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 opacity-0 pointer-events-none z-50 transition-opacity duration-300 modal-base">
        <div class="bg-white rounded-lg shadow-xl w-full max-w-3xl p-8 flex flex-col max-h-[90vh] transform scale-95 modal-content">
            <div class="flex justify-between items-center mb-4 flex-shrink-0">
                <h3 class="text-2xl font-bold text-[#023047]">Justificativa: Neurofoco no Social Selling Relacional</h3>
                <button id="close-justificativa-modal" class="text-gray-500 hover:text-gray-800 text-3xl">&times;</button>
            </div>
            <div class="overflow-y-auto text-gray-700 space-y-4 text-sm pr-2 text-justify">
                <p>A seleção dos canais propostos — <strong>Site Próprio Transacional, Social Selling via WhatsApp e a capacitação de Vendedores-Influenciadores, todos potencializados por Inteligência Artificial</strong> — não é uma simples adição de tecnologias, mas uma tese estratégica fundamentada. A mera adoção de um canal genérico diluiria a identidade da Lojas Cem e a transformaria em mais um player focado em preço, o que seria <strong>neuropsicologicamente contraproducente</strong>.</p>
                <p>Em vez disso, a proposta central, ancorada em princípios de Neuromarketing e modelada no sucesso de gigantes como Natura e Boticário, é a construção de um ecossistema de <strong>Social Selling Relacional</strong> que humaniza e autentica a presença digital, amplificando os ativos mais valiosos da marca.</p>
                
                <div>
                    <h4 class="font-bold text-lg text-gray-800 mt-6 mb-2">Os Pilares da Estratégia:</h4>
                    <ul class="list-none space-y-4">
                        <li>
                            <strong class="text-[#0077b6]">O Site Próprio como Alicerce da Soberania:</strong>
                            <p class="mt-1">É o território controlado pela marca. Aqui, a Lojas Cem mantém a <strong>soberania sobre sua narrativa e experiência</strong>, digitaliza seu maior diferencial competitivo — <strong>o crediário próprio</strong> —, gera dados primários valiosos para um CRM avançado e, crucialmente, <strong>preserva sua margem de lucro</strong>. É a base que garante a replicação fiel da reputação da marca no ambiente online.</p>
                        </li>
                        <li>
                            <strong class="text-[#0077b6]">O Social Selling como Amplificador de Confiança:</strong>
                            <p class="mt-1">O WhatsApp e a figura do Vendedor-Influenciador são os motores que escalam o 'comércio raiz'. Esta abordagem:</p>
                            <ul class="list-decimal list-inside ml-4 mt-2 space-y-2 text-xs">
                                <li><strong>Ativa o Sistema Límbico:</strong> A interação com um vendedor de confiança estabelece uma 'prova social autêntica' e 'autoridade', ativando o <strong>circuito de oxitocina</strong>, que é fundamental para a construção de empatia e redução da aversão ao risco na compra online.</li>
                                <li><strong>Reduz a Dissonância Cognitiva:</strong> Para produtos de alto valor, a falta de contato físico é uma barreira. Vídeos, lives e chamadas de vídeo com um consultor minimizam a 'lacuna sensorial', reduzindo a ansiedade de compra e a probabilidade de arrependimento.</li>
                                <li><strong>Gera Reciprocidade Neural:</strong> A interação proativa e personalizada via WhatsApp cria um forte senso de reciprocidade. O consultor oferece valor, ativando o gatilho neural de 'retribuição' e estabelecendo um relacionamento que transcende a transação.</li>
                            </ul>
                        </li>
                        <li>
                            <strong class="text-[#0077b6]">A Inteligência Artificial como Acelerador:</strong>
                             <p class="mt-1">A IA não é apenas um canal, mas a inteligência que conecta e potencializa todos os outros. Ela permite que 'decisões possam ser tomadas por máquinas, de forma autônoma' (Seabra & Paula, 2025, p. 37), tornando a operação mais ágil. No nosso modelo, a IA irá:</p>
                             <ul class="list-decimal list-inside ml-4 mt-2 space-y-2 text-xs">
                                 <li><strong>Empoderar os Consultores Digitais:</strong> Fornecendo insights sobre o cliente e automatizando a criação de conteúdo, liberando tempo para o relacionamento humano.</li>
                                 <li><strong>Personalizar a Experiência:</strong> Guiando o cliente no site para reduzir o 'Paradoxo da Escolha' (p. 25) e oferecendo um atendimento inicial via chatbot que é rápido e eficiente, antes de escalar para um humano.</li>
                             </ul>
                        </li>
                    </ul>
                </div>
                <p class="mt-6 font-semibold">Em suma, esta estratégia não apenas adiciona canais; ela <strong>conecta-os de forma a preservar e potencializar a 'alma' da Lojas Cem</strong>, amplificando seus diferenciais competitivos no ambiente digital, em vez de competir em um campo onde seria apenas mais uma opção.</p>
                <div class="mt-6 pt-4 border-t text-xs text-gray-500">
                    <p><strong>Fonte principal da análise:</strong> O conceito de 'Social Selling Relacional', a análise comparativa com Natura, e as vantagens/desvantagens específicas de cada canal são baseadas no estudo aprofundado apresentado nos documentos 'Estratégia de Expansão e Modernização...' e 'Expansão e Modernização de Canais de Venda...'. Citações de Seabra & Paula (2025) e Kahneman (2011) fundamentam a análise neurocientífica.</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="hidden">
        <div id="fundamento-omnichannel">"A estratégia Omnichannel integra de forma sinérgica todos os pontos de contato. O cliente é o centro, vivenciando uma jornada fluida, contínua e personalizada. Conforme Seabra & Paula (2025, p. 133), 'o omnichannel é resultado do foco no cliente (customer centricity)'."</div>
        <div id="fundamento-consultor-digital">"O modelo de 'Consultores Digitais' humaniza o digital, replicando a interação humana e personalizada que é essencial para ativar o circuito de oxitocina (confiança) e reduzir a aversão ao risco na compra de produtos de maior valor. Inspirado no sucesso da Natura, este modelo transforma a equipe de vendas em microinfluenciadores locais."</div>
        <div id="fundamento-clube-cem">"Um programa de fidelidade gamificado ativa o sistema de recompensa dopaminérgico do cérebro, criando uma experiência prazerosa e incentivando a recorrência. As 'surpresas' e o acesso exclusivo ativam os gatilhos de imprevisibilidade, pertencimento e reconhecimento, fortalecendo a conexão emocional com a marca (Seabra & Paula, 2025, p. 82, 136)."</div>
        <div id="fundamento-bopis-neuro">"A promessa de retirada em 2 horas (BOPIS) capitaliza o desejo por gratificação instantânea. A opção de ver o produto na loja antes de levar para casa minimiza o 'receio de segurança' e a 'aversão ao risco' da compra online, reduzindo a 'lacuna da confiança' e solidificando a transação (Seabra & Paula, 2025, p. 122)."</div>
        <div id="fundamento-live-commerce">"O Live Commerce ativa o 'medo de ficar de fora' (FOMO) através de ofertas com tempo limitado. A interação ao vivo com um consultor de confiança estabelece 'prova social' e 'autoridade' dinâmicas, superando a impessoalidade do digital e criando uma experiência imersiva que estimula a compra por impulso (Seabra & Paula, 2025, p. 142)."</div>
        <div id="fundamento-vitrine-cognitiva">"Implementar um Gerenciamento por Categoria (GC) Digital avançado, focado em conteúdo interativo e otimizado. A IA guia o cliente, reduzindo o 'Paradoxo da Escolha' (Seabra & Paula, 2025, p. 25). Conteúdo rico como vídeos 360º e Realidade Aumentada (AR) mitiga a falta de contato físico e constrói 'confiança cognitiva' (p. 116)."</div>
        <div id="fundamento-showroom-limbico">"Transformar as lojas em 'Showrooms de Soluções Completas', utilizando design de loja que estimule o cérebro límbico. Isso envolve marketing sensorial (olfativo, sonoro, tátil) e exibitécnica cognitiva (iluminação, cores) para criar uma memória emocional rica, influenciando a decisão de compra e aumentando o tempo de permanência (Seabra & Paula, 2025, p. 79, 98, 100)."</div>
        <div id="fundamento-acoes-neurais">"Ações como o Clube de Fidelidade e Live Commerce são desenhadas para ativar gatilhos neurais específicos. O clube foca em recompensa e pertencimento (dopamina, oxitocina), enquanto o Live Commerce utiliza a urgência e a prova social para ativar o FOMO, impulsionando a conversão e o engajamento."</div>
    </div>`;

  return (
    <>
      <Head>
        <title>Proposta Estratégica Omnichannel | Lojas Cem</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <style jsx global>{`body {
            font-family: 'Poppins', sans-serif;
            background-color: #f8f9fa;
            color: #212529;
        }
        .nav-link {
            position: relative;
            transition: color 0.3s ease;
        }
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #0077b6;
            transition: width 0.3s ease;
        }
        .nav-link:hover::after, .nav-link.active::after {
            width: 100%;
        }
        .nav-link.active {
            color: #0077b6;
        }
        .neuro-insight, .rich-nav-icon {
            cursor: pointer;
            display: inline-block;
            margin-left: 5px;
            font-weight: 700;
            color: #0077b6;
            transition: transform 0.2s;
        }
        .neuro-insight:hover, .rich-nav-icon:hover {
            transform: scale(1.2);
        }
        .card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
        .animated-gradient {
            background-size: 200% 200%;
            animation: gradient-animation 6s ease infinite;
        }
        @keyframes gradient-animation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .tab-content { display: none; }
        .tab-content.active { display: block; }
        .reveal {
            visibility: hidden;
        }
        #info-popover-premium {
            transition: opacity 0.3s, transform 0.3s;
            text-align: justify;
            border: 1px solid #e0e0e0;
            z-index: 100;
            max-width: 320px;
        }
        .modal-base {
            transition: opacity 0.3s;
        }
        .modal-content {
            transition: transform 0.3s;
        }
        .gemini-spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border-left-color: #0077b6;
            animation: spin 1s ease infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .tab-button {
            border-bottom-color: transparent;
        }
        .tab-button.active {
            border-color: #0077b6;
            color: #0077b6;
        }
        .section-header {
            background-color: #e9ecef;
            border-left: 5px solid #0077b6;
        }`}</style>
      </Head>

      {/* Conteúdo renderizado como HTML bruto para manter o visual original */}
      <main>
        <div
          id="root-html"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </main>

      <Script src="https://cdn.tailwindcss.com" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/scrollreveal" strategy="afterInteractive" />
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" strategy="afterInteractive" />
      <Script src="/scripts/inline-body-1.js" strategy="afterInteractive" />
    </>
  );
}
