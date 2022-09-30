import React from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import QuranPage from '../../src/components/QuranPage/QuranPage'
import QuranSections from '../../src/components/QuranSections/QuranSections'
import { getQuran } from '../../data/dataQuran'

const components = {}

const PostPage = ({ slug, frontMatter: { title, description }, mdxSource, quran }) => {

  let page;

  for(let x in quran) {
    if(quran[x].link == `/quran/${slug}`) {
      page = quran[x];
      break;
    }
  }

  return (
    <>
      <QuranPage title={page.name} description={page.description} keywords={`${page.name}, ${page.description}`} quran={quran} slug={`/quran/${slug}`}>
        <MDXRemote {...mdxSource} components={components} />
      </QuranPage>
      <QuranSections quran={quran}/>
    </>
  )
}

const getStaticPaths = async () => {

  const filesquran = fs.readdirSync(path.join(`data/quran`))

  let paths = [];

  for (let x in filesquran) {
    paths.push(
      {
        params: {
          slug: `${filesquran[x].replace('.mdx', '')}`
        }
      }
    )
  }

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ ...context }) => {
  const slug = context.params.slug
  
  const markdownWithMeta = fs.readFileSync(path.join(`data/quran`, slug + '.mdx'), 'utf-8')
  
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  const quran = getQuran();

  return {
    props: {
      slug,
      frontMatter,
      mdxSource,
      quran
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage
