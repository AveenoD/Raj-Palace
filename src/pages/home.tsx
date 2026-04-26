export const HomePage = () => {
  return (
    <>
      {/* ===== NAVIGATION ===== */}
      <nav
        id="main-nav"
        class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16 md:h-20">
            <a href="#hero" class="flex items-center gap-3 group">
              <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg ring-2 ring-gold/30 overflow-hidden">
                <img
                  src={encodeURI('/static/images/logo raj palace.jpg.jpeg')}
                  alt="Raj Palace Logo"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="flex flex-col leading-tight">
                <span class="font-display text-lg md:text-xl font-bold nav-brand ml-9">
                  Raj Palace
                </span>
                <span class="text-[10px] md:text-xs tracking-[0.2em] uppercase nav-subbrand">
                  LAWNS &amp; Guest House
                </span>
              </div>
            </a>

            <div class="hidden lg:flex items-center gap-8">
              <a href="#highlights" class="nav-link">Venue</a>
              <a href="#features" class="nav-link">Features</a>
              <a href="#availability" class="nav-link">Availability</a>
              <a href="#gallery" class="nav-link">Gallery</a>
              <a href="#testimonials" class="nav-link">Stories</a>
              <a href="#faq" class="nav-link">FAQ</a>
              <a href="#contact" class="nav-link">Contact</a>
            </div>

            <div class="flex items-center gap-3">
              <a
                href="tel:+919764490162"
                class="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-gold/60 text-white hover:bg-gold hover:text-maroon transition-all nav-cta"
              >
                <i class="fas fa-phone-alt text-xs"></i>
                <span class="text-sm font-medium">Call Now</span>
              </a>
              <a
                href="https://wa.me/919764490162?text=Hi,%20I'm%20interested%20in%20booking%20Raj%20Palace%20%26%20Lawns%20for%20a%20wedding."
                target="_blank"
                rel="noopener"
                class="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold to-goldlight text-maroon font-semibold shadow-lg hover:shadow-gold/50 hover:scale-105 transition-all text-sm"
              >
                <i class="fab fa-whatsapp"></i>
                <span class="hidden sm:inline">Book Now</span>
              </a>
              <button
                id="mobile-menu-toggle"
                class="lg:hidden w-10 h-10 flex items-center justify-center text-white"
                aria-label="Menu"
              >
                <i class="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          class="lg:hidden hidden bg-maroon/95 backdrop-blur-xl border-t border-gold/20"
        >
          <div class="px-4 py-4 space-y-1">
            <a href="#highlights" class="block py-3 px-4 text-ivory hover:bg-gold/10 hover:text-gold rounded-lg mobile-link">Venue</a>
            <a href="#features" class="block py-3 px-4 text-ivory hover:bg-gold/10 hover:text-gold rounded-lg mobile-link">Features</a>
            <a href="#availability" class="block py-3 px-4 text-ivory hover:bg-gold/10 hover:text-gold rounded-lg mobile-link">Availability</a>
            <a href="#gallery" class="block py-3 px-4 text-ivory hover:bg-gold/10 hover:text-gold rounded-lg mobile-link">Gallery</a>
            <a href="#testimonials" class="block py-3 px-4 text-ivory hover:bg-gold/10 hover:text-gold rounded-lg mobile-link">Stories</a>
            <a href="#faq" class="block py-3 px-4 text-ivory hover:bg-gold/10 hover:text-gold rounded-lg mobile-link">FAQ</a>
            <a href="#contact" class="block py-3 px-4 text-ivory hover:bg-gold/10 hover:text-gold rounded-lg mobile-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <header id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
          <div class="hero-slideshow absolute inset-0">
            {/* Wedding venue images */}
            <div class="hero-slide active" style="background-image:url('/static/images/facade-night.jpg')"></div>
            <div class="hero-slide" style="background-image:url('/static/images/lawn-aerial.jpg')"></div>
            <div class="hero-slide" style="background-image:url('/static/images/hall-wedding-setup.jpg')"></div>
            {/* Guest house images (NEW) */}
            <div class="hero-slide" style="background-image:url('/static/images/guesthouse/gh-facade.jpg')"></div>
            <div class="hero-slide" style="background-image:url('/static/images/guesthouse/gh-king-room-1.jpg')"></div>
            {/* More wedding venue images */}
            <div class="hero-slide" style="background-image:url('/static/images/saptapadi-mandap.jpg')"></div>
            <div class="hero-slide" style="background-image:url('/static/images/facade-sky.jpg')"></div>
            {/* More guest house images */}
            <div class="hero-slide" style="background-image:url('/static/images/guesthouse/gh-double-room-1.jpg')"></div>
            <div class="hero-slide" style="background-image:url('/static/images/guesthouse/gh-interior-arch.jpg')"></div>
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-maroondark/70 via-maroondark/50 to-maroondark/90"></div>
          <div class="absolute inset-0 hero-vignette"></div>
        </div>

        <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12">
          <div class="reveal-up">
            <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-gold mb-6">
              <span class="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span class="text-gold text-xs md:text-sm tracking-[0.25em] uppercase font-medium">
                Wedding Venue &amp; Guest House · Nashik
              </span>
            </div>
          </div>

          <h1 class="reveal-up font-display text-white font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6">
            Host Grand Weddings &amp; Comfortable Stays at
            <span class="block mt-2 bg-gradient-to-r from-goldlight via-gold to-goldlight bg-clip-text text-transparent italic">
              Raj Palace
            </span>
          </h1>

          <p class="reveal-up font-serif text-ivory/90 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light italic max-w-3xl mx-auto mb-4">
            Where grand celebrations meet comfortable stays for your guests.
          </p>

          <p class="reveal-up text-ivory/80 text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            <span class="text-gold font-semibold">5000 Guest Capacity</span>
            <span class="mx-2 md:mx-3 text-gold">|</span>
            Royal Indoor Hall
            <span class="mx-2 md:mx-3 text-gold">|</span>
            2 Lush Lawns
            <span class="mx-2 md:mx-3 text-gold">|</span>
            Premium Guest House Rooms
          </p>

          <div class="reveal-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#availability"
              class="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-gold to-goldlight text-maroon font-semibold text-base md:text-lg shadow-2xl hover:shadow-gold/60 hover:scale-105 transition-all duration-300 min-w-[220px]"
            >
              <span class="relative z-10 flex items-center justify-center gap-2">
                <i class="far fa-calendar-check"></i>
                Check Availability
              </span>
            </a>
            <a
              href="https://wa.me/919764490162?text=Hi,%20I%20want%20to%20book%20Raj%20Palace%20(Wedding%20Venue%20%2F%20Guest%20House)."
              target="_blank"
              rel="noopener"
              class="group px-8 py-4 rounded-full glass-dark border-2 border-gold/60 text-ivory font-semibold text-base md:text-lg hover:bg-gold hover:text-maroon transition-all duration-300 min-w-[220px] flex items-center justify-center gap-2"
            >
              <i class="fab fa-whatsapp text-xl"></i>
              Book on WhatsApp
            </a>
          </div>

          {/* Hero stats */}
          <div class="reveal-up grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            <div class="glass-dark rounded-2xl px-3 py-4 sm:p-5 border border-gold/20">
              <div class="font-display text-2xl sm:text-3xl md:text-4xl text-gold font-bold">5000+</div>
              <div class="text-ivory/80 text-[10px] sm:text-xs md:text-sm tracking-wider uppercase mt-1">Guest Capacity</div>
            </div>
            <div class="glass-dark rounded-2xl px-3 py-4 sm:p-5 border border-gold/20">
              <div class="font-display text-2xl sm:text-3xl md:text-4xl text-gold font-bold">2</div>
              <div class="text-ivory/80 text-[10px] sm:text-xs md:text-sm tracking-wider uppercase mt-1">Green Lawns</div>
            </div>
            <div class="glass-dark rounded-2xl px-3 py-4 sm:p-5 border border-gold/20">
              <div class="font-display text-2xl sm:text-3xl md:text-4xl text-gold font-bold">16</div>
              <div class="text-ivory/80 text-[10px] sm:text-xs md:text-sm tracking-wider uppercase mt-1">Guest House Rooms</div>
            </div>
            <div class="glass-dark rounded-2xl px-3 py-4 sm:p-5 border border-gold/20">
              <div class="font-display text-2xl sm:text-3xl md:text-4xl text-gold font-bold">24</div>
              <div class="text-ivory/80 text-[10px] sm:text-xs md:text-sm tracking-wider uppercase mt-1">Hour Stay सुविधा</div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <a href="#trust-bar" class="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/80 hover:text-gold transition-colors z-10">
          <i class="fas fa-chevron-down text-2xl animate-bounce"></i>
        </a>
      </header>

      {/* ===== TRUST BAR ===== */}
      <section id="trust-bar" class="relative py-10 bg-gradient-to-r from-maroon via-maroondark to-maroon border-y border-gold/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="text-center md:text-left">
              <p class="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-1">
                <i class="fas fa-star text-gold mr-1"></i>
                <i class="fas fa-star text-gold mr-1"></i>
                <i class="fas fa-star text-gold mr-1"></i>
                <i class="fas fa-star text-gold mr-1"></i>
                <i class="fas fa-star text-gold"></i>
              </p>
              <h3 class="font-display text-white text-xl md:text-2xl font-semibold">
                Trusted Wedding Venue & Guest House in Nashik District
              </h3>
            </div>
            <div class="grid grid-cols-3 gap-4 md:gap-10">
              <div class="flex flex-col items-center text-center">
                <div class="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-2">
                  <i class="fas fa-users text-gold"></i>
                </div>
                <span class="text-white text-xs md:text-sm font-medium">5000 Capacity</span>
              </div>
              <div class="flex flex-col items-center text-center">
                <div class="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-2">
                  <i class="fas fa-map-marker-alt text-gold"></i>
                </div>
                <span class="text-white text-xs md:text-sm font-medium">Prime Location</span>
              </div>
              <div class="flex flex-col items-center text-center">
                <div class="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-2">
                  <i class="fas fa-shield-alt text-gold"></i>
                </div>
                <span class="text-white text-xs md:text-sm font-medium">Verified Venue</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VENUE HIGHLIGHTS ===== */}
      <section id="highlights" class="relative py-20 md:py-28 bg-ivory">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 reveal-up">
            <span class="inline-block text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              ✦ Our Venue ✦
            </span>
            <h2 class="font-display text-maroon text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
              A Royal Stage for <em class="text-gold italic">Your Love Story</em>
            </h2>
            <p class="text-maroon/70 text-lg max-w-2xl mx-auto">
              Four reasons thousands of families choose Raj Palace &amp; Lawns for their most important day.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                img: '/static/images/hall-wedding-setup.jpg',
                icon: 'fa-landmark',
                title: 'Massive Indoor Hall',
                desc: 'A pillarless royal hall with a 5000-seating arrangement — perfect for big fat Indian weddings.'
              },
              {
                img: '/static/images/lawn-aerial.jpg',
                icon: 'fa-tree',
                title: 'Two Premium Green Lawns',
                desc: 'Two expansive manicured lawns with landscaped gardens for outdoor ceremonies and pre-weddings.'
              },
              {
                img: '/static/images/saptapadi-mandap.jpg',
                icon: 'fa-heart',
                title: 'Big Fat Indian Weddings',
                desc: 'Grand mandap setups, long aisles, and elegant stages tailored for multi-day celebrations.'
              },
              {
                img: '/static/images/entrance-lit.jpg',
                icon: 'fa-moon',
                title: 'Day &amp; Night Functions',
                desc: 'Brilliant architectural lighting and ambient décor that transforms the venue after sunset.'
              }
            ].map((h) => (
              <article class="group reveal-up highlight-card">
                <div class="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl">
                  <img
                    loading="lazy"
                    src={h.img}
                    alt={h.title}
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-maroondark via-maroon/50 to-transparent"></div>
                  <div class="absolute inset-0 p-6 flex flex-col justify-end">
                    <div class="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center mb-4 shadow-lg">
                      <i class={`fas ${h.icon} text-maroon`}></i>
                    </div>
                    <h3
                      class="font-display text-white text-xl md:text-2xl font-semibold mb-2 leading-tight"
                      dangerouslySetInnerHTML={{ __html: h.title }}
                    ></h3>
                    <p class="text-ivory/85 text-sm">{h.desc}</p>
                  </div>
                  <div class="absolute top-4 right-4 w-8 h-8 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    <i class="fas fa-arrow-right text-xs"></i>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GUEST HOUSE SECTION (NEW) ===== */}
      <section id="guesthouse" class="relative py-20 md:py-28 bg-gradient-to-b from-ivory via-ivorydark to-ivory overflow-hidden">
        <div class="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-maroon/5 blur-3xl pointer-events-none"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14 reveal-up">
            <span class="inline-block text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              ✦ New · Now Open ✦
            </span>
            <h2 class="font-display text-maroon text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
              Stay at <em class="text-gold italic">Raj Palace Guest House</em>
            </h2>
            <p class="text-maroon/70 text-lg max-w-2xl mx-auto">
              Comfortable premium rooms right next to the venue — the perfect stay solution for your wedding guests &amp; families.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-8 items-center mb-14">
            {/* Left: Hero Image */}
            <div class="reveal-up relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-gold/20">
              <img
                loading="lazy"
                src="/static/images/guestRoom.jpeg"
                alt="Raj Palace Guest House facade"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-maroondark/70 via-transparent to-transparent"></div>
              <div class="absolute bottom-5 left-5 right-5">
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/90 text-maroon text-xs font-bold tracking-wider uppercase mb-2">
                  <i class="fas fa-bed"></i>
                  16 Rooms Available
                </div>
                <h3 class="font-display text-white text-2xl md:text-3xl font-bold">
                  Raj Palace Guest House
                </h3>
              </div>
            </div>

            {/* Right: Content */}
            <div class="reveal-up">
              <ul class="space-y-3 mb-7">
                {[
                  { icon: 'fa-crown', text: 'Comfortable Premium Rooms with modern amenities' },
                  { icon: 'fa-users', text: 'Ideal stay for wedding guests &amp; out-of-town families' },
                  { icon: 'fa-expand', text: 'Spacious &amp; spotlessly clean rooms' },
                  { icon: 'fa-clock', text: '24-Hour stay convenience &mdash; check-in 10 AM, check-out 10 AM next day' }
                ].map((item) => (
                  <li class="flex items-start gap-3">
                    <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-golddark text-maroon flex items-center justify-center flex-shrink-0 shadow">
                      <i class={`fas ${item.icon} text-sm`}></i>
                    </span>
                    <span class="text-maroon text-base md:text-lg pt-1" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                  </li>
                ))}
              </ul>

              <div class="grid grid-cols-2 gap-4 mb-7">
                <div class="group bg-white rounded-2xl p-5 border border-maroon/10 hover:border-gold/50 hover:shadow-xl transition">
                  <div class="flex items-center gap-3 mb-2">
                    <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-gold to-golddark text-maroon flex items-center justify-center">
                      <i class="fas fa-chess-king"></i>
                    </div>
                    <div class="font-display text-3xl font-bold text-maroon">8</div>
                  </div>
                  <div class="font-display text-lg font-semibold text-maroon">Master King Rooms</div>
                  <div class="text-maroon/60 text-xs mt-1">Full-size premium rooms</div>
                </div>
                <div class="group bg-white rounded-2xl p-5 border border-maroon/10 hover:border-gold/50 hover:shadow-xl transition">
                  <div class="flex items-center gap-3 mb-2">
                    <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-maroon to-maroondark text-gold flex items-center justify-center">
                      <i class="fas fa-bed"></i>
                    </div>
                    <div class="font-display text-3xl font-bold text-maroon">12</div>
                  </div>
                  <div class="font-display text-lg font-semibold text-maroon">Double Bed Rooms</div>
                  <div class="text-maroon/60 text-xs mt-1">Comfortable &amp; cozy</div>
                </div>
              </div>

              {/* Check-in/out highlight */}
              <div class="bg-gradient-to-r from-maroon to-maroondark text-white rounded-2xl p-5 mb-6 shadow-xl">
                <div class="flex items-center justify-between flex-wrap gap-3">
                  <div class="flex items-center gap-3">
                    <i class="fas fa-sign-in-alt text-gold text-xl"></i>
                    <div>
                      <div class="text-gold text-[10px] tracking-[0.2em] uppercase">Check-In</div>
                      <div class="font-display font-bold">10:00 AM</div>
                    </div>
                  </div>
                  <div class="text-gold text-xl hidden sm:block">→</div>
                  <div class="flex items-center gap-3">
                    <i class="fas fa-sign-out-alt text-gold text-xl"></i>
                    <div>
                      <div class="text-gold text-[10px] tracking-[0.2em] uppercase">Check-Out</div>
                      <div class="font-display font-bold">10:00 AM (next day)</div>
                    </div>
                  </div>
                  <div class="w-full sm:w-auto px-3 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold text-center">
                    <i class="fas fa-clock mr-1"></i>
                    24-Hour Stay
                  </div>
                </div>
              </div>

              <div class="bg-gold/10 border-l-4 border-gold rounded-r-xl p-4 mb-6">
                <p class="text-maroon font-serif italic text-base md:text-lg">
                  "Perfect stay solution for wedding families &amp; guests."
                </p>
              </div>

              <button
                type="button"
                id="gh-book-btn"
                class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-goldlight text-maroon font-semibold shadow-xl hover:shadow-gold/50 hover:scale-105 transition"
              >
                <i class="fas fa-bed"></i>
                Book Guest Rooms Now
              </button>
            </div>
          </div>

          {/* Room Gallery Preview */}
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 reveal-up">
            {[
              { img: 'WhatsApp Image 2026-04-24 at 9.56.08 PM (1).jpeg', label: 'Master King Room' },
              { img: 'WhatsApp Image 2026-04-24 at 9.56.03 PM.jpeg', label: 'Premium Suite' },
              { img: 'WhatsApp Image 2026-04-24 at 9.56.04 PM.jpeg', label: 'Double Bed Room' },
              { img: 'WhatsApp Image 2026-04-24 at 9.56.05 PM.jpeg', label: 'Deluxe Double' },
              { img: 'WhatsApp Image 2026-04-24 at 9.56.07 PM.jpeg', label: 'Lobby Interior' }
            ].map((r) => (
              <div class="group relative rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-2xl cursor-pointer" onclick={`openLightbox('${encodeURI(`/static/images/${r.img}`)}')`}>
                <img loading="lazy" src={encodeURI(`/static/images/${r.img}`)} alt={r.label} class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-maroondark/90 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section id="features" class="relative py-20 md:py-28 bg-gradient-to-b from-ivory to-ivorydark">
        <div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image:radial-gradient(circle at 1px 1px, #4A0E0E 1px, transparent 0); background-size:32px 32px;"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 reveal-up">
            <span class="inline-block text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              ✦ Everything You Need ✦
            </span>
            <h2 class="font-display text-maroon text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
              A Complete Wedding <em class="text-gold italic">Destination</em>
            </h2>
            <p class="text-maroon/70 text-lg max-w-2xl mx-auto">
              From decoration to catering to parking — every detail is crafted for your comfort.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              { icon: 'fa-star', title: 'Stage Setup Space', desc: 'Expansive pre-built stage area with custom backdrop and lighting rig support.' },
              { icon: 'fa-utensils', title: 'Catering Flexibility', desc: 'Bring your own caterer or choose from our trusted partners — Veg, Jain, Non-Veg.' },
              { icon: 'fa-car', title: 'Ample Parking', desc: 'Secure parking for 200+ cars and bikes with guided entry and exit.' },
              { icon: 'fa-lightbulb', title: 'Lighting Setup', desc: 'Professional architectural lighting for interiors, lawns and facade.' },
              { icon: 'fa-palette', title: 'Decor Flexibility', desc: 'Work with any decorator of your choice — mandaps, florals, theme setups welcome.' },
              { icon: 'fa-road', title: 'Easy Highway Access', desc: 'Right on Shirdi-Manmad Road — seamless access for out-of-town guests.' },
              { icon: 'fa-bolt', title: 'Full Power Backup', desc: 'Uninterrupted power and generator backup for flawless multi-day events.' },
              { icon: 'fa-snowflake', title: 'Covered + Open Space', desc: 'Choose indoor hall, open lawn — or combine both for a grand affair.' },
              { icon: 'fa-user-tie', title: 'On-site Coordinator', desc: 'Our team coordinates logistics so your family can focus on celebrating.' }
            ].map((f) => (
              <div class="reveal-up group feature-card relative bg-white rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-2xl border border-maroon/5 hover:border-gold/40 transition-all duration-500">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-maroon to-maroondark flex items-center justify-center mb-5 group-hover:from-gold group-hover:to-golddark transition-all shadow-md">
                  <i class={`fas ${f.icon} text-gold group-hover:text-maroon text-xl transition-colors`}></i>
                </div>
                <h3 class="font-display text-maroon text-xl md:text-2xl font-semibold mb-2">
                  {f.title}
                </h3>
                <p class="text-maroon/70 text-sm md:text-base leading-relaxed">{f.desc}</p>
                <div class="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE BOOKING CALENDAR ===== */}
      <section id="availability" class="relative py-20 md:py-28 bg-maroon text-white overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <img src="/static/images/saptapadi-mandap.jpg" loading="lazy" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-maroondark via-maroondark/90 to-maroondark"></div>

        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Booking type toggle (NEW) */}
          <div class="availability-booking-toggle-wrap reveal-up">
            <div class="availability-booking-toggle" role="group" aria-label="Booking type">
              <button
                type="button"
                class="availability-booking-toggle-btn"
                data-booking-type="lawns"
              >
                <i class="fas fa-leaf"></i>
                Raj Palace Lawns
              </button>
              <button
                type="button"
                class="availability-booking-toggle-btn active"
                data-booking-type="guesthouse"
              >
                <i class="fas fa-bed"></i>
                Guest House
              </button>
            </div>
          </div>

          <div class="text-center mb-12 reveal-up">
            <span class="inline-block text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              ✦ Live Availability ✦
            </span>
            <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
              Check Wedding Date <em class="text-gold italic">Availability</em>
            </h2>
            <p class="text-ivory/80 text-lg max-w-2xl mx-auto">
              Select a date below to instantly see availability and send an enquiry.
            </p>
          </div>

          {/* Legend */}
          <div class="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8 reveal-up">
            <span class="flex items-center gap-2 text-sm">
              <span class="w-4 h-4 rounded-md bg-green-500/90 ring-2 ring-green-300/50"></span>
              <span>Available</span>
            </span>
            <span class="flex items-center gap-2 text-sm">
              <span class="w-4 h-4 rounded-md bg-red-500/90 ring-2 ring-red-300/50"></span>
              <span>Booked</span>
            </span>
            <span class="flex items-center gap-2 text-sm">
              <span class="w-4 h-4 rounded-md bg-gray-500/80 ring-2 ring-gray-300/40"></span>
              <span>Blocked</span>
            </span>
            <span class="flex items-center gap-2 text-sm">
              <span class="w-4 h-4 rounded-md bg-gold/90 ring-2 ring-gold/50"></span>
              <span>Selected</span>
            </span>
          </div>

          {/* Calendar Card */}
          <div class="reveal-up glass-dark rounded-3xl border border-gold/30 p-5 md:p-8 shadow-2xl max-w-4xl mx-auto">
            <div class="flex items-center justify-between mb-6">
              <button id="cal-prev" class="w-11 h-11 rounded-full bg-gold/10 hover:bg-gold hover:text-maroon border border-gold/40 text-gold flex items-center justify-center transition-all">
                <i class="fas fa-chevron-left"></i>
              </button>
              <div class="text-center">
                <div id="cal-month" class="font-display text-2xl md:text-3xl font-bold text-white">Month Year</div>
                <div class="text-gold/80 text-xs tracking-[0.25em] uppercase mt-1">Select a Date</div>
              </div>
              <button id="cal-next" class="w-11 h-11 rounded-full bg-gold/10 hover:bg-gold hover:text-maroon border border-gold/40 text-gold flex items-center justify-center transition-all">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>

            <div class="grid grid-cols-7 gap-1 md:gap-2 mb-2 text-center">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                <div class="text-gold/80 text-[10px] md:text-xs tracking-wider uppercase font-semibold py-2">
                  {d}
                </div>
              ))}
            </div>

            <div id="cal-grid" class="grid grid-cols-7 gap-1 md:gap-2">
              {/* Populated by JS */}
            </div>

            <div id="cal-selected-info" class="mt-6 pt-6 border-t border-gold/20 hidden">
              <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                <div class="text-center md:text-left">
                  <div class="text-gold text-xs tracking-[0.25em] uppercase mb-1">Selected Date</div>
                  <div id="cal-selected-date" class="font-display text-2xl md:text-3xl font-bold text-white"></div>
                  <div id="cal-selected-status" class="mt-1 text-sm"></div>
                </div>
                <button
                  id="cal-enquire-btn"
                  class="px-8 py-3 rounded-full bg-gradient-to-r from-gold to-goldlight text-maroon font-semibold shadow-xl hover:scale-105 transition-transform"
                >
                  <i class="fas fa-paper-plane mr-2"></i>
                  Select Date &amp; Enquire
                </button>
              </div>
            </div>
          </div>

          <p class="text-center text-ivory/60 text-sm mt-6">
            <i class="fas fa-info-circle mr-1 text-gold"></i>
            Availability updates are maintained directly by our team. Contact us to confirm &amp; lock your date.
          </p>
        </div>
      </section>

      {/* ===== ENQUIRY MODAL ===== */}
      <div id="enquiry-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4">
        <div class="absolute inset-0 bg-maroondark/80 backdrop-blur-sm modal-backdrop"></div>
        <div class="relative bg-ivory rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden modal-content">
          <div class="bg-gradient-to-r from-maroon to-maroondark p-6 text-center relative">
            <button id="modal-close" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
              <i class="fas fa-times"></i>
            </button>
            <div class="w-14 h-14 rounded-full bg-gold mx-auto flex items-center justify-center mb-3 shadow-lg">
              <i class="fas fa-envelope-open-text text-maroon text-xl"></i>
            </div>
            <h3 class="font-display text-2xl md:text-3xl text-white font-bold">Send Enquiry</h3>
            <p class="text-gold text-sm mt-1">We'll respond within a few hours</p>
          </div>

          <form id="enquiry-form" class="p-6 space-y-4">
            <input type="hidden" name="date" id="enquiry-date" />

            {/* Booking Type Toggle (NEW) */}
            <div>
              <label class="block text-maroon text-xs tracking-wider uppercase font-semibold mb-2">Booking Type</label>
              <div class="grid grid-cols-2 gap-2" id="booking-type-toggle">
                <button
                  type="button"
                  data-booking-type="lawns"
                  class="booking-type-btn active px-3 py-3 rounded-xl border-2 text-sm font-semibold transition text-left"
                >
                  <i class="fas fa-leaf mr-1.5"></i>
                  Lawns / Hall
                </button>
                <button
                  type="button"
                  data-booking-type="guesthouse"
                  class="booking-type-btn px-3 py-3 rounded-xl border-2 text-sm font-semibold transition text-left"
                >
                  <i class="fas fa-bed mr-1.5"></i>
                  Guest House
                </button>
              </div>
              <input type="hidden" name="bookingType" id="enquiry-booking-type" value="lawns" />
            </div>

            <div>
              <label class="block text-maroon text-xs tracking-wider uppercase font-semibold mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                required
                class="w-full px-4 py-3 rounded-xl border border-maroon/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition bg-white"
                placeholder="Full name"
              />
            </div>
            <div>
              <label class="block text-maroon text-xs tracking-wider uppercase font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                pattern="[0-9]{10}"
                class="w-full px-4 py-3 rounded-xl border border-maroon/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition bg-white"
                placeholder="10-digit mobile"
              />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label id="enquiry-date-label" class="block text-maroon text-xs tracking-wider uppercase font-semibold mb-2">Wedding Date</label>
                <input
                  id="enquiry-date-display"
                  type="text"
                  readonly
                  class="w-full px-4 py-3 rounded-xl border border-maroon/20 bg-ivory font-semibold text-maroon"
                />
              </div>

              {/* Check-out date (Guest House only) */}
              <div class="booking-fields booking-fields-guesthouse hidden">
                <label class="block text-maroon text-xs tracking-wider uppercase font-semibold mb-2">Check-out Date</label>
                <input
                  id="enquiry-checkout-date"
                  type="date"
                  name="checkoutDate"
                  class="w-full px-4 py-3 rounded-xl border border-maroon/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition bg-white font-semibold text-maroon"
                />
              </div>
            </div>

            {/* Lawns-only fields */}
            <div class="booking-fields booking-fields-lawns">
              <label class="block text-maroon text-xs tracking-wider uppercase font-semibold mb-2">Expected Guests</label>
              <select
                name="guests"
                class="w-full px-4 py-3 rounded-xl border border-maroon/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition bg-white"
              >
                <option value="">Select guest count</option>
                <option>Less than 500</option>
                <option>500 – 1000</option>
                <option>1000 – 2500</option>
                <option>2500 – 5000</option>
                <option>More than 5000</option>
              </select>
            </div>

            {/* Guest House fields (NEW) */}
            <div class="booking-fields booking-fields-guesthouse hidden space-y-4">
              <div>
                <label class="block text-maroon text-xs tracking-wider uppercase font-semibold mb-2">Expected Guests</label>
                <select
                  name="guests"
                  class="w-full px-4 py-3 rounded-xl border border-maroon/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition bg-white"
                >
                  <option value="">Select guest count</option>
                  <option>Less than 500</option>
                  <option>500 – 1000</option>
                  <option>1000 – 2500</option>
                  <option>2500 – 5000</option>
                  <option>More than 5000</option>
                </select>
              </div>
              <div>
                <label class="block text-maroon text-xs tracking-wider uppercase font-semibold mb-2">Room Type</label>
                <select
                  name="roomType"
                  class="w-full px-4 py-3 rounded-xl border border-maroon/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition bg-white"
                >
                  <option value="">Select room type</option>
                  <option value="Master King Room">Master King Room (Premium)</option>
                  <option value="Double Bed Room">Double Bed Room</option>
                  <option value="Mixed (both)">Mixed (both types)</option>
                </select>
              </div>
              <div>
                <label class="block text-maroon text-xs tracking-wider uppercase font-semibold mb-2">Number of Rooms</label>
                <input
                  type="number"
                  name="numRooms"
                  min="1"
                  max="16"
                  class="w-full px-4 py-3 rounded-xl border border-maroon/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition bg-white"
                  placeholder="e.g. 4"
                />
              </div>
              <div class="bg-gold/10 border border-gold/30 rounded-xl p-3 text-xs text-maroon">
                <div class="flex items-center gap-2 mb-1">
                  <i class="fas fa-clock text-gold"></i>
                  <span class="font-semibold tracking-wider uppercase">Stay Timings</span>
                </div>
                <div>
                  <strong>Check-in:</strong> 10:00 AM &nbsp;·&nbsp;
                  <strong>Check-out:</strong> 10:00 AM (next day) &nbsp;·&nbsp;
                  24-hour stay
                </div>
              </div>
            </div>

            <div>
              <label class="block text-maroon text-xs tracking-wider uppercase font-semibold mb-2">Message (Optional)</label>
              <textarea
                name="message"
                rows={3}
                class="w-full px-4 py-3 rounded-xl border border-maroon/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition bg-white resize-none"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full py-4 rounded-xl bg-gradient-to-r from-maroon to-maroondark text-gold font-semibold hover:shadow-xl transition shadow-lg"
            >
              <i class="fas fa-paper-plane mr-2"></i>
              Send Enquiry
            </button>
            <a
              id="enquiry-whatsapp"
              href="#"
              target="_blank"
              rel="noopener"
              class="block w-full py-3 rounded-xl border-2 border-green-600 text-green-700 font-semibold text-center hover:bg-green-600 hover:text-white transition"
            >
              <i class="fab fa-whatsapp mr-2"></i>
              Or Enquire Instantly on WhatsApp
            </a>
          </form>
        </div>
      </div>

      {/* ===== HOW BOOKING WORKS ===== */}
      <section id="how-it-works" class="relative py-20 md:py-28 bg-ivory">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 reveal-up">
            <span class="inline-block text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              ✦ Simple &amp; Seamless ✦
            </span>
            <h2 class="font-display text-maroon text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
              How Booking <em class="text-gold italic">Works</em>
            </h2>
            <p class="text-maroon/70 text-lg max-w-2xl mx-auto">
              Three simple steps to lock your perfect wedding date.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 relative">
            {/* Dotted line connector for desktop */}
            <div class="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-0.5 border-t-2 border-dashed border-gold/40"></div>

            {[
              { num: '01', icon: 'fa-calendar-day', title: 'Select Date', desc: 'Browse our live availability calendar and pick your ideal wedding date.' },
              { num: '02', icon: 'fa-comments', title: 'Contact Us', desc: 'Send enquiry via form or WhatsApp. Our team responds instantly.' },
              { num: '03', icon: 'fa-handshake', title: 'Confirm Booking', desc: 'Visit the venue, finalize details, and lock your date with a small advance.' }
            ].map((s) => (
              <div class="reveal-up relative text-center">
                <div class="relative inline-flex items-center justify-center mb-6">
                  <div class="w-20 h-20 rounded-full bg-white shadow-xl border-4 border-gold flex items-center justify-center">
                    <i class={`fas ${s.icon} text-2xl text-maroon`}></i>
                  </div>
                  <span class="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-gold to-golddark text-maroon font-display font-bold flex items-center justify-center text-sm shadow-md">
                    {s.num}
                  </span>
                </div>
                <h3 class="font-display text-maroon text-2xl font-semibold mb-3">{s.title}</h3>
                <p class="text-maroon/70">{s.desc}</p>
              </div>
            ))}
          </div>

          <div class="text-center mt-12 reveal-up">
            <a
              href="#availability"
              class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-maroon text-gold font-semibold hover:bg-maroondark transition shadow-xl"
            >
              <i class="fas fa-calendar-check"></i>
              Start With Your Date
            </a>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section id="gallery" class="relative py-20 md:py-28 bg-gradient-to-b from-ivorydark to-ivory">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 reveal-up">
            <span class="inline-block text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              ✦ Gallery ✦
            </span>
            <h2 class="font-display text-maroon text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
              A Glimpse of <em class="text-gold italic">Royal Moments</em>
            </h2>
            <p class="text-maroon/70 text-lg max-w-2xl mx-auto">
              From grand mandaps to lit-up entrances — explore the many moods of Raj Palace &amp; Lawns.
            </p>
          </div>

          {/* Venue Toggle (NEW) */}
          <div class="flex justify-center mb-6 reveal-up">
            <div class="inline-flex bg-white rounded-full p-1.5 shadow-md border border-maroon/10">
              <button
                type="button"
                data-gallery-venue="lawns"
                class="gallery-venue-btn active px-5 md:px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
              >
                <i class="fas fa-leaf mr-1.5"></i>
                Raj Palace Lawns
              </button>
              <button
                type="button"
                data-gallery-venue="guesthouse"
                class="gallery-venue-btn px-5 md:px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
              >
                <i class="fas fa-bed mr-1.5"></i>
                Guest House
              </button>
            </div>
          </div>

          {/* Category Tabs (Lawns only — hidden when Guest House selected) */}
          <div id="gallery-category-tabs" class="flex flex-wrap justify-center gap-2 mb-10 reveal-up">
            {[
              { key: 'all', label: 'All' },
              { key: 'hall', label: 'Indoor Hall' },
              { key: 'lawn', label: 'Lawns & Facade' },
              { key: 'night', label: 'Night Lighting' },
              { key: 'wedding', label: 'Weddings & Setup' }
            ].map((t, i) => (
              <button
                data-gallery-filter={t.key}
                class={`gallery-tab px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? 'bg-maroon text-gold'
                    : 'bg-white text-maroon hover:bg-maroon hover:text-gold border border-maroon/20'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Category Tabs (Guest House only) */}
          <div id="gallery-category-tabs-guesthouse" class="hidden flex flex-wrap justify-center gap-2 mb-10 reveal-up">
            {[
              { key: 'all', label: 'All' },
              { key: 'facade', label: 'Facade' },
              { key: 'rooms', label: 'Rooms' },
              { key: 'interior', label: 'Interior' }
            ].map((t, i) => (
              <button
                data-gallery-filter-gh={t.key}
                class={`gallery-tab-gh px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? 'bg-maroon text-gold'
                    : 'bg-white text-maroon hover:bg-maroon hover:text-gold border border-maroon/20'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Featured grid — Lawns (stack + big + big + stack) */}
          <div id="gallery-grid" class="gallery-featured-grid">
            {/* Left stack (2) */}
            <div class="gallery-stack" data-gallery-stack="left">
              {[
                { img: 'haldi-decor.jpg', cat: 'wedding' },
                { img: 'welcome-gate.jpg', cat: 'night' }
              ].map((g) => (
                <div class="gallery-item" data-category={g.cat}>
                  <div class="group gallery-featured-tile gallery-featured-tile--small relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow">
                    <img
                      loading="lazy"
                      src={`/static/images/${g.img}`}
                      alt="Raj Palace & Lawns"
                      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onclick={`openLightbox('/static/images/${g.img}')`}
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-maroondark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-gold/90 text-maroon flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <i class="fas fa-expand"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Big 1 */}
            <div class="gallery-item gallery-featured-big" data-category="hall">
              <div class="group gallery-featured-tile gallery-featured-tile--big relative rounded-2xl overflow-hidden cursor-pointer h-full shadow-md hover:shadow-2xl transition-shadow">
                <img
                  loading="lazy"
                  src="/static/images/hall-interior-red-chairs.jpg"
                  alt="Raj Palace & Lawns"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onclick="openLightbox('/static/images/hall-interior-red-chairs.jpg')"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-maroondark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-gold/90 text-maroon flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <i class="fas fa-expand"></i>
                </div>
              </div>
            </div>

            {/* Big 2 */}
            <div class="gallery-item gallery-featured-big" data-category="wedding">
              <div class="group gallery-featured-tile gallery-featured-tile--big relative rounded-2xl overflow-hidden cursor-pointer h-full shadow-md hover:shadow-2xl transition-shadow">
                <img
                  loading="lazy"
                  src="/static/images/saptapadi-mandap.jpg"
                  alt="Raj Palace & Lawns"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onclick="openLightbox('/static/images/saptapadi-mandap.jpg')"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-maroondark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-gold/90 text-maroon flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <i class="fas fa-expand"></i>
                </div>
              </div>
            </div>

            {/* Right stack (2) */}
            <div class="gallery-stack" data-gallery-stack="right">
              {[
                { img: 'entrance-lit.jpg', cat: 'night' },
                { img: 'lawn-aerial.jpg', cat: 'lawn' }
              ].map((g) => (
                <div class="gallery-item" data-category={g.cat}>
                  <div class="group gallery-featured-tile gallery-featured-tile--small relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow">
                    <img
                      loading="lazy"
                      src={`/static/images/${g.img}`}
                      alt="Raj Palace & Lawns"
                      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onclick={`openLightbox('/static/images/${g.img}')`}
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-maroondark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-gold/90 text-maroon flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <i class="fas fa-expand"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* More photos — Lawns (hidden initially) */}
          <div id="gallery-grid-more" class="hidden mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              // Hall
              { img: 'hall-mixed-seating.jpg', cat: 'hall' },
              { img: 'dining-setup.jpg', cat: 'hall' },

              // Lawns & Facade
              { img: 'facade-day.jpg', cat: 'lawn' },
              { img: 'facade-sky.jpg', cat: 'lawn' },
              { img: 'facade-dusk.jpg', cat: 'lawn' },

              // Night lighting
              { img: 'welcome-gate.jpg', cat: 'night' },
              { img: 'event-crowd.jpg', cat: 'wedding' },
              { img: 'main-gate.jpg', cat: 'night' },
              { img: 'parking-night.jpg', cat: 'night' },

              // Weddings & setup
              { img: 'haldi-decor.jpg', cat: 'wedding' }
            ].map((g) => (
              <div class="gallery-item" data-category={g.cat}>
                <div class="group relative rounded-2xl overflow-hidden cursor-pointer aspect-square shadow-md hover:shadow-2xl transition-shadow">
                  <img
                    loading="lazy"
                    src={`/static/images/${g.img}`}
                    alt="Raj Palace & Lawns"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onclick={`openLightbox('/static/images/${g.img}')`}
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-maroondark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div class="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-gold/90 text-maroon flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <i class="fas fa-expand"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured grid — Guest House (hidden by default) */}
          <div id="gallery-grid-guesthouse" class="hidden">
            <div id="gallery-grid-guesthouse-featured" class="gallery-featured-grid">
              {/* Left stack (2) */}
              <div class="gallery-stack" data-gallery-stack="left">
                {[
                  { img: 'WhatsApp Image 2026-04-24 at 9.56.06 PM.jpeg', label: 'Guest House Photo', cat: 'rooms' },
                  { img: 'WhatsApp Image 2026-04-24 at 9.56.11 PM.jpeg', label: 'Guest House Photo', cat: 'interior' }
                ].map((g) => (
                  <div class="gallery-item-gh" data-category={g.cat}>
                    <div class="group gallery-featured-tile gallery-featured-tile--small relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow">
                      <img
                        loading="lazy"
                        src={`/static/images/${g.img}`}
                        alt={g.label}
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onclick={`openLightbox('/static/images/${g.img}')`}
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-maroondark/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                      {/* label removed */}
                      <div class="absolute top-3 right-3 w-9 h-9 rounded-full bg-gold/90 text-maroon flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <i class="fas fa-expand text-xs"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Big 1 */}
              <div class="gallery-item-gh gallery-featured-big" data-category="facade">
                <div class="group gallery-featured-tile gallery-featured-tile--big relative rounded-2xl overflow-hidden cursor-pointer h-full shadow-md hover:shadow-2xl transition-shadow">
                  <img
                    loading="lazy"
                    src="/static/images/WhatsApp Image 2026-04-24 at 9.56.10 PM.jpeg"
                    alt="Guest House Photo"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onclick="openLightbox('/static/images/WhatsApp Image 2026-04-24 at 9.56.10 PM.jpeg')"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-maroondark/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                  {/* label removed */}
                  <div class="absolute top-3 right-3 w-9 h-9 rounded-full bg-gold/90 text-maroon flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <i class="fas fa-expand text-xs"></i>
                  </div>
                </div>
              </div>

              {/* Big 2 */}
              <div class="gallery-item-gh gallery-featured-big" data-category="rooms">
                <div class="group gallery-featured-tile gallery-featured-tile--big relative rounded-2xl overflow-hidden cursor-pointer h-full shadow-md hover:shadow-2xl transition-shadow">
                  <img
                    loading="lazy"
                    src="/static/images/WhatsApp Image 2026-04-24 at 9.56.08 PM.jpeg"
                    alt="Guest House Photo"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onclick="openLightbox('/static/images/WhatsApp Image 2026-04-24 at 9.56.08 PM.jpeg')"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-maroondark/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                  {/* label removed */}
                  <div class="absolute top-3 right-3 w-9 h-9 rounded-full bg-gold/90 text-maroon flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <i class="fas fa-expand text-xs"></i>
                  </div>
                </div>
              </div>

              {/* Right stack (2) */}
              <div class="gallery-stack" data-gallery-stack="right">
                {[
                  { img: 'WhatsApp Image 2026-04-24 at 9.56.06 PM (1).jpeg', label: 'Guest House Photo', cat: 'rooms' },
                  { img: 'WhatsApp Image 2026-04-24 at 9.56.07 PM.jpeg', label: 'Guest House Photo', cat: 'rooms' }
                ].map((g) => (
                  <div class="gallery-item-gh" data-category={g.cat}>
                    <div class="group gallery-featured-tile gallery-featured-tile--small relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow">
                      <img
                        loading="lazy"
                        src={`/static/images/${g.img}`}
                        alt={g.label}
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onclick={`openLightbox('/static/images/${g.img}')`}
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-maroondark/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                      {/* label removed */}
                      <div class="absolute top-3 right-3 w-9 h-9 rounded-full bg-gold/90 text-maroon flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <i class="fas fa-expand text-xs"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="gallery-grid-guesthouse-more" class="hidden mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {[
                // Use WhatsApp photos only (guesthouse folder not present)
                { img: 'WhatsApp Image 2026-04-24 at 9.56.10 PM.jpeg', label: 'Guest House Photo', cat: 'facade', dir: 'root' },

                // WhatsApp uploads (stored in /static/images)
                { img: 'WhatsApp Image 2026-04-24 at 9.56.03 PM.jpeg', label: 'Guest House Photo', cat: 'rooms', dir: 'root' },
                { img: 'WhatsApp Image 2026-04-24 at 9.56.04 PM.jpeg', label: 'Guest House Photo', cat: 'rooms', dir: 'root' },
                { img: 'WhatsApp Image 2026-04-24 at 9.56.05 PM.jpeg', label: 'Guest House Photo', cat: 'rooms', dir: 'root' },
                { img: 'WhatsApp Image 2026-04-24 at 9.56.06 PM.jpeg', label: 'Guest House Photo', cat: 'rooms', dir: 'root' },
                { img: 'WhatsApp Image 2026-04-24 at 9.56.06 PM (1).jpeg', label: 'Guest House Photo', cat: 'rooms', dir: 'root' },
                { img: 'WhatsApp Image 2026-04-24 at 9.56.07 PM.jpeg', label: 'Guest House Photo', cat: 'interior', dir: 'root' },
                { img: 'WhatsApp Image 2026-04-24 at 9.56.07 PM (1).jpeg', label: 'Guest House Photo', cat: 'interior', dir: 'root' },
                { img: 'WhatsApp Image 2026-04-24 at 9.56.08 PM.jpeg', label: 'Guest House Photo', cat: 'rooms', dir: 'root' },
                { img: 'WhatsApp Image 2026-04-24 at 9.56.08 PM (1).jpeg', label: 'Guest House Photo', cat: 'rooms', dir: 'root' },
                { img: 'WhatsApp Image 2026-04-24 at 9.56.09 PM.jpeg', label: 'Guest House Photo', cat: 'facade', dir: 'root' },
                { img: 'WhatsApp Image 2026-04-24 at 9.56.10 PM.jpeg', label: 'Guest House Photo', cat: 'facade', dir: 'root' },
                { img: 'WhatsApp Image 2026-04-24 at 9.56.11 PM.jpeg', label: 'Guest House Photo', cat: 'interior', dir: 'root' },
                { img: 'WhatsApp Image 2026-04-24 at 9.56.11 PM (1).jpeg', label: 'Guest House Photo', cat: 'rooms', dir: 'root' },
                { img: 'WhatsApp Image 2026-04-24 at 9.56.13 PM.jpeg', label: 'Guest House Photo', cat: 'interior', dir: 'root' }
              ].map((g) => (
                <div class="gallery-item-gh" data-category={g.cat}>
                  <div class="group relative rounded-2xl overflow-hidden cursor-pointer aspect-square shadow-md hover:shadow-2xl transition-shadow">
                    <img
                      loading="lazy"
                      src={encodeURI(`/static/images/${g.img}`)}
                      alt={g.label}
                      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onclick={`openLightbox('${encodeURI(`/static/images/${g.img}`)}')`}
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-maroondark/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                    {/* label removed */}
                    <div class="absolute top-3 right-3 w-9 h-9 rounded-full bg-gold/90 text-maroon flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <i class="fas fa-expand text-xs"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Load more */}
          <div class="flex justify-center mt-8 reveal-up">
            <button
              id="gallery-load-more"
              type="button"
              class="px-8 py-3 rounded-full bg-maroon text-gold font-semibold hover:bg-maroondark transition shadow-xl"
            >
              <i class="fas fa-plus mr-2"></i>
              Load More Photos
            </button>
          </div>
        </div>

        {/* Lightbox */}
        <div id="lightbox" class="fixed inset-0 z-[110] hidden items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onclick="closeLightbox()">
          <button class="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-gold hover:text-maroon transition">
            <i class="fas fa-times text-xl"></i>
          </button>
          <img id="lightbox-img" src="" alt="" class="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl" />
        </div>
      </section>

      {/* ===== TESTIMONIALS / SOCIAL PROOF ===== */}
      <section id="testimonials" class="relative py-20 md:py-28 bg-maroon text-white overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <img src="/static/images/hall-wedding-setup.jpg" loading="lazy" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-maroondark via-maroon to-maroondark"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 reveal-up">
            <span class="inline-block text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              ✦ Wedding & Stay Stories ✦
            </span>
            <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
              Loved by <em class="text-gold italic">Hundreds of Families</em>
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Patil Family',
                event: 'Wedding · 2000 Guests',
                quote:
                  'The venue is absolutely stunning — our guests couldn\'t stop praising the decoration and lawns. The staff made our daughter\'s wedding unforgettable.',
                icon: 'fa-heart'
              },
              {
                name: 'Kulkarni Family',
                event: 'Reception · 1500 Guests',
                quote:
                  'Best wedding venue in Yeola area. Pillarless hall gave us complete flexibility with the mandap. Parking, catering space, lighting — all top notch.',
                icon: 'fa-star'
              },
              {
                name: 'Deshmukh Family',
                event: 'Engagement + Wedding · 3500 Guests',
                quote:
                  'We hosted three functions over three days and everything went perfectly. The lawn and indoor hall combination was a huge hit with our relatives.',
                icon: 'fa-gem'
              }
            ].map((t) => (
              <div class="reveal-up glass-dark rounded-3xl p-7 border border-gold/20 hover:border-gold/60 transition">
                <div class="flex items-center justify-between mb-4">
                  <div class="text-gold text-xl">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star ml-0.5"></i>
                    <i class="fas fa-star ml-0.5"></i>
                    <i class="fas fa-star ml-0.5"></i>
                    <i class="fas fa-star ml-0.5"></i>
                  </div>
                  <i class={`fas ${t.icon} text-gold text-xl opacity-50`}></i>
                </div>
                <p class="text-ivory/90 text-base italic leading-relaxed mb-5 font-serif">
                  "{t.quote}"
                </p>
                <div class="flex items-center gap-3 pt-4 border-t border-gold/20">
                  <div class="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-golddark flex items-center justify-center text-maroon font-display font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div class="font-display text-lg font-semibold">{t.name}</div>
                    <div class="text-gold text-xs">{t.event}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mt-14 reveal-up">
            <a
              href="https://share.google/cZCukpQ7jfPJYxF4F"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-3 px-6 py-3 rounded-full border-2 border-gold text-gold font-semibold hover:bg-gold hover:text-maroon transition"
            >
              <i class="fab fa-google"></i>
              Lawns Google Reviews
            </a>
            <a
              href="https://share.google/cZCukpQ7jfPJYxF4F"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-goldlight text-maroon font-semibold hover:scale-105 transition shadow-xl"
            >
              <i class="fab fa-google"></i>
              Guest House Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* ===== PRICING / QUOTE ===== */}
      <section id="pricing" class="relative py-20 md:py-28 bg-ivory">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl">
            <div class="absolute inset-0">
              <img src="/static/images/facade-dusk.jpg" loading="lazy" alt="" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-r from-maroondark via-maroondark/90 to-maroondark/60"></div>
            </div>
            <div class="relative p-8 md:p-14 lg:p-20 text-center">
              <span class="inline-block text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
                ✦ Transparent Pricing ✦
              </span>
              <h2 class="font-display text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
                Custom Pricing Based on <em class="text-gold italic">Your Event Size</em>
              </h2>
              <p class="text-ivory/85 text-lg max-w-2xl mx-auto mb-8">
                Every wedding is unique. Get a tailored quote based on your date, guest count, venue sections, and requirements — no hidden charges, ever.
              </p>

              <div class="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
                <div class="glass-dark rounded-2xl p-5 border border-gold/20">
                  <i class="fas fa-check-circle text-gold text-xl mb-2"></i>
                  <div class="text-white text-sm font-semibold">No Hidden Fees</div>
                </div>
                <div class="glass-dark rounded-2xl p-5 border border-gold/20">
                  <i class="fas fa-percent text-gold text-xl mb-2"></i>
                  <div class="text-white text-sm font-semibold">Off-Season Offers</div>
                </div>
                <div class="glass-dark rounded-2xl p-5 border border-gold/20">
                  <i class="fas fa-calendar-check text-gold text-xl mb-2"></i>
                  <div class="text-white text-sm font-semibold">Flexible Packages</div>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#availability"
                  class="px-8 py-4 rounded-full bg-gradient-to-r from-gold to-goldlight text-maroon font-semibold shadow-xl hover:scale-105 transition min-w-[200px]"
                >
                  <i class="fas fa-file-invoice-dollar mr-2"></i>
                  Get Quote
                </a>
                <a
                  href="https://wa.me/919764490162?text=Hi,%20I%20want%20a%20custom%20quote%20for%20a%20wedding%20at%20Raj%20Palace%20%26%20Lawns."
                  target="_blank"
                  rel="noopener"
                  class="px-8 py-4 rounded-full border-2 border-gold text-gold font-semibold hover:bg-gold hover:text-maroon transition min-w-[200px]"
                >
                  <i class="fab fa-whatsapp mr-2"></i>
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" class="relative py-20 md:py-28 bg-gradient-to-b from-ivory to-ivorydark">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12 reveal-up">
            <span class="inline-block text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              ✦ FAQ ✦
            </span>
            <h2 class="font-display text-maroon text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
              Frequently Asked <em class="text-gold italic">Questions</em>
            </h2>
          </div>

          <div class="space-y-4">
            {[
              {
                q: 'What is the total seating capacity at Raj Palace & Lawns?',
                a: 'Our indoor hall comfortably seats up to 5000 guests. Including the two outdoor lawns, the venue can accommodate significantly more for larger celebrations.'
              },
              {
                q: 'Is parking available for guests?',
                a: 'Yes — we have a large dedicated parking area that can hold 200+ cars plus two-wheelers. Guided parking assistance is provided during big events.'
              },
              {
                q: 'Can we bring our own caterer and decorator?',
                a: 'Absolutely. You are free to bring your preferred caterer and decorator. We also have trusted vendor partners if you would like recommendations.'
              },
              {
                q: 'Is the venue suitable for day & night functions?',
                a: 'Yes, Raj Palace & Lawns is designed for both day and night events, with beautiful daylight views of the lawns and elegant architectural lighting after sunset.'
              },
              {
                q: 'Which types of events do you host?',
                a: 'Weddings, receptions, engagements, haldi, sangeet, birthdays, corporate gatherings, political meets, religious functions, and more.'
              },
              {
                q: 'How do we confirm a booking?',
                a: 'Select your date on our availability calendar and send an enquiry. Our team will get in touch, arrange a venue visit, and confirm with a small advance.'
              },
              {
                q: 'Where exactly is Raj Palace & Lawns located?',
                a: 'We are located on the Shirdi–Manmad Road, Yeola, District Nashik, Maharashtra – 423401, near Darshan Hotel & Indian Oil Pump — with direct highway access.'
              }
            ].map((f) => (
              <details class="faq-item reveal-up group bg-white rounded-2xl border border-maroon/10 hover:border-gold/50 transition-all shadow-sm hover:shadow-lg overflow-hidden">
                <summary class="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6">
                  <span class="font-display text-maroon text-lg md:text-xl font-semibold pr-4">
                    {f.q}
                  </span>
                  <span class="w-9 h-9 rounded-full bg-maroon group-open:bg-gold text-gold group-open:text-maroon flex items-center justify-center flex-shrink-0 transition">
                    <i class="fas fa-plus group-open:hidden"></i>
                    <i class="fas fa-minus hidden group-open:inline"></i>
                  </span>
                </summary>
                <div class="px-5 md:px-6 pb-5 md:pb-6 text-maroon/75 leading-relaxed border-t border-maroon/5 pt-4">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== URGENCY CTA ===== */}
      <section class="relative py-16 md:py-24 overflow-hidden bg-gradient-to-r from-maroondark via-maroon to-maroondark">
        <div class="absolute inset-0 opacity-20">
          <img src="/static/images/entrance-lit.jpg" loading="lazy" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="reveal-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-400/50 text-red-200 text-xs tracking-[0.25em] uppercase font-medium mb-5">
            <span class="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
            Limited Wedding Dates Available
          </div>
          <h2 class="reveal-up font-display text-white text-4xl md:text-5xl lg:text-5xl font-bold mb-5 leading-none">
            Secure Your Perfect Wedding at Our
            <em class="block mt-2 text-gold italic">Lawns &amp; Guest House</em>
          </h2>
          <p class="reveal-up text-ivory/85 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Premium dates for the 2026 &amp; 2027 wedding season are filling up fast. Reserve yours today.
          </p>
          <div class="reveal-up flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#availability"
              class="px-10 py-4 rounded-full bg-gradient-to-r from-gold to-goldlight text-maroon font-semibold shadow-2xl hover:shadow-gold/50 hover:scale-105 transition text-lg"
            >
              <i class="fas fa-calendar-star mr-2"></i>
              Check Availability Now
            </a>
            <a
              href="tel:+919764490162"
              class="px-10 py-4 rounded-full border-2 border-gold text-gold font-semibold hover:bg-gold hover:text-maroon transition text-lg"
            >
              <i class="fas fa-phone-alt mr-2"></i>
              Call 9764490162
            </a>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" class="relative py-20 md:py-28 bg-ivory">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14 reveal-up">
            <span class="inline-block text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              ✦ Visit Us ✦
            </span>
            <h2 class="font-display text-maroon text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
              Let's Plan Your <em class="text-gold italic">Royal Wedding & Stay</em>
            </h2>
            <p class="text-maroon/70 text-lg max-w-2xl mx-auto">
              Reach out, schedule a venue visit, or start a conversation on WhatsApp.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div class="reveal-up space-y-5">
              <a
                href="tel:+919764490162"
                class="flex items-start gap-5 p-6 bg-white rounded-2xl border border-maroon/10 hover:border-gold/60 hover:shadow-xl transition group"
              >
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-maroon to-maroondark group-hover:from-gold group-hover:to-golddark flex items-center justify-center text-gold group-hover:text-maroon flex-shrink-0 transition">
                  <i class="fas fa-phone-alt text-xl"></i>
                </div>
                <div>
                  <div class="text-gold text-xs tracking-[0.25em] uppercase font-semibold mb-1">Click to Call</div>
                  <div class="font-display text-maroon text-2xl font-bold">+91 97644 90162</div>
                  <div class="text-maroon/60 text-sm mt-1">Available 10 AM – 9 PM</div>
                </div>
              </a>

              <a
                href="https://wa.me/919764490162?text=Hi,%20I'm%20interested%20in%20booking%20Raj%20Palace%20%26%20Lawns%20for%20a%20wedding."
                target="_blank"
                rel="noopener"
                class="flex items-start gap-5 p-6 bg-white rounded-2xl border border-maroon/10 hover:border-green-500 hover:shadow-xl transition group"
              >
                <div class="w-14 h-14 rounded-2xl bg-green-600 group-hover:bg-green-500 flex items-center justify-center text-white flex-shrink-0 transition">
                  <i class="fab fa-whatsapp text-2xl"></i>
                </div>
                <div>
                  <div class="text-green-700 text-xs tracking-[0.25em] uppercase font-semibold mb-1">WhatsApp</div>
                  <div class="font-display text-maroon text-2xl font-bold">97644 90162</div>
                  <div class="text-maroon/60 text-sm mt-1">Instant response · Chat with us now</div>
                </div>
              </a>

              <a
                href="https://share.google/cZCukpQ7jfPJYxF4F"
                target="_blank"
                rel="noopener"
                class="flex items-start gap-5 p-6 bg-white rounded-2xl border border-maroon/10 hover:border-gold/60 hover:shadow-xl transition group"
              >
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-maroon to-maroondark group-hover:from-gold group-hover:to-golddark flex items-center justify-center text-gold group-hover:text-maroon flex-shrink-0 transition">
                  <i class="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <div class="text-gold text-xs tracking-[0.25em] uppercase font-semibold mb-1">Our Address</div>
                  <div class="font-display text-maroon text-lg font-bold leading-tight">
                    Raj Palace &amp; Lawns
                  </div>
                  <div class="text-maroon/70 text-sm mt-1 leading-relaxed">
                    Shirdi Manmad Road, Near Darshan Hotel &amp; Indian Oil Pump,
                    <br />
                    Yeola, Dist. Nashik, Maharashtra – 423401
                  </div>
                  <div class="text-gold text-xs mt-2 font-semibold">
                    <i class="fas fa-external-link-alt mr-1"></i>
                    Open in Google Maps
                  </div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/raj_palace_lawns"
                target="_blank"
                rel="noopener"
                class="flex items-start gap-5 p-6 bg-white rounded-2xl border border-maroon/10 hover:border-pink-500 hover:shadow-xl transition group"
              >
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center text-white flex-shrink-0">
                  <i class="fab fa-instagram text-2xl"></i>
                </div>
                <div>
                  <div class="text-pink-600 text-xs tracking-[0.25em] uppercase font-semibold mb-1">Follow Us</div>
                  <div class="font-display text-maroon text-xl font-bold">@raj_palace_lawns</div>
                  <div class="text-maroon/60 text-sm mt-1">See latest weddings &amp; décor inspiration</div>
                </div>
              </a>
            </div>

            {/* Map */}
            <div class="reveal-up relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px] border-4 border-gold/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.9!2d74.4875!3d20.0404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAyJzI1LjQiTiA3NMKwMjknMTUuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style="border:0; min-height:500px;"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Raj Palace & Lawns Location"
              ></iframe>
              <a
                href="https://share.google/cZCukpQ7jfPJYxF4F"
                target="_blank"
                rel="noopener"
                class="absolute bottom-4 right-4 px-5 py-3 rounded-full bg-maroon text-gold font-semibold shadow-xl hover:bg-maroondark transition flex items-center gap-2"
              >
                <i class="fas fa-directions"></i>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer class="relative bg-maroondark text-ivory pt-16 pb-6 border-t border-gold/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div class="lg:col-span-1">
              <div class="flex flex-col items-center text-center mb-4">
                <div class="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg ring-2 ring-gold/30 overflow-hidden mb-3">
                  <img
                    src={encodeURI('/static/images/logo raj palace.jpg.jpeg')}
                    alt="Raj Palace Logo"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="font-display text-2xl font-bold text-white leading-tight">Raj Palace</div>
                <div class="text-[10px] tracking-[0.2em] uppercase text-gold mt-1">LAWNS &amp; GUEST HOUSE</div>
              </div>
              <p class="text-ivory/70 text-sm leading-relaxed">
                A luxury 5000-guest wedding venue in Yeola, Nashik — combining royal indoor halls with expansive green lawns for unforgettable celebrations.
              </p>
              <div class="flex items-center gap-3 mt-5">
                <a href="https://www.instagram.com/raj_palace_lawns" target="_blank" rel="noopener" aria-label="Instagram" class="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 border border-gold/20 flex items-center justify-center transition">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://wa.me/919764490162" target="_blank" rel="noopener" aria-label="WhatsApp" class="w-10 h-10 rounded-full bg-white/5 hover:bg-green-600 border border-gold/20 flex items-center justify-center transition">
                  <i class="fab fa-whatsapp"></i>
                </a>
                <a href="tel:+919764490162" aria-label="Phone" class="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-maroon border border-gold/20 flex items-center justify-center transition">
                  <i class="fas fa-phone-alt"></i>
                </a>
                <a href="https://share.google/cZCukpQ7jfPJYxF4F" target="_blank" rel="noopener" aria-label="Maps" class="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-maroon border border-gold/20 flex items-center justify-center transition">
                  <i class="fas fa-map-marker-alt"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 class="font-display text-gold text-lg font-semibold mb-5">Explore</h4>
              <ul class="space-y-3 text-sm">
                <li><a href="#highlights" class="footer-link">Venue Highlights</a></li>
                <li><a href="#features" class="footer-link">Features</a></li>
                <li><a href="#availability" class="footer-link">Check Availability</a></li>
                <li><a href="#gallery" class="footer-link">Gallery</a></li>
                <li><a href="#faq" class="footer-link">FAQ</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 class="font-display text-gold text-lg font-semibold mb-5">We Host</h4>
              <ul class="space-y-3 text-sm text-ivory/80">
                <li><i class="fas fa-heart text-gold text-xs mr-2"></i>Weddings &amp; Receptions</li>
                <li><i class="fas fa-ring text-gold text-xs mr-2"></i>Engagements</li>
                <li><i class="fas fa-drum text-gold text-xs mr-2"></i>Sangeet &amp; Haldi</li>
                <li><i class="fas fa-birthday-cake text-gold text-xs mr-2"></i>Birthdays</li>
                <li><i class="fas fa-briefcase text-gold text-xs mr-2"></i>Corporate Events</li>
                <li><i class="fas fa-praying-hands text-gold text-xs mr-2"></i>Religious Functions</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 class="font-display text-gold text-lg font-semibold mb-5">Reach Us</h4>
              <address class="not-italic text-sm text-ivory/80 leading-relaxed mb-4">
                Shirdi Manmad Road,<br />
                Near Darshan Hotel &amp; Indian Oil Pump,<br />
                Yeola, Dist. Nashik,<br />
                Maharashtra – 423401
              </address>
              <a href="tel:+919764490162" class="footer-link block mb-1">
                <i class="fas fa-phone-alt text-gold text-xs mr-2"></i>
                +91 97644 90162
              </a>
              <a href="https://wa.me/919764490162" target="_blank" rel="noopener" class="footer-link block">
                <i class="fab fa-whatsapp text-gold text-xs mr-2"></i>
                WhatsApp Chat
              </a>
            </div>
          </div>

          <div class="pt-6 border-t border-gold/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/60">
            <div>
              © <span id="year">2026</span> Raj Palace &amp; Lawns. All rights reserved.
            </div>
            <div class="flex items-center gap-5">
              <a href="/admin" class="hover:text-gold transition">Admin</a>
              <span class="flex items-center gap-1">
                <i class="fas fa-heart text-gold"></i>
                Crafted for timeless weddings
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== STICKY WHATSAPP BUTTON ===== */}
      <a
        id="sticky-whatsapp"
        href="https://wa.me/919764490162?text=Hi,%20I%20want%20to%20book%20Raj%20Palace%20%26%20Lawns%20for%20a%20wedding."
        target="_blank"
        rel="noopener"
        class="fixed bottom-6 right-6 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all whatsapp-pulse"
        aria-label="Chat on WhatsApp"
      >
        <i class="fab fa-whatsapp text-2xl md:text-3xl"></i>
      </a>

      {/* Sticky Call for mobile */}
      <a
        href="tel:+919764490162"
        class="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-gold text-maroon flex items-center justify-center shadow-2xl hover:bg-goldlight hover:scale-110 transition-all md:hidden"
        aria-label="Call Now"
      >
        <i class="fas fa-phone-alt text-xl"></i>
      </a>

      {/* Toast Notification */}
      <div id="toast" class="fixed top-6 right-6 z-[120] hidden">
        <div class="bg-maroon text-gold px-6 py-4 rounded-xl shadow-2xl border border-gold/30 flex items-center gap-3">
          <i class="fas fa-check-circle text-xl"></i>
          <span id="toast-message">Success!</span>
        </div>
      </div>

      <script src="/static/app.js"></script>
    </>
  )
}
