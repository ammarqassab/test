import React from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import PageTutorial from '../../../src/components/PageTutorial/PageTutorial'
import getTutorial from '../../../data/dataTutorail'
import { getQuran } from '../../../data/dataQuran'
import QuranSections from '../../../src/components/QuranSections/QuranSections'

const components = { SyntaxHighlighter }

const PostPage = ({id, slug, pages, frontMatter: { title, date }, mdxSource, quran }) => {

  let page;

  for(let x in pages) {
    if(pages[x].link == `/tutorial/${id}/${slug}`) {
      page = pages[x];
      break;
    }
  }

  return (
    <>
      <PageTutorial 
      title={page.name} 
      description={page.description} 
      keywords={`${page.name}, ${page.tutorial}, ${page.sections}`}
      pages={pages}
      >
        <MDXRemote {...mdxSource} components={components}/>
      </PageTutorial>
      <QuranSections quran={quran}/>
    </>
  )
}

const getStaticPaths = async () => {

  const filestutorial = fs.readdirSync(path.join(`data/MDX`))

  let paths = [];

  for (let x in filestutorial) {
    const files = fs.readdirSync(path.join(`data/MDX/${filestutorial[x]}`))
    for(let y in files) {
      paths.push(
        {
          params: {
            id: `${filestutorial[x]}`,
            slug: `${files[y].replace('.mdx', '')}`
          }
        }
      )
    }
  }

  // console.log(paths)

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ ...context }) => {
  const id = context.params.id
  const slug = context.params.slug
  
  const markdownWithMeta = fs.readFileSync(path.join(`data/MDX/${id}`, slug + '.mdx'), 'utf-8')
  
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  // const restutorial = await fetch(`http://localhost:3000/api/${id}`)
  // const apitutorial = await restutorial.json()
  // const tutorial = await JSON.parse(apitutorial)
  // const pages = await tutorial.data
  const pages = getTutorial(`${id}`);
  const quran = getQuran();

  return {
    props: {
      id,
      slug,
      pages,
      frontMatter,
      mdxSource,
      quran
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage
