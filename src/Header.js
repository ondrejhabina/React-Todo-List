import React from 'react'
import styled from 'styled-components'


const HeaderStyling = styled.header `
  font-size: 58px;
  background-color: #20B2AA;
  border-radius: 8px;
`

function Header() {
    return(
        <HeaderStyling>
            Write it down!
        </HeaderStyling>
      
    );
}

export default Header