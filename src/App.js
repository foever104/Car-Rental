import "./styles.css";
import Header from "./components/Header";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Content4 from "./components/Content4";
import FQA from "./components/FQA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <FQA />
      <Footer />
    </div>
  );
}
