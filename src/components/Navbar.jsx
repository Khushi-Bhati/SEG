import logoImg from '../assets/images/logo.png';

const navItems = [
  { label: 'Why SEG?', hasDropdown: true },
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

const DropdownArrow = () => (
  <svg viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Navbar() {
  return (
    <nav className="navbar" id="main-nav">
      <div className="navbar__inner">
        <a href="/" className="navbar__logo-wrap">
          <img src={logoImg} alt="Saroj Educational Group Logo" className="navbar__logo" />
        </a>

        <ul className="navbar__nav">
          {navItems.map((item, i) => (
            <li key={i} className="navbar__item">
              <span className="navbar__item-text">{item.label}</span>
              {item.hasDropdown && (
                <span className="navbar__item-arrow">
                  <DropdownArrow />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
