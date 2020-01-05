import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
  imgSrcs: [string, string][] | null;
}

const StyledDiv = styled.div`
  width: 100%;
  text-align: center;

  .pane {
    display: flex;
    flex-flow: row nowrap;

    .left-pane,
    .right-pane {
      display: inline-block;
      width: 50%;
      margin: 0 auto;
    }
  }
`;

const IntroPage = ({ title, description, children, imgSrcs }: Props) => (
  <StyledDiv>
    <div className="pane">
      <div className="left-pane">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="right-pane">{children}</div>
    </div>
    <>
      {imgSrcs.map(([imgSrc, imgTag], index) => (
        <div key={index}>
          <img src={imgSrc} alt={imgTag} />
          <p>{imgTag}</p>
        </div>
      ))}
      <hr />
    </>
  </StyledDiv>
);

IntroPage.defaultProps = {
  imgSrcs: []
};

export default IntroPage;