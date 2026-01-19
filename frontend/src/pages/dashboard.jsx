import { useEffect } from "react";
import "../styles/dashboard.css";
import "../styles/general.css";

export default function Dashboard() {
  useEffect(() => {
    const menuBtn = document.querySelector(".menu-icon");
    const profileArea = document.querySelector(".profile-area");

    if (menuBtn && profileArea) {
      menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        profileArea.classList.toggle("active");
      });

      document.addEventListener("click", () => {
        profileArea.classList.remove("active");
      });

      profileArea.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }

    document.querySelectorAll(".group-btn.join").forEach((btn) => {
      btn.addEventListener("click", () => {
        window.location.href = "/grouppage";
      });
    });

    const createBtn = document.querySelector(".btn-create");
    if (createBtn) {
      createBtn.addEventListener("click", () => {
        window.location.href = "/creategroup";
      });
    }
  }, []);

  function toggleGroup(el) {
    const card = el.closest(".group-card");
    card.classList.toggle("active");
  }

  return (
    <>
  <header className="topbar">
    <div className="topbar-inner">
      <div className="welcome">Welcome, username!</div>
      <div className="profile-area">
        <a href="myProfile.html" className="profile-link">
          <div className="avatar"></div>
          <div className="profile-text">My Profile</div>
        </a>
        <div className="menu-dropdown">
          <a href="dashboard.html" className="menu-item">
            <svg className="header-link-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
            <line x1="12" y1="12" x2="12" y2="2"></line>
            <polyline points="10 4 12 2 14 4"></polyline>
            </svg>
            <span>Back to Homepage</span>
          </a>
        <a href="contact.html" className="menu-item">Contact Us</a>
        <a href="index.html" className="menu-item logout">
          <svg className="header-link-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          <span>Logout</span>
        </a>
      </div>
        <button className="menu-icon" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <main className="page-wrap">

    <section className="hero-row">
      <div className="hero-card hero-search">
        <div className="hero-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
        stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7"></circle>
        <line x1="16.5" y1="16.5" x2="22" y2="22"></line>
        </svg>
        </div>
        <div className="hero-body">
          <h2>Search for Groups</h2>
          <p>Browse through existing study groups and find the perfect match for your academic needs. Filter by course, major, meeting time, and more to discover groups that align with your schedule.</p>
        </div>
      </div>

      <div className="hero-card hero-create">
        <div className="hero-icon circle-white">＋</div>
        <div className="hero-body">
          <h2>Create Your Own Group</h2>
          <p>Can't find a group that matches your needs? Start your own study group! Set your own schedule, invite classmates, and build the perfect study environment.</p>
          <button className="btn-create" type="button">＋ Create New Group</button>
        </div>
      </div>
    </section>

    <section className="search-panel" aria-label="Search for Study Groups">
      <h2 className="search-panel-title">Search for Study Groups</h2>
      <div className="search-bar">
        <div className="search-input">

          <div className="search-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="#6b6f6c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="16.5" y1="16.5" x2="22" y2="22"></line>
            </svg>
          </div>

          <input type="search" placeholder="Search by group name or course…" aria-label="search groups"/>
        </div>
      </div>

      <div className="filters">
        <div className="filters-title">Filter your groups</div>

        <div className="filters-grid">
          <div className="field">
            <label className="field-label">Course</label>
            <input className="pill-input" type="text" placeholder="Enter course name..."/>
          </div>

          <div className="field">
            <label className="field-label">Major</label>
            <input className="pill-input" type="text" placeholder="Enter major..."/>
          </div>

          <div className="field">
            <label className="field-label">Year</label>
            <select className="pill-select">
              <option>All Years</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
              <option>5th Year</option>
              <option>Graduate</option>
            </select>
          </div>

          <div className="field">
            <label className="field-label">Meeting Time</label>
            <select className="pill-select">
              <option>Any Time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>
        </div>

        <div className="meeting-days-block">
          <div className="field-label">Meeting Days (select multiple)</div>
          <div className="days-row">
            <div className="day-chip">Mon</div>
            <div className="day-chip">Tue</div>
            <div className="day-chip">Wed</div>
            <div className="day-chip">Thu</div>
            <div className="day-chip">Fri</div>
            <div className="day-chip">Sat</div>
            <div className="day-chip">Sun</div>
          </div>
        </div>

        <div className="status-row">
          <div className="field-label">Group Status</div>
          <select className="pill-select status-select">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>
    </section>

    <h3 className="groups-heading">Groups with High Ratings (4)</h3>

    <section className="groups-list">
      <article className="group-card">
        <div className="card-header">
          <div className="card-header-content" onclick="toggleGroup(this)">
            <div className="card-left">
              <div className="card-label">COURSE</div>
              <div className="card-value">CS 202</div>
            </div>
            <div className="card-mid">
              <div className="card-label">MAJOR</div>
              <div className="card-value">Computer Science</div>
            </div>
            <div className="card-right">
              <div className="card-label">TIME</div>
              <div className="card-value">Afternoon</div>
            </div>
          </div>
          <span className="card-toggle" onclick="event.stopPropagation(); toggleGroup(this)">▾</span>
        </div>
        <div className="card-expanded">
          <h4 className="group-title">Data Structures & Algorithms</h4>
          <div className="group-details">
            <div className="details-left">
              <div className="detail-item">
                <span className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </span>
                <span>Members: 7/7 <span className="full-badge">(FULL)</span></span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </span>
                <span>Tue, Thu</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </span>
                <span>Admin: John Doe</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <span>Online</span>
              </div>
            </div>
            <div className="details-right">
              <div className="status-badge active">• Active</div>
              <div className="rating">
                <span className="rating-value">4.8</span>
                <span className="stars">★★★★☆</span>
              </div>
            </div>
          </div>
          <div className="group-description">
            Intensive coding practice and theory discussions. We share code and resources.
          </div>
          <button className="group-btn full" type="button">Group Full</button>
        </div>
      </article>

      <article className="group-card">
        <div className="card-header">
          <div className="card-header-content" onClick="toggleGroup(this)">
            <div className="card-left">
              <div className="card-label">COURSE</div>
              <div className="card-value">Math 301</div>
            </div>
            <div className="card-mid">
              <div className="card-label">MAJOR</div>
              <div className="card-value">Mathematics</div>
            </div>
            <div className="card-right">
              <div className="card-label">TIME</div>
              <div className="card-value">Evening</div>
            </div>
          </div>
          <span className="card-toggle" onClick="event.stopPropagation(); toggleGroup(this)">▾</span>
        </div>
        <div className="card-expanded">
          <h4 className="group-title">Advanced Calculus Study Group</h4>
          <div className="group-details">
            <div className="details-left">
              <div className="detail-item">
                <span className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </span>
                <span>Members: 5/7</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </span>
                <span>Mon, Wed, Fri</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </span>
                <span>Admin: Sara Ahmed</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <span>In-Person</span>
              </div>
            </div>
            <div className="details-right">
              <div className="status-badge active">• Active</div>
              <div className="rating">
                <span className="rating-value">4.5</span>
                <span className="stars">★★★★☆</span>
              </div>
            </div>
          </div>
          <div className="group-description">
            We focus on problem-solving and exam preparation. Group meets at the library.
          </div>
          <button className="group-btn join" type="button">Join Now</button>
        </div>
      </article>

      <article className="group-card">
        <div className="card-header">
          <div className="card-header-content" onClick="toggleGroup(this)">
            <div className="card-left">
              <div className="card-label">COURSE</div>
              <div className="card-value">Chem 205</div>
            </div>
            <div className="card-mid">
              <div className="card-label">MAJOR</div>
              <div className="card-value">Chemistry</div>
            </div>
            <div className="card-right">
              <div className="card-label">TIME</div>
              <div className="card-value">Morning</div>
            </div>
          </div>
          <span className="card-toggle" onClick="event.stopPropagation(); toggleGroup(this)">▾</span>
        </div>
        <div className="card-expanded">
          <h4 className="group-title">Organic Chemistry Lab Partners</h4>
          <div className="group-details">
            <div className="details-left">
              <div className="detail-item">
                <span className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </span>
                <span>Members: 3/5</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </span>
                <span>Mon, Wed</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </span>
                <span>Admin: Marta Solomon</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <span>In-Person</span>
              </div>
            </div>
            <div className="details-right">
              <div className="status-badge active">• Active</div>
              <div className="rating">
                <span className="rating-value">4.2</span>
                <span className="stars">★★★★☆</span>
              </div>
            </div>
          </div>
          <div className="group-description">
            Lab report collaboration and exam prep. Friendly and supportive environment.
          </div>
            <button className="group-btn join" type="button">Join Now</button>
        </div>
      </article>

      <article className="group-card">
        <div className="card-header">
          <div className="card-header-content" onClick="toggleGroup(this)">
            <div className="card-left">
              <div className="card-label">COURSE</div>
              <div className="card-value">BUS 301</div>
            </div>
            <div className="card-mid">
              <div className="card-label">MAJOR</div>
              <div className="card-value">Business</div>
            </div>
            <div className="card-right">
              <div className="card-label">TIME</div>
              <div className="card-value">Afternoon</div>
            </div>
          </div>
        <span className="card-toggle" onClick="event.stopPropagation(); toggleGroup(this)">▾</span>
        </div>
        <div className="card-expanded">
          <h4 className="group-title">Business Statistics Group</h4>
          <div className="group-details">
            <div className="details-left">
              <div className="detail-item">
                <span className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </span>
                <span>Members: 4/6</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </span>
                <span>Wed, Fri</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </span>
                <span>Admin: David Tesfaye</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <span>Online</span>
              </div>
            </div>
            <div className="details-right">
              <div className="status-badge inactive">• Inactive</div>
              <div className="rating">
                <span className="rating-value">3.9</span>
                <span className="stars">★★★☆☆</span>
              </div>
            </div>
          </div>
          <div className="group-description">
            Currently on break but accepting new members for next semester.
          </div>
          <button className="group-btn join" type="button">Join Now</button>
        </div>
      </article>
    </section>

  </main>
  <div className="chatbot-container">
    <div className="chatbot-dot"></div>
    <a href="ai.html" className="chatbot" role="button" aria-label="chatbot button">
      <svg className="chatbot-icon" width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="6" y="8" width="12" height="10" rx="1.5" fill="white"/>
        <rect x="8.5" y="10" width="2" height="2" fill="#2F6B66"/>
        <rect x="13.5" y="10" width="2" height="2" fill="#2F6B66"/>
        <rect x="4" y="11" width="2" height="5" rx="0.5" fill="white"/>
        <rect x="18" y="11" width="2" height="5" rx="0.5" fill="white"/>
      </svg>
    </a>
  </div>

    </>
  );
}
