import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className="w-full">
            <ul className="flex flex-row justify-around text-chao-blue">
                <li>
                    <Link href="/">
                        <Image
                            alt="chao head icon" 
                            src="https://chao-island.com/assets/images/icons/chao-icon.svg" 
                            width={30} 
                            height={30}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/home">
                    Chaos
                    </Link>
                </li>
                <li>
                    <Link href="/items">
                    Items
                    </Link>
                </li>
                <li>
                    <Link href="/school">
                    School
                    </Link>
                </li>
                <li>
                    <Link href="/health">
                    Health Center
                    </Link>
                </li>
            </ul>
        </nav>
    )
}