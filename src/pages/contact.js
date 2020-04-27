/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';

import Headline from '../components/headline';
import Layout from '../components/layout';
import SEO from '../components/seo/seo';

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact: let's get in touch! | simonswiss.com"
      description="I am friendly. 👋 And Swiss. 🇨🇭 Which means I am both nice and reliable! Want to get in contact? Say hello, don’t be shy!"
      isPage={true}
    />
    <article css={tw`lg:text-lg`}>
      <Headline>Let's have a chat!</Headline>
      <div>
        <p>
          I am friendly.{' '}
          <span role="img" aria-label="emoji">
            👋
          </span>{' '}
          And Swiss. 🇨🇭 Which means I am both nice and reliable!
        </p>
        <p>
          Send me <a href="mailto:simon@simonswiss.com">an e-mail</a>, don’t be
          shy!
        </p>
      </div>
    </article>
  </Layout>
);

export default ContactPage;
