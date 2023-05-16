import { themeState } from "@/store/state"
import { useRecoilState } from "recoil"

export default function ThemeForm() {
    const [theme, setTheme] = useRecoilState(themeState)

    return (
        <div>
            <form>
                <input
                    id="hero-radio"
                    type="radio"
                    value="hero"
                    checked={theme === 'hero'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTheme(e.target.value)}
                />
                <label htmlFor="hero-radio">Hero</label>
                <input
                    id="normal-radio"
                    type="radio"
                    value="normal"
                    checked={theme === 'normal'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTheme(e.target.value)}
                />
                <label htmlFor="normal-radio">Normal</label>
                <input
                    id="dark-radio"
                    type="radio"
                    value="dark"
                    checked={theme === 'dark'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTheme(e.target.value)}
                />
                <label htmlFor="dark-radio">Dark</label>
            </form>
        </div>
    )
}