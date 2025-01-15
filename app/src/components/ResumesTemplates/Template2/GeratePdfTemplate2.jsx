import { useNavigate } from "react-router";
import { useState } from "react";
import InputsTemplate2 from "./InputsTemplate2";
import { ValidationForm2 } from "./ValidateFormTemplate2";
import ButtonGeratePdf from "../../UI/buttons/ButtonGeratePdf";
import AchorReturnPage from "../../UI/achor/AchorReturnPage";
import jsPDF from "jspdf";
import "./style.css";

export function UserGeneratePDF() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
    formation: "",
    objective: "",
    informationComplement: "",
    completeActivities: "",
  });
  const [errorMessage, setErrorMessage] = useState([]);

  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const createPdf = () => {
    const doc = new jsPDF();
    doc
      .setFontSize(28)
      .setFont("helvetica", "bold")
      .setTextColor("#1a1aff")
      .text(formData.name, 105, 20, { align: "center" });
    doc.setFontSize(12).setFont("helvetica", "normal").setTextColor("#000");
    doc.text(`Endereço: ${formData.address}`, 10, 40);
    doc.text(`Email: ${formData.email}`, 10, 50);
    doc.text(`Contato: ${formData.contact}`, 10, 60);
    doc.setDrawColor("#1a1aff").line(10, 70, 200, 70);

    doc
      .setFontSize(18)
      .setFont("helvetica", "bold")
      .setTextColor("#1a1aff")
      .text("Objetivo", 10, 80);
    doc
      .setFontSize(12)
      .setFont("helvetica", "normal")
      .setTextColor("#000")
      .text(formData.objective, 10, 90, { maxWidth: 190 });
    doc.line(10, 110, 200, 110);

    doc
      .setFontSize(18)
      .setFont("helvetica", "bold")
      .setTextColor("#1a1aff")
      .text("Formação", 10, 120);
    doc
      .setFontSize(12)
      .setFont("helvetica", "normal")
      .setTextColor("#000")
      .text(formData.formation, 10, 130, { maxWidth: 190 });
    doc.line(10, 150, 200, 150);

    doc
      .setFontSize(18)
      .setFont("helvetica", "bold")
      .setTextColor("#1a1aff")
      .text("Atividades Complementares", 10, 160);
    doc
      .setFontSize(12)
      .text(formData.completeActivities, 10, 170, { maxWidth: 190 });
    doc.line(10, 190, 200, 190);

    doc
      .setFontSize(18)
      .setFont("helvetica", "bold")
      .setTextColor("#1a1aff")
      .text("Informações Complementares", 10, 200);
    doc
      .setFontSize(12)
      .text(formData.informationComplement, 10, 210, { maxWidth: 190 });
    doc.save("Curriculo.pdf");
  };

  const handleClickButton = () => {
    const errors = ValidationForm2(formData);
    setErrorMessage(errors);

    errors.length > 0 ? setErrorMessage(errors) : createPdf();
  };

  return (
    <>
      <main>
        <section>
          <div className="inputs-container">
            <InputsTemplate2
              setName={(value) => handleChange("name", value)}
              setAddress={(value) => handleChange("address", value)}
              setEmail={(value) => handleChange("email", value)}
              setContact={(value) => handleChange("contact", value)}
              setFormation={(value) => handleChange("formation", value)}
              setCompleteActivities={(value) =>
                handleChange("completeActivities", value)
              }
              setInformationComplement={(value) =>
                handleChange("informationComplement", value)
              }
              setObjective={(value) => handleChange("objective", value)}
            />
          </div>
          {errorMessage.length > 0 && (
            <div className="error-container">
              {errorMessage.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
          <ButtonGeratePdf
            className="btn-gerate2"
            onClick={handleChange}
          >
            Gerar PDF
          </ButtonGeratePdf>
          <AchorReturnPage onClick={() => navigate("/")} className="template-link">
            Voltar
          </AchorReturnPage>
        </section>
      </main>
    </>
  );
}
