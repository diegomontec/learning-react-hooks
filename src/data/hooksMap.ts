import type { HookItem } from "../types/HookItem";

export const HooksMap: Record<string, HookItem> = {
  usestate: {
    title: "useState",
    description:
      "O useState é utilizado para armazenar o número de telefone e a mensagem do usuário, permitindo que o componente reaja a mudanças nesses valores. Quando o usuário preenche o formulário e clica no botão de enviar, o estado é atualizado e a mensagem é enviada via WhatsApp utilizando a URL formatada com os dados do formulário.",
    description_en:
      "useState is used to store the user's phone number and message, allowing the component to react to changes in these values. When the user fills out the form and clicks the send button, the state is updated and the message is sent via WhatsApp using a URL formatted with the form data.",
    explanation:
      "O useState é um Hook do React que permite adicionar o estado local a componentes funcionais. Ele retorna um par: o estado atual e uma função para atualizá-lo. Neste exemplo, usamos useState para armazenar o número de telefone e a mensagem do usuário, permitindo que o componente reaja a mudanças nesses valores.",
    explanation_en:
      "useState is a React Hook that allows you to add local state to functional components. It returns a pair: the current state and a function to update it. In this example, we use useState to store the user's phone number and message, allowing the component to react to changes in these values.",
    link: "/usestate",
  },
  useref: {
    title: "useRef",
    description:
      "Este componente demonstra como utilizar o React Hook useRef para acessar diretamente um elemento DOM.",
    description_en:
      "This component demonstrates how to use the React Hook useRef to directly access a DOM element.",
    explanation: "",
    explanation_en: "",
    link: "",
  },
  usecallback: {
    title: "useCallback",
    description:
      "Este componente demonstra como utilizar o React Hook useCallback para otimizar funções que são passadas como props, evitando re-renderizações desnecessárias.",
    description_en:
      "This component demonstrates how to use the React Hook useCallback to optimize functions passed as props, preventing unnecessary re-renders.",
    explanation: "",
    explanation_en: "",
    link: "",
  },
  usecontext: {
    title: "useContext",
    description:
      "Este componente demonstra como utilizar o React Hook useContext para compartilhar estado entre componentes sem precisar passar props manualmente.",
    description_en:
      "This component demonstrates how to use the React Hook useContext to share state between components without manually passing props.",
    explanation: "",
    explanation_en: "",
    link: "",
  },
  useeffect: {
    title: "useEffect",
    description:
      "Este componente demonstra como utilizar o React Hook useEffect para executar efeitos colaterais, como chamadas de API ou manipulação de eventos, após a renderização do componente.",
    description_en:
      "This component demonstrates how to use the React Hook useEffect to execute side effects, such as API calls or event handling, after the component has rendered.",
    explanation: "",
    explanation_en: "",
    link: "",
  },
  usememo: {
    title: "useMemo",
    description:
      "Este componente demonstra como utilizar o React Hook useMemo para memorizar valores calculados, evitando cálculos desnecessários em re-renderizações.",
    description_en:
      "This component demonstrates how to use the React Hook useMemo to memoize calculated values, avoiding unnecessary calculations during re-renders.",
    explanation: "",
    explanation_en: "",
    link: "",
  },
  usereducer: {
    title: "useReducer",
    description:
      "Este componente demonstra como utilizar o React Hook useReducer para gerenciar estados complexos de forma mais eficiente que o useState.",
    description_en:
      "This component demonstrates how to use the React Hook useReducer to manage complex states more efficiently than useState.",
    explanation: "",
    explanation_en: "",
    link: "",
  },
};