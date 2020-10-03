import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Hayden</h2>
        <p className="mt-5">After 5 years in professional aviation I now offer web presence and branding services.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Contact Info</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="mailto:haydenyounglex@hotmail.com">Email</a>
          </li>
          <li>
            <a href="tel:+18596840445">+1 (859) 684-0445</a>
          </li>
          <li>
            <a href="https://haydenyoung.me">haydenyoung.me</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.linkedin.com/in/hayden-young-atp/">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/haydenry">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/ztlhayden">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
