import React from 'react';
import PersonalCard from '../../components/profile/Profile';
import './About.css';
import teamData from '../../assets/teamData';
import member1 from '../../assets/member1.png';
import member2 from '../../assets/member2.png';
import member3 from '../../assets/member3.png';

const About = () => {
  const images = [member1, member2, member3];

  return (
    <div className="about-page">
      <h1>About Us</h1>
      <div className="team-container">
        {teamData.map((member, index) => (
          <PersonalCard 
            key={member.id} 
            image={images[index]} 
            name={member.name} 
            role={member.role} 
            description={member.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default About;
