import { useEffect, useState } from "react";

const useKeyDown = () => {
    const [, forceRender] = useState();

    useEffect(() => {
        window.addEventListener('keydown', forceRender);
        return () => window.removeEventListener('keydown', forceRender)
    },[]);
};

export default useKeyDown;