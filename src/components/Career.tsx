import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Experience</span> <span>&</span>
          <br /> Highlights
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Developer</h4>
                <h5>Projects &amp; Hackathons</h5>
              </div>
              <h3>Current</h3>
            </div>
            <p>
              Built multiple AI systems across computer vision, automation, and
              decision intelligence, focusing on real-world applications and
              deployment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Lead</h4>
                <h5>Ace Hackathon</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led development of a real-time emotion recognition system using
              deep learning and React, delivering a working prototype under tight
              deadlines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Key Highlights</h4>
                <h5>Impact Snapshot</h5>
              </div>
              <h3>Core</h3>
            </div>
            <p>
              Built multiple AI applications solving real-world problems across
              automation, computer vision, and analytics. Designed complete
              systems from data processing to deployment, not just model
              training. Delivered functional prototypes in high-pressure
              hackathon environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
