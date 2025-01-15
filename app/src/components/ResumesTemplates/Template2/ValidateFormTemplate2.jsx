export function ValidationForm2(formData) {
    const { name, email, contact, formation, objective, completeActivities, informationComplement, address } = formData;

    const errors = [];

    const fields = [
        { value: name, message: 'Por favor digite o campo de Nome completo!!' },
        { value: email, message: 'Por favor digite o campo de Email!!' },
        { value: address, message: 'Por favor digite o campo de Endereço!!' },
        { value: contact, message: 'Por favor digite o campo de Contato!!' },
        { value: objective, message: 'Por favor digite o campo de Objetivo!!' },
        { value: formation, message: 'Por favor digite o campo de Formação!!' },
        { value: completeActivities, message: 'Por favor digite o campo de Atividades Complementares!!' },
        { value: informationComplement, message: 'Por favor digite o campo de Informações Complementares!!' },
    ]
    fields.forEach(({ value, message }) => !value && errors.push(message))
    return errors;
}