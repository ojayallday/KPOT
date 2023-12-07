// TopBar.js

import React from 'react';
import styled from 'styled-components';

// Styled components
const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333; /* Add your desired background color */
  color: #fff; /* Add your desired text color */
`;

const LeftContent = styled.div`
  /* Add styles for the left content, e.g., logo */
`;

const RightMenu = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;
`;

const MenuItem = styled.span`
  /* Add styles for menu items */
`;

// TopBar component
const TopBar = () => {
  return (
    <TopBarWrapper>
      {/* Left side content */}
      <LeftContent></LeftContent>

      {/* Right side menu */}
      <RightMenu>
        {/* Add your menu items or components here */}
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </RightMenu>
    </TopBarWrapper>
  );
};

export default TopBar;
