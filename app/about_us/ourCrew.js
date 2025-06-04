"use client";
import React from "react";
import styles from "./ourCrew.module.css";

const crewMembers = [
  {
    name: "Commander Douglas Hurley",
    role: "Mission Commander",
    image: "/crew/image-douglas-hurley.png",
    specialty: "Strategic Mission Planning",
    description:
      "Veteran of two deep-space missions, Commander Hurley brings calm leadership and precise decision-making to the most critical moments.",
  },
  {
    name: "Mark Shuttleworth",
    role: "Flight Engineer",
    image: "/crew/image-mark-shuttleworth.png",
    specialty: "Robotics & Systems Engineering",
    description:
      "A systems engineer and robotics specialist, Engineer Shuttleworth ensures the spacecraft runs smoothly and safely throughout the mission.",
  },
  {
    name: "Lieutenant Anousheh Ansari",
    role: "Pilot",
    image: "/crew/image-anousheh-ansari.png",
    specialty: "Deep Space Navigation",
    description:
      "Lieutenant Anousheh Ansari, a decorated Air Force pilot, is renowned for her precision and ability to navigate complex interstellar routes.",
    specialty: "Deep Space Navigation",
  },
];

const OurCrew = () => {
  return (
    <div className={styles.crewSection}>
      <p className={styles.crewIntro}>
        At Galactica, our crew is more than a team — we are pioneers. From
        brilliant engineers to fearless pilots, each member brings unique skills
        and passion to push the boundaries of human exploration and redefine the
        future of space travel.
      </p>
      <div className={styles.crewGrid}>
        {crewMembers.map((member) => (
          <div key={member.name} className={styles.crewCard}>
            <img
              src={member.image}
              alt={member.name}
              className={styles.crewImage}
            />
            <h3 className={styles.crewName}>{member.name}</h3>
            <p className={styles.crewRole}>{member.role}</p>
            <p className={styles.crewSpecialty}>
              <strong>Specialty:</strong> {member.specialty}
            </p>
            <p className={styles.crewDescription}>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCrew;
