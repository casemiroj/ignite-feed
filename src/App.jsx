import { Header } from "./components/Header"
import { Post } from "./Post"
import './styles.css'

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="João Casemiro" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti distinctio beatae ducimus, recusandae eum impedit dicta earum doloremque, culpa at saepe voluptatem? Ipsum dolor dolores, temporibus sunt officiis accusantium quod?"
        />
      <Post 
        author="Pedro Fernandes" 
        content="blablabla"
      />
    </div>
  )
}