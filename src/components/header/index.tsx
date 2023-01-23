import React from 'react';

interface Link {
  description: string;
  link: string;
}

const links = [
  {
    description: 'Google',
    link: 'https://www.google.com.br',
  },
  {
    description: 'Youtube',
    link: 'https://youtube.com.br',
  },
] as Link[];

type Props = {
  logo: string;
};

const Index = ({ logo }: Props) => {
  return (
    <div>
      <nav className="flex items-center justify-around bg-blue-400 p-3 sm:flex-col">
        <h1 className="font-bold">{logo}</h1>
        <ul className="flex items-center">
          {links.map((item) => {
            return (
              <li className="mr-2" key={item.link}>
                <a href={item.link} target="_blank">
                  {item.description}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Index;
