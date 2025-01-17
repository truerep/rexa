import React from 'react';
import {
  Prism,
  TemplateEuroPass1,
  TemplateEuroPass2,
  TemplateModern,
  TemplateStarter,
  TemplateTechStarter
} from './TemplatesList';
import { templateKeys } from '@/helpers';

const TemplateRender = (templateNameKey) => {
  switch (templateNameKey) {
    case templateKeys.MODERN_PRISM:
      return <Prism />;
    case templateKeys.MINIMALISTIC_BASIC:
      return <TemplateStarter />;
    case templateKeys.MODERN:
      return <TemplateModern />;
    case templateKeys.TECH_STARTER:
      return <TemplateTechStarter />;
    case templateKeys.EURO_PASS_1:
      return <TemplateEuroPass1 />;
    case templateKeys.EURO_PASS_2:
      return <TemplateEuroPass2 />;
    default:
      return <TemplateStarter />;
  }
};

export default TemplateRender;
