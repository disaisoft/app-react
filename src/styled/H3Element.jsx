import React from 'react';
import styled from 'styled-components';

const styledH3 = style.h3`
    color: #212121;
    font-weight: 400;
    margin: 0.5em 0;
`;

const H3Element = ({children}) => <styledH3>{children}</styledH3>;

export default H3Element;