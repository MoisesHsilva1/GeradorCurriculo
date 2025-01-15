import './style.css';

const Inputs = ({
  setName,
  setAddress,
  setContact,
  setEmail,
  setObjective,
  setFormation,
  setCompleteActivities,
  setInformationComplement,
}) => {
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const inputFields = [
    {
      id: 'name',
      label: 'Nome Completo:',
      type: 'text',
      placeholder: 'Digite seu nome completo',
      setter: setName,
    },
    {
      id: 'address',
      label: 'Endereço:',
      type: 'text',
      placeholder: 'Digite seu endereço',
      setter: setAddress,
    },
    {
      id: 'contact',
      label: 'Contato:',
      type: 'number',
      placeholder: 'Digite seu número',
      setter: setContact,
    },
    {
      id: 'email',
      label: 'Email:',
      type: 'email',
      placeholder: 'Digite seu email',
      setter: setEmail,
    },
    {
      id: 'objective',
      label: 'Objetivo:',
      type: 'text',
      placeholder: 'Digite seu objetivo profissional',
      setter: setObjective,
    },
    {
      id: 'formation',
      label: 'Formação:',
      type: 'textarea',
      placeholder: 'Digite sua formação acadêmica',
      setter: setFormation,
    },
    {
      id: 'completeActivities',
      label: 'Qualificação Profissional:',
      type: 'textarea',
      placeholder: 'Digite suas qualificações profissionais',
      setter: setCompleteActivities,
    },
    {
      id: 'informationComplement',
      label: 'Informações Complementares:',
      type: 'text',
      placeholder: 'Digite informações complementares',
      setter: setInformationComplement,
    },
  ];

  return (
    <div className="input-container">
      <form>
        {inputFields.map(({ id, label, type, placeholder, setter }) => (
          <div key={id} className="form-group">
            <label htmlFor={id}>{label}</label>
            {type === 'textarea' ? (
              <textarea
                id={id}
                placeholder={placeholder}
                onChange={handleInputChange(setter)}
              />
            ) : (
              <input
                type={type}
                id={id}
                placeholder={placeholder}
                onChange={handleInputChange(setter)}
              />
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default Inputs;
