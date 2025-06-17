"use client";

import Image from "next/image";
import PropTypes from "prop-types";

export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image
          src={`/social_media/${icon}`}
          alt={`${title} icon`}
          width={20}
          height={20}
          style={{ marginRight: "8px", verticalAlign: "middle" }}
        />
        {title}
      </a>
    </li>
  );
};

SocialMediaItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
