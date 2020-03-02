import '../packages/snap-css/snap-css.css';
import '../packages/snap-css-colors/colors.css';
import '../packages/snap-css-typography/typography.css';
import '../packages/snap-css-layout/layout.css';
import '../packages/snap-css-forms/forms.css';
import '../packages/snap-css-buttons/buttons.css';

export default {
  title: 'Design',
};

export const Colors = () => `
  colors
`;

export const Typography = () => `
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
`;

export const Forms = () => `
  <input type="text" placeholder="Type text">
  <br>
  <input type="email" placeholder="type an e-mail address">
  <br>
  <input type="color" placeholder="Color picker">
  <br>
  <input type="file" placeholder="Color picker">
  <br>
  <input type="date" placeholder="Color picker">
  <br>
  <input type="month" placeholder="Color picker">
  <br>
  <input type="time" placeholder="Color picker">
  <br>
  <input type="number">
  <br>
  <input type="password" placeholder="Enter a password">
  <br>
  <input type="checkbox">
  <br>
  <input type="search" placeholder="Enter a search">
  <br>
  <input type="range">
  <br>
  <input type="reset">
  <br>
  <input type="url">
`;

export const Layout = () => `layout`;
