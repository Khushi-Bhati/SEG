import program1 from '../assets/images/program1.png';
import program2 from '../assets/images/program2.png';
import program3 from '../assets/images/program3.png';
import program4 from '../assets/images/program4.png';

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const programs = [
  { image: program1, title: 'Engineering & Technology' },
  { image: program2, title: 'Medical & Health Sciences' },
  { image: program3, title: 'Business & Management' },
  { image: program4, title: 'Arts & Humanities' },
];

export default function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="programs__shell">
        <div className="section-header">
          <div className="section-header__title-wrap">

          </div>
          <button className="btn btn--primary" id="view-all-programs-btn">
            View All Programs
            <span className="btn__arrow">
              <ArrowRight />
            </span>
          </button>
        </div>
      </div>

      <div className="programs__grid">
        {programs.map((program, i) => (
          <div
            className={`programs__card programs__card--slot-${i + 1} ${i < 2 ? 'programs__card--float-right' : 'programs__card--float-left'}`}
            key={i}
          >
            <img src={program.image} alt={program.title} />
            <div className="programs__card-overlay">
              <span className="programs__card-title">{program.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
