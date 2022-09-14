function Link({ url, title }) {
  return (
    <li>
      <a
        className="text-slate-600 hover:text-white focus-visible:text-white transition-all"
        href={url}
        rel={"noreferrer"}
        target={"_blank"}
      >
        {title}
      </a>
    </li>
  );
}
export default Social = () => {
  return (
    <ul className="text-lg font-bold flex flex-wrap text-center gap-4">
      <Link url="https://github.com/mrobit" title="GitHub" />
      <Link url="https://twitter.com/merthh" title="Twitter" />
    </ul>
  );
};
