import { html, TemplateResult } from 'lit-html';
import '../src/wc-eend.js';

export default {
  title: 'WcEend',
  component: 'wc-eend',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <wc-eend style="--wc-eend-background-color: ${backgroundColor}" .title=${title}></wc-eend>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
