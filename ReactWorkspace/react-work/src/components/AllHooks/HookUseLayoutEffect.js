import { useEffect, useLayoutEffect } from "react"

const HookUseLayoutEffect = () => {
    useLayoutEffect(() => {
        console.log('useLayoutEffect triggered')
    }, []);

    useEffect(() => {
        console.log('useEffect triggered')
    }, [])
}

export default HookUseLayoutEffect;