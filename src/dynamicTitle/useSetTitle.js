import { useEffect } from "react"

const useSetTitle = title => {
    useEffect(() => {
        document.title = `${title} - Rakibul-Architecture`;
    }, [title])
}

export default useSetTitle;