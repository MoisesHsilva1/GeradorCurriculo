import { useNavigate } from "react-router";
import { useState } from "react";
import Inputs from "./InputsTemplate1";
import { ValidationForm } from "./ValidateFormTemplate1";
import ButtonGeratePdf from "../../UI/buttons/ButtonGeratePdf";
import AchorReturnPage from "../../UI/achor/AchorReturnPage";
import jsPDF from "jspdf";
import "./style.css";

export function UserGeneratePDF() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    email: "",
    objective: "",
    formation: "",
    completeActivities: "",
    informationComplement: "",
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
      .setFontSize(22)
      .setFont("helvetica", "bold")
      .text(formData.name, 10, 20);
    doc.setFontSize(12).setFont("helvetica", "normal");
    doc.text(`Endereço: ${formData.address}`, 10, 30);
    doc.text(`Telefone: ${formData.contact} / ${formData.email}`, 10, 40);
    doc.setFontSize(16).setFont("helvetica", "bold").text("Objetivo", 10, 50);
    doc
      .setFontSize(12)
      .setFont("helvetica", "normal")
      .text(formData.objective, 10, 60, { maxWidth: 190 });
    doc.setFontSize(16).setFont("helvetica", "bold").text("Formação", 10, 70);
    doc.setFontSize(12).text(formData.formation.split("\n").join("\n"), 10, 80);
    doc
      .setFontSize(16)
      .setFont("helvetica", "bold")
      .text("Qualificações Profissional", 10, 110);
    doc
      .setFontSize(12)
      .text(formData.completeActivities.split("\n").join("\n"), 10, 120);
    doc
      .setFontSize(16)
      .setFont("helvetica", "bold")
      .text("Informações Complementares", 10, 150);
    doc
      .setFontSize(12)
      .text(formData.informationComplement, 10, 160, { maxWidth: 190 });
    doc.save("Curriculo.pdf");
  };

  const handleClickButton = () => {
    setErrorMessage([]);
    const errors = ValidationForm(formData);
    errors.length > 0 ? setErrorMessage(errors) : createPdf();
  };

  return (
    <>
      <div className="input-container">
        <Inputs
          setName={(value) => handleChange("name", value)}
          setAddress={(value) => handleChange("address", value)}
          setContact={(value) => handleChange("contact", value)}
          setEmail={(value) => handleChange("email", value)}
          setObjective={(value) => handleChange("objective", value)}
          setCompleteActivities={(value) =>
            handleChange("completeActivities", value)
          }
          setInformationComplement={(value) =>
            handleChange("informationComplement", value)
          }
          setFormation={(value) => handleChange("formation", value)}
        />
      </div>
      {errorMessage.length > 0 && (
        <ul className="error-message" style={{ color: "red" }}>
          {errorMessage.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      )}
      <ButtonGeratePdf className="btn-gerate" onClick={handleClickButton}>
        Gerar PDF
      </ButtonGeratePdf>
      <AchorReturnPage onClick={() => navigate("/")} className="template-link">
        Voltar
      </AchorReturnPage>
    </>
  );
}
