import React from "react";
import PropTypes from "prop-types";

const PageTitle = ({ title, image }) => {
  return (
    <div className="mt-4 mb-8">
      {image && <img src={image} alt={title} className="w-40 m-auto" />}
      <h1 className="text-3xl font-bold text-center">{title}</h1>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

PageTitle.defaultProps = {
  title: "",
  image: null,
};

export default PageTitle;
