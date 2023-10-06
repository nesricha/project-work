import styles from "./styles/Styles.module.css"

export default function HeaderComponent() {

    return <div className="flex flex-col justify-center items-center m-auto px-2 py-3 h-36 md:h-60 max-w-sm md:max-w-md">

    <h1 className="font-semibold text-3xl md:text-5xl py-3 md:py-5">
         <span className="text-4xl md:text-6xl italic font-serif">C</span>yber<span className="text-4xl md:text-6xl italic font-serif">S</span>hop
         </h1>

    <h3 className="text-lg md:text-2xl text-center">
        <span className="text-2xl md:text-4xl">L</span>orem Ipsum è un testo segnaposto utilizzato nel settore.
        </h3>
    
    </div>
}