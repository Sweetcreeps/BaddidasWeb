import React from 'react';
import { Link } from 'react-router-dom';


const Breadcrumbs = ({breadcrumbText, breadcrumbDeeper, pageTitle, crumbTextPath, crumbDeeperPath}) => {
  return (
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <ol>
          <li><Link to='/'>Home</Link></li>
          <li><Link to={crumbTextPath}>{breadcrumbText}</Link></li>
          <li><Link to={crumbDeeperPath}>{breadcrumbDeeper}</Link></li>
        </ol>
        <h2>{pageTitle}</h2>

      </div>
    </section>
  );
}

export default Breadcrumbs;
