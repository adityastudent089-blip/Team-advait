import { useMemo, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, CalendarDays, MapPin, Search, Menu, X,
  Music2, Mic2, Trophy, Palette, HeartHandshake, GraduationCap, Utensils,
  Plus, Clock3, Users, Bookmark, Check, ChevronDown, Sparkles, Ticket,
} from 'lucide-react'

const categories = [
  { name: 'All events', icon: Sparkles },
  { name: 'College fests', icon: GraduationCap },
  { name: 'Music', icon: Music2 },
  { name: 'Conferences', icon: Mic2 },
  { name: 'Sports', icon: Trophy },
  { name: 'Arts & culture', icon: Palette },
  { name: 'Community', icon: HeartHandshake },
]

const events = [
  { id: 1, title: 'MADHURAM — The Campus Fest', type: 'College fests', date: 'OCT 24–26', day: '24', month: 'OCT', time: '10:00 AM onwards', place: 'Main campus · Open grounds', host: 'Student Council', price: 'Free entry', image: '/image/anuj.jpg', tone: 'coral', tag: 'Featured', description: 'Three days of live performances, student showcases, food stalls and the kind of memories that last beyond graduation.' },
  { id: 2, title: 'Indian Army Parade', type: 'Independence Day', date: '26 JAN', day: '28', month: 'JAN', time: '6:30 AM – 9:30 AM', place: 'Main auditorium', host: 'NCC Society', price: 'Free entry', image: '/image/ncc.jpg', tone: 'lilac', description: 'A laid-back evening of independent artists, acoustic sets and good company under the open sky.' },
  { id: 3, title: 'Marathon', type: 'Healthcare', date: 'NOV 02', day: '02', month: 'NOV', time: '9:30 AM – 4:00 PM', place: ' Academic Block', host: 'NCC club', price: 'Register free', image: '/image/mara.jpg', tone: 'blue', description: 'Student founders, researchers and makers come together to share ideas, lessons and practical ways to build.' },
  { id: 4, title: 'Open Mic', type: 'Music', date: 'NOV 05', day: '05', month: 'NOV', time: '8:00 AM – 5:00 PM', place: ' sports ground', host: 'Happy club', price: 'Free for students', image: '/image/dheeresh.jpg', tone: 'green', description: 'Bring your house colours and cheer on campus teams through a full day of knockout matches.' },
  { id: 5, title: 'Flashmob', type: 'Arts & culture', date: 'NOV 09', day: '09', month: 'NOV', time: '11:00 AM – 6:00 PM', place: 'Green court', host: 'Dance Club', price: 'Free entry', image: '/image/flash.jpg', tone: 'yellow', description: 'Browse student-made prints, ceramics, zines and handmade pieces. Meet the artists behind the work.' },
  { id: 6, title: 'Laser Show', type: 'Music', date: 'NOV 12', day: '12', month: 'NOV', time: '9:00 AM – 1:00 PM', place: 'Cricket ground', host: 'sevisa', price: 'Volunteer sign-up', image: '/image/lazer.jpg', tone: 'pink', description: 'Spend a morning volunteering with local partners, preparing meal kits and making useful connections.' },
  { id: 7, title: 'Anjana Anjani', type: 'Community', date: 'NOV 15', day: '15', month: 'NOV', time: '12:00 PM – 8:00 PM', place: 'SAC', host: 'Happy club', price: 'only for 4th year students', image: 'https://sliet.ac.in/wp-content/uploads/2023/08/16-1.jpg', tone: 'orange', description: 'A food trail of student-run stalls, regional favourites and new recipes worth sharing.' },
  { id: 8, title: 'Convocation', type: 'Conferences', date: 'NOV 18', day: '18', month: 'NOV', time: '10:00 AM – 3:30 PM', place: 'Auditorium', host: 'College Authority', price: 'For 4th year students', image: 'https://administration.sliet.ac.in/files/2018/03/DSC_0819.jpg', tone: 'blue', description: 'A practical mini-conference on accessible design, responsible technology and creative collaboration.' },
]

const schedule = [
  { time: '10:00 AM', title: 'Doors open & welcome desk', place: 'Main entrance', kind: 'Arrival' },
  { time: '11:00 AM', title: 'Society showcases', place: 'Club avenue', kind: 'Explore' },
  { time: '1:00 PM', title: 'Food court opens', place: 'Student plaza', kind: 'Food' },
  { time: '3:30 PM', title: 'Open mic & dance battles', place: 'Main stage', kind: 'Perform' },
  { time: '6:00 PM', title: 'Headliner live set', place: 'Open grounds', kind: 'Main event' },
]

function EventCard({ event, onOpen, saved, onSave }) {
  return (
    <article className="event-card group">
      <button className="event-image" onClick={() => onOpen(event)} aria-label={`View ${event.title}`}>
        <img src={event.image} alt="" loading="lazy" />
        {event.tag && <span className="image-tag">{event.tag}</span>}
        <span className={`date-stamp ${event.tone}`}><b>{event.day}</b><small>{event.month}</small></span>
      </button>
      <div className="event-card-body">
        <div className="event-meta"><span>{event.type}</span><button className={`save-btn ${saved ? 'is-saved' : ''}`} onClick={() => onSave(event.id)} aria-label={saved ? 'Remove saved event' : 'Save event'}>{saved ? <Check size={16} /> : <Bookmark size={16} />}</button></div>
        <button className="event-title" onClick={() => onOpen(event)}>{event.title}</button>
        <div className="event-detail"><Clock3 size={14} /><span>{event.time}</span></div>
        <div className="event-detail"><MapPin size={14} /><span>{event.place}</span></div>
        <div className="event-card-foot"><span>{event.price}</span><button onClick={() => onOpen(event)} className="arrow-link" aria-label={`See details for ${event.title}`}><ArrowRight size={18} /></button></div>
      </div>
    </article>
  )
}

function EventModal({ event, onClose, onRegister }) {
  const [registered, setRegistered] = useState(false)
  if (!event) return null
  function register() {
    setRegistered(true)
    onRegister(event.id)
  }
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <section className="event-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={onClose} aria-label="Close event details"><X size={20} /></button>
        <img className="modal-image" src={event.image} alt="" />
        <div className="modal-content"><h2 id="modal-title">{event.title}</h2><p>{event.description}</p>
          <div className="modal-info"><span><CalendarDays size={17} /> {event.date}</span><span><Clock3 size={17} /> {event.time}</span><span><MapPin size={17} /> {event.place}</span><span><Ticket size={17} /> {event.price}</span></div>
          <button className={`button button-dark modal-register ${registered ? 'button-done' : ''}`} onClick={register}>{registered ? <><Check size={17} /> You're on the list</> : <>Register interest <ArrowRight size={17} /></>}</button>
          {registered && <p className="success-note">You're on the demo attendee list. No payment or account is required.</p>}
        </div>
      </section>
    </div>
  )
}

function App() {
  const [activeCategory, setActiveCategory] = useState('All events')
  const [search, setSearch] = useState('')
  const [mobileMenu, setMobileMenu] = useState(false)
  const [saved, setSaved] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const [showHostForm, setShowHostForm] = useState(false)
  const [hostSubmitted, setHostSubmitted] = useState(false)
  const [hostForm, setHostForm] = useState({ name: '', email: '', title: '', category: 'College fests' })
  const [registered, setRegistered] = useState([])
  const filteredEvents = useMemo(() => events.filter((event) => {
    const matchesCategory = activeCategory === 'All events' || event.type === activeCategory
    const query = search.trim().toLowerCase()
    const matchesSearch = !query || [event.title, event.type, event.place, event.host, event.description].some((value) => value.toLowerCase().includes(query))
    return matchesCategory && matchesSearch
  }), [activeCategory, search])
  const visibleEvents = showAll || search || activeCategory !== 'All events' ? filteredEvents : filteredEvents.slice(0, 6)

  function toggleSave(id) { setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]) }
  function goTo(id) { setMobileMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  function submitHost(e) { e.preventDefault(); setHostSubmitted(true) }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={() => goTo('top')} aria-label="CampusLoop home"><span className="brand-mark"><span /><span /><span /></span><span>SLIET<span className="brand-light">GATHERIFY</span><small>Toghther we can,Make a difference</small> </span></a>
        <nav className={`desktop-nav ${mobileMenu ? 'nav-open' : ''}`}>
          <button onClick={() => goTo('discover')}>Discover</button><button onClick={() => goTo('calendar')}>What's on</button><button onClick={() => goTo('about')}>For organisers</button>
          <button className="mobile-host-link" onClick={() => goTo('host')}>Host an event <ArrowRight size={16} /></button>
        </nav>
        <div className="header-actions"><button className="saved-count" onClick={() => { setActiveCategory('All events'); setSearch(''); goTo('discover') }}><Bookmark size={16} /> Saved <span>{saved.length}</span></button><button className="button button-dark header-host" onClick={() => goTo('host')}>＋ Host an event</button><button className="menu-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle navigation">{mobileMenu ? <X /> : <Menu />}</button></div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy"><h1>Good things<br />happen toghther.</h1><p className="hero-lede">Find your next favourite thing. From college fests and live gigs to big ideas, game days and everything in between.</p><div className="hero-actions"><button className="button button-dark" onClick={() => goTo('discover')}>Explore events <ArrowDownRight size={17} /></button><button className="text-button" onClick={() => goTo('host')}>I'm organising something <ArrowRight size={16} /></button></div><div className="hero-proof"><div className="avatar-stack"><span>R</span><span>A</span><span>M</span><span>+</span></div><p><b>Made by students, for students.</b><br />Your campus has more going on than you think.</p></div></div>
          <div className="hero-art">
            <div className="hero-photo-main"><img
  src="/image/hero.jpg"
  alt="Students gathering together at a campus event"
  fetchPriority="high"
/>
            <div className="photo-caption"><span className="caption-dot" /> THIS IS YOUR SCENE <span>01 / 04</span></div></div><div className="hero-note note-yellow"><Sparkles size={17} /><span>Make room for<br /><b>something new.</b></span></div><div className="hero-sticker"><span>SHOW UP.</span><span>STAND OUT.</span><ArrowDownRight size={22} /></div><div className="hero-mini-card"><div className="mini-date"><b>16</b><span>OCT</span></div><div><b>Tech Fest</b><small>2 days · Main campus</small></div><ArrowRight size={16} /></div></div>
        </section>


        <section className="discover section-wrap" id="discover">
          <div className="section-heading"><div><h2>What's happening<span className="heading-period">.</span></h2><p className="section-intro">Big nights, small workshops, and those happy accidents you didn't plan for.</p></div><div className="heading-side-note">THE CAMPUS CALENDAR<br /><b>OCT — NOV '26</b></div></div>
          <div className="discovery-tools"><div className="category-list" role="group" aria-label="Filter events by category">{categories.map(({ name, icon: Icon }) => <button key={name} onClick={() => { setActiveCategory(name); setShowAll(true) }} className={`category-pill ${activeCategory === name ? 'active' : ''}`}><Icon size={15} />{name}</button>)}</div><label className="search-box"><Search size={17} /><input value={search} onChange={(e) => { setSearch(e.target.value); setShowAll(true) }} placeholder="Search events, places, people..." aria-label="Search events" />{search && <button onClick={() => setSearch('')} aria-label="Clear search"><X size={15} /></button>}</label></div>
          <div className="results-line"><span>{search || activeCategory !== 'All events' ? `${filteredEvents.length} ${filteredEvents.length === 1 ? 'event' : 'events'} found` : 'A LITTLE BIT OF EVERYTHING'}</span><button onClick={() => { setActiveCategory('All events'); setSearch(''); setShowAll(false) }}>Reset filters <X size={13} /></button></div>
          {visibleEvents.length ? <div className="events-grid">{visibleEvents.map((event) => <EventCard key={event.id} event={event} onOpen={setSelectedEvent} saved={saved.includes(event.id)} onSave={toggleSave} />)}</div> : <div className="empty-state"><Search size={28} /><h3>No events found just yet.</h3><p>Try a different search or pick another category.</p><button className="button button-dark" onClick={() => { setSearch(''); setActiveCategory('All events') }}>Show all events</button></div>}
          {!showAll && filteredEvents.length > 6 && <div className="view-all-row"><button className="button button-outline" onClick={() => setShowAll(true)}>See all events <ArrowRight size={16} /></button></div>}
          {showAll && filteredEvents.length > 6 && <div className="view-all-row"><button className="text-button" onClick={() => setShowAll(false)}>Show fewer <ChevronDown size={16} className="rotate-up" /></button></div>}
        </section>

        <section className="feature-band" id="about"><div className="feature-image"><img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1100&q=85" alt="A crowd enjoying a live performance" loading="lazy" /><span className="feature-image-label">NOT JUST ANOTHER DAY ON CAMPUS ↗</span></div><div className="feature-copy"><div className="eyebrow"><span className="eyebrow-line" /> </div><h2>You bring the idea.<br />We'll bring the crowd.</h2><p>Running a society, planning a tournament, setting up a conference or just have an idea you can't stop thinking about? Give it a place to happen.</p><div className="organiser-benefits"><div><span className="benefit-icon"><CalendarDays size={18} /></span><span><b>Get organised</b><small>Keep dates, details and plans in one place.</small></span></div><div><span className="benefit-icon"><Users size={18} /></span><span><b>Find your people</b><small>Reach students who actually want to show up.</small></span></div><div><span className="benefit-icon"><Ticket size={18} /></span><span><b>Fill the room</b><small>Share sign-up and ticket details in a snap.</small></span></div></div><button className="button button-dark" onClick={() => goTo('host')}>Start an event <ArrowRight size={17} /></button></div></section>

        <section className="schedule-section section-wrap" id="calendar"><div className="section-heading schedule-heading"><div><h2>One day. Many stories<span className="heading-period">.</span></h2><p className="section-intro">A little preview of how a campus day can come together.</p></div><div className="schedule-date-card"><CalendarDays size={18} /><span><b>Saturday, 24 October</b><small>Aarohan · Main campus</small></span></div></div>
          <div className="schedule-layout"><div className="schedule-list">{schedule.map((item, index) => <div className="schedule-item" key={item.time}><div className="schedule-time">{item.time}</div><div className="schedule-rail"><span className={index === 4 ? 'rail-dot final-dot' : 'rail-dot'} /></div><div className="schedule-item-main"><span className="schedule-kind">{item.kind}</span><h3>{item.title}</h3><p><MapPin size={13} /> {item.place}</p></div><ArrowUpRightIcon /></div>)}</div><aside className="schedule-aside"><div className="aside-number">01<span>/</span>05</div><h3>Leave a little<br />room for the<br />unexpected.</h3><p>Schedules help. The best bits often happen between the lines.</p><button className="text-button" onClick={() => { setActiveCategory('College fests'); setShowAll(true); goTo('discover') }}>Explore college fests <ArrowRight size={16} /></button><div className="scribble-star"></div></aside></div>
        </section>

        <section className="host-section" id="host"><div className="host-inner"><div className="host-copy"><h2>Got a thing<br />in the works?</h2><p>Tell us a little about it. Whether it's a 20-person workshop or a 2,000-person fest, every good event starts somewhere.</p><div className="host-footnote"><span className="host-footnote-icon"><Plus size={20} /></span><span><b>Free to get started.</b><small>No fancy setup needed. Just an idea and a date.</small></span></div></div>
          <div className="host-form-wrap">{hostSubmitted ? <div className="host-success"><span className="success-icon"><Check size={26} /></span><div className="eyebrow">IDEA RECEIVED</div><h3>That's how it starts.</h3><p>Thanks, {hostForm.name || 'organiser'}! Your event idea, <b>{hostForm.title || 'your event'}</b>, has been added to this demo. In a production site, the team would follow up by email.</p><button className="button button-outline" onClick={() => { setHostSubmitted(false); setHostForm({ name: '', email: '', title: '', category: 'College fests' }) }}>Add another event <Plus size={16} /></button></div> : <form className="host-form" onSubmit={submitHost}><div className="form-heading"><span>EVENT STARTER</span><span>01 — 04</span></div><h3>Let's make it real.</h3><label>Your name<input required value={hostForm.name} onChange={(e) => setHostForm({ ...hostForm, name: e.target.value })} placeholder="Aaditya Dubey" /></label><label>College email<input type="email" required value={hostForm.email} onChange={(e) => setHostForm({ ...hostForm, email: e.target.value })} placeholder="aaditya_254054229@sliet.ac.in" /></label><label>What's the event called?<input required value={hostForm.title} onChange={(e) => setHostForm({ ...hostForm, title: e.target.value })} placeholder="Give your idea a name" /></label><label>What kind of event?<span className="select-wrap"><select value={hostForm.category} onChange={(e) => setHostForm({ ...hostForm, category: e.target.value })}>{categories.filter((item) => item.name !== 'All events').map((item) => <option key={item.name}>{item.name}</option>)}<option>Arts & culture</option><option>Community</option></select><ChevronDown size={16} /></span></label><button className="button button-dark submit-host" type="submit">Send your idea <ArrowRight size={17} /></button><small className="form-privacy">Demo form only. Your details are not sent to a server.</small></form>}</div>
        </div></section>

        <section className="bottom-cta section-wrap"><div className="bottom-cta-mark"><span /><span /><span /></div><div><h2>Don't just hear about it later.</h2><p>Find the thing. Bring a friend. Make a memory.</p></div><button className="button button-dark" onClick={() => goTo('discover')}>Find your next event <ArrowRight size={17} /></button></section>
      </main>

      <footer className="site-footer"><a className="brand footer-brand" href="#top" onClick={() => goTo('top')}><span className="brand-mark"><span /><span /><span /></span><span>SLIET<span className="brand-light">GATHRIFY</span><small>Toghther we can,Make a difference</small></span></a><p>Good things happen together</p><div className="footer-links"><button onClick={() => goTo('discover')}>Discover</button><button onClick={() => goTo('calendar')}>Schedule</button><button onClick={() => goTo('host')}>Host an event</button></div><span className="copyright">© 2026 SLIETGATHERIFY· Made for campus life</span></footer>
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} onRegister={(id) => setRegistered((current) => current.includes(id) ? current : [...current, id])} />
      {registered.length > 0 && <div className="registration-count" aria-live="polite"><Check size={14} /> {registered.length} event{registered.length === 1 ? '' : 's'} registered</div>}
    </div>
  )
}

function ArrowUpRightIcon() { return <ArrowRight className="schedule-arrow" size={18} /> }

export default App
