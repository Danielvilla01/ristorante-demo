import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, CalendarDays, Camera, ChevronDown, Clock3, MapPin, Menu as MenuIcon, Phone, X } from 'lucide-react';
import heroImage from './assets/IMG_1601.JPG';
import './styles.css';

const menuItems = {
  Antipasti: [
    ['Ostrica, mela verde e finocchio', '16'],
    ['Polpo arrosto, patata affumicata', '18'],
    ['Pane croccante, stracciatella e acciughe', '14'],
  ],
  Primi: [
    ['Trofie mantecate, vongole e limone', '22'],
    ['Spaghettone, pomodoro arrosto e basilico', '16'],
    ['Raviolo di ricotta, gambero rosso e lime', '20'],
  ],
  Secondi: [
    ['Pescato del giorno, verdure di stagione', '28'],
    ['Ombrina alla brace, salsa al prezzemolo', '26'],
    ['Melanzana arrosto, mandorla e cappero', '19'],
  ],
  Dessert: [
    ['Canestrello ligure, miele e limone', '10'],
    ['Millefoglie di ricotta e agrumi', '9'],
    ['Cioccolato fondente, sale e olio nuovo', '10'],
  ],
  Cocktails: [
    ['Basilico Spritz, basilico e prosecco', '12'],
    ['Mediterranean Tonic, gin e rosmarino', '13'],
    ['Ginger Sea, vodka, zenzero e lime', '12'],
  ],
};

const gallery = [
  { src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85', alt: 'Costa mediterranea e terrazza sul mare', className: 'gallery-tall' },
  { src: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85', alt: 'Piatto mediterraneo con basilico', className: 'gallery-wide' },
  { src: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=900&q=85', alt: 'Basilico fresco e ingredienti liguri', className: '' },
  { src: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85', alt: 'Olio extravergine di oliva', className: '' },
  { src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=85', alt: 'Piatto di pesce mediterraneo', className: '' },
];

function App() {
  const [activeCategory, setActiveCategory] = useState('Antipasti');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingState, setBookingState] = useState('idle');

  const handleBooking = (event) => {
    event.preventDefault();
    setBookingState('success');
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMobile}>
          <span className="brand-mark">CB</span>
          <span>Chiosco<br /><em>Belvedere</em></span>
        </a>
        <nav className={mobileOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navigazione principale">
          <a href="#storia" onClick={closeMobile}>La nostra storia</a>
          <a href="#menu" onClick={closeMobile}>Il menu</a>
          <a href="#galleria" onClick={closeMobile}>Galleria</a>
          <a href="#contatti" onClick={closeMobile}>Contatti</a>
          <a className="nav-book" href="#prenota" onClick={closeMobile}>Prenota un tavolo <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}>
          {mobileOpen ? <X size={23} /> : <MenuIcon size={23} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy reveal">
            <p className="eyebrow">Cucina mediterranea · Albenga, Liguria</p>
            <h1>Chiosco<br /><i>Belvedere.</i></h1>
            <p className="hero-lead">Il gusto di stare bene.</p>
            <p className="hero-text">Una tavola affacciata sul mare, con vista sull'Isola Gallinara, dove la cucina ligure incontra il Mediterraneo.</p>
              <p className="hero-text">Nel cuore del Parco Vacanze Riviera, sul mare di Albenga.<br />Una cucina mediterranea da vivere con la Gallinara all’orizzonte.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#menu">Scopri il menu <ArrowDown size={16} /></a>
              <a className="text-link" href="#storia">Conosciamoci <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="hero-visual reveal-delay">
            <div className="hero-image-wrap">
              <img src={heroImage} alt="Vista sulla costa ligure e sul Mediterraneo" />
            </div>
            <div className="sun-stamp"><span>Vista su</span><strong>Gallinara</strong><span>Albenga</span></div>
          </div>
          <div className="hero-scroll"><span>Scorri per entrare</span><ArrowDown size={15} /></div>
        </section>

        <section className="marquee" aria-label="Specialità della casa">
          <div>Basilico fresco <span>✦</span> Pesto genovese <span>✦</span> Olio ligure <span>✦</span> Vista su Isola Gallinara <span>✦</span> Basilico fresco <span>✦</span></div>
        </section>

        <section className="story section-pad" id="storia">
          <div className="section-label"><span>01</span><span>Chi siamo</span></div>
          <div className="story-grid">
            <div className="story-heading"><p className="eyebrow">La nostra filosofia</p><h2>Qui il mare<br />entra <i>in tavola.</i></h2></div>
            <div className="story-body"><p>Una cucina semplice, mediterranea e legata al territorio. Scegliamo ingredienti di qualità e li trasformiamo in piatti che raccontano la Liguria, tra mare, basilico, pesto e olio extravergine. Il modo migliore per gustarli? Davanti al mare, con Isola Gallinara all'orizzonte.</p><a className="text-link" href="#contatti">Conosci il Belvedere <ArrowUpRight size={15} /></a></div>
          </div>
          <div className="story-stats"><div><strong>Mare</strong><span>cucina mediterranea</span></div><div><strong>Pesto</strong><span>profumo di Liguria</span></div><div><strong>Olio</strong><span>extravergine italiano</span></div></div>
        </section>

          <section className="partner-section section-pad">
            <div className="section-label"><span>02</span><span>Il luogo</span></div>
            <div className="partner-grid">
              <div><p className="eyebrow">Parco Vacanze Riviera</p><h2>Una vacanza,<br /><i>un tavolo,</i><br />il mare.</h2></div>
              <div className="partner-body"><p>Il Chiosco Belvedere fa parte del Parco Vacanze Riviera, direttamente sul mare di Albenga. Un luogo dove vacanza, mare e cucina si incontrano, con l’Isola Gallinara all’orizzonte.</p><a className="text-link" href="https://parcovacanzeriviera.it/" target="_blank" rel="noreferrer">Scopri il Parco Vacanze Riviera <ArrowUpRight size={15} /></a></div>
            </div>
          </section>

        <section className="menu-section section-pad" id="menu">
            <div className="section-label light-label"><span>03</span><span>La carta</span></div>
          <div className="menu-intro"><p className="eyebrow">Quello che amiamo cucinare</p><h2>Il menu segue<br /><i>la stagione.</i></h2><p>Una cucina sincera, fatta di ingredienti scelti e piatti che cambiano con il ritmo del mare.</p></div>
          <div className="menu-tabs" role="tablist" aria-label="Categorie menu">
            {Object.keys(menuItems).map((category) => <button className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)} role="tab" aria-selected={activeCategory === category} key={category}>{category}</button>)}
          </div>
          <div className="menu-list">{menuItems[activeCategory].map(([name, price], index) => <div className="menu-item" key={name}><span className="dish-number">0{index + 1}</span><span className="dish-name">{name}</span><span className="dish-dots" /><span className="dish-price">€ {price}</span></div>)}</div>
          <a className="button button-light menu-download" href="#prenota">Prenota per assaggiare <ArrowUpRight size={16} /></a>
        </section>

        <section className="featured section-pad">
          <div className="section-label"><span>03</span><span>Dalla cucina</span></div>
          <div className="featured-heading"><h2>Il nostro<br /><i>preferito.</i></h2><p>Tre piatti, tre modi di raccontare la costa ligure. Quelli da cui iniziare, sempre.</p></div>
          <div className="dish-cards">
            <article className="dish-card"><div className="dish-card-image"><img src="https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=900&q=85" alt="Trofie di mare con vongole" /><span>01</span></div><div className="dish-card-info"><div><h3>Trofie di mare</h3><p>Vongole, limone, basilico</p></div><strong>€ 22</strong></div></article>
            <article className="dish-card offset-card"><div className="dish-card-image"><img src="https://images.unsplash.com/photo-1539136788836-5699e78bfc75?auto=format&fit=crop&w=900&q=85" alt="Pescato del giorno con verdure" /><span>02</span></div><div className="dish-card-info"><div><h3>Pescato del giorno</h3><p>Verdure, erbe selvatiche</p></div><strong>€ 28</strong></div></article>
            <article className="dish-card"><div className="dish-card-image"><img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85" alt="Dessert ligure" /><span>03</span></div><div className="dish-card-info"><div><h3>Canestrello ligure</h3><p>Miele, limone</p></div><strong>€ 10</strong></div></article>
          </div>
        </section>

        <section className="gallery-section section-pad" id="galleria">
          <div className="section-label"><span>04</span><span>Galleria</span></div>
          <div className="gallery-heading"><h2>Una tavola<br /><i>con vista.</i></h2><p>Il posto giusto per i pranzi lunghi, i tramonti lenti e le cose belle senza fretta.</p></div>
          <div className="gallery-grid">{gallery.map((item) => <div className={`gallery-image ${item.className}`} key={item.src}><img src={item.src} alt={item.alt} /></div>)}</div>
        </section>

        <section className="booking section-pad" id="prenota">
          <div className="booking-content"><div className="section-label light-label"><span>05</span><span>Il tuo tavolo</span></div><p className="eyebrow">Ci vediamo presto</p><h2>Facciamo<br /><i>spazio.</i></h2><p>Compila la richiesta e ti ricontatteremo per confermare il tuo tavolo.</p></div>
          <form className="booking-form" onSubmit={handleBooking}>
            <label>Nome e cognome<input required type="text" placeholder="Come ti chiami?" /></label>
            <div className="form-row"><label>Data<div className="input-icon"><input required type="date" /><CalendarDays size={17} /></div></label><label>Orario<div className="input-icon"><select defaultValue="20:30"><option>19:30</option><option>20:30</option><option>21:30</option></select><ChevronDown size={17} /></div></label></div>
            <label>Numero di ospiti<div className="input-icon"><select defaultValue="2 persone"><option>2 persone</option><option>3 persone</option><option>4 persone</option><option>5+ persone</option></select><ChevronDown size={17} /></div></label>
            <button className="button button-orange" type="submit">{bookingState === 'success' ? 'Richiesta inviata ✓' : 'Richiedi un tavolo'} <ArrowUpRight size={16} /></button>
            {bookingState === 'success' && <p className="booking-success" role="status">Grazie, ti ricontatteremo presto per confermare.</p>}
          </form>
        </section>

        <section className="contact section-pad" id="contatti"><div className="section-label"><span>06</span><span>Dove trovarci</span></div><div className="contact-grid"><div><p className="eyebrow">Vieni a trovarci</p><h2>Ci trovi<br /><i>qui.</i></h2></div><div className="contact-details"><div><MapPin size={18} /><p><strong>Chiosco Belvedere</strong><br />Via del Faro, 12<br />17031 Albenga, Liguria</p></div><div><Clock3 size={18} /><p><strong>Orari</strong><br />Mar — Dom · 12:30 — 00:00<br /><span>Lunedì chiuso</span></p></div><div><Phone size={18} /><p><strong>Parliamone</strong><br /><a href="tel:+390701234567">+39 070 123 4567</a><br /><a href="mailto:ciao@chioscobelvedere.it">ciao@chioscobelvedere.it</a></p></div></div></div></section>
      </main>

      <footer className="footer section-pad"><a className="brand footer-brand" href="#top"><span className="brand-mark">CB</span><span>Chiosco<br /><em>Belvedere</em></span></a><p>Una finestra sul Mediterraneo.</p><div className="footer-right"><div className="socials"><a href="https://instagram.com" aria-label="Instagram"><Camera size={18} /></a><a href="https://facebook.com" aria-label="Facebook">f</a><a href="mailto:ciao@chioscobelvedere.it" aria-label="Email">@</a></div><small>© 2025 Chiosco Belvedere</small></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);