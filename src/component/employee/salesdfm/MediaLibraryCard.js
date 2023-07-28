import React from "react";
import { Link } from "react-router-dom";

const MediaLibraryCard = () => {
  return (
    <>
      <div className="col-md-2 mb-3">
        <Link to="/sales-dfmp/media-library/office-setup-media">
          <div className="card border-primary border">
            <div className="card-body text-center">
              <img
                src="/assets/images/sub-dept/offices%20setup.png"
                width="85px"
                className="mb-2 border border-primary rounded-circle"
              />
              <h5>
                Office Setup
                <br />
                &nbsp;
              </h5>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MediaLibraryCard;
