'use client';

import { Link } from 'next-view-transitions';
import { ComponentProps } from 'react';

type TransitionLinkProps = ComponentProps<typeof Link>;

export const TransitionLink = ({ children, ...props }: TransitionLinkProps) => {
  return (
    <Link {...props}>
      {children}
    </Link>
  );
};
