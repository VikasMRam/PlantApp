import React from "react";
import "./About.scss";
import nishanth from "./../../Assets/Images/Nishanth.jpg";
import Shylaja from "./../../Assets/Images/Shylaja.jpg";

const members = [
  {
    name: "Nishanth M L",
    role: "ML Engineer",
    linkedInProfile: "https://www.linkedin.com/in/nishanth-m-l-852513139/",
    imgSrc: nishanth,
  },
  {
    name: "Vikas M R",
    role: "UI Developer",
    linkedInProfile: "https://www.linkedin.com/in/vikas-m-r/",
    imgSrc:
      "https://sandora-prod.s3.us-west-2.amazonaws.com/profilepicture-bb046614-1ff4-4514-91de-8685411c9c73.png",
  },
  {
    name: "Dr. Shylaja S S",
    role: "Research Guide",
    linkedInProfile: "https://www.linkedin.com/in/dr-shylaja-s-s-49b4091b/",
    imgSrc: Shylaja,
  },
];
function About() {
  const memberClicked = (member) => {
    window.open(member.linkedInProfile);
  };
  return (
    <div className="pageContainer aboutPage">
      <div className="aboutPageSection">
        <div className="aboutPageHeadingSection">About Us</div>
        <div className="aboutPageContentSection">
          We’re a team of passionate people across many different disciplines
          who have come together to help families and older adults find the
          right senior living community. Combining the power of its advanced
          technology with the high-touch support of a national network of local
          advisors, Seniorly is modernizing senior living discovery.
        </div>
      </div>

      <div className="aboutPageSection">
        <div className="aboutPageHeadingSection">Our story</div>
        <div className="aboutPageContentSection">
          Our CEO, Arthur Bretschneider, is a third-generation senior living
          operator. He learned from his father, who learned from his father, how
          to create a personalized living experience that is respectful of
          someone’s history, attentive to their care needs, and focused on
          building community. A lot has changed for senior housing since his
          grandfather was a pioneer in 1950s. The senior living industry has
          grown rapidly giving consumers the ability to move into new homes that
          match their unique wants and needs to enable them to thrive. Despite
          this positive new reality, finding the right senior living options is
          a process that is often difficult, confusing, and frustrating. So,
          Arthur took on the challenge to solve this problem.
        </div>
      </div>

      <div className="aboutPageSection">
        <div className="aboutPageHeadingSection">Our team</div>
        <div className="aboutPageContentSection">
          <div className="aboutPageTeamSection">
            {members.map((member) => (
              <div
                className="aboutPageTeamMember"
                onClick={() => memberClicked(member)}
              >
                <div className="aboutPageTeamMemberImg">
                  <img src={member.imgSrc} />
                </div>
                <div className="aboutPageTeamMemberName">{member.name}</div>
                <div className="aboutPageTeamMemberRole">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
