import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, CalendarDays, Camera, ChevronDown, Clock3, MapPin, Menu as MenuIcon, X } from 'lucide-react';
import heroImage from './assets/IMG_1601.JPG';
import barSpiaggiaImage from './assets/bar-spiaggia.png';
import colazioneBarImage from './assets/colazione-bar.png';
import frittoGallinaraImage from './assets/fritto-gallinara.png';
import frittoSpiaggiaImage from './assets/fritto-spiaggia.png';
import piattiRistoranteImage from './assets/piatti-ristorante.png';
import './styles.css';

const menuItems = {
  Antipasti: [
    { name: 'CAPRESE', price: '8', description: 'Pomodoro "cuore di bue", mozzarella fiordilatte e basilico fresco.' },
    { name: 'BRESAOLA, RUCOLA E GRANA', price: '12', description: 'Bresaola, rucola e Grana a scaglie, con olio e limone.' },
    { name: 'PROSCIUTTO E MELONE', price: '12', description: 'Prosciutto crudo, melone di stagione e basilico fresco.' },
    { name: 'BRANDACUJUN', price: '14', description: 'Merluzzo, patate, aglio, prezzemolo e olio EVO.' },
    { name: 'CARPACCIO DI MARE', price: '18', description: 'Tonno, salmone, pesce spada, polpo, alici marinate, marlin e pomodorino ciliegino, con olio e limone.' },
    { name: 'ACCIUGHE RIPIENE FRITTE', price: '15' },
    { name: 'INSALATINA DI POLPO', price: '18', description: 'Polpo e patate con sedano, olive taggiasche, limone e prezzemolo.' },
  ],
  'Primi piatti': [
    { name: 'PENNE AL POMODORO', price: '10', description: 'Penne al pomodoro con aglio, olio EVO e basilico fresco.' },
    { name: 'TROFIE AL PESTO', price: '12', description: 'Trofie fresche al pesto alla genovese.' },
    { name: 'PANSOTTI IN SALSA DI NOCI', price: '12', description: 'Pansotti ripieni di erbette e ricotta, con salsa di noci.' },
    { name: 'SCIALATIELLI AL RAGÙ DI MARE', price: '16', description: 'Scialatielli freschi con cozze, vongole, calamari, totani e gamberi, con prezzemolo, aglio, olio EVO e vino bianco.' },
    { name: 'TONNARELLO ALLE VONGOLE', price: '19', description: 'Tonnarello fresco con vongole, aglio, olio EVO, prezzemolo e vino.' },
  ],
  'Secondi piatti': [
    { name: 'COTOLETTA E PATATINE', price: '12', description: 'Filettino di pollo con patatine fritte.' },
    { name: 'POLPO CON PURÈ', price: '18', description: 'Polpo e purè di patate con olio al basilico.' },
    { name: 'SPADELLATA DI TONNO', price: '18', description: 'Filetto di tonno con trombette, pomodorini e olive taggiasche, con olio EVO.' },
    { name: 'FRITTO DI CALAMARI E GAMBERI', price: '20', description: 'Anelli e ciuffi di calamaro, con code di gambero.' },
    { name: 'TAGLIATA, RUCOLA E GRANA', price: '20', description: '250gr di picanha con rucola, Grana a scaglie, olio EVO e fiocchi di sale.' },
  ],
  Contorni: [
    { name: 'PATATINE FRITTE', price: '6' },
    { name: 'INSALATA MISTA', price: '7' },
    { name: 'VERDURE GRIGLIATE', price: '8' },
  ],
};

const gallery = [
  { src: piattiRistoranteImage, alt: 'Piatti del ristorante', className: 'gallery-tall' },
  { src: frittoSpiaggiaImage, alt: 'Cucina e spiaggia', className: '' },
  { src: frittoGallinaraImage, alt: 'Cucina con vista sulla Gallinara', className: '' },
  { src: colazioneBarImage, alt: 'Colazione al bar', className: '' },
  { src: barSpiaggiaImage, alt: 'Bar sulla spiaggia', className: '' },
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
            <p className="eyebrow">Bar · ristorante · spiaggia · Albenga</p>
            <h1>Chiosco<br /><i>Belvedere.</i></h1>
            <p className="hero-lead">Il gusto di stare bene.</p>
            <p className="hero-text">Un luogo sul mare di Albenga per vivere il bar, il ristorante e la spiaggia con vista sull'Isola Gallinara.</p>
              <p className="hero-text">Dal mattino alla sera, il Chiosco Belvedere accompagna colazione, pausa al mare, aperitivo, pranzo e cena.</p>
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

        <section className="marquee" aria-label="Esperienza Chiosco Belvedere">
          <div>A TAVOLA CON IL MARE DAVANTI <span>✦</span> UNA PAUSA DA VIVERE <span>✦</span> LA GALLINARA ALL'ORIZZONTE <span>✦</span> IL PIACERE DI STARE BENE <span>✦</span> MARE • RELAX • BUONA CUCINA <span>✦</span></div>
        </section>

        <section className="story section-pad" id="storia">
          <div className="section-label"><span>01</span><span>Chi siamo</span></div>
          <div className="story-grid">
            <div className="story-heading"><p className="eyebrow">La nostra filosofia</p><h2>Qui il mare<br />entra <i>in tavola.</i></h2></div>
            <div className="story-body"><p>Bar, ristorante e spiaggia: il Chiosco Belvedere è un posto da vivere con il mare davanti e l'Isola Gallinara all'orizzonte.</p><a className="text-link" href="#contatti">Conosci il Belvedere <ArrowUpRight size={15} /></a></div>
          </div>
          <div className="story-stats"><div><strong>Bar</strong><span>colazione e pausa</span></div><div><strong>Ristorante</strong><span>pranzo e cena</span></div><div><strong>Spiaggia</strong><span>mare e relax</span></div></div>
        </section>

          <section className="partner-section section-pad">
            <div className="section-label"><span>02</span><span>Il luogo</span></div>
            <div className="partner-grid">
              <div><p className="eyebrow">Parco Vacanze Riviera</p><h2>Una vacanza,<br /><i>un tavolo,</i><br />il mare.</h2></div>
              <div className="partner-body"><p>Il Chiosco Belvedere fa parte del Parco Vacanze Riviera, sul mare di Albenga, con l’Isola Gallinara all’orizzonte.</p><a className="text-link" href="https://parcovacanzeriviera.it/" target="_blank" rel="noreferrer">Scopri il Parco Vacanze Riviera <ArrowUpRight size={15} /></a></div>
            </div>
          </section>

        <section className="menu-section section-pad" id="menu">
            <div className="section-label light-label"><span>03</span><span>La carta</span></div>
          <div className="menu-intro"><p className="eyebrow">La carta del ristorante</p><h2>Piatti pensati<br /><i>per essere gustati senza fretta, con il mare davanti.</i></h2><p>La carta del Chiosco Belvedere, da vivere a tavola con il mare davanti.</p></div>
          <div className="menu-tabs" role="tablist" aria-label="Categorie menu">
            {Object.keys(menuItems).map((category) => <button className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)} role="tab" aria-selected={activeCategory === category} key={category}>{category}</button>)}
          </div>
          <div className="menu-list">{menuItems[activeCategory].map(({ name, price, description }, index) => <div className="menu-item" key={name}><span className="dish-number">{String(index + 1).padStart(2, '0')}</span><div className="dish-details"><span className="dish-name">{name}</span>{description && <span className="dish-description">{description}</span>}</div><span className="dish-dots" /><span className="dish-price">€ {price}</span></div>)}</div>
          <a className="button button-light menu-download" href="#prenota">Prenota per assaggiare <ArrowUpRight size={16} /></a>
        </section>

        <section className="featured section-pad">
          <div className="section-label"><span>03</span><span>Bar e ristorante</span></div>
          <div className="featured-heading"><h2>Una giornata<br /><i>al Belvedere.</i></h2><p>Colazione, pausa al mare, aperitivo, pranzo e cena: bar, ristorante e spiaggia con vista sulla Gallinara.</p></div>
          <div className="dish-cards">
            <article className="dish-card"><div className="dish-card-image"><img src={piattiRistoranteImage} alt="Piatti del ristorante" /><span>01</span></div><div className="dish-card-info"><div><h3>Ristorante</h3><p>Buona cucina al mare</p></div></div></article>
            <article className="dish-card offset-card"><div className="dish-card-image"><img src={frittoGallinaraImage} alt="Cucina con vista sulla Gallinara" /><span>02</span></div><div className="dish-card-info"><div><h3>Mare e cucina</h3><p>Con vista sulla Gallinara</p></div></div></article>
            <article className="dish-card"><div className="dish-card-image"><img src={barSpiaggiaImage} alt="Bar e spiaggia" /><span>03</span></div><div className="dish-card-info"><div><h3>Bar e spiaggia</h3><p>Una pausa da vivere</p></div></div></article>
          </div>
        </section>

        <section className="gallery-section section-pad" id="galleria">
          <div className="section-label"><span>04</span><span>Galleria</span></div>
          <div className="gallery-heading"><h2>Bar, ristorante<br /><i>e spiaggia.</i></h2><p>Immagini del Chiosco Belvedere, tra tavola, bar, mare e vista sulla Gallinara.</p></div>
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

        <section className="contact section-pad" id="contatti"><div className="section-label"><span>06</span><span>Dove trovarci</span></div><div className="contact-grid"><div><p className="eyebrow">Vieni a trovarci</p><h2>Ci trovi<br /><i>qui.</i></h2></div><div className="contact-details"><div><MapPin size={18} /><p><strong>Chiosco Belvedere</strong><br />Via Luigi Einaudi 100<br />17031 Albenga (SV)</p></div><div><Clock3 size={18} /><p><strong>Orari</strong><br />Aperto tutti i giorni<br />08:00 — 23:00</p></div></div></div></section>
      </main>

      <footer className="footer section-pad"><a className="brand footer-brand" href="#top"><span className="brand-mark">CB</span><span>Chiosco<br /><em>Belvedere</em></span></a><p>Una finestra sul Mediterraneo.</p><div className="footer-right"><div className="socials"><a href="https://instagram.com" aria-label="Instagram"><Camera size={18} /></a><a href="https://facebook.com" aria-label="Facebook">f</a></div><small>Chiosco Belvedere</small></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);