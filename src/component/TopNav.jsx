import React from 'react';

import {
  AtlassianNavigation,
  PrimaryButton,
} from '@atlaskit/atlassian-navigation';

const TopNav = () => (
  <AtlassianNavigation
    label="site"
    primaryItems={[
      <PrimaryButton href='/'>Home</PrimaryButton>,
      <PrimaryButton href='/malware'>Malware</PrimaryButton>,
      <PrimaryButton href='/about'>About</PrimaryButton>,
    ]}
  />
);

export default TopNav;