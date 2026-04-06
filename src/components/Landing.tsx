import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              KRISH
              <br />
              <span>PAREKH</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>AI/ML Engineer focused on</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Computer Vision</div>
              <div className="landing-h2-2">&amp; Real-Time Systems</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Real-Time Systems</div>
              <div className="landing-h2-info-1">Computer Vision</div>
            </h2>
            <p className="landing-subtext">
              I build end-to-end AI systems, from model training to deployment,
              with a focus on real-time applications, automation, and computer
              vision.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
