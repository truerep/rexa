import React from 'react';
import {
  Prism,
  TemplateModern,
  TemplateStarter,
  TemplateTechStarter
} from './TemplatesList';
import { MINIMALISTIC_BASIC, MODERN, MODERN_PRISM, TECH_STARTER } from '@/helpers/templateKeys';

const TemplateRender = (templateNameKey) => {
  switch (templateNameKey) {
    case MODERN_PRISM:
      return <Prism />;
    case MINIMALISTIC_BASIC:
      return <TemplateStarter />;
    case MODERN:
      return <TemplateModern />;
    case TECH_STARTER:
      return <TemplateTechStarter />;
    default:
      return <TemplateStarter />;
  }
};

export default TemplateRender;
