import './style.css';

const InputsTemplate2 = ({
  setName,
  setEmail,
  setContact,
  setAddress,
  setObjective,
  setFormation,
  setInformationComplement,
  setCompleteActivities,
}) => {
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const inputFields = [
    {
      id: 'nameInput',
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
      id: 'email',
      label: 'Email:',
      type: 'email',
      placeholder: 'Digite seu email',
      setter: setEmail,
    },
    {
      id: 'contact',
      label: 'Contato:',
      type: 'number',
      placeholder: 'Digite seu contato',
      setter: setContact,
    },
    {
      id: 'aboutMe',
      label: 'Objetivo:',
      type: 'text',
      placeholder: 'Fale um pouco sobre você',
      setter: setObjective,
    },
    {
      id: 'formation',
      label: 'Formação:',
      type: 'textarea',
      placeholder: 'Digite sua formação',
      setter: setFormation,
    },
    {
      id: 'completeActivities',
      label: 'Aperfeiçoamento e atividades complementares:',
      type: 'textarea',
      placeholder: 'Digite suas atividades complementares',
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
    <div className="form-container">
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

export default InputsTemplate2;
