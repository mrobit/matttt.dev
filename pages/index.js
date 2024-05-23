import Link from "next/link";
import Navigation from "../components/Social";
import MailIcon from "../components/icons/mail";
import Page from "../components/layouts/page";

export default function Home() {
  return (
    <Page>
      <div className="relative">
        <h1 className="block text-2xl font-bold lg:text-3xl">
          <Link href="/">
            <a>Matt Robitaille</a>
          </Link>
        </h1>

        <Navigation />
      </div>
    </Page>
  );
}
