import { Header } from "./components/Header"
import { Post } from "./Post"
import { Sidebar } from "./components/Sidebar"
import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
     
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="João Casemiro" 
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti distinctio beatae ducimus, recusandae eum impedit dicta earum doloremque, culpa at saepe voluptatem? Ipsum dolor dolores, temporibus sunt officiis accusantium quod?"
          />
          <Post 
            author="Pedro Fernandes" 
            content="blablabla"
          />
        </main>
      </div>
    </div>
  )
}