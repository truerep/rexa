import React from 'react';
import {
  TemplateModern, TemplateStarter
} from './TemplatesList';

const TemplateRender = (templateNameKey) => {
  switch (templateNameKey) {
    case 'starter':
      return <TemplateStarter />;
    case 'modern':
      return <TemplateModern />;
    default:
      return <TemplateStarter />;
  }
};

export default TemplateRender;
