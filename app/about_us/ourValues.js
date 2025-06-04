import React from "react";
import styles from "./ourValues.module.css";

const values = [
  {
    number: "01",
    title: "Love your craft.",
    description:
      "We're here because we love what we do. It is our passion, hobby, career, and vocation. We are looking for others who feel the same way.",
  },
  {
    number: "02",
    title: "Be bold. Be humble.",
    description:
      "There is no top-down. We lead from the bottom and the edges. Everyone drives. We celebrate ideas over egos, where the best idea wins, regardless of who or where it comes from.",
  },
  {
    number: "03",
    title: "Be better. Always push forward.",
    description:
      "We are on a tireless pursuit to become better and expect those around us to do the same.",
  },
  {
    number: "04",
    title: "Be a Professional",
    description:
      "There is important work to be done. Speak up. Be present. Provide value, with honesty and candour.",
  },
];

const OurValues = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}></h3>
      <h2 className={styles.title}>Rules to Live By</h2>
      <div className={styles.grid}>
        {values.map((value) => (
          <div key={value.number} className={styles.card}>
            <span className={styles.number}>{value.number}</span>
            <h4 className={styles.cardTitle}>{value.title}</h4>
            <p className={styles.description}>{value.description}</p>
            <hr className={styles.divider} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
