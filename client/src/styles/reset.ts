import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme
} from 'styled-components';
import { normalize } from 'polished';
import { lightPalette } from './color';

export const GlobalStyle: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
/* CSS 초기화 */
${normalize()}
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video,
a,
input,
textarea,
li {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  font: inherit;
	vertical-align: baseline;
  text-decoration: none;
  box-sizing: border-box;
  list-style: none;
  letter-spacing: inherit;
  user-select: none;
  font-size: 10px;
    
  &:not(input) {
    &:focus {
    opacity: 1;
    }

    &:focus:not(:focus-visible) {
      outline: none;
      box-shadow: none;
    }
  }
}

html {
  max-width: 600px;
  margin: 0 auto;
  background: #aeaeae;

}

body {
  font-family: GowunDodum-Regular, 'Nanum Gothic', sans-serif, -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue';
  line-height: 1;
  margin: 0;
  padding: 0;
  background: ${lightPalette.themePrimary};
  z-index: -2;
  position: relative; 

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0.1rem;
  height: 100%;
  color: ${lightPalette.themeSecondaryFont};
  max-width: 600px;
  margin: 0 auto;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
  box-sizing: border-box;
}

nav ul,
li {
  list-style: none;
}

a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  text-decoration: none;
  vertical-align: baseline;
  color: ${lightPalette.themeSecondaryFont};
  background: transparent;

  
}

img {
  vertical-align: top;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  vertical-align: top;
  appearance: none;
  border-radius: 0;
}
input::-ms-clear,
input::-ms-reveal{
	display:none;width:0;height:0;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration{
	display:none;
}

section {
  min-height: calc(100vh - 40px);
  position: relative; 
}

input, textarea {
  -moz-user-select: auto;
  -webkit-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
}

/* 웹폰트 CSS */
@font-face {
    font-family: 'GowunBatang-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunBatang-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

/* 로고 글씨체 */
@font-face {
    font-family: 'designhouseOTFLight00';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/designhouseOTFLight00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

/* 웹 애플리케이션 전체 글씨체 */
@font-face {
    font-family: 'GowunDodum-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;
