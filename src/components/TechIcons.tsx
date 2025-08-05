import {
  FaReact,
  FaNode,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiSanity,
  SiRubyonrails,
  SiStrapi,
  SiGraphql,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

export const techIcons: Record<string, JSX.Element> = {
  react: <FaReact size={30} title="ReactJS" color="#61DBFB" />,
  nodejs: <FaNode size={30} title="NodeJS" color="#68A063" />,
  nextjs: <SiNextdotjs size={30} title="Next.js" color="black" />,
  sanity: <SiSanity size={30} title="Sanity.io" color="#F03E2F" />,
  rails: <SiRubyonrails size={30} title="Ruby on Rails" color="#CC0000" />,
  "react-native": <TbBrandReactNative size={30} title="React Native" color="#61DBFB" />,
  strapi: <SiStrapi size={30} title="Strapi API" color="#2E7EEA" />,
  graphql: <SiGraphql size={30} title="GraphQL" color="#E535AB" />,
};

export const techTitles: Record<string, string> = {
  react: 'ReactJS',
  nodejs: 'NodeJS',
  nextjs: 'Next.js',
  sanity: 'Sanity.io',
  rails: 'Ruby on Rails',
  'react-native': 'React Native',
  strapi: 'Strapi API',
  graphql: 'GraphQL',
};
