import React from "react";
import PropTypes from "prop-types";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import Button from "../components/Button";

const User = props => {
  return (
    <div className="user">
      <Section>
        <SectionTitle>Info</SectionTitle>
        <SectionBody>
          <div className="user__section">
            <Grid col={2} smCol={2} gap={50}>
              <div className="user__item">
                <div className="user__item">
                  <div className="avatar">
                    <img
                      src={
                        "https://lh4.googleusercontent.com/-dLI98Zo2S2g/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmmKY9vfVtV5ixLCby2gLhDXVKzAw/s96-c/photo.jpg"
                      }
                      alt=""
                    />
                    <Button>Change Avatar</Button>
                  </div>
                  <div className="name">
                    <h3>Họ và tên</h3>
                    <input type="text" />
                  </div>
                  <Button>Cập nhật</Button>
                </div>
              </div>
              <div className="user__item">
                <div className="sdt">
                  <h3>Phone</h3>
                  <input type="text" />
                </div>
                <div className="email">
                  <h3>Email</h3>
                  <input type="text" />
                </div>
              </div>
            </Grid>
          </div>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Địa chỉ giao hàng</SectionTitle>
        <SectionBody>
          <div className="user__section">
            <Grid col={2} smCol={2} gap={50}>
              <div className="user__item">
                <input type="text" />
                <input type="text" />
                <Button>Cập nhật</Button>
              </div>
              <div className="user__item">
                <input type="text" />
                <input type="text" />
              </div>
            </Grid>
          </div>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>Đổi mật khẩu</SectionTitle>
        <SectionBody>
          <div className="user__section">
            <Grid col={2} smCol={2} gap={50}>
              <div className="user__item">
                <input type="text" />
                <input type="text" />
                <Button>Cập nhật</Button>
              </div>
              <div className="user__item">
                <input type="text" />
              </div>
            </Grid>
          </div>
        </SectionBody>
      </Section>
    </div>
  );
};

User.propTypes = {};

export default User;
