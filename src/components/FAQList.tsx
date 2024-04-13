import questions from "../data/faq";
import FAQItem from "./FAQItem";
const FAQList = () => {
  return (
    <ul role="list" className="flex flex-col gap-6">
      {questions.map((question, index) => (
        <FAQItem key={index} question={question} />
      ))}
    </ul>
  );
};

export default FAQList;
