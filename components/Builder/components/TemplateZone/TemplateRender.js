import React from 'react';
import {
  TemplateDark, TemplateModern, TemplateStarter
} from './TemplatesList';

const TemplateRender = (templateNameKey) => {
  switch (templateNameKey) {
    case 'dark':
      return <TemplateDark />;
    case 'starter':
      return <TemplateStarter />;
    case 'modern':
      return <TemplateModern />;
    default:
      return <TemplateStarter />;
  }
};

export default TemplateRender;
