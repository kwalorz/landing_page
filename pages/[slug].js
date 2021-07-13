import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

export default function PostPage({ postData, content }) {
  const imgSrc = `/assets/images/${postData.featured_image}`;
  return (
    <Layout>
      <Head>
        <title>Gallery</title>
      </Head>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner" style={{ position: "relative" }}>
            <header className="major">
              <h1>{postData.title}</h1>
            </header>
            <span
              className="image"
              style={{ position: "relative", height: "50vh", width: "100%" }}
            >
              <Image src={imgSrc} alt="" layout="fill" objectFit="contain" />
            </span>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const post = fs.readFileSync(path.join("posts", `${slug}.md`)).toString();

  const postData = matter(post);
  const content = marked(postData.content);
  return {
    props: {
      slug,
      content,
      postData: postData.data,
    },
  };
};
