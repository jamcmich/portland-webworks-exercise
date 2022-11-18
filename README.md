> Documentation is a WIP

<!-- Heading -->
<section>
    <div align='center'>
        <img src='public/assets/icons/scrfao-favicon.svg' alt='South Carolina Revenue and Fiscal Affairs Office logo' width='100' height='100' />
        <h1>South Carolina Revenue and Fiscal Affairs Office Website</h1>
        <p>A single-page application simulating the South Carolina Revenue and Fiscal Affairs Office website.</p>
    </div>
    <p align='center'>
        <a href='#demo'>Demo</a> •
        <a href='#features'>Features</a> •
        <a href='#technologies-used'>Technologies Used</a> •
        <a href='#screenshots'>Screenshots</a> •
        <a href='#development-process'>Development Process</a> •
        <a href='#code-examples'>Code Examples</a> •
        <a href='#future-improvements'>Future Improvements</a>
    </p>
</section>

<!-- Demo -->

<h3 id="demo">🔍 Demo</h3>

- Original: [https://rfa.sc.gov/](https://rfa.sc.gov/)
- Re-creation: [https://jamcmich.github.io/portland-webworks-exercise/](https://jamcmich.github.io/portland-webworks-exercise/)

<!-- Features -->

<h3 id="features">✨ Features</h3>

> Note: The re-created website has identical elements and styling to <a href="https://rfa.sc.gov/">the original</a> but includes minor stylistic differences and improvements.

- Reusable and scalable styles for buttons, typography, breakpoints, etc.
- Responsive flexbox and grid elements for mobile, tablet, laptop, and desktop compatibility
- Semantic HTML, Aria labels, and tabbable content to encourage accessibility

<!-- Technologies Used -->
    
<h3 id="technologies-used">🧰 Technologies Used</h3>

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![WebStorm](https://img.shields.io/badge/webstorm-143?style=for-the-badge&logo=webstorm&logoColor=white&color=black)

<ul>
    <li><a href="https://vitejs.dev/">Vite.js</a> for more flexible and efficient production and build environments</li>
    <li><a href="https://vuejs.org/guide/scaling-up/sfc.html">Vue.js single-file components</a> using the <a href="https://vuejs.org/guide/introduction.html#api-styles">Options API</a></li>
    <li>Automated CI/CD build and deployment jobs via <a href="https://github.com/features/actions">GitHub Actions</a></li>
    <li><a href="https://sass-lang.com/">SASS stylesheets<a/> and <a href="https://getbem.com/">BEM class names</a></li>
    <li><a href="https://eslint.org/">ESLint</a> and <a href="https://www.typescriptlang.org/">TypeScript</a> integration</li>
</ul>

<!-- Screenshots -->
    
<h3 id="screenshots">📷 Screenshots</h3>

<h4>Website Preview</h4>
<img src="readme/website-preview.gif" alt="GIF of the website" />

<!-- Project Configuration -->
    
<h3 id="project-configuration">⚙️ Project Configuration</h3>
    
<h4>Development Environment</h4>
<p>Vite.js is my favorite tooling library for scaffolding frontend projects because of its lightweight and efficient features. My project is configured with Vue 3, SASS, TypeScript, and ESLint. Although TypeScript was unnecessary for the majority of development, I included it in case the project was expanded in the future.</p>

<p>I also decided to transition from Visual Studio Code to WebStorm for this project and ended up thoroughly enjoying the product, its features, and a more professional development experience. There were many instances where WebStorm made it simple and easy to refactor my entire project, manage npm installations, or setup Vue and ESLint integrations automatically. Needless to say, it's my go-to IDE now and I encourage other developers to give it a try!</p>
    
<h4>Stylesheets</h4>
<p>My approach to building responsive websites leverages flexbox and grid layouts. While some developers prefer to use Tailwind, Bootstrap, or Vuetify to cover all of their styling necessities, I decided SASS would be a more suitable, lightweight solution for building a single-page application. Many of the sections, typography, layouts, buttons, and other components on the SCRFAO website follow a consistent design pattern which I referenced to create global variables, mixins, placeholders, and styles.</p>
    
<p>For iconography, I researched and tested a variety of popular icon solutions to use with Vue and eventually settled with <a href="https://icon-sets.iconify.design/">Iconify</a>. I was extremely impressed with how seamless the library integrated into my existing project and its included support for a variety of frameworks, customization options, and open source tools. Material icons were used throughout the page for consistency and I sourced the custom assets (logos, images, etc.) directly from the SCRFAO website.</p>
    
<p>Even though this was a small scale project, I followed conventional methods for organizing SASS stylesheets as partials to future-proof the project and keep its file structure maintainable. Partials enable developers to split styles across different components and compile SASS more efficiently. The end result is partitioned code that remains lightweight and flexible. I also utilized <a href="https://getbem.com/">BEM methodologies</a> in tandem with SASS to create an organized, nested stylesheet structure. </p>
    
<h4>File Structure</h4>
<p>By convention Vue assets are served from the public folder and all paths are statically replaced in Vite's build script. From the Vite documentation: <blockquote>"... [assets] will be served at root path <code>/</code> during dev, and copied to the root of the dist directory as-is... You should always reference <code>public</code> assets using root absolute path - for example, <code>public/icon.png</code> should be referenced in source code as <code>/icon.png</code>."</blockquote></p>

<!-- Development Process -->

<h3 id="development-process">🛠️ Development Process</h3>
