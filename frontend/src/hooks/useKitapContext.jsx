import { useContext } from "react";
import { KitapContext } from "../contexts/KitapContext"

export const useKitapContext = () => {

    const context = useContext(KitapContext)

    if (!context) {
        throw Error("context yüklenmedi")
    }
    return context
}