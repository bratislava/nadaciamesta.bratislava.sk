import React, { ReactNode } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface INavigationItemProps {
  url: string;
  children: ReactNode;
  className?: string;
}

const NavigationItem = ({ url, children, className }: INavigationItemProps) => {
  const router = useRouter();

  return (
    <div>
      <Link href={url}>
        <a
          href={url}
          className={cx(
            'w-fit py-2 font-bold hover:text-primary',
            {
              'text-primary':
                url === '/'
                  ? router.pathname === url
                  : router.pathname.startsWith(url),
            },
            className
          )}
        >
          {children}
        </a>
      </Link>
    </div>
  );
};

export default NavigationItem;
