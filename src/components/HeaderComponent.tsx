import styles from "./styles/Styles.module.css"

export default function HeaderComponent() {

    return <div className="flex flex-col justify-center items-center m-auto px-2 py-3 h-36 md:h-60 max-w-sm md:max-w-md">

    <h1 className="font-medium text-4xl md:text-6xl py-3 md:py-5 font-serif">
         <span className="font-semibold text-5xl md:text-7xl italic">C</span>yber<span className="font-semibold text-5xl md:text-7xl italic">S</span>hop
         </h1>

    <h3 className="text-lg md:text-2xl text-center pb-4">
        Lorem Ipsum è un testo segnaposto utilizzato nel settore.
        </h3>
    
    </div>
}