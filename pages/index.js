import styles from '../styles/Home.module.css';
import NKJV from '../config/nkjv.json';
import Footer from '../components/footer';
import ChapterList from '../components/chapterList';
import Chapter from '../components/chapter';
import Books from '../components/books';
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="dropdown-container">
        <Books />
        <ChapterList />
        <Button variant="info">NKJV</Button>
      </div>
      <Chapter />
      <Footer />
    </div>
  );
}
