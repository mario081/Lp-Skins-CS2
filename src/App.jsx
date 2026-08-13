import { useState } from 'react'
import './App.css'

const skins = [
  {
    id: 1,
    nome: 'Karambit | Fade',
    preco: 'R$ 4.200,00',
    img: '/skins/Karambit-Fade.png',
    exterior: 'Factory New',
  },
  {
    id: 2,
    nome: 'AWP | Dragon Lore',
    preco: 'R$ 18.500,00',
    img: '/skins/AWP-Dragon Lore.png',
    exterior: 'Field-Tested',
  },
  {
    id: 3,
    nome: 'M4A4 | Howl',
    preco: 'R$ 9.800,00',
    img: '/skins/M4A4-How.png',
    exterior: 'Minimal Wear',
  },
  {
    id: 4,
    nome: 'AK-47 | Fire Serpent',
    preco: 'R$ 6.300,00',
    img: '/skins/AK-47-Fire Serpent.png',
    exterior: 'Well-Worn',
  },
  {
    id: 5,
    nome: 'Bayonet | Doppler',
    preco: 'R$ 3.100,00',
    img: '/skins/bayonet.png',
    exterior: 'Factory New',
  },
  {
    id: 6,
    nome: 'Glock-18 | Fade',
    preco: 'R$ 1.450,00',
    img: '/skins/Glock-18-Fade.png',
    exterior: 'Factory New',
  },
]

export default function App() {
  const [pagina, setPagina] = useState('home')
  const [carrinho, setCarrinho] = useState([])
  const [skinSelecionada, setSkinSelecionada] = useState(null)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cartao, setCartao] = useState('')
  const [cvv, setCvv] = useState('')
  const [pedidoFeito, setPedidoFeito] = useState(false)

  const adicionarCarrinho = (skin) => {
    setCarrinho([...carrinho, skin])
  }

  const finalizarCompra = () => {
    setPedidoFeito(true)
  }

  return (
    <div className="app-wrapper">

      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo-area">
          <span className="logo-text">CS2</span>
          <span className="logo-sub">SKINSTORE</span>
        </div>
        <div className="nav-links">
          <div className="nav-item" onClick={() => setPagina('home')}>Home</div>
          <div className="nav-item" onClick={() => setPagina('loja')}>Loja</div>
          <div className="nav-item" onClick={() => setPagina('checkout')}>
            Carrinho {carrinho.length > 0 && <span className="badge">{carrinho.length}</span>}
          </div>
          <div className="nav-item" onClick={() => setPagina('sobre')}>Sobre</div>
        </div>
      </div>

      {/* HERO */}
      {pagina === 'home' && (
        <div className="hero">
          <div className="hero-overlay">
            <div className="hero-content">
              <span className="hero-titulo">AS MELHORES SKINS</span>
              <span className="hero-sub">Preços imbatíveis. Entrega imediata na sua conta Steam.</span>
              <div className="hero-btn" onClick={() => setPagina('loja')}>VER CATÁLOGO</div>
            </div>
          </div>

          <div className="destaques-bar">
            <span className="destaque-item">🔥 PROMOÇÃO: AWP Dragon Lore com 10% OFF</span>
            <span className="destaque-item">⚡ Entrega em até 5 minutos</span>
            <span className="destaque-item">🛡 100% Seguro</span>
            <span className="destaque-item">🔥 PROMOÇÃO: AWP Dragon Lore com 10% OFF</span>
            <span className="destaque-item">⚡ Entrega em até 5 minutos</span>
          </div>

          <div className="categorias">
            <div className="categoria-card" onClick={() => setPagina('loja')}>
              <img src="https://placehold.co/120x80/111/444?text=Facas" />
              <span>Facas</span>
            </div>
            <div className="categoria-card" onClick={() => setPagina('loja')}>
              <img src="https://placehold.co/120x80/111/444?text=Rifles" />
              <span>Rifles</span>
            </div>
            <div className="categoria-card" onClick={() => setPagina('loja')}>
              <img src="https://placehold.co/120x80/111/444?text=Pistolas" />
              <span>Pistolas</span>
            </div>
            <div className="categoria-card" onClick={() => setPagina('loja')}>
              <img src="https://placehold.co/120x80/111/444?text=Luvas" />
              <span>Luvas</span>
            </div>
          </div>

          <div className="testemunhos">
            <div className="testemunho-titulo">O QUE NOSSOS CLIENTES DIZEM</div>
            <div className="testemunhos-grid">
              <div className="testemunho-card">
                <img src="/perfil/Molodoy.jpg" />
                <div>
                  <span className="testemunho-nome">Gabriel_br</span>
                  <span className="testemunho-texto">Comprei o Dragon Lore e chegou em 3 minutos. Top demais!!</span>
                </div>
              </div>
              <div className="testemunho-card">
                <img src="/perfil/fALLEN.png" />
                <div>
                  <span className="testemunho-nome">xX_Sniper_Xx</span>
                  <span className="testemunho-texto">Site seguro, nunca tive problema. Já comprei 5 vezes.</span>
                </div>
              </div>
              <div className="testemunho-card">
                <img src="/perfil/donk-cs2.jpeg" />
                <div>
                  <span className="testemunho-nome">ProPlayer99</span>
                  <span className="testemunho-texto">Preço justo, entrega rápida. Recomendo pra todo mundo.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LOJA */}
      {pagina === 'loja' && (
        <div className="loja">
          <div className="loja-header">
            <span className="loja-titulo">CATÁLOGO DE SKINS</span>
            <div className="filtros">
              <span className="filtro-ativo">Todos</span>
              <span className="filtro">Facas</span>
              <span className="filtro">Rifles</span>
              <span className="filtro">Pistolas</span>
            </div>
          </div>

          <div className="skins-grid">
            {skins.map((skin) => (
              <div
                key={skin.id}
                className="skin-card"
                onClick={() => { setSkinSelecionada(skin); setPagina('detalhe') }}
              >
                <div className="skin-img-wrapper">
                  <img src={skin.img} className="skin-img" />
                  <div className="skin-exterior-badge">{skin.exterior}</div>
                </div>
                <div className="skin-info">
                  <span className="skin-nome">{skin.nome}</span>
                  <span className="skin-preco">{skin.preco}</span>
                  <div
                    className="skin-btn-comprar"
                    onClick={(e) => { e.stopPropagation(); adicionarCarrinho(skin) }}
                  >
                    COMPRAR
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DETALHE */}
      {pagina === 'detalhe' && skinSelecionada && (
        <div className="detalhe">
          <div className="detalhe-voltar" onClick={() => setPagina('loja')}>← Voltar para loja</div>
          <div className="detalhe-conteudo">
            <div className="detalhe-img-area">
              <img src={skinSelecionada.img} className="detalhe-img" />
              <div className="detalhe-selos">
                <img src="https://placehold.co/60x60/0a0a0a/444?text=FN" />
                <img src="https://placehold.co/60x60/0a0a0a/444?text=★" />
                <img src="https://placehold.co/60x60/0a0a0a/444?text=ST" />
              </div>
            </div>
            <div className="detalhe-texto">
              <span className="detalhe-nome">{skinSelecionada.nome}</span>
              <span className="detalhe-exterior">Exterior: {skinSelecionada.exterior}</span>
              <span className="detalhe-preco">{skinSelecionada.preco}</span>
              <div className="detalhe-desc">
                Lorem ipsum skin rara drop operation antiga. Float: 0.0021. StatTrak™ disponível.
                Somente 3 unidades em estoque. Preço pode variar sem aviso.
              </div>
              <div
                className="skin-btn-comprar detalhe-btn"
                onClick={() => { adicionarCarrinho(skinSelecionada); setPagina('checkout') }}
              >
                ADICIONAR AO CARRINHO E COMPRAR
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CHECKOUT */}
      {pagina === 'checkout' && (
        <div className="checkout">
          <span className="checkout-titulo">FINALIZAR COMPRA</span>

          {carrinho.length === 0 && (
            <div className="carrinho-vazio">
              <span>Seu carrinho está vazio.</span>
              <div className="nav-item" onClick={() => setPagina('loja')}>Ir para a loja</div>
            </div>
          )}

          {carrinho.length > 0 && !pedidoFeito && (
            <div className="checkout-layout">
              <div className="checkout-itens">
                <span className="checkout-subtitulo">Itens no carrinho</span>
                {carrinho.map((item, i) => (
                  <div key={i} className="checkout-item">
                    <img src={item.img} className="checkout-item-img" />
                    <div className="checkout-item-info">
                      <span className="checkout-item-nome">{item.nome}</span>
                      <span className="checkout-item-preco">{item.preco}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="checkout-form-area">
                <span className="checkout-subtitulo">Dados de pagamento</span>
                <div className="form-grupo">
                  <input
                    className="form-input"
                    placeholder="Nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="form-grupo">
                  <input
                    className="form-input"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-grupo">
                  <input
                    className="form-input"
                    placeholder="Número do cartão"
                    value={cartao}
                    onChange={(e) => setCartao(e.target.value)}
                  />
                </div>
                <div className="form-grupo form-grupo-row">
                  <input
                    className="form-input form-input-small"
                    placeholder="Validade (MM/AA)"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                  <input
                    className="form-input form-input-small"
                    placeholder="CVV"
                  />
                </div>
                <div className="form-grupo">
                  <input
                    className="form-input"
                    placeholder="Trade URL da Steam"
                  />
                </div>
                <div className="checkout-btn" onClick={finalizarCompra}>CONFIRMAR PAGAMENTO</div>
              </div>
            </div>
          )}

          {pedidoFeito && (
            <div className="pedido-ok">
              <span>✅ Pedido realizado! Verifique sua Steam em instantes.</span>
            </div>
          )}
        </div>
      )}

      {/* SOBRE */}
      {pagina === 'sobre' && (
        <div className="sobre">
          <span className="sobre-titulo">SOBRE A CS2 SKINSTORE</span>
          <div className="sobre-texto">
            <span>Somos o maior marketplace de skins do Brasil. Desde 2018 já realizamos mais de 500 mil transações.</span>
            <span>Nossa plataforma utiliza tecnologia de ponta para garantir segurança e velocidade nas trocas.</span>
            <span>Contato: contato@cs2skinstore.com.br</span>
          </div>
          <div className="sobre-stats">
            <div className="stat-card">
              <span className="stat-num">500k+</span>
              <span className="stat-label">Transações</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">98%</span>
              <span className="stat-label">Satisfação</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">5min</span>
              <span className="stat-label">Entrega média</span>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div className="footer">
        <div className="footer-col">
          <span className="footer-logo">CS2 SKINSTORE</span>
          <span>© 2024 todos os direitos reservados</span>
        </div>
        <div className="footer-col">
          <span className="footer-titulo-col">Links</span>
          <div className="footer-link" onClick={() => setPagina('home')}>Home</div>
          <div className="footer-link" onClick={() => setPagina('loja')}>Loja</div>
          <div className="footer-link" onClick={() => setPagina('sobre')}>Sobre</div>
        </div>
        <div className="footer-col">
          <span className="footer-titulo-col">Redes Sociais</span>
          <div className="footer-link">Twitter</div>
          <div className="footer-link">Discord</div>
          <div className="footer-link">Instagram</div>
        </div>
        <div className="footer-col">
          <span className="footer-titulo-col">Pagamentos</span>
          <img src="https://placehold.co/60x30/111/555?text=VISA" />
          <img src="https://placehold.co/60x30/111/555?text=MC" />
          <img src="https://placehold.co/60x30/111/555?text=PIX" />
        </div>
        <div className="footer-col footer-col-logo">
          <img
            src="/logo/senac-logo.png"
            className="footer-senac-logo"
            onClick={() => window.location.href = '?acessivel=1'}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

    </div>
  )
}
