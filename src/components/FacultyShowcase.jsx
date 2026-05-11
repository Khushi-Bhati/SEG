import { useRef } from 'react';
import aboutBg from '../assets/images/about-bg.png';
import facultyBg from '../assets/images/faculty-bg.png';
import institutionsBg from '../assets/images/institutions-bg.png';
import campusBg from '../assets/images/campus-bg.png';

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PeopleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 18C4 15.8 6.2 14 9 14C11.8 14 14 15.8 14 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4H16V7C16 9.2 14.2 11 12 11C9.8 11 8 9.2 8 7V4Z" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10 11V14C10 15.1 9.1 16 8 16H7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M14 11V14C14 15.1 14.9 16 16 16H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M9 20H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 16V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const StoryIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 5H19V15H8L5 18V5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 9H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M9 12H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const UserBadgeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M5.5 18C5.5 15.4 8.4 13.5 12 13.5C15.6 13.5 18.5 15.4 18.5 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const tabs = [
  { label: 'Top Faculties', icon: <PeopleIcon />, active: true },
  { label: 'Awards & Achievements', icon: <TrophyIcon />, active: false },
  { label: 'Success Stories', icon: <StoryIcon />, active: false },
];

const facultyCards = [
  {
    name: 'Prof. (Dr.) Anviti Gupta',
    role: 'Professor & Dean',
    school: 'Sharda School of Humanities & Social Sciences',
    image: facultyBg,
    tone: 'cyan',
  },
  {
    name: 'Prof. Prem Kumar Malhotra',
    role: 'Professor',
    school: 'Sharda School of Law',
    image: aboutBg,
    tone: 'gold',
  },
  {
    name: 'Prof. (Dr.) Debasis Mallik',
    role: 'Dean',
    school: 'Sharda School of Business Studies',
    image: institutionsBg,
    tone: 'blue',
  },
  {
    name: 'Prof. (Dr.) Hrishikesh Dave',
    role: 'Dean',
    school: 'Sharda School of Law',
    image: campusBg,
    tone: 'violet',
  },
];

export default function FacultyShowcase() {
  const carouselRef = useRef(null);

  const scrollCards = (direction) => {
    if (!carouselRef.current) {
      return;
    }

    const firstCard = carouselRef.current.querySelector('.faculty-showcase__card');
    const cardTrack = carouselRef.current.querySelector('.faculty-showcase__grid');
    const cardGap = cardTrack ? Number.parseFloat(window.getComputedStyle(cardTrack).gap || '0') : 0;
    const scrollAmount = firstCard ? firstCard.getBoundingClientRect().width + cardGap : carouselRef.current.clientWidth;

    carouselRef.current.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="faculty-showcase" id="faculty-showcase">
      <div className="faculty-showcase__shell">
        <div className="faculty-showcase__tabs">
          {tabs.map((tab) => (
            <div
              className={`faculty-showcase__tab${tab.active ? ' faculty-showcase__tab--active' : ''}`}
              key={tab.label}
            >
              <span className="faculty-showcase__tab-icon">{tab.icon}</span>
              <span>{tab.label}</span>
            </div>
          ))}
        </div>

        <div className="faculty-showcase__header">
          <div className="faculty-showcase__intro">
            <h2 className="faculty-showcase__title">
              Learn from the <span>Best</span>
            </h2>
            <span className="faculty-showcase__accent" />
            <p className="faculty-showcase__subtitle">
              Our distinguished faculty members bring knowledge, experience and inspiration to shape future leaders.
            </p>
          </div>

          <div className="faculty-showcase__actions">
            <span className="faculty-showcase__dots" aria-hidden="true" />
            <button className="btn btn--primary faculty-showcase__cta" id="faculty-showcase-btn">
              <span className="faculty-showcase__cta-icon">
                <PeopleIcon />
              </span>
              View all Faculties
              <span className="btn__arrow">
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div className="faculty-showcase__carousel">
          <button
            type="button"
            className="faculty-showcase__carousel-button faculty-showcase__carousel-button--prev"
            onClick={() => scrollCards(-1)}
            aria-label="Show previous faculty cards"
          >
            <ArrowLeft />
          </button>

          <div className="faculty-showcase__viewport" ref={carouselRef}>
            <div className="faculty-showcase__grid">
              {facultyCards.map((faculty) => (
                <article className={`faculty-showcase__card faculty-showcase__card--${faculty.tone}`} key={faculty.name}>
                  <div className="faculty-showcase__portrait-wrap">
                    <img src={faculty.image} alt={faculty.name} className="faculty-showcase__portrait" loading="lazy" />
                  </div>
                  <span className="faculty-showcase__badge">
                    <UserBadgeIcon />
                  </span>
                  <h3 className="faculty-showcase__name">{faculty.name}</h3>
                  <span className="faculty-showcase__line" />
                  <div className={`faculty-showcase__info faculty-showcase__info--${faculty.tone}`}>
                    <div className="faculty-showcase__info-row">
                      <span className="faculty-showcase__info-icon">
                        <UserBadgeIcon />
                      </span>
                      <div>
                        <strong>{faculty.role}</strong>
                        <span>{faculty.school}</span>
                      </div>
                    </div>
                  </div>
                  <div className="faculty-showcase__card-footer">
                    <a href="#faculty-showcase" className="faculty-showcase__card-arrow" aria-label={`View ${faculty.name}`}>
                      <ArrowRight />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="faculty-showcase__carousel-button faculty-showcase__carousel-button--next"
            onClick={() => scrollCards(1)}
            aria-label="Show next faculty cards"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
