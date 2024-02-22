import React, { Children } from 'react'

const CustomSwitch = ({ children, value }) => {
    const validCases = [];
    const defaultCase = [];
    Children.forEach(children, (child) => {
        if (child.type.name === 'CustomCase') {
            if (typeof child.props.value === 'function') {
                if (child.props.value(value)) {
                    validCases.push(child);
                }
            } else {
                if (child.props.value === value) {
                    validCases.push(child);
                }
            }
        } else if (child.type.name === 'DefaultCase') {
            defaultCase.push(child);
        }
    })

    if (validCases.length) {
        return validCases;
    }

    return defaultCase;
}

const CustomCase = ({ children }) => {
    return <>{children}</>
}

const DefaultCase = ({ children }) => {
    return <>{children}</>
}

const SwitchCase = () => {
    return (
        <CustomSwitch value='9'>
            <CustomCase value={(e) => e < 10}>Hello 20</CustomCase>
            <CustomCase value='20'>Hello 20</CustomCase>
            <CustomCase value='30'>Hello 30</CustomCase>
            <CustomCase value='10'><div>Hello 10</div></CustomCase>
            <DefaultCase>Hello 40</DefaultCase>
        </CustomSwitch>
    )
}

export default SwitchCase