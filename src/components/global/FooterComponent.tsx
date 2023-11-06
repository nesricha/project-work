export default function FooterComponent() {
    return <div className="p-10 flex justify-evenly items-center flex-wrap">

        <div className="p-4 w-6/12 min-w-[300px] flex flex-col">

            <img src="/logo.png" alt="logo" className="w-[200px] rounded-full p-5 mx-auto"/>

            <div className="flex justify-evenly flex-wrap items-center">
                <p>@2023 Nesrine Chafrar</p>
                {/* <a href="https://en.wikipedia.org/wiki/Privacy_policy" target="_blank" className="hover:-translate-y-0.5 underline p-2">Privacy Policy</a>
                <a href="https://en.wikipedia.org/wiki/Terms_of_service" target="_blank" className="hover:-translate-y-0.5 underline p-2">Terms of use</a>
                <a href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank" className="hover:-translate-y-0.5 underline p-2">Cookie Policy</a>
                <a href="https://en.wikipedia.org/wiki/Accessibility" target="_blank" className="hover:-translate-y-0.5 underline p-2">Accessibility</a> */}
            </div>

        </div>

        <div>

            <p className="font-bold text-2xl leading-10">Contacts</p>
            <p className="leading-10">Email: <a href="mailto:nesrinechafrar@gmail.com" className="p-1 hover:font-semibold underline font-medium"> nesrinechafrar@gmail.com </a></p>
            <p className="leading-10">LinkedIn: <a href="https://www.linkedin.com/in/nesrine-chafrar/" className="p-1 hover:font-semibold underline font-medium"> Nesrine Chafrar </a></p>

        </div>
    </div>
}