import { useNavigate } from "react-router";
const curriculoImage = "/assents/Curriculo1.png";
const curriculoImage2 = "/assents/Curriculo2.png";
import ResumeTemplates from "../UI/ResumesTemplates";
import "./style.css";

function HomeTemplates() {
  const navigate = useNavigate();

  const templates = [
    {
      src: curriculoImage,
      alt: "modelo Curriculo 1",
      title: "Modelo 1",
      path: "/ResumeTemplateOne",
    },
    {
      src: curriculoImage2,
      alt: "modelo Curriculo 2",
      title: "Modelo 2",
      path: "/ResumeTemplateTwo",
    },
  ];

  return (
    <>
      <header>
        <nav className="welcome-container">
          <h1>Seja bem-vindo ao Gerador de Curriculo...</h1>
        </nav>
      </header>
      <main>
        <section className="template-selection">
          <article>
            <h1 className="main-title">
              Selecione um dos nossos modelos de currículo
            </h1>
          </article>
          <div className="template-list">
            {templates.map((template, index) => {
              return (
                <ResumeTemplates
                  key={index}
                  src={template.src}
                  alt={template.alt}
                  className="template-image"
                  onClick={() => navigate(template.path)}
                >
                  {template.title}
                </ResumeTemplates>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
export default HomeTemplates;
