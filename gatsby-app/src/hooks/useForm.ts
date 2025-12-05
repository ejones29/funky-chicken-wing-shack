import { useState } from "react";

interface UpdateValueEvent {
  target: {
    name: string;
    value: string;
    type: string;
  };
}

export default function useForm<T>(defaults: T) {
  const [values, setValues] = useState<T>(defaults);

  (event: UpdateValueEvent) => {
    // check if it's a number and convert it
    let value: string | number = event.target.value;
    if (event.target.type === "number") {
      value = parseInt(value);
    }
    setValues({
      // copy the existing values into it
      ...values,
      // update the new value that changed
      [event.target.name]: value,
    });
  };

  return { values, setValues };
}
