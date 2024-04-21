import React from 'react';
import {
  TemplateModern, TemplateStarter,
  TemplateTechStarter
} from './TemplatesList';

const TemplateRender = (templateNameKey) => {
  switch (templateNameKey) {
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
