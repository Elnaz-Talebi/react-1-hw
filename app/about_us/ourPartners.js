import React from "react";
import styles from "./ourPartners.module.css";

const partners = [
  { name: "Alphabet", logo: "/business_partners/alphabet-logo.png" },
  { name: "Amazon", logo: "/business_partners/amazon_logo.png" },
  { name: "CBS", logo: "/business_partners/CBC_Logo_White.png" },
  { name: "Microsoft", logo: "/business_partners/Microsoft-Logo-white.png" },
  { name: "Nyu", logo: "/business_partners/nyu-logo.png" },
  { name: "Queens", logo: "/business_partners/QueensLogo_white.png" },
  { name: "Samsung", logo: "/business_partners/samsung-logo.png" },
  { name: "Sodexo", logo: "/business_partners/sodexo-logo.png" },
];

const OurPartners = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.partnerList}>
        {partners.map((partner) => (
          <li key={partner.name} className={styles.partnerItem}>
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className={styles.partnerLogo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurPartners;
