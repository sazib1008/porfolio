import React from 'react';
import { Shield, Cpu, Zap, Globe } from 'lucide-react';

export default function About() {
  const strengths = [
    {
      icon: <Cpu size={20} />,
      title: "Full-Stack Expertise",
      desc: "Architecting seamless integration between user interfaces and backend storage layers."
    },
    {
      icon: <Shield size={20} />,
      title: "Secure by Design",
      desc: "Enforcing modern security standards, data encryption, and authorization systems."
    },
    {
      icon: <Zap size={20} />,
      title: "Optimized Performance",
      desc: "Obsessing over light page weight, response times, and assets delivery speed."
    },
    {
      icon: <Globe size={20} />,
      title: "Cloud Native",
      desc: "Leveraging virtualization tools, serverless architectures, and reliable hosting."
    }
  ];

  const timeline = [
    {
      date: "2024 - Present",
      title: "Lead Systems Developer",
      company: "Innovate Tech Corp",
      desc: "Overseeing scaling operations, migration to modern React applications, and microservices setup."
    },
    {
      date: "2022 - 2024",
      title: "Senior Full-Stack Engineer",
      company: "Pixel Craft Studio",
      desc: "Delivered customized ecommerce integrations, design systems, and fast express APIs."
    },
    {
      date: "2020 - 2022",
      title: "Software Engineer",
      company: "Quantum Software Solutions",
      desc: "Maintained frontend application features, built RESTful endpoints, and supported devops orchestration."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="section-subtitle">Biography</span>
        <h2 className="section-title">About My Journey</h2>
      </div>
      <div className="about-grid">
        <div className="about-bio">
          <h3>Empowering Businesses Through Modern Technology</h3>
          <p>
            I am a software engineer with a deep passion for writing clean, efficient, and well-tested code. With over 6 years of experience, I specialize in React architectures, backend system engineering, and cloud deployment pipelines.
          </p>
          <p>
            My goal is always to deliver modern digital experiences that solve real-world problems. I combine analytical thinking with creative design choices to make digital assets that stand out.
          </p>
          
          <div className="strengths-grid">
            {strengths.map((str, idx) => (
              <div key={idx} className="strength-card">
                <h4>{str.icon} {str.title}</h4>
                <p>{str.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="journey-timeline">
          {timeline.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <span className="timeline-date">{item.date}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
