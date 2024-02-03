import "./globals.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gabriel Andrade"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis dolor necessitatibus aperiam perferendis ab voluptatem, nam suscipit, quibusdam obcaecati tempore aliquid? Culpa libero voluptatibus quisquam obcaecati provident impedit officia laborum!"
          />
        </main>
      </div>
    </>
  );
}
