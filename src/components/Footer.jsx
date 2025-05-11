import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-4">
      <div className="container text-center">
        <div className="mb-2">
          <strong>SoftSell</strong> &mdash; Helping businesses recover value from unused software licenses.
        </div>
        <small>&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
