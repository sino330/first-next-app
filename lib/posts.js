import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirPath = path.join(process.cwd(), "posts");

export function getPosts() {
  const postNames = fs.readdirSync(postsDirPath);
  //postNames==["first-post-md"]

  return postNames.map((postName) => {
    //各postを取得。front matterを解析
    const postPath = path.join(postsDirPath, postName);
    const result = matter(fs.readFileSync(postPath, "utf-8"));

    return result.data;
  });
}

export function getIds() {
  const postNames = fs.readdirSync(postsDirPath);

  return postNames.map((postName) => {
    return {
      params: {
        id: postName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getPostById(id){
    const postPath=path.join(postsDirPath,`${id}.md`)

    const result=matter(fs.readFileSync(postPath,"utf-8"))

    return{
        id,
        ...result.data,
        content: result.content
    }
}