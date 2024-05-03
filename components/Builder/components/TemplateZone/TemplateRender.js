import React from 'react';
import {
  Prism,
  TemplateModern, 
  TemplateStarter,
  TemplateTechStarter
} from './TemplatesList';

const TemplateRender = (templateNameKey) => {
  switch (templateNameKey) {
    case 'prism':
      return <Prism />;
    case 'starter':
      return <TemplateStarter />;
    case 'modern':
      return <TemplateModern />;
    case 'techstarter':
      return <TemplateTechStarter />;
    default:
      return <TemplateStarter />;
  }
};

export default TemplateRender;
