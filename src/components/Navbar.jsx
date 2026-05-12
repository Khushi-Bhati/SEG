import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import aboutBgImg from '../assets/images/about-bg.png';
import logoImg from '../assets/images/logo.png';

const navItems = [
  { label: 'Home', hasDropdown: false },

  { label: 'About SEG', hasDropdown: true },
  { label: 'Programs', hasDropdown: true },
  { label: 'Admission', hasDropdown: true },
  { label: 'R & D', hasDropdown: true },
  { label: 'Our Institutions', hasDropdown: true },
  { label: 'Student Zone', hasDropdown: true },
  { label: 'Placements', hasDropdown: true },
  { label: 'Explore more', hasDropdown: true },
  { label: 'Contact us', hasDropdown: false },
];

const aboutSegItems = [
  {
    title: 'History of SEG',
    description: 'Our journey of growth & excellence',
    accent: true,
    icon: 'institution',
    path: '/history-of-seg',
  },
  {
    title: 'Mission & Vision',
    description: 'Our purpose, values & future goals',
    icon: 'target',
    path: '/mission-vision',
  },
  {
    title: 'Why Join SEG',
    description: 'Opportunities, growth & community',
    icon: 'people',
    path: '/why-join-seg',
  },
  {
    title: "Chairman's Message",
    description: 'Words of inspiration & leadership',
    icon: 'message',
    path: '/chairmans-message',
  },
];

const aboutSegHighlights = [
  { value: '20+', label: 'Years of Excellence', icon: 'cap' },
  { value: '25K+', label: 'Happy Students', icon: 'people' },
  { value: '6+', label: 'Institutions Across India', icon: 'building' },
  { value: '100+', label: 'Awards & Recognitions', icon: 'trophy' },
];

const programsMenuItems = [
  {
    title: 'Master of Technology',
    description: 'Our M.Tech program offers advanced skills in engineering, with opportunities for research and innovation.',
    accent: true,
    icon: 'gear',
  },
  {
    title: 'Bachelor of Business Administration',
    description: 'Our BBA program is designed to equip students with the skills and knowledge needed for leadership in business.',
    icon: 'business',
  },
  {
    title: 'Master of Business Administration',
    description: 'We offer an MBA program designed to develop leadership and strategic management skills for global business.',
    icon: 'people',
  },
  {
    title: 'Bachelor in Computer Application',
    description: 'Our BCA program is focused on programming, system management, and application development in the IT industry.',
    icon: 'monitor',
  },
  {
    title: 'Masters in Computer Applications',
    description: 'Our MCA program equips students with expertise in software development, IT, and systems management.',
    icon: 'computer',
  },
  {
    title: 'B.Pharm',
    description: 'Our B.Pharm program offers a comprehensive education in pharmaceutical sciences, preparing students for diverse roles.',
    icon: 'capsule',
  },
];

const programsFeatureCards = [
  {
    title: 'M.Pharm',
    description: 'Our M.Pharm program offers in-depth knowledge in pharmaceutical sciences, preparing students for advanced careers.',
    icon: 'capsule',
  },
  {
    title: 'D.Pharma',
    description: 'Our D.Pharma program prepares students with practical skills to excel in the healthcare and pharmacy sectors.',
    icon: 'medical',
  },
  {
    title: 'Bachelor of Technology',
    description: 'Our B.Tech program provides a solid foundation in engineering, preparing you for a successful career in technology.',
    icon: 'gear',
  },
  {
    title: 'Diploma Programmes',
    description: 'Our diploma programs offer practical training and industry-relevant skills, ensuring career readiness.',
    icon: 'certificate',
  },
];

const DropdownArrow = () => (
  <svg viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2.5L7.5 6L4 9.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTile = ({ type }) => {
  const commonProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  switch (type) {
    case 'institution':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9.5L12 4L21 9.5" {...commonProps} />
          <path d="M5.5 10.5V19" {...commonProps} />
          <path d="M10 10.5V19" {...commonProps} />
          <path d="M14 10.5V19" {...commonProps} />
          <path d="M18.5 10.5V19" {...commonProps} />
          <path d="M3 20H21" {...commonProps} />
        </svg>
      );
    case 'target':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="7.5" {...commonProps} />
          <circle cx="12" cy="12" r="3.5" {...commonProps} />
          <path d="M16.5 7.5L20 4" {...commonProps} />
          <path d="M17 4H20V7" {...commonProps} />
        </svg>
      );
    case 'people':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="9" r="3" {...commonProps} />
          <circle cx="16.5" cy="8" r="2.5" {...commonProps} />
          <path d="M3.5 19C4.4 15.9 6.5 14 9 14C11.5 14 13.6 15.9 14.5 19" {...commonProps} />
          <path d="M14.5 18.5C15.1 16.3 16.7 15 18.6 15C20 15 21.2 15.8 22 17.3" {...commonProps} />
        </svg>
      );
    case 'message':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" {...commonProps} />
          <path d="M5 20C5.8 15.9 8.3 14 12 14C15.7 14 18.2 15.9 19 20" {...commonProps} />
        </svg>
      );
    case 'leaders':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8.5" r="3" {...commonProps} />
          <circle cx="17" cy="9.5" r="2.5" {...commonProps} />
          <path d="M3.5 19.5C4.3 16.2 6.4 14.5 8.9 14.5C11.4 14.5 13.5 16.2 14.3 19.5" {...commonProps} />
          <path d="M14.3 18.8C14.9 16.8 16.3 15.6 18 15.6C19.5 15.6 20.8 16.5 21.5 18.2" {...commonProps} />
        </svg>
      );
    case 'award':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 4H16V9C16 11.2 14.2 13 12 13C9.8 13 8 11.2 8 9V4Z" {...commonProps} />
          <path d="M8 5.5H5.5C5.5 8.3 6.8 10 8.8 10.6" {...commonProps} />
          <path d="M16 5.5H18.5C18.5 8.3 17.2 10 15.2 10.6" {...commonProps} />
          <path d="M12 13V18" {...commonProps} />
          <path d="M8.5 20H15.5" {...commonProps} />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L19 6V11C19 15.2 16.3 18.9 12 21C7.7 18.9 5 15.2 5 11V6L12 3Z" {...commonProps} />
          <path d="M9.5 11.5L11.2 13.2L14.8 9.6" {...commonProps} />
        </svg>
      );
    case 'collaboration':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 8.5L10 11L7.5 13.5L5 11L7.5 8.5Z" {...commonProps} />
          <path d="M16.5 10.5L19 13L16.5 15.5L14 13L16.5 10.5Z" {...commonProps} />
          <path d="M10 11L14 13" {...commonProps} />
          <path d="M7.5 13.5L10.5 16.5C12.1 18.1 14.6 18.1 16.2 16.5L19 13.7" {...commonProps} />
          <path d="M5 10.3L7.8 7.5C9.4 5.9 11.9 5.9 13.5 7.5L16.5 10.5" {...commonProps} />
        </svg>
      );
    case 'cap':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 4L21 9L12 14L3 9Z" {...commonProps} />
          <path d="M7 11.5V15C7 16.7 9.3 18 12 18C14.7 18 17 16.7 17 15V11.5" {...commonProps} />
        </svg>
      );
    case 'building':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 20V6H15V20" {...commonProps} />
          <path d="M15 20V10H19V20" {...commonProps} />
          <path d="M8 9H9" {...commonProps} />
          <path d="M11 9H12" {...commonProps} />
          <path d="M8 12H9" {...commonProps} />
          <path d="M11 12H12" {...commonProps} />
          <path d="M8 15H9" {...commonProps} />
          <path d="M11 15H12" {...commonProps} />
        </svg>
      );
    case 'trophy':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 4H16V8C16 10.2 14.2 12 12 12C9.8 12 8 10.2 8 8V4Z" {...commonProps} />
          <path d="M8 5.5H5.5C5.5 8.1 6.7 9.7 8.5 10.3" {...commonProps} />
          <path d="M16 5.5H18.5C18.5 8.1 17.3 9.7 15.5 10.3" {...commonProps} />
          <path d="M12 12V16.5" {...commonProps} />
          <path d="M9 20H15" {...commonProps} />
          <path d="M10 16.5H14" {...commonProps} />
        </svg>
      );
    case 'gear':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3.2" {...commonProps} />
          <path d="M19 12A7 7 0 0 0 18.9 10.9L21 9.3L19.3 6.3L16.8 7.1A7 7 0 0 0 15 6L14.6 3H9.4L9 6A7 7 0 0 0 7.2 7.1L4.7 6.3L3 9.3L5.1 10.9A7 7 0 0 0 5 12C5 12.4 5 12.8 5.1 13.1L3 14.7L4.7 17.7L7.2 16.9A7 7 0 0 0 9 18L9.4 21H14.6L15 18A7 7 0 0 0 16.8 16.9L19.3 17.7L21 14.7L18.9 13.1C19 12.8 19 12.4 19 12Z" {...commonProps} />
        </svg>
      );
    case 'business':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 7V5.8C9 4.8 9.8 4 10.8 4H13.2C14.2 4 15 4.8 15 5.8V7" {...commonProps} />
          <path d="M4 8.5H20V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V8.5Z" {...commonProps} />
          <path d="M4 11.5C6.4 12.9 9.1 13.6 12 13.6C14.9 13.6 17.6 12.9 20 11.5" {...commonProps} />
        </svg>
      );
    case 'monitor':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="5" width="16" height="11" rx="1.8" {...commonProps} />
          <path d="M12 16V20" {...commonProps} />
          <path d="M8.5 20H15.5" {...commonProps} />
        </svg>
      );
    case 'computer':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="5" width="10" height="14" rx="1.8" {...commonProps} />
          <rect x="15" y="8" width="6" height="9" rx="1.3" {...commonProps} />
          <path d="M17 20H19" {...commonProps} />
        </svg>
      );
    case 'capsule':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6.5L17.5 15C19.4 16.9 19.4 20 17.5 21.9C15.6 23.8 12.5 23.8 10.6 21.9L2.1 13.4C0.2 11.5 0.2 8.4 2.1 6.5C4 4.6 7.1 4.6 9 6.5Z" {...commonProps} />
          <path d="M6 3L21 18" {...commonProps} />
        </svg>
      );
    case 'medical':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="5" width="16" height="14" rx="2" {...commonProps} />
          <path d="M9 3.8V6.2" {...commonProps} />
          <path d="M15 3.8V6.2" {...commonProps} />
          <path d="M12 9V15" {...commonProps} />
          <path d="M9 12H15" {...commonProps} />
        </svg>
      );
    case 'certificate':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="5" width="16" height="10" rx="1.8" {...commonProps} />
          <path d="M7 9H14" {...commonProps} />
          <path d="M7 12H11" {...commonProps} />
          <circle cx="16.5" cy="16.5" r="2.5" {...commonProps} />
          <path d="M15.3 18.8L14.5 21L16.5 20L18.5 21L17.7 18.8" {...commonProps} />
        </svg>
      );
    default:
      return null;
  }
};

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
      }
    }

    function handleResize() {
      if (window.innerWidth > 1024) setMobileOpen(false);
    }

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar" id="main-nav" ref={navbarRef}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo-wrap" onClick={() => setMobileOpen(false)}>
          <img src={logoImg} alt="Saroj Educational Group Logo" className="navbar__logo" />
        </Link>

        <button
          type="button"
          className="navbar__hamburger"
          onClick={() => { setMobileOpen(o => !o); setActiveDropdown(null); }}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar__nav${mobileOpen ? ' navbar__nav--open' : ''}`}>
          {navItems.map((item, i) => (
            <li
              key={i}
              className={`navbar__item${item.label === activeDropdown ? ' navbar__item--active' : ''}`}
            >
              {item.label === 'Home' ? (
                <Link to="/" className="navbar__item-text" onClick={() => setActiveDropdown(null)}>
                  {item.label}
                </Link>
              ) : item.label === 'Contact us' ? (
                <Link to="/contact-us" className="navbar__item-text" onClick={() => setActiveDropdown(null)}>
                  {item.label}
                </Link>
              ) : item.label === 'About SEG' || item.label === 'Programs' ? (
                <button
                  type="button"
                  className="navbar__item-button"
                  onClick={() => setActiveDropdown((open) => (open === item.label ? null : item.label))}
                  aria-expanded={activeDropdown === item.label}
                  aria-controls={item.label === 'About SEG' ? 'about-seg-panel' : 'programs-panel'}
                >
                  <span className="navbar__item-text">{item.label}</span>
                  <span className="navbar__item-arrow">
                    <DropdownArrow />
                  </span>
                </button>
              ) : (
                <>
                  <span className="navbar__item-text">{item.label}</span>
                  {item.hasDropdown && (
                    <span className="navbar__item-arrow">
                      <DropdownArrow />
                    </span>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      {activeDropdown === 'About SEG' && (
        <div className="navbar__dropdown-shell">
          <section className="about-panel" id="about-seg-panel">
            <div className="about-panel__menu">
              {aboutSegItems.map((item) => {
                const ItemTag = item.path ? Link : 'button';
                const itemProps = item.path ? { to: item.path, onClick: () => setActiveDropdown(null) } : { type: 'button' };
                return (
                  <ItemTag
                    key={item.title}
                    {...itemProps}
                    className={`about-panel__menu-item${item.accent ? ' about-panel__menu-item--accent' : ''}`}
                  >
                    <span className="about-panel__menu-icon">
                      <IconTile type={item.icon} />
                    </span>
                    <span className="about-panel__menu-copy">
                      <span className="about-panel__menu-title">{item.title}</span>
                      <span className="about-panel__menu-description">{item.description}</span>
                    </span>
                    <span className="about-panel__menu-arrow">
                      <ChevronRight />
                    </span>
                  </ItemTag>
                );
              })}
            </div>

            <div className="about-panel__content">
              <span className="about-panel__eyebrow">About SEG</span>
              <h3 className="about-panel__title">
                Empowering Minds.
                <br />
                Shaping <span>Futures.</span>
              </h3>
              <p className="about-panel__text">
                Saroj Education Group (SEG) has been at the forefront of quality education, innovation,
                and holistic development for over decades. We are committed to nurturing talent, fostering
                values, and creating future leaders.
              </p>

              <div className="about-panel__stats">
                {aboutSegHighlights.map((item) => (
                  <article key={item.label} className="about-panel__stat">
                    <span className="about-panel__stat-icon">
                      <IconTile type={item.icon} />
                    </span>
                    <strong className="about-panel__stat-value">{item.value}</strong>
                    <span className="about-panel__stat-label">{item.label}</span>
                  </article>
                ))}
              </div>

              <button type="button" className="about-panel__cta">
                Know More About SEG
                <span className="about-panel__cta-arrow">
                  <ChevronRight />
                </span>
              </button>
            </div>

            <div className="about-panel__visual">
              <div className="about-panel__image-wrap">
                <img src={aboutBgImg} alt="SEG campus" className="about-panel__image" />
              </div>

              <div className="about-panel__quote">
                <span className="about-panel__quote-mark">“</span>
                <p>
                  Our mission is to empower students with knowledge, leadership, and innovation for a
                  better tomorrow.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeDropdown === 'Programs' && (
        <div className="navbar__dropdown-shell">
          <section className="programs-panel" id="programs-panel">
            <div className="programs-panel__menu">
              {programsMenuItems.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  className={`programs-panel__menu-item${item.accent ? ' programs-panel__menu-item--accent' : ''}`}
                >
                  <span className="programs-panel__menu-icon">
                    <IconTile type={item.icon} />
                  </span>
                  <span className="programs-panel__menu-copy">
                    <span className="programs-panel__menu-title">{item.title}</span>
                    <span className="programs-panel__menu-description">{item.description}</span>
                  </span>
                  <span className="programs-panel__menu-arrow">
                    <ChevronRight />
                  </span>
                </button>
              ))}
            </div>

            <div className="programs-panel__main">
              <div className="programs-panel__hero">
                <div className="programs-panel__intro">
                  <span className="programs-panel__eyebrow">About Programs</span>
                  <h3 className="programs-panel__title">
                    Explore Our
                    <br />
                    <span>Programs</span>
                  </h3>
                  <p className="programs-panel__text">
                    Discover a wide range of programs designed to build your skills, expand your
                    knowledge, and shape your future.
                  </p>
                </div>

                <div className="programs-panel__visual">
                  <img src={aboutBgImg} alt="SEG programs campus" className="programs-panel__image" />
                </div>
              </div>

              <div className="programs-panel__cards">
                {programsFeatureCards.map((item) => (
                  <article key={item.title} className="programs-panel__card">
                    <span className="programs-panel__card-icon">
                      <IconTile type={item.icon} />
                    </span>
                    <div className="programs-panel__card-copy">
                      <h4 className="programs-panel__card-title">{item.title}</h4>
                      <p className="programs-panel__card-text">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </nav>
  );
}
