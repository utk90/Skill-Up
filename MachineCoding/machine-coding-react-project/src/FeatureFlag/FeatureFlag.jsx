import React, { useContext } from 'react'
import { FeatureContext, FeatureContextProvider } from './FeatureContext'

const FeatureFlag = () => {
    return (
        <FeatureContextProvider>
            <PaymentShow payFeature='isGooglePay'>Google Pay </PaymentShow>
            <PaymentShow payFeature='isPhonePe'>Phone Pe</PaymentShow>
        </FeatureContextProvider>
    )
}

const PaymentShow = ({ payFeature, children }) => {
    const { features } = useContext(FeatureContext);

    return features[payFeature] && <>{children}</>;
}

export default FeatureFlag