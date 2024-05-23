import * as NextLink from 'next/link';

function Link({ url, title }) {
  return (
    <li>
      <NextLink
        className="transition-all text-slate-600 hover:text-white focus-visible:text-white"
        href={url}
        rel={"noreferrer"}
        target={"_blank"}
      >
        {title}
      </NextLink>
    </li>
  );
}

const Navigation = () => {
  return (
    <ul className="flex flex-wrap gap-4 font-medium text-center">
      <Link url="https://github.com/mrobit" title="GitHub" />
      <Link url="https://twitter.com/merthh" title="Twitter" />
      <Link url="/about" title="About" />
      <Link url='mailto:&#114;&#111;&#98;&#105;&#116;&#97;&#105;&#108;&#108;&#101;&#109;&#50;&#49;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;' title='Email' />
      {/* <Link url= */}
    </ul>
  );
};

Navigation.displayName = "Social navigation";

export default Navigation;
