import React from 'react';
import '../stylesheets/main.css';

const Imprint: React.FC = () => {
  return (
    <div className="imprint-container">
      <h1>(Sample) imprint</h1>
      <p>Information in accordance with Section X TMG:</p>

      <h2>Operator and Contact:</h2>
      <p>
        PawDopt Animal Adoption Services<br />
        Sample Street 123<br />
        12345 Sample City<br />
        Phone Number: 01234/56789<br />
        Email Address: info@pawdopt.com
      </p>

      <h2>Responsible for Content according to § X Abs. X RStV:</h2>
      <p>Reinardus Navellio<br />
         B.Sc. Angewandte Informatik<br />
         HTW Berlin, Fachbereich 4 <br />
         12345 Berlin
      </p>

      <h2>Disclaimer:</h2>
      <p>Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.</p>

      <h2>Copyright:</h2>
      <p>The contents and works created by the site operators on these pages are subject to copyright law. Reproduction, editing, distribution, and any kind of use outside the limits of copyright require the written consent of the respective author or creator.</p>

      <h2>Privacy Policy:</h2>
      <p>It is generally possible to use our website without providing personal data. To the extent that personal data (e.g., name, address, or email addresses) is collected on our pages, this is always done on a voluntary basis, as far as possible. This data will not be passed on to third parties without your express consent.</p>
    </div>
  );
};

export default Imprint;
