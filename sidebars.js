/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  articles: [
    {
      type: 'category',
      label: 'Bukvoid',
      items: [
        'Bukvoid/Kruger',
      ]
    },
    {
      type: 'category',
      label: 'Litakcent',
      items: [
        'Litakcent/Kotsarev',
        'Litakcent/tom-hanks'
      ]
    },
  ],
  techdoc: [
    {
      type: 'category',
      label: 'Techdoc',
      items: [
        'techdoc/15'
      ]
    },
    {
      type: 'category',
      label: 'Назва іншого розділу',
      items: [
        'techdoc/Bukvoid1/Kruger1',
      ]
    },
  ],
};

module.exports = sidebars;

