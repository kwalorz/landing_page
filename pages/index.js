import Head from "next/head";
import Layout from "../components/layout";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import moment from "moment";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Gallery</title>
      </Head>

      <section id="banner" className="major">
        <div className="inner">
          <header className="major">
            <h1>Hi, my name is Kevin</h1>
          </header>
          <div className="content">
            <p>
              This is a layout converted to
              <br />
              Next JS from basic HTML/CSS
            </p>
            <ul className="actions">
              <li>
                <a href="#one" className="button next scrolly">
                  See Articles
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div id="main">
        <section id="one" className="tiles">
          {posts.map((post) => (
            <article key={post.title.toString()}>
              <span className="image"></span>
              <header className="major">
                <h3>
                  <Link href={`/${post.slug}`} className="link">
                    {post.title}
                  </Link>
                </h3>
              </header>
            </article>
          ))}
        </section>

        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>Project Description</h2>
            </header>
            <p>
              This is a landing page that has been converted and optimized for
              Next JS. Posts are linked to articles written in .md files. Files
              are then parsed and compiled using Marked and gray-matter
              packages.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const sortPosts = () => {
    const allPosts = fs.readdirSync("posts").map((filename) => {
      const file = fs.readFileSync(path.join("posts", filename)).toString();

      const postData = matter(file);
      return {
        content: postData.content,
        title: postData.data.title,
        featured_image: postData.data.featured_image,
        data: postData.data.date,
        slug: postData.data.slug,
      };
    });

    return allPosts.sort(
      (a, b) =>
        new moment(a.date).format("YYYY-MM_DD HH:mn:ss") <
        new moment(b.date).format("YYYY-MM_DD HH:mn:ss")
    );
  };

  return {
    props: {
      posts: sortPosts(),
    },
  };
};
