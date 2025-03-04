import zoro from "./assets/zoro.png";
import alleye from "./assets/alleyes.png"
import "./Title.css";
function Title(){
    return (<div>
        <div className="container">
        <header className="main-header">
            <h1>📘 The Code Magazine</h1>
            <img width={"200px"} src={alleye} alt="All eyes on me Tee" />
            <p id="author">Posted by <strong>Laura Jones</strong> on Monday, June 21st 2027</p>
            <img width="200px" src={zoro} alt="zoro hoodie" />

            <nav>
                <a href="blog.html">Blog</a>
                <a href="#">Challegnges</a>
                <a href="#">Flexbox</a>
                <a href="#">CSS Grid</a>
            </nav>
        </header>
        
        <article>
                
            <h2>The Basic Language of the Web: <a href="http://google.com" target="_blank">Google</a>HTML</h2>
            <p>All modern websites and web applications are built usin three <em>fundamental</em> technologies: HTML, CSS and JavaScript. These are the languages of the web.</p>
            <p>In this post, let's focus on HTML. We will learn what HTML is all about, and why you too should learn it.</p>
            <h3>What is HTML</h3>
            <p>HTML stands for <strong> HyperText Markup Language</strong>. It's a markup language that web developers use to structure and describe the content of a webpage (not a programming language)</p>
            <p>HTML consists of elements that describe different types of content: paragraphs, links, headings, images, video, etc. Web browsers understand HTML and render HTML code as websites.</p>
            <p>In HTML, each element is made up of 3 parts:</p>
            <ol><li>The opening tag</li>
            <li>The closing tag</li>
            <li>The actual element</li></ol>
            <h3>Why should you learn HTML?</h3>
            <p>There are countless reasons for learning the fundamental language of the web. Here are 5 of them:</p>
            <ul><li>To be able to use the fundamental web dev language</li>
            <li>To hand-craft beautiful websites instead of relying on tools like Wordpress or Wix</li>
            <li>To build web applications</li>
            <li>To impress friends </li>
            <li>To have fun 😁</li></ul>
            <p>Hopefully you learned something new here. See you next time!</p>
        </article>

        <aside>
            <ul>
                <li className="related-authors"><img width="80px" src={zoro} alt="zoro" /><a href="#">How to learn web development</a> By jonas Schmedtmann</li>
                <li className="related-authors"><img width="80px" src={alleye} alt="all eyes" /><a href="#">The Unknown Power of CSS</a> By Jim Dillon</li>
                <li className="related-authors"><img width="80px" src={zoro} alt="zoro" /><a href="#">Why JavaScript is Awesome</a> By Matilda</li>
            </ul>
        </aside>

        <footer>
           <p>
           Copyright &copy; 2027 by The Code Magazine
            </p>
        </footer>
        </div>
        <button className="button-like">❤ like</button>

    </div>)
}

function Description(){
    return (<div>

      <h3>My name is Sadi, and this is my first webpage :D</h3>
    </div>)
  }

export {Title, Description}