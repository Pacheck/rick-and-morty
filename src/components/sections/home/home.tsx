import { useEffect, useState, useDeferredValue, ChangeEvent  } from "react";
import { getAllCharacters, getFilteredCharacters } from "@/query/queries";
import { Character } from "@/types/characters";
import Card from "@/components/card/card";
import LoadingPortal from "@/components/loading/loading-portal";

const Home = () => {
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [characters, setCharacters] = useState<Array<Character>>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [cachedList, setCachedList] = useState<Array<Character>>([]);

    let notFound = characters.length === 0;

    const deferredValue = useDeferredValue(searchTerm);

    const load = async () => {
        setIsLoading(true);
        const res = await getAllCharacters(page);

        setCharacters(res.data.characters.results);
        setCachedList(res.data.characters.results);
        setIsLoading(false);
    };

    const loadFilteredValues = async () => {
        setIsLoading(true);
        const res = await getFilteredCharacters(page, deferredValue);

        setCharacters(res.data.characters.results);
        setIsLoading(false)
        console.log(res);
    }

    const handlePreviousPage = () => {
        if(page === 1) { return };

        setPage(prevState => prevState - 1);
    }

    const handleNextPage = () => {
        setPage(prevState => prevState + 1);
    }
    
    useEffect(() => {
        if(deferredValue){
            loadFilteredValues();
            return;
        }

        load();
    }, [page]);

    useEffect(() => {
        if(deferredValue) {
            loadFilteredValues();
        }else{
            setCharacters(cachedList);
            setPage(1);
        }
    }, [searchTerm])

    return (
        <>
            
            <main className='flex flex-col justify-center items-center bg-primary p-6'>

                <input 
                    className="p-2 mb-10 w-1/3 active:text-primary"
                    value={searchTerm} 
                    onInput={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    placeholder="Pesquisar"
                />
                {
                    notFound ?
                    (
                        <h1>Não encontrado</h1>
                    )
                    :
                    (
                        <ul className="flex flex-col items-center gap-y-6 md:flex-row flex-wrap max-w-5xl justify-evenly">
                            { 
                                characters.map((character, idx) => {
                                    return isLoading ? <LoadingPortal key={`${character.name}-${idx}`} /> : <Card key={`${character.name}-${idx}`} {...character} />
                                })
                            }
                        </ul>
                    )
                }
                
            </main>
            <footer className="flex justify-center bg-black">
                <div className=" w-11/12 max-w-5xl flex justify-between py-3 px-6">
                    <button disabled={notFound} className="p-2 w-100 border-2 border-primary rounded-md active:text-primary" onClick={handlePreviousPage}>Previous</button>
                    <button disabled={notFound} className="p-2 w-100 border-2 border-primary rounded-md active:text-primary" onClick={handleNextPage}>Next</button>
                </div>
            </footer>
        </>
    )
};

export default Home;