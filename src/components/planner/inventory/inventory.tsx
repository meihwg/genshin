import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./inventory.css";

import { PlusCircle } from "phosphor-react";

const Inventory: React.FC = () => {
    const [characters, setCharacters] = useState<{ name: string; rarity: number; id: string }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Étape 1 : Récupérer la liste des personnages
        axios.get('https://genshin.jmp.blue/characters')
            .then((response) => {
                const characterNames = response.data; // Assure-toi que cela retourne juste un tableau de noms
                return Promise.all(characterNames.map((name: string) => 
                    // Étape 2 : Faire une requête pour chaque personnage
                    axios.get(`https://genshin.jmp.blue/characters/${name}`)
                        .then(res => ({
                            id: name,
                            name: res.data.name, // Ajuste selon la structure de ta réponse
                            rarity: res.data.rarity // Assure-toi que cela existe dans la réponse
                        }))
                ));
            })
            .then((characterDetails) => {
                setCharacters(characterDetails);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <p>Chargement...</p>;
    }

    // Fonction pour déterminer la classe CSS en fonction de la rareté
    const getRarityClass = (rarity: number) => {
        if (rarity === 5) return 'yellow'; // Classe pour la rareté 5
        if (rarity === 4) return 'blue'; // Classe pour la rareté 4
        return ''; // Classe par défaut
    };

    return (
        <>
            <section className="inventory left">
                <div className="section-container">
                    <h3>Inventory</h3>
                    <div className="edit-inventory">
                        <div className="add-char btn">
                            <PlusCircle size={24} />
                            <span>Add a character</span>
                        </div>
                        <div className="add-weapon btn">
                            <PlusCircle size={24} />
                            <span>Add a weapon</span>
                        </div>
                    </div>
                    <ul>
                        {characters.map((character) => (
                            <li key={character.name}  className={getRarityClass(character.rarity)}>
                                <img
                                    src={`https://genshin.jmp.blue/characters/${character.id}/icon.png`} // URL de l'icône
                                    alt={`${character.name} icon`}
                                    style={{ width: '70px' }} // Taille de l'icône
                                    title={`${character.name}`}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Inventory;