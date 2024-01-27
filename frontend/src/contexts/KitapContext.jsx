import { createContext, useReducer } from "react"

export const KitapContext = createContext();


export const KitapReducer = (state, action) => {

    switch (action.type) {
        case 'KITAP_OLUSTUR':
            return {
                kitaplar: [action.payload, ...state.kitaplar]
            };

        case 'KITAP_DOLDUR':
            return {
                kitaplar: action.payload
            };
        case 'KITAP_SIL':
            // Verilen kitabın ID'si ile uyuşmayan kitabı filtreleyerek belirtilen kitbı çıkarırız.
            return {
                kitaplar: state.kitaplar.filter((k) => k._id !== action.payload._id)
            };

        default:
            return state;
    }
};
export const KitapContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(KitapReducer, {
        kitaplar: null
    });

    return (
        <KitapContext.Provider value={{ ...state, dispatch }}>
            {children}
        </KitapContext.Provider>
    )
}

export default KitapContextProvider