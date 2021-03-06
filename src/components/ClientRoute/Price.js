import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPricing } from "../../actions/profile";

const Price = ({ profile, getPricing, price }) => {
  console.log(price);

  useEffect(() => {
    getPricing();
  }, []);
  return profile && profile.isContact && profile.isContact === "approve" ? (
    <div>
      <div>
        <h2 className="flex justify-center font-bold mt-10">Price Data</h2>
        <table class="table-fixed w-full mt-10">
          <thead>
            <tr>
              <th class="w-1/5 ...">check</th>
              <th class="w-1/5 ...">State</th>
              <th class="w-1/5 ...">City</th>
              <th class="w-1/5 ...">Rural Price</th>
              <th class="w-1/5 ...">Urban Price</th>
            </tr>
          </thead>

          <tbody>
            {price &&
              price.map((e) => {
                return (
                  <tr>
                    <td class="w-1/5 ...">{e.check}</td>
                    <td class="w-1/5 ...">{e.State}</td>
                    <td class="w-1/5 ...">{e.city}</td>
                    <td class="w-1/5 ...">{e.ruralPrice}</td>
                    <td class="w-1/5 ...">{e.urbanPrice}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <div>Contact to admin</div>
  );
};

Price.propTypes = {
  getPricing: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  price: state.profile.pricing,
});

export default connect(mapStateToProps, { getPricing })(Price);
