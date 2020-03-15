import '../packages/snap-css/snap-css.css';
import '../packages/snap-css-colors/colors.css';
import '../packages/snap-css-typography/typography.css';
import '../packages/snap-css-layout/layout.css';
import '../packages/snap-css-controls/controls.css';

export default {
  title: 'Design',
};

export const Colors = () => `
  colors
`;

export const Typography = () => `

  <b>PARAGRAPH</b>
  <hr>
  <p>
  Tempore et est exercitationem quidem et. Quasi autem suscipit at voluptas ut voluptate adipisci. Omnis consequatur molestiae accusantium molestiae facilis ut non. Qui architecto nihil inventore quia aut eos at consectetur vel. Unde est atque nisi voluptas dolorem eveniet voluptas vel. Ut quia ipsam totam et ut expedita ut veritatis sunt. Odio sunt culpa culpa sint. Voluptatem vel iste. Fugit et temporibus voluptatibus rerum et alias a dolor tenetur. Ut doloremque aspernatur assumenda fugiat dolorum eum velit sint. Qui saepe facere ab impedit accusamus et nam. Laborum esse blanditiis. Iure quaerat magnam dolor dolores voluptatum quaerat earum. Quis rerum possimus possimus ut est temporibus quidem sint animi.
  </p>
  <p>
  Tempore et est exercitationem quidem et. Quasi autem suscipit at voluptas ut voluptate adipisci. Omnis consequatur molestiae accusantium molestiae facilis ut non. Qui architecto nihil inventore quia aut eos at consectetur vel. Unde est atque nisi voluptas dolorem eveniet voluptas vel. Ut quia ipsam totam et ut expedita ut veritatis sunt. Odio sunt culpa culpa sint. Voluptatem vel iste. Fugit et temporibus voluptatibus rerum et alias a dolor tenetur. Ut doloremque aspernatur assumenda fugiat dolorum eum velit sint. Qui saepe facere ab impedit accusamus et nam. Laborum esse blanditiis. Iure quaerat magnam dolor dolores voluptatum quaerat earum. Quis rerum possimus possimus ut est temporibus quidem sint animi.
  </p>

  <br><br>
  <b>HEADINGS</b>
  <hr/>
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
  <label class="container">
    <input type="checkbox" checked="checked"> One
  </label>
  <br>
  <input type="search" placeholder="Enter a search">
  <br>
  <input type="range">
  <br>
  <input type="reset">
  <br>
  <input type="url">
  <br>
  <input list="browsers" placeholder="Enter browser name">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Google Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
`;

export const Layout = () => `layout`;
