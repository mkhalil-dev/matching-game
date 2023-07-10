import { useState } from "react";
import { useAuthContext } from "../../context/AppContext";
import { showMessage } from "../../components/common";
import { useNavigate } from "react-router-dom";

export type TLoginFormValues = {
  username: string;
};

export const useLoginForms = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setUsername } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (values: TLoginFormValues) => {
    try {
      setLoading(true);
      const { username } = values;
      localStorage.setItem("username", username);
      setUsername(username);
      setLoading(false);
      navigate("/home");
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
