'use client';
import { Colours } from '@/components/Common';
import { motion } from 'framer-motion';
import { rem } from 'polished';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`  

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family: var(--primary-font);
  color: white;
	vertical-align: baseline;
	box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	min-height: 100vh;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export const GridLayout = styled.main`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  min-height: 100vh;
  background: ${Colours.primary.bg};
`;

export const HeaderContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: min-content;
  min-width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const ContentContainer = styled.section`
  grid-area: content;
  display: flex;
  justify-content: center;
  height: min-content;
  padding: 40px;
  min-width: 100%;
`;

export const HomeContainer = styled(motion.section)`
  max-width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${rem(50)};
`;
