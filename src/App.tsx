import {useState} from "react";

const App = () => {
    const [numberRandom, setNumberRandom] = useState<number>(0);
    const [imageRandom, setImageRandom] = useState<number>(0)
    const [scale, setScale] = useState<number>(1);
    const [isDisabled,setIsDisblad] = useState<boolean>(false);
    const randomText: Array<string> = [
        'Respondeme bebe!',
        '¿segura?',
        '¿estas segura?',
        '¿estas segurisima?',
        '¿ya enserio piensalo bien?',
        '¿tomate tu tiempo para responderme?',
        '¿escuche un si??',
        '¿piensalo nuevamente por fa!?',
        '¿si quieres ser mi san valentin?',
        '¿100% segura?',
        'Gracias por aceptar, te amo mucho <3',

    ]
    const randomImage: Array<{ img: string, alt: string }> = [
        {img: './gif/mochi_1.gif', alt: 'mochi_1'},
        {img: './gif/mochi_2.gif', alt: 'mochi_2'},
        {img: './gif/mochi_3.gif', alt: 'mochi_3'},
        {img: './gif/mochi_4.gif', alt: 'mochi_4'},
        {img: './gif/mochi_5.gif', alt: 'mochi_5'},
        {img: './gif/mochi_6.gif', alt: 'mochi_6'},
        {img: './gif/mochi_7.gif', alt: 'mochi_7'},
        {img: './gif/mochi_ok.gif', alt: 'mochi_OK'},
        {img: './gif/mochi_ok_II.gif', alt: 'mochi_II'}
    ]
    const onRandomNumber = () => {
        const randomText = Math.round(Math.random() * (9));
        const randomImage = Math.round(Math.random() * 6);
        setNumberRandom(randomText);
        setImageRandom(randomImage);
        if (scale < 5) {
            setScale(scale + 1)
        } else {
            setScale(1)
        }

    }

    const onOk = () => {
        setNumberRandom(10);
        setImageRandom(7);
        setScale(1);
        setIsDisblad(true);
    }

    return (
        <section
            className='flex justify-center items-center bg-gradient-to-r from-white from-30% to-amber-100 w-full h-screen'>
            <div className='container text-center mx-auto text-gray-700'>
                <div className='flex flex-col items-center'>
                    <p className='font-bold text-2xl'>¿Quieres ser mi San valentin, hoy y toda la vida?</p>
                    <img width={300} src={randomImage[imageRandom].img} alt={randomImage[imageRandom].alt}/>
                    <p className='transition-all duration-300 font-bold text-2xl capitalize'>{randomText[numberRandom]}</p>
                </div>

                <div className='flex items-center justify-around mt-20 gap-1'>
                    <button
                        className={`${isDisabled ? 'hidden' : 'block'} transition-all scale-[${scale}] duration-300 bg-green-800 hover:bg-green-900 px-2.5 py-1.5 rounded text-lg font-bold text-white`}
                        onClick={onOk}>
                        Si, acepto
                    </button>
                    <button
                        className={`${isDisabled ? 'hidden' : 'block'} transition-all duration-300 bg-red-800 hover:bg-red-900 px-2.5 py-1.5 rounded text-lg font-bold text-white`}
                        onClick={onRandomNumber}>
                        No, lo pensare
                    </button>
                </div>
            </div>
        </section>
    );
};

export {App};