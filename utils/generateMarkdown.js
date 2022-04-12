function renderLicenseBadge(license) {

    if (!license) {
        return '';
    }
  
    else if (license === 'GNU AGPLv3') {
        return `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`;        
    }
  
    else if (license === 'GNU GPLv3') {
        return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    }
    
    else if (license === 'GNU LGPLv3') {
        return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
    }
  
    else if (license === 'Mozilla Public License 2.0') {
        return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
    }
  
    else if (license === 'Apache License 2.0') {
        return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    }
  
    else if (license === 'MIT License') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    }
  
    else if (license === 'Boost Software License 1.0') {
        return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
    }
  
    else if (license === 'The Unlicense') {
        return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
    }
    
  }
  
  function renderLicenseLink(license) {
  
      if (!license) {
        return '';
    }
  
    else if (license === 'GNU AGPLv3') {
        return `(https://www.gnu.org/licenses/agpl-3.0)`;
    }
  
    else if (license === 'GNU GPLv3') {
        return `(https://www.gnu.org/licenses/gpl-3.0)`;
    }
  
    else if (license === 'GNU LGPLv3') {
        return `(https://www.gnu.org/licenses/lgpl-3.0)`;
    }
  
    else if (license === 'Mozilla Public License 2.0') {
        return `(https://opensource.org/licenses/MPL-2.0)`;
    }
  
    else if (license === 'Apache License 2.0') {
        return `(https://opensource.org/licenses/Apache-2.0)`;
    }
  
    else if (license === 'MIT License') {
        return `(https://opensource.org/licenses/MIT)`;
    }
  
    else if (license === 'Boost Software License 1.0') {
        return `(https://www.boost.org/LICENSE_1_0.txt)`;
    }
  
    else if (license === 'The Unlicense') {
        return `(http://unlicense.org/)`;
    }
  
  }

  function renderLicenseSection(license) {

    renderLicenseBadge(license);
    
    renderLicenseLink(license);
    
    }
    
    function generateMarkdown(data) {
    
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}   
    ## Description
    ${data.description}   
          
    ## Table of Contents
    * [Installation](#install)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Contributions](#contributions)
    * [Tests](#tests)
    * [Questions](#questions)   
           
    ## <a name="install"> Installation </a>
    ${data.installation}   
      
    ## <a name="usage"> Usage </a>
    ${data.usage}   
       
       
    ## <a name="credits"> Credits </a>
    ${data.credits}   
       
    ## <a name="license"> License </a>
    This application is under the license: ${data.license}
    ${renderLicenseBadge(data.license)}            
    Visit ${renderLicenseLink(data.license)} for more information regarding this license.
    ## ## <a name="contributions"> Contributions </a>
    ${data.contributions}   
        
    ## <a name="tests"> Tests </a>
    ${data.test}   
        
    ## <a name="questions"> Questions? </a>
    GitHub Link: **[${data.github}](https://github.com/${data.github}/)**   
    Email Address: <${data.email}>
    `;
    }
    
    module.exports = generateMarkdown;
    