import { useState } from 'react'
import './AppAccessivel.css'

const skins = [
  { id: 1, nome: 'Karambit | Fade', preco: 'R$ 4.200,00', img: '/skins/Karambit-Fade.png', exterior: 'Factory New' },
  { id: 2, nome: 'AWP | Dragon Lore', preco: 'R$ 18.500,00', img: '/skins/AWP-Dragon Lore.png', exterior: 'Field-Tested' },
  { id: 3, nome: 'M4A4 | Howl', preco: 'R$ 9.800,00', img: '/skins/M4A4-How.png', exterior: 'Minimal Wear' },
  { id: 4, nome: 'AK-47 | Fire Serpent', preco: 'R$ 6.300,00', img: '/skins/AK-47-Fire Serpent.png', exterior: 'Well-Worn' },
  { id: 5, nome: 'Bayonet | Doppler', preco: 'R$ 3.100,00', img: '/skins/bayonet.png', exterior: 'Factory New' },
  { id: 6, nome: 'Glock-18 | Fade', preco: 'R$ 1.450,00', img: '/skins/Glock-18-Fade.png', exterior: 'Factory New' },
]

export default function AppAccessivel() {
  const [pagina, setPagina] = useState('home')
  const [carrinho, setCarrinho] = useState([])
  const [skinSelecionada, setSkinSelecionada] = useState(null)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cartao, setCartao] = useState('')
  const [validade, setValidade] = useState('')
  const [cvv, setCvv] = useState('')
  const [tradeUrl, setTradeUrl] = useState('')
  const [pedidoFeito, setPedidoFeito] = useState(false)
  const [erros, setErros] = useState({})

  const adicionarCarrinho = (skin) => setCarrinho([...carrinho, skin])

  const validar = () => {
    const novosErros = {}
    if (!nome.trim()) novosErros.nome = 'Nome completo é obrigatório.'
    if (!email.trim()) novosErros.email = 'E-mail é obrigatório.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) novosErros.email = 'Informe um e-mail válido.'
    if (!cartao.trim()) novosErros.cartao = 'Número do cartão é obrigatório.'
    else if (!/^\d{16}$/.test(cartao.replace(/\s/g, ''))) novosErros.cartao = 'O cartão deve ter 16 dígitos numéricos.'
    if (!validade.trim()) novosErros.validade = 'Validade é obrigatória.'
    else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(validade)) novosErros.validade = 'Use o formato MM/AA.'
    if (!cvv.trim()) novosErros.cvv = 'CVV é obrigatório.'
    else if (!/^\d{3,4}$/.test(cvv)) novosErros.cvv = 'CVV deve ter 3 ou 4 dígitos.'
    return novosErros
  }

  const finalizarCompra = (e) => {
    e.preventDefault()
    const novosErros = validar()
    setErros(novosErros)
    if (Object.keys(novosErros).length === 0) setPedidoFeito(true)
  }

  const navegar = (destino) => {
    setPagina(destino)
    window.scrollTo(0, 0)
  }

  return (
    <div className="ac-wrapper">

      {/* Pular para conteúdo principal */}
      <a href="#conteudo-principal" className="ac-skip-link">
        Pular para o conteúdo principal
      </a>

      {/* HEADER / NAV */}
      <header className="ac-header">
        <div className="ac-logo">
          <span aria-label="CS2 SkinStore">CS2 <strong>SKINSTORE</strong></span>
        </div>
        <nav aria-label="Navegação principal">
          <ul className="ac-nav-list" role="list">
            <li><button className={pagina === 'home' ? 'ac-nav-btn ac-nav-ativo' : 'ac-nav-btn'} onClick={() => navegar('home')}>Home</button></li>
            <li><button className={pagina === 'loja' ? 'ac-nav-btn ac-nav-ativo' : 'ac-nav-btn'} onClick={() => navegar('loja')}>Loja</button></li>
            <li>
              <button className={pagina === 'checkout' ? 'ac-nav-btn ac-nav-ativo' : 'ac-nav-btn'} onClick={() => navegar('checkout')} aria-label={`Carrinho com ${carrinho.length} ${carrinho.length === 1 ? 'item' : 'itens'}`}>
                Carrinho {carrinho.length > 0 && <span className="ac-badge" aria-hidden="true">{carrinho.length}</span>}
              </button>
            </li>
            <li><button className={pagina === 'sobre' ? 'ac-nav-btn ac-nav-ativo' : 'ac-nav-btn'} onClick={() => navegar('sobre')}>Sobre</button></li>
          </ul>
        </nav>
      </header>

      <main id="conteudo-principal">

        {/* HOME */}
        {pagina === 'home' && (
          <>
            <section className="ac-hero" aria-labelledby="hero-titulo">
              <div className="ac-hero-content">
                <h1 id="hero-titulo">As melhores skins de CS2</h1>
                <p>Preços imbatíveis. Entrega imediata na sua conta Steam.</p>
                <button className="ac-btn-primario" onClick={() => navegar('loja')}>
                  Ver catálogo
                </button>
              </div>
            </section>

            <section className="ac-anuncio" aria-label="Promoções em destaque">
              <p>🔥 <strong>Promoção:</strong> AWP Dragon Lore com 10% OFF — Entrega em até 5 minutos — 100% Seguro</p>
            </section>

            <section className="ac-categorias" aria-labelledby="cat-titulo">
              <h2 id="cat-titulo" className="ac-section-titulo">Categorias</h2>
              <ul className="ac-categorias-lista" role="list">
                {['Facas', 'Rifles', 'Pistolas', 'Luvas'].map((cat) => (
                  <li key={cat}>
                    <button className="ac-categoria-card" onClick={() => navegar('loja')}>
                      <img src={`https://placehold.co/120x80/1a1a2e/e0e0e0?text=${cat}`} alt="" aria-hidden="true" />
                      <span>{cat}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            <section className="ac-testemunhos" aria-labelledby="test-titulo">
              <h2 id="test-titulo" className="ac-section-titulo">O que nossos clientes dizem</h2>
              <ul className="ac-testemunhos-lista" role="list">
                <li className="ac-testemunho-card">
                  <img src="/perfil/Molodoy.jpg" alt="Foto de perfil de Gabriel_br" />
                  <blockquote>
                    <p>"Comprei o Dragon Lore e chegou em 3 minutos. Top demais!!"</p>
                    <footer>— <cite>Gabriel_br</cite></footer>
                  </blockquote>
                </li>
                <li className="ac-testemunho-card">
                  <img src="/perfil/fALLEN.png" alt="Foto de perfil de xX_Sniper_Xx" />
                  <blockquote>
                    <p>"Site seguro, nunca tive problema. Já comprei 5 vezes."</p>
                    <footer>— <cite>xX_Sniper_Xx</cite></footer>
                  </blockquote>
                </li>
                <li className="ac-testemunho-card">
                  <img src="/perfil/donk-cs2.jpeg" alt="Foto de perfil de ProPlayer99" />
                  <blockquote>
                    <p>"Preço justo, entrega rápida. Recomendo pra todo mundo."</p>
                    <footer>— <cite>ProPlayer99</cite></footer>
                  </blockquote>
                </li>
              </ul>
            </section>
          </>
        )}

        {/* LOJA */}
        {pagina === 'loja' && (
          <section className="ac-loja" aria-labelledby="loja-titulo">
            <h1 id="loja-titulo" className="ac-page-titulo">Catálogo de Skins</h1>
            <ul className="ac-skins-grid" role="list">
              {skins.map((skin) => (
                <li key={skin.id} className="ac-skin-card">
                  <button
                    className="ac-skin-card-btn"
                    onClick={() => { setSkinSelecionada(skin); navegar('detalhe') }}
                    aria-label={`Ver detalhes de ${skin.nome} — ${skin.exterior} — ${skin.preco}`}
                  >
                    <img src={skin.img} alt={`Skin ${skin.nome}, exterior ${skin.exterior}`} className="ac-skin-img" />
                    <div className="ac-skin-info">
                      <span className="ac-skin-exterior">{skin.exterior}</span>
                      <strong className="ac-skin-nome">{skin.nome}</strong>
                      <span className="ac-skin-preco">{skin.preco}</span>
                    </div>
                  </button>
                  <button
                    className="ac-btn-comprar"
                    onClick={() => adicionarCarrinho(skin)}
                    aria-label={`Adicionar ${skin.nome} ao carrinho por ${skin.preco}`}
                  >
                    Adicionar ao carrinho
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* DETALHE */}
        {pagina === 'detalhe' && skinSelecionada && (
          <section className="ac-detalhe" aria-labelledby="detalhe-titulo">
            <nav aria-label="Navegação estrutural">
              <ol className="ac-breadcrumb">
                <li><button className="ac-link" onClick={() => navegar('loja')}>Loja</button></li>
                <li aria-current="page">{skinSelecionada.nome}</li>
              </ol>
            </nav>
            <div className="ac-detalhe-conteudo">
              <img
                src={skinSelecionada.img}
                alt={`Imagem da skin ${skinSelecionada.nome}, exterior ${skinSelecionada.exterior}`}
                className="ac-detalhe-img"
              />
              <div className="ac-detalhe-texto">
                <h1 id="detalhe-titulo">{skinSelecionada.nome}</h1>
                <p className="ac-detalhe-exterior">Exterior: <strong>{skinSelecionada.exterior}</strong></p>
                <p className="ac-detalhe-preco" aria-label={`Preço: ${skinSelecionada.preco}`}>{skinSelecionada.preco}</p>
                <p>Float: 0.0021 · StatTrak™ disponível · Estoque limitado.</p>
                <button
                  className="ac-btn-primario"
                  onClick={() => { adicionarCarrinho(skinSelecionada); navegar('checkout') }}
                >
                  Adicionar ao carrinho e comprar
                </button>
              </div>
            </div>
          </section>
        )}

        {/* CHECKOUT */}
        {pagina === 'checkout' && (
          <section className="ac-checkout" aria-labelledby="checkout-titulo">
            <h1 id="checkout-titulo" className="ac-page-titulo">Finalizar compra</h1>

            {carrinho.length === 0 && (
              <p>Seu carrinho está vazio. <button className="ac-link" onClick={() => navegar('loja')}>Ir para a loja</button></p>
            )}

            {carrinho.length > 0 && !pedidoFeito && (
              <div className="ac-checkout-layout">
                <section aria-labelledby="itens-titulo">
                  <h2 id="itens-titulo" className="ac-subtitulo">Itens no carrinho</h2>
                  <ul role="list" className="ac-checkout-itens">
                    {carrinho.map((item, i) => (
                      <li key={i} className="ac-checkout-item">
                        <img src={item.img} alt={`Skin ${item.nome}`} className="ac-checkout-item-img" />
                        <div>
                          <strong>{item.nome}</strong>
                          <p>{item.preco}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="ac-total" aria-label={`Total da compra: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(carrinho.reduce((acc, item) => acc + Number(item.preco.replace('R$ ', '').replace(/\./g, '').replace(',', '.')), 0))}`}>
                    <span>Total</span>
                    <strong>
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                        carrinho.reduce((acc, item) => acc + Number(item.preco.replace('R$ ', '').replace(/\./g, '').replace(',', '.')), 0)
                      )}
                    </strong>
                  </div>
                </section>

                <section aria-labelledby="pagamento-titulo">
                  <h2 id="pagamento-titulo" className="ac-subtitulo">Dados de pagamento</h2>
                  <form className="ac-form" onSubmit={finalizarCompra} noValidate aria-label="Formulário de pagamento">
                    {Object.keys(erros).length > 0 && (
                      <div role="alert" className="ac-erros-resumo" aria-live="assertive">
                        <strong>Corrija os erros abaixo para continuar:</strong>
                        <ul>
                          {erros.nome && <li><a href="#nome">{erros.nome}</a></li>}
                          {erros.email && <li><a href="#email">{erros.email}</a></li>}
                          {erros.cartao && <li><a href="#cartao">{erros.cartao}</a></li>}
                          {erros.validade && <li><a href="#validade">{erros.validade}</a></li>}
                          {erros.cvv && <li><a href="#cvv">{erros.cvv}</a></li>}
                        </ul>
                      </div>
                    )}
                    <div className="ac-campo">
                      <label htmlFor="nome">Nome completo <span aria-hidden="true" className="ac-obrigatorio">*</span></label>
                      <input
                        id="nome" type="text" value={nome}
                        onChange={(e) => { setNome(e.target.value); setErros((prev) => ({ ...prev, nome: undefined })) }}
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={!!erros.nome}
                        aria-describedby={erros.nome ? 'erro-nome' : undefined}
                      />
                      {erros.nome && <span id="erro-nome" className="ac-erro" role="alert">{erros.nome}</span>}
                    </div>
                    <div className="ac-campo">
                      <label htmlFor="email">E-mail <span aria-hidden="true" className="ac-obrigatorio">*</span></label>
                      <input
                        id="email" type="email" value={email}
                        onChange={(e) => { setEmail(e.target.value); setErros((prev) => ({ ...prev, email: undefined })) }}
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={!!erros.email}
                        aria-describedby={erros.email ? 'erro-email' : undefined}
                      />
                      {erros.email && <span id="erro-email" className="ac-erro" role="alert">{erros.email}</span>}
                    </div>
                    <div className="ac-campo">
                      <label htmlFor="cartao">Número do cartão <span aria-hidden="true" className="ac-obrigatorio">*</span></label>
                      <input
                        id="cartao" type="text" inputMode="numeric" value={cartao}
                        onChange={(e) => { setCartao(e.target.value); setErros((prev) => ({ ...prev, cartao: undefined })) }}
                        autoComplete="cc-number"
                        aria-required="true"
                        aria-invalid={!!erros.cartao}
                        aria-describedby={erros.cartao ? 'erro-cartao' : undefined}
                      />
                      {erros.cartao && <span id="erro-cartao" className="ac-erro" role="alert">{erros.cartao}</span>}
                    </div>
                    <div className="ac-campo-row">
                      <div className="ac-campo">
                        <label htmlFor="validade">Validade <span aria-hidden="true" className="ac-obrigatorio">*</span></label>
                        <input
                          id="validade" type="text" placeholder="MM/AA" value={validade}
                          onChange={(e) => { setValidade(e.target.value); setErros((prev) => ({ ...prev, validade: undefined })) }}
                          autoComplete="cc-exp"
                          aria-required="true"
                          aria-invalid={!!erros.validade}
                          aria-describedby={erros.validade ? 'erro-validade' : undefined}
                        />
                        {erros.validade && <span id="erro-validade" className="ac-erro" role="alert">{erros.validade}</span>}
                      </div>
                      <div className="ac-campo">
                        <label htmlFor="cvv">CVV <span aria-hidden="true" className="ac-obrigatorio">*</span></label>
                        <input
                          id="cvv" type="text" inputMode="numeric" maxLength={4} value={cvv}
                          onChange={(e) => { setCvv(e.target.value); setErros((prev) => ({ ...prev, cvv: undefined })) }}
                          autoComplete="cc-csc"
                          aria-required="true"
                          aria-invalid={!!erros.cvv}
                          aria-describedby={erros.cvv ? 'erro-cvv' : undefined}
                        />
                        {erros.cvv && <span id="erro-cvv" className="ac-erro" role="alert">{erros.cvv}</span>}
                      </div>
                    </div>
                    <div className="ac-campo">
                      <label htmlFor="trade-url">Trade URL da Steam</label>
                      <input id="trade-url" type="url" value={tradeUrl} onChange={(e) => setTradeUrl(e.target.value)} />
                    </div>
                    <p className="ac-legenda-obrigatorio"><span aria-hidden="true">*</span> Campos obrigatórios</p>
                    <button type="submit" className="ac-btn-primario">Confirmar pagamento</button>
                  </form>
                </section>
              </div>
            )}

            {pedidoFeito && (
              <div role="alert" className="ac-pedido-ok">
                <strong>Pedido realizado com sucesso!</strong>
                <p>Verifique sua Steam em instantes.</p>
              </div>
            )}
          </section>
        )}

        {/* SOBRE */}
        {pagina === 'sobre' && (
          <section className="ac-sobre" aria-labelledby="sobre-titulo">
            <h1 id="sobre-titulo" className="ac-page-titulo">Sobre a CS2 SkinStore</h1>
            <p>Somos o maior marketplace de skins do Brasil. Desde 2018 já realizamos mais de 500 mil transações.</p>
            <p>Nossa plataforma utiliza tecnologia de ponta para garantir segurança e velocidade nas trocas.</p>
            <p>Contato: <a href="mailto:contato@cs2skinstore.com.br">contato@cs2skinstore.com.br</a></p>
            <ul className="ac-stats" role="list" aria-label="Estatísticas">
              <li className="ac-stat-card"><strong className="ac-stat-num">500k+</strong><span>Transações</span></li>
              <li className="ac-stat-card"><strong className="ac-stat-num">98%</strong><span>Satisfação</span></li>
              <li className="ac-stat-card"><strong className="ac-stat-num">5 min</strong><span>Entrega média</span></li>
            </ul>
          </section>
        )}

      </main>

      {/* FOOTER */}
      <footer className="ac-footer">
        <div className="ac-footer-col">
          <strong className="ac-footer-logo">CS2 SKINSTORE</strong>
          <small>© 2024 todos os direitos reservados</small>
        </div>
        <nav aria-label="Links do rodapé">
          <h3 className="ac-footer-titulo-col">Links</h3>
          <ul role="list">
            <li><button className="ac-footer-link" onClick={() => navegar('home')}>Home</button></li>
            <li><button className="ac-footer-link" onClick={() => navegar('loja')}>Loja</button></li>
            <li><button className="ac-footer-link" onClick={() => navegar('sobre')}>Sobre</button></li>
          </ul>
        </nav>
        <div className="ac-footer-col">
          <h3 className="ac-footer-titulo-col">Redes Sociais</h3>
          <ul role="list">
            <li><a className="ac-footer-link" href="#" aria-label="Twitter do CS2 SkinStore">Twitter</a></li>
            <li><a className="ac-footer-link" href="#" aria-label="Discord do CS2 SkinStore">Discord</a></li>
            <li><a className="ac-footer-link" href="#" aria-label="Instagram do CS2 SkinStore">Instagram</a></li>
          </ul>
        </div>
        <div className="ac-footer-col ac-footer-col-logo">
          <img src="/logo/senac-logo.png" alt="Senac" className="ac-footer-senac-logo" />
        </div>
      </footer>
    </div>
  )
}
