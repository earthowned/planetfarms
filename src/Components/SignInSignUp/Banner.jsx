import React from "react";
import styled from "styled-components";

const Container = styled.div`
  @media only screen and (max-width: 1023px) {
    .banner-container {
      display: none;
    }
  }
`;
const BannerImage = styled.div`
  align-items: flex-start;
  display: flex;
  overflow: hidden;
  width: 481px;
`;
const Overlap = styled.div`
  height: 541px;
  margin-top: -0.25px;
  position: relative;
  width: 481px;
`;

const Banner = () => {
  return (
    <Container>
      <BannerImage>
        <Overlap>
          <img src="/img/banner-icon.svg" alt="banner-icon" />
        </Overlap>
      </BannerImage>
    </Container>
  );
};

export default Banner;
