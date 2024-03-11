/* eslint-disable react/react-in-jsx-scope */
import {
  TemplateDark, TemplateStarter
} from './TemplatesList';

const TemplateRender = (templateNameKey) => {
  switch (templateNameKey) {
    case 'dark':
      return <TemplateDark />;

    case 'starter':
    default:
      return <TemplateStarter />;
  }
};

export default TemplateRender;
