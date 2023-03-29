import LoadingPortal from '@/components/loading/loading-portal';
import { getCharacter } from '@/query/queries';
import { Character } from '@/types/characters';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

const CharacterStatus = () => {
    const { query } = useRouter();
    const [char, setChar] = useState<Character | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const load = async () => {
        setIsLoading(true);
        const { data } = await getCharacter(query.id);

        console.log(data.character);
        setChar(data.character);
        setIsLoading(false);
    }
    
    useEffect(() => {
        load();
    }, []);

    return <div className="flex flex-col items-center sm:p-4 bg-primary h-fullview">
        {
            isLoading 
            ?
                (<LoadingPortal />)
            :
            (
                <div className="w-full max-w-sm bg-ternary md:rounded-md">
                    <header className="flex justify-center">
                        <img src={char?.image} alt="character" className="w-full max-w-sm rounded-md"/>
                    </header>
                    <main className="flex flex-col items-center py-3 text-sm md:text-base text-black font-medium">
                        <h1 className="text-xl">{char?.name}</h1>
                        <h2 className="text-lg">{char?.species}</h2>
                        <h2 className="text-md">{char?.gender}</h2>
                        <h2 className="text-md">{char?.status}</h2>
                        <h2 className="text-md">{char?.origin.name}</h2>
                        <h2 className="text-md">{char?.origin.dimension}</h2>
                    </main>
                </div>
            )
        }
        
    </div>
};

export default CharacterStatus;