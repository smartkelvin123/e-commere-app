import React from "react";
import styled from "styled-components";
import { Fauser, FaChartBar, FaClipboard } from "react-icons";

const Summary = () => {
  const data = [
    {
      icons: <Fauser />,
      digits: 50,
      isMoney: false,
      color: "rgb(102,108,255)",
      title: "users",
      bgColor: "rgba(102,108,255,0.5)",
      percentage: 30,
    },
    {
      icons: <FaClipboard />,
      digits: 50,
      isMoney: false,
      color: "rgb(38,198,249)",
      title: "orders",
      bgColor: "rgba(38,198,249,0.12)",
      percentage: 20,
    },
    {
      icons: <FaChartBar />,
      digits: 500,
      isMoney: false,
      color: "rgb(253,181,40)",
      title: "Earnings",
      bgColor: "rgba(253,181,40,0.5)",
      percentage: 60,
    },
  ];
  return (
    <StyledSummary>
      <Mainstat></Mainstat>
    </StyledSummary>
  );
};

export default Summary;

const StyledSummary = styled.div`
width: 100%,
display:flex

`;
const Mainstat = styled.div`
flex: 2,
width: 100%

`;
const Title = styled.div``;
