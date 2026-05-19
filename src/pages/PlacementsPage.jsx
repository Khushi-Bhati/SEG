import React from 'react';
import { Link } from 'react-router-dom';
import '../PlacementsPage.css';
import logoImg from '../assets/images/logo.png';

// Placeholder images for students, since we don't have the real ones
import program1 from '../assets/images/Priya Yadva.jpg';
import program2 from '../assets/images/Harsh Dixit.jpeg';
import program3 from '../assets/images/mansi sahu.jpeg';
import program4 from '../assets/images/surender pratap.jpeg';
import program5 from '../assets/images/pranjali singh.jpeg';
import program6 from '../assets/images/shivam yadav.jpeg';
import program7 from '../assets/images/shaloni devi.jpeg';
import program8 from '../assets/images/Pramudit Shukla.jpeg';
import program9 from '../assets/images/vinay singh.jpg';
import heroBg from '../assets/images/placementsimg.jpeg';

const studentsData = [
  {
    name: 'Priya Yadav',
    company: 'Black Apple Technologies',
    role: 'Web Developer',
    date: '12/05/2026',
    course: 'B.Tech (CS)',
    package: '₹6 LPA',
    image: program1,
    logoText: 'black apple',
  },
  {
    name: 'Harsh Dixit',
    company: 'Eclat Health Solution India',
    role: 'Executive',
    date: '29/04/2025',
    course: 'B Pharma',
    package: '₹4 LPA',
    image: program2,
    logoText: 'ECLAT',
  },
  {
    name: 'Mansi Sahu',
    company: 'Eclat Health Solution India',
    role: 'Executive',
    date: '29/04/2025',
    course: 'B Pharma',
    package: '₹3 LPA',
    image: program3,
    logoText: 'ECLAT',
  },
  {
    name: 'Surendra Pratap',
    company: 'Eclat Health Solution India',
    role: 'Executive',
    date: '29/04/2025',
    course: 'B Pharma',
    package: '₹4 LPA',
    image: program4,
    logoText: 'ECLAT',
  },
  {
    name: 'Pranjali Singh',
    company: 'Eclat Health Solution India',
    role: 'Executive',
    date: '29/04/2025',
    course: 'B Pharma',
    package: '₹4 LPA',
    image: program5,
    logoText: 'ECLAT',
  },
  {
    name: 'Shivam Yadav',
    company: 'Sun Shaper Energy Pvt Ltd',
    role: 'Project Coordinator',
    date: '08/04/2025',
    course: 'Diploma Electrical',
    package: '₹4 LPA',
    image: program6,
    logoText: 'SUN SHAPER',
  },
  {
    name: 'Shaloni Devi',
    company: 'Max Healthcare',
    role: 'Executive',
    date: '10/05/2025',
    course: 'B.Pharm',
    package: '₹18 LPA',
    image: program7,
    logoText: 'MAX',
  },
  {
    name: 'Pramudit Shukla',
    company: 'TechMech',
    role: 'Full Stack Developer',
    date: '15/05/2025',
    course: 'Diploma in CSE',
    package: '₹12 LPA',
    image: program8,
    logoText: 'TECHMECH',
  },
  {
    name: 'Vinay Singh',
    company: 'TCS',
    role: 'Software Engineer',
    date: '20/04/2025',
    course: 'B.Tech (CS)',
    package: '₹5 LPA',
    image: program9,
    logoText: 'TCS',
  },
  {
    name: 'Ananya Sharma',
    company: 'Cognizant',
    role: 'QA Analyst',
    date: '18/04/2025',
    course: 'B.Tech (IT)',
    package: '₹4.5 LPA',
    image: program3,
    logoText: 'COGNIZANT',
  },
  {
    name: 'Rohan Gupta',
    company: 'Accenture',
    role: 'Associate Developer',
    date: '22/04/2025',
    course: 'B.Tech (ECE)',
    package: '₹4.2 LPA',
    image: program4,
    logoText: 'ACCENTURE',
  },
  {
    name: 'Kriti Verma',
    company: 'NIIT Technologies',
    role: 'Software Trainee',
    date: '05/05/2025',
    course: 'B.Tech (CS)',
    package: '₹3.6 LPA',
    image: program5,
    logoText: 'NIIT',
  },
  {
    name: 'Siddharth Malhotra',
    company: 'Microsoft',
    role: 'Support Engineer',
    date: '01/05/2025',
    course: 'B.Tech (CS)',
    package: '₹10 LPA',
    image: program6,
    logoText: 'MICROSOFT',
  },
  {
    name: 'Pooja Mishra',
    company: 'HDFC Bank',
    role: 'Relationship Manager',
    date: '12/04/2025',
    course: 'MBA (Finance)',
    package: '₹4.8 LPA',
    image: program1,
    logoText: 'HDFC BANK',
  },
  {
    name: 'Abhishek Tiwari',
    company: 'Google',
    role: 'Cloud Engineer',
    date: '28/04/2025',
    course: 'B.Tech (CS)',
    package: '₹15 LPA',
    image: program8,
    logoText: 'GOOGLE',
  },
  {
    name: 'Aarti Rajput',
    company: 'Aon Hewitt',
    role: 'Data Analyst',
    date: '14/05/2025',
    course: 'B.Tech (CS)',
    package: '₹6.5 LPA',
    image: program7,
    logoText: 'AON',
  },
  {
    name: 'Sandeep Maurya',
    company: 'Asian Paints',
    role: 'Senior Executive',
    date: '19/04/2025',
    course: 'B.Tech (ME)',
    package: '₹5.5 LPA',
    image: program9,
    logoText: 'ASIAN PAINTS',
  },
  {
    name: 'Divya Joshi',
    company: 'CMC Limited',
    role: 'Systems Consultant',
    date: '30/04/2025',
    course: 'B.Tech (CS)',
    package: '₹4 LPA',
    image: program2,
    logoText: 'CMC',
  },
];

const PlacementsPage = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(studentsData.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = studentsData.slice(indexOfFirstCard, indexOfLastCard);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      const section = document.querySelector('.placements-breadcrumb-wrapper');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      const section = document.querySelector('.placements-breadcrumb-wrapper');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="placements-page">
      {/* HERO SECTION */}
      <section className="placements-hero">
        <div className="placements-hero__bg">
          <img src={heroBg} alt="Placements Background" />
        </div>


        <div className="placements-hero__content">
          <h1 className="placements-hero__title">PLACEMENT</h1>
          <p className="placements-hero__subtitle">"It's a door to your future"</p>
          <p className="placements-hero__text">
            Celebrating the success of our students and<br />
            their journey to a brighter tomorrow.
          </p>

          <div className="placements-hero__stats">
            <div className="placements-hero__stat-card">
              <div className="placements-hero__stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="placements-hero__stat-info">
                <strong>2000+</strong>
                <span>Students Placed</span>
              </div>
            </div>

            <div className="placements-hero__stat-card">
              <div className="placements-hero__stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <div className="placements-hero__stat-info">
                <strong>150+</strong>
                <span>Top Recruiters</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="placements-breadcrumb-wrapper">
        <div className="placements-breadcrumb">
          <Link to="/">HOME</Link> &gt; <span>PLACEMENTS</span>
        </div>
      </div>

      {/* MAIN CARDS SECTION */}
      <section className="placements-main">
        <div className="placements-container">
          <div className="placements-grid">
            {currentCards.map((student, index) => (
              <div className="placement-card" key={index}>
                <div className="placement-card__image-container">
                  <img src={student.image} alt={student.name} className="placement-card__image" />
                  <div className="placement-card__quote-icon">“</div>
                </div>
                <div className="placement-card__details">
                  <div className="placement-card__logo-placeholder">{student.logoText}</div>
                  <h3 className="placement-card__name">{student.name}</h3>
                  <ul className="placement-card__info-list">
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21v-14l8-4 8 4v14"></path><path d="M13 13h4"></path><path d="M13 17h4"></path></svg>
                      {student.company}
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                      {student.role}
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      {student.date}
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l10 6.5-10 6.5-10-6.5z"></path><path d="M22 8.5v7l-10 6.5-10-6.5v-7"></path></svg>
                      {student.course}
                    </li>
                  </ul>
                  <div className="placement-card__package">
                    Package Offer: {student.package}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* STATS BAR */}
          <div className="placements-stats-bar">
            <div className="placements-stat-item">
              <div className="placements-stat-item__icon placements-stat-item__icon--blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              </div>
              <div className="placements-stat-item__content">
                <h4>₹ 6 LPA</h4>
                <p>Highest Package</p>
              </div>
            </div>
            <div className="placements-stat-item">
              <div className="placements-stat-item__icon placements-stat-item__icon--green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              </div>
              <div className="placements-stat-item__content">
                <h4>₹ 3.5 LPA</h4>
                <p>Average Package</p>
              </div>
            </div>
            <div className="placements-stat-item">
              <div className="placements-stat-item__icon placements-stat-item__icon--orange">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
              </div>
              <div className="placements-stat-item__content">
                <h4>150+</h4>
                <p>Top Recruiters</p>
              </div>
            </div>
            <div className="placements-stat-item">
              <div className="placements-stat-item__icon placements-stat-item__icon--purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <div className="placements-stat-item__content">
                <h4>98%</h4>
                <p>Placement Rate</p>
              </div>
            </div>
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="placements-pagination">
              <button 
                className="placements-pagination__btn placements-pagination__btn--prev"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                &lt; Prev
              </button>
              <span className="placements-pagination__text">{currentPage} / {totalPages}</span>
              <button 
                className="placements-pagination__btn placements-pagination__btn--next"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next &gt;
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PlacementsPage;
