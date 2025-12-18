import React from 'react';

export const logo = (
  <div className="rg-logo">
    <img className="rg-logo__glyph" src="/img/rg-icon.png" alt="RaidGuild crest" />
    <span className="rg-logo__wordmark">RaidGuild Handbook</span>
  </div>
);

const brandTheme = {
  projectLink: 'https://github.com/raid-guild/handbook',
  chatLink: 'https://discord.gg/rejAwfnJKk',
  docsRepositoryBase: 'https://github.com/raid-guild/handbook/tree/main',
  footerText: 'RaidGuild Handbook',
  bannerText: 'Nextra docs theme on Next 16 · RaidGuild brand skin applied.'
};

export default brandTheme;
