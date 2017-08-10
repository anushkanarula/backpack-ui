import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import {
  fontSizeHeading5,
  fontSizeHeading6,
  fontSizeHeading7,
  fontSizeBodySmall,
  fontSizeUppercase,
  fontWeightMedium,
  lineHeightHeading3,
} from "../../styles/typography";
import mq from "../../styles/mq";
import font from "../../utils/font";
import AvatarMarker from "../avatarMarker";
import colors from "../../styles/colors";
import { rgba } from "../../utils/color";

const styles = {
  header: {
    borderBottom: `1px solid ${colors.borderPrimary}`,
    display: "flex",
    flexFlow: "column wrap",
    padding: "32px 16px",

    [`@media (min-width: ${mq.min["768"]})`]: {
      borderBottom: 0,
      flexFlow: "row wrap",
      fontSize: `${(fontSizeHeading5 + 2)}px`,
      padding: "0 0 24px",
    },
  },

  avatarMarker: {
    fontSize: `${fontSizeUppercase}px`,
    fontWeight: fontWeightMedium,
    marginBottom: "16px",
    order: 1,
    textTransform: "uppercase",

    [`@media (min-width: ${mq.min["768"]})`]: {
      fontSize: `${fontSizeBodySmall}px`,
      marginBottom: 0,
      order: 3,
    },

    username: {
      alignSelf: "center",
      color: rgba(colors.textPrimary, 0.5),
    },
  },

  name: {
    fontWeight: fontWeightMedium,
    letterSpacing: ".9px",
    lineHeight: lineHeightHeading3,
    marginBottom: "6px",
    order: 2,

    [`@media (min-width: ${mq.min["768"]})`]: {
      letterSpacing: ".6px",
      marginBottom: 0,
      width: "100%",
    },
  },

  meta: {
    fontFamily: font("miller"),
    fontSize: `${fontSizeHeading7}px`,
    fontStyle: "italic",
    letterSpacing: ".3px",
    marginRight: "24px",
    order: 2,

    [`@media (min-width: ${mq.min["768"]})`]: {
      fontSize: `${fontSizeHeading6}px`,
      letterSpacing: 0,
    },
  },

  visibility: {
    textTransform: "capitalize",
  },
};

const ListHeader = ({
  profileHref,
  avatarSrc,
  username,
  name,
  entries,
  visibility,
  style,
}) => (
  <header
    className="ListHeader"
    style={[styles.header, style]}
  >
    <AvatarMarker
      profileHref={profileHref}
      avatarSrc={avatarSrc}
      username={username}
      style={styles.avatarMarker}
    />

    <h2
      style={styles.name}
    >
      {name}
    </h2>

    <p
      style={styles.meta}
    >{entries.length} places • <span style={styles.visibility}>{visibility}</span></p>
  </header>
);

ListHeader.propTypes = {
  profileHref: PropTypes.string.isRequired,
  avatarSrc: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  entries: PropTypes.arrayOf(PropTypes.string).isRequired,
  visibility: PropTypes.oneOf(["private", "public"]).isRequired,
  style: PropTypes.objectOf(PropTypes.object),
};

ListHeader.styles = styles;

export default radium(ListHeader);
