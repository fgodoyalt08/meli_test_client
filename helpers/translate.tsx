const NEW = 'new';
const NEW_ES = 'Nuevo';

const dictonary = {
  [NEW]: NEW_ES
}

export default (word) => {
  return dictonary[word] || word;
};
