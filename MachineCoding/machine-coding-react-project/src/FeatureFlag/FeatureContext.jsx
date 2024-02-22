import { createContext, useState } from "react";

export const FeatureContext = createContext({});

export const FeatureContextProvider = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [features, setFeatures] = useState({
        isGooglePay: true,
        isPhonePe: true
    })

    return (
        <FeatureContext.Provider value={{ features }}>{children}</FeatureContext.Provider>
    )
}
