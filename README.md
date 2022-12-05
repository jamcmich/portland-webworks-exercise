<!-- Heading -->

![South Carolina Revenue and Fiscal Affairs Office logo](public/assets/readme/site-logo.svg)

# South Carolina Revenue and Fiscal Affairs Office Website

A single-page application simulating the South Carolina Revenue and Fiscal Affairs Office website.

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- Project Configuration
    - Development Environment
        - Tech Stack
        - Styling System
    - File Structure
        - Assets
        - Components
        - Stylesheets

<!-- Demo -->

## 🔍 Demo

- Original: [https://rfa.sc.gov/](https://rfa.sc.gov/)
-
Re-creation: [https://jamcmich.github.io/portland-webworks-exercise](https://jamcmich.github.io/portland-webworks-exercise/)

<!-- Features -->

## ✨ Features

> Note: The re-created website has identical elements and styling to [the original](https://rfa.sc.gov/) but includes
> minor stylistic differences and improvements.

- Reusable and scalable styles for buttons, typography, breakpoints, etc.
- Responsive flexbox and grid elements for mobile, tablet, laptop, and desktop compatibility
- Semantic HTML, Aria labels, and tabbable content to encourage accessibility

<!-- Technologies Used -->

## 🧰 Technologies Used

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&amp;logo=vite&amp;logoColor=white)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&amp;logo=vuedotjs&amp;logoColor=%234FC08D)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&amp;logo=githubactions&amp;logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&amp;logo=SASS&amp;logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&amp;logo=eslint&amp;logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white)
![WebStorm](https://img.shields.io/badge/webstorm-143?style=for-the-badge&amp;logo=webstorm&amp;logoColor=white&amp;color=black)

- [Vite.js](https://vitejs.dev/) for more flexible and efficient production and build environments
- [Vue.js single-file components](https://vuejs.org/guide/scaling-up/sfc.html) using
  the [Options API](https://vuejs.org/guide/introduction.html#api-styles)
- Automated CI/CD build and deployment jobs via [GitHub Actions](https://github.com/features/actions)
- [SASS stylesheets](https://sass-lang.com/) and [BEM class names](https://getbem.com/)
- [ESLint](https://eslint.org/) and [TypeScript](https://www.typescriptlang.org/) integration

<!-- Project Configuration -->

## ⚙️ Project Configuration

### Development Environment

#### Tech Stack

The project is set up via Vite.js and configured with Vue 3, SASS, TypeScript, and ESLint. While TypeScript was
unnecessary for the majority of development, I included it in case the project was expanded in the future.

Additionally, I decided to transition from Visual Studio Code to WebStorm for this project and ended up thoroughly
enjoying the software, its features, and a refreshing developer experience. There were many scenarios where WebStorm
made it simple and easy to refactor my entire project, manage npm installations, or setup Vue and ESLint integrations
automatically. Needless to say, it's my go-to IDE now and I encourage other developers to give it a try!

<h4>Styling System</h4>
<p>My approach to building responsive websites leverages flexbox and grid layouts. While some developers prefer to 
use Tailwind, Bootstrap, or Vuetify to cover all of their styling necessities, I decided SASS would be a more 
suitable, lightweight solution for building a single-page application.</p>

<p>I utilized <a href="https://getbem.
com/">BEM methodologies</a> in tandem with SASS to create an organized, nested class structure. Many of the sections,
typography, layouts, buttons, and other components on the SCRFAO website follow a consistent design pattern which I 
referenced to create my own system of global variables, mixins, placeholders, and styles.</p>

<p>For iconography, I researched and tested a variety of popular icon solutions to use with Vue and eventually settled with <a href="https://icon-sets.iconify.design/">Iconify</a>. I was impressed with how seamless the library integrated into my existing project and its included support for a variety of frameworks, customization options, and open source tools. Material icons were used throughout the page for consistency and I sourced the custom assets (logos, images, etc.) directly from the SCRFAO website.</p>

<h3>File Structure</h3>
<h4>Assets</h4>
<p>By convention Vue assets are served from the <code>public</code> folder and all paths are statically 
replaced in Vite's build script. From the Vite documentation: <blockquote>"... [assets] will be served at root path 
<code>/</code> during dev, and copied to the root of the dist directory as-is... You should always reference 
<code>public</code> assets using root absolute path - for example, <code>public/icon.png</code> should be referenced 
in source code as <code>/icon.png</code>."</blockquote></p>

<p>Knowing this, I've created the below file structure to quickly reference and serve static assets.

<blockquote>Note: The <code>icons</code> folder contains a few custom-made icons (i.e. logo, favicon) while the 
Material 
icons (i.e. magnifying glass, hamburger menu, etc.)
are served from Iconify's library.
</blockquote></p>
<img src="public/assets/readme/assets-file-structure.png" />

<h4>Components</h4>
<p>Vue components are organized in a flat hierarchy within the project's <code>src</code> folder. This is a 
straightforward 
solution 
to using single-file components while adhering to the following conventions:</p>
<ul>
    <li>PascalCase to aid autocompletion features within code editors and stay consistent with JS(X) templates</li>
    <li>Filename prefixes (i.e. <code>Base</code>, <code>App</code>) to denote app-wide reusable components and 
group them within the project folder</li>
    <li>Multi-worded component names to avoid Vue element compilation (i.e. a <code>Table</code> component would become 
misconstrued with the HTML
<code>table</code> tag)</li>
</ul>

<p>Below is an example of the project's <b>component</b> structure:</p>
<img src="public/assets/readme/component-file-structure.png" />

<h4>Stylesheets</h4>
<p>Even though this was a small scale project, I followed conventional methods for organizing SASS stylesheets as partials to future-proof the project and keep its file structure maintainable. Partials enable developers to split styles across different components and compile SASS more efficiently. The end result is partitioned code that remains lightweight and flexible.</p>

<p>As shown in the example below, each partial is individually imported into its respective component...</p>
<img src="public/assets/readme/partials-import-example.png">

<p>...and forms the resulting <b>stylesheet</b> 
structure:</p>
<img src="public/assets/readme/sass-file-structure.png">

<p>You might notice the <code>global</code> folder which serves to organize reusable styles utilized across multiple 
components. These stylesheets are imported into the <code>global.scss</code> file and passed as preprocessed options 
via Vite's configuration file. This setup allows SASS methods to be used without needing to import them 
individually and ensures intellisense is available when writing code.</p>
<img src="public/assets/readme/vite-preprocessor-options.png" />

<!-- Development Process -->

<h3 id="development-process">🛠️ Development Process</h3>