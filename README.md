# My Portfolio: Created with React

## Description

Deployed Portfolio [here](https://princessjenn.github.io/my-portfolio/),

Repository Link [here](https://github.com/princessjenn/my-portfolio.git).


`GIVEN a single-page application portfolio for a web developer`

`WHEN I load the portfolio`

`THEN I am presented with a page containing a header, a section for content, and a footer`

`WHEN I view the header`

`THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio`

`WHEN I view the navigation titles`

`THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted`

`WHEN I click on a navigation title`

`THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted`

`WHEN I load the portfolio the first time`

`THEN the About Me title and section are selected by default`

`WHEN I am presented with the About Me section`

`THEN I see a recent photo or avatar of the developer and a short bio about them`

`WHEN I am presented with the Portfolio section`

`THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository`

`WHEN I am presented with the Contact section`

`THEN I see a contact form with fields for a name, an email address, and a message`

`WHEN I move my cursor out of one of the form fields without entering text`

`THEN I receive a notification that this field is required`

`WHEN I enter text into the email address field`

`THEN I receive a notification if I have entered an invalid email address`

`WHEN I am presented with the Resume section`

`THEN I see a link to a downloadable resume and a list of the developer’s proficiencies`

`WHEN I view the footer`

`THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform`


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)


## Installation

### Deploy React App to GitHub Pages:

* The script I will use is outlined in the `package.json` file for the React app. It is listed under the `scripts` section of the `package.json` for the `build` key-value pair.

* This command will output to a `/build` directory. This includes a `/build/static` directory that will contain all the required JavaScript and CSS files.

* Every file in this folder contains a unique hash of the file contents. The hash tells the browser how to download a fresh copy of the application every time you build it.

Now, we can get the React app ready for GitHub Pages!

### Add Homepage to package.json

First we'll need to open the `package.json` file for the client, then add an entry called `homepage`. The value of `homepage` should have `{username}` as your GitHub username, and `{repo-name}` as the name of the GitHub repository being created: 

```
https://{username}.github.io/{repo-name}
```

The updated `package.json` should look something like this:

```t
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://myusername.github.io/my-app",
```

### Install gh-pages and Add Deploy Scripts

To publish my app, I we need to install the `gh-pages` npm package. Then, add a few more scripts to `package.json`. Start by simply adding the `gh-pages` dependency:

```sh
npm i gh-pages
```

Now add the `predeploy` and `deploy` scripts to `package.json`. 

```text
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

# Deploy the Site

Now deploy the React app to GitHub Pages. To do this, run the following command:

```sh
npm run deploy
```

Check that your source branch is `gh-pages`,

Finally, refresh the page to make sure that the page has been published. This notification will appear in green.


## Usage


## License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the terms of the MIT license.

## Tests


## Questions

Ask me on Github: (https://https://github.com/princessjenn)

Email Me for more questions: j.eckenrode@me.com