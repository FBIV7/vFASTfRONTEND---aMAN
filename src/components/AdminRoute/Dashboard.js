import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getAllReport,
  getClient,
  getVendor,
  getOperation,
  getPrice,
} from "../../actions/admin";
const Dashboard = ({ getAllReport, getClient, getVendor, getOperation }) => {
  useEffect(() => {
    getClient();
    getAllReport();
    getVendor();
    getOperation();
    getPrice();
  }, []);
  return <div>hello</div>;
};

Dashboard.propTypes = {
  getAllReport: PropTypes.func.isRequired,
  getClient: PropTypes.func.isRequired,
  getOperation: PropTypes.func.isRequired,
  getVendor: PropTypes.func.isRequired,
  getPrice: PropTypes.func.isRequired,
};

export default connect(null, {
  getAllReport,
  getClient,
  getVendor,
  getOperation,
  getPrice,
})(Dashboard);
