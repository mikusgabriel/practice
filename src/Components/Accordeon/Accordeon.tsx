import { useToggle } from "../../hooks/useToggle";
import { createContext, useContext } from "react";
import { FaHandPointRight, FaThumbsDown } from "react-icons/fa";

//Create context api
const AccordeonContext = createContext();
const { Provider } = AccordeonContext;

const Accordion = (props) => {
  const { title, content } = props;
  const { status: expand, toggleStatus: toggleExpand } = useToggle();

  const value = {
    expand,
    toggleExpand,
  };

  return (
    <Provider value={value}>
      <div className="alignCenter">
        <div className="accordeon">
          <AccordionHeader>{title}</AccordionHeader>
          <AccordionContent>{content}</AccordionContent>
        </div>
      </div>
    </Provider>
  );
};

// Header

const AccordionHeader = ({ children }) => {
  const { toggleExpand } = useContext(AccordeonContext);
  return (
    <button onClick={toggleExpand}>
      {children}
      <AccordionIcon
        iconOpened={<FaThumbsDown />}
        iconClosed={<FaHandPointRight />}
      />
    </button>
  );
};

// Content

const AccordionContent = ({ children }) => {
  const { expand } = useContext(AccordeonContext);
  return <> {expand && <div className="content">{children}</div>}</>;
};

// Icon

const AccordionIcon = ({ iconOpened, iconClosed }) => {
  const { expand } = useContext(AccordeonContext);
  return <span>{expand ? iconOpened : iconClosed}</span>;
};

export default Accordion;
