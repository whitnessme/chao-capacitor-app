import { atom, selector } from "recoil";

export const themeState = atom({
    key: 'theme_state',
    default: 'normal'
})


export const themeSelector = selector({
    key: 'theme_selector',
    get: ({ get }) => {
        const theme = get(themeState);
        return theme;
    }
})
