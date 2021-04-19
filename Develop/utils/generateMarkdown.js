// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('render license', license);
  if (license === 'Apache') {
    return `[Github License](${license})`
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  `[license(#license)]`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  `[license(#license)]`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  //let data2 = {};

 //  function newFunction(data) {
     

   //   for(let = i; i < data.length; i++){
     //   console.log(data[0]);
        //for each one of these data[i]s
        //if that value is null or false 
        //then set that value = 'NONE' 
    //  })

    //
 // }

/*
  let data2 = JSON.stringify(data);
  console.log('check data ' + data2);
  console.log('this is data license ' + data.license);
  console.log('this is data2 ' + data2.license);
*/

  return `# ${data.title}


  ## Licensing:
  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${data.license}
  ${renderLicenseBadge(data.license)}
  ## Contributing:
  ${data.confirmContributing}
  ## Tests:
  ${data.confirmTests}
  ## Questions:
  Below are links to my Github page and email in case you would like to contact me or have any further questions.

  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
