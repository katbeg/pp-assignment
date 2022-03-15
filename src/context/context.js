import React, {useState, useEffect} from "react";
export const EstateContext = React.createContext();

export const EstateProvider = (props) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://mocki.io/v1/d2fc8cf8-c109-4120-985b-793a2764cf01')
          .then((response) => response.json())
          .then((data) => {
            setData(data[0].properties);
            setLoading(false);
          });
      }, []);

    return (
    <EstateContext.Provider value={ { data, loading } }>
        {props.children}
    </EstateContext.Provider>
    );
}

