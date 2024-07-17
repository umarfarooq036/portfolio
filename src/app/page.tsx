export default async function Home() {
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/alsiam.png"
              alt="Umar's Profile"
              className="shadow-dark"
            />
            <h1>Muhammad Umar Farooq</h1>
            <p>
              Versatile <strong>FullStack Developer</strong>: Expert in{" "}
              <strong>ReactJS</strong>, <strong>NextJS</strong>,{" "}
              <strong>Flutter</strong> | Crafting Seamless Mobile & Web
              Experiences
            </p>
            <div className="social-links">
              {/* <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a> */}
              <a href="https://www.facebook.com/profile.php?id=100011387377617" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/umarfarooq036" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/umarfaarukk/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/umar-farooq-1b35b6306/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
