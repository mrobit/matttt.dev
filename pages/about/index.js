import Page from "../../components/layouts/page";
import Link from "next/link";
import Navigation from "../../components/Social";

export default function About() {
  return (
    <Page>
      <div className="relative w-full">
        <h1 className="block text-2xl font-bold lg:text-3xl">
          <Link href="/">
            <a>Matt Robitaille</a>
          </Link>
        </h1>

        <Navigation />
      </div>

      <div className="py-6 space-y-5 max-w-prose">
        <h2 className="text-xl font-medium">About me</h2>

        <p>
          I am a Partner and the Director of Development at <Link href='https://www.anchour.com'>Anchour</Link> with over 10 years of experience in full stack web development. From using WordPress to build websites for small businesses to developing custom web applications using Laravel and React, I have worked on a wide range of projects and gained valuable experience in the field.
        </p>

        <p>
          Additionally, I provide freelance web development services, building custom websites and web applications for small businesses and individuals. I enjoy working on diverse projects and leveraging my full stack skills to deliver high-quality solutions.
        </p>
      </div>
    </Page>
  )
}