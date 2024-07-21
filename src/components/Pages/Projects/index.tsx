import { useState, useEffect } from 'react';
import img1 from '../../../assets/Projects/example.jpg';
import img2 from '../../../assets/Projects/example2.jpg';

import './index.css'

interface CardProps {
    image1: string;
    image2: string;
    title: string;
    description: string;
}

const cards: CardProps[] = [
    {
        image1: img2,
        image2: img2,
        title: 'ADAC Church',
        description: `Description of project ADAC Church Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptate necessitatibus atque repudiandae perspiciatis at, ut cumque dolorem quas in, iusto molestias, laborum animi esse quo voluptatibus soluta architecto sint. Eveniet animi ipsa porro, laboriosam assumenda deleniti tempore tenetur sint. Est, voluptatum magnam doloremque eum cum accusamus laboriosam ex quo officiis odio impedit nam hic facilis eos? Molestiae, sunt at. Nostrum eveniet consequuntur facilis ratione, distinctio inventore sit exercitationem aliquam deleniti nemo quam? Quis voluptates, consequuntur perferendis voluptate laudantium deserunt, optio debitis error voluptatibus odio excepturi! Impedit quaerat doloremque voluptate. Saepe eveniet dolorem doloribus? Corporis quas corrupti aliquid nesciunt aut deleniti commodi perferendis molestias error? Sed sapiente voluptas repellat ipsam a culpa? Veniam repellat deleniti quisquam nobis aut obcaecati magnam. Eligendi, veritatis quis! Cum quod maxime molestiae. Sunt nobis quisquam est dolor quas dolores suscipit rem beatae dolore reprehenderit eligendi, commodi velit accusantium esse sint ex officiis et qui doloribus!`,
    },
    {
        image1: img1,
        image2: img1,
        title: `i'Plants`,
        description: `Description of project i'Plants Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptate necessitatibus atque repudiandae perspiciatis at, ut cumque dolorem quas in, iusto molestias, laborum animi esse quo voluptatibus soluta architecto sint. Eveniet animi ipsa porro, laboriosam assumenda deleniti tempore tenetur sint. Est, voluptatum magnam doloremque eum cum accusamus laboriosam ex quo officiis odio impedit nam hic facilis eos? Molestiae, sunt at. Nostrum eveniet consequuntur facilis ratione, distinctio inventore sit exercitationem aliquam deleniti nemo quam? Quis voluptates, consequuntur perferendis voluptate laudantium deserunt, optio debitis error voluptatibus odio excepturi! Impedit quaerat doloremque voluptate. Saepe eveniet dolorem doloribus? Corporis quas corrupti aliquid nesciunt aut deleniti commodi perferendis molestias error? Sed sapiente voluptas repellat ipsam a culpa? Veniam repellat deleniti quisquam nobis aut obcaecati magnam. Eligendi, veritatis quis! Cum quod maxime molestiae. Sunt nobis quisquam est dolor quas dolores suscipit rem beatae dolore reprehenderit eligendi, commodi velit accusantium esse sint ex officiis et qui doloribus!`,
    },
    {
        image1: img2,
        image2: img2,
        title: 'ADAC Church',
        description: `Description of project ADAC Church Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptate necessitatibus atque repudiandae perspiciatis at, ut cumque dolorem quas in, iusto molestias, laborum animi esse quo voluptatibus soluta architecto sint. Eveniet animi ipsa porro, laboriosam assumenda deleniti tempore tenetur sint. Est, voluptatum magnam doloremque eum cum accusamus laboriosam ex quo officiis odio impedit nam hic facilis eos? Molestiae, sunt at. Nostrum eveniet consequuntur facilis ratione, distinctio inventore sit exercitationem aliquam deleniti nemo quam? Quis voluptates, consequuntur perferendis voluptate laudantium deserunt, optio debitis error voluptatibus odio excepturi! Impedit quaerat doloremque voluptate. Saepe eveniet dolorem doloribus? Corporis quas corrupti aliquid nesciunt aut deleniti commodi perferendis molestias error? Sed sapiente voluptas repellat ipsam a culpa? Veniam repellat deleniti quisquam nobis aut obcaecati magnam. Eligendi, veritatis quis! Cum quod maxime molestiae. Sunt nobis quisquam est dolor quas dolores suscipit rem beatae dolore reprehenderit eligendi, commodi velit accusantium esse sint ex officiis et qui doloribus!`,
    },
    {
        image1: img1,
        image2: img1,
        title: `i'Plants`,
        description: `Description of project i'Plants Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptate necessitatibus atque repudiandae perspiciatis at, ut cumque dolorem quas in, iusto molestias, laborum animi esse quo voluptatibus soluta architecto sint. Eveniet animi ipsa porro, laboriosam assumenda deleniti tempore tenetur sint. Est, voluptatum magnam doloremque eum cum accusamus laboriosam ex quo officiis odio impedit nam hic facilis eos? Molestiae, sunt at. Nostrum eveniet consequuntur facilis ratione, distinctio inventore sit exercitationem aliquam deleniti nemo quam? Quis voluptates, consequuntur perferendis voluptate laudantium deserunt, optio debitis error voluptatibus odio excepturi! Impedit quaerat doloremque voluptate. Saepe eveniet dolorem doloribus? Corporis quas corrupti aliquid nesciunt aut deleniti commodi perferendis molestias error? Sed sapiente voluptas repellat ipsam a culpa? Veniam repellat deleniti quisquam nobis aut obcaecati magnam. Eligendi, veritatis quis! Cum quod maxime molestiae. Sunt nobis quisquam est dolor quas dolores suscipit rem beatae dolore reprehenderit eligendi, commodi velit accusantium esse sint ex officiis et qui doloribus!`,
    },
];

export function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
                setFade(true);
            }, 500);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
            setFade(true);
        }, 500);
    };

    const goToNext = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
            setFade(true);
        }, 500);
    };

    return (
        <section className="slider-show relative w-full flex flex-col items-center overflow-hidden mb-16
        lg:h-[480px] lg:items-end outline outline-2 outline-white">
            {/* Capa Fundo */}
            <div className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-500 outline outline-2 outline-red-500 ${fade ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: `url(${cards[currentIndex].image2})` }}>
                <div className={`part-1 absolute text-white z-10 transition-transform duration-500 top-10 mx-auto lg:top-10 lg:left-5${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <h2 className="readex text-4xl md:text-5xl mb-4">{cards[currentIndex].title}</h2>
                    <p className="inter-regular max-w-4xl lg:max-w-2xl outline outline-2 outline-red-500">{cards[currentIndex].description}</p>
                </div>
            </div>
            {/* Botões de Navegação */}
            <div className="button-nav absolute w-full bottom-5 right-24 transform -translate-x-1/2 z-50 flex items-center space-x-4">
                <button
                    className="p-2 bg-black text-white rounded-full hover:bg-gray-700 transition duration-300"
                    onClick={goToPrevious}
                >
                    &lt;
                </button>
                <button
                    className="p-2 bg-black text-white rounded-full hover:bg-gray-700 transition duration-300"
                    onClick={goToNext}
                >
                    &gt;
                </button>
            </div>
            {/* Cards no Slider */}
            <div className="relative w-96 h-96 mt-auto z-40">
                {cards.map((card, index) => (
                    <div key={index} className={`cards-animate ${index === currentIndex ? 'active' : ''} w-56 h-72 mx-2 transition-all duration-300 flex-shrink-0`}>
                        <img className="w-full h-full rounded-lg cursor-pointer object-cover" src={card.image1} alt={card.title} />
                    </div>
                ))}
            </div>
        </section>
    );
}
