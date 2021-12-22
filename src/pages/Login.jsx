import React from "react";
import PropTypes from "prop-types";
import Helmet from "../components/Helmet";

import Section, { SectionBody, SectionTitle } from "../components/Section";
import LoginPopUp from "../components/LoginPopUp";

const Login = props => {
  return (
    <Helmet title="Login">
      <Section>
        <SectionTitle>Login</SectionTitle>
        <SectionBody>
          <LoginPopUp />
        </SectionBody>
      </Section>
    </Helmet>
  );
};

Login.propTypes = {};

export default Login;
