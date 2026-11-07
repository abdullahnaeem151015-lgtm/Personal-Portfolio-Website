import type { AnchorHTMLAttributes } from 'react';
type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { to: string; hash?: string; params?: { slug: string } };
export function Link({to, hash, params, ...rest}: Props) {
  const path = params ? to.replace('$slug', params.slug) : to;
  return <a href={path + (hash ? '#' + hash : '')} {...rest} />;
}
