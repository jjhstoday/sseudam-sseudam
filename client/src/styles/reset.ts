import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme
} from 'styled-components';
import { normalize } from 'polished';

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
  /* scroll-behavior: smooth; */
    
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

body {
  font-family: 'Nanum Gothic', sans-serif, -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue';
  line-height: 1;
  margin: 0;
  padding: 0;
  background: #F7F5F3;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0.1rem;
  height: 100%;
  min-height: 100vh;
  color: #404040;
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
  color: #404040;
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
  /* TODO: */
  font-family: 'Nanum Gothic', 나눔고딕, 'Nanum Gothic', '맑은 고딕', HelveticaNeue,
    DroidSans, Sans-serif, Helvetica;
}

/* 웹폰트 CSS */
/* 로고 글씨체 */
@font-face {
    font-family: 'GowunBatang-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunBatang-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;
