import { Post } from "./Post"

export function App() {
  return (
    <>
      <Post 
        author="João Casemiro" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti distinctio beatae ducimus, recusandae eum impedit dicta earum doloremque, culpa at saepe voluptatem? Ipsum dolor dolores, temporibus sunt officiis accusantium quod?"
        />
      <Post 
        author="Pedro Fernandes" 
        content="blablabla"
      />
    </>
  )
}