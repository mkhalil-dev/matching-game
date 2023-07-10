import { useState, useContext } from "react";
import AppContext from "../../context/AppContext";
import { showMessage } from "../../components/common";

export type TLoginFormValues = {
  username: string;
};

export const useLoginForms = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setUsername } = useContext(AppContext);

  const handleSubmit = (values: TLoginFormValues) => {
    try {
      setLoading(true);
      const { username } = values;
      localStorage.setItem("username", username);
      setUsername(username);
      setLoading(false);
    } catch (err) {
      showMessage("error", "Something went wrong");
      setLoading(false);
      console.log(err);
    }
  };

  return {
    handleSubmit,
    loading,
  };
};
