import { Character } from "@/types/characters";
import Link from "next/link";

const Card = ({ id, name, image, gender }: Character) => {
    return <li className="list-none bg-secondary p-4 rounded-md">
        <Link href={`/character/${id}`}>
            <header>
                <img src={image} alt="ricky and morty character"/>
            </header>
            <footer className="py-2">
                <h3 className="text-black text-sm md:text-base">{name}</h3>
                <h4 className="text-black text-sm md:text-base">{gender}</h4>
            </footer>
        </Link>
    </li>
}

export default Card;