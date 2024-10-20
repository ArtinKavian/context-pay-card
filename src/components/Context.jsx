import { useState, createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const context = createContext();

const Provider = ({ objects }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvv2, setCvv2] = useState("");
  const [Deposite, setDeposite] = useState("");
  const [Foll, setFoll] = useState([]);
  const [Transactions, setTransactions] = useState([]); 
  const [BankName, setBankName] = useState("");
  const handleTransaction = (Card, destinationCard, amount) => {
    const updateFoll = [...Foll];
    if (updateFoll[Card].Deposite >= amount) {
      updateFoll[Card].Deposite -= amount;
      setFoll(updateFoll);
      const newTransaction = {
        Card: updateFoll[Card].number,
        destinationCard,
        amount,
      };
      setTransactions([...Transactions, newTransaction]);
    } else {
      toast.error("Not enough Money");
    }
  };

  return (
    <context.Provider
      value={{
        name,
        setName,
        number,
        setNumber,
        date,
        setDate,
        cvv2,
        setCvv2,
        Deposite,
        setDeposite,
        Foll,
        setFoll,
        BankName,
        setBankName,
        Transactions,
        handleTransaction, 
      }}
    >
      {objects}
   
    </context.Provider>
  );
};

export { context, Provider };
