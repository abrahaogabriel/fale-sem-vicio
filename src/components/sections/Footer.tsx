export function Footer() {
    return (
        <footer className="relative w-full bg-black py-10 md:py-20 px-[15px] xl:px-[120px] flex items-center justify-center">
            <div className="text-center text-white text-[18px] leading-[24px] max-w-[1505px]">
                <p className="mb-0 font-figtree font-normal">
                    Desenvolvido por{" "}
                    <a
                        href="https://novadimensaodigital.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#DEFF00] underline hover:opacity-80 transition-opacity"
                    >
                        Nova Dimensão
                    </a>
                </p>

                <p className="font-figtree font-normal mb-0 mt-6">
                    ESTE SITE NÃO É do FACEBOOK: Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é comercial independente da FACEBOOK, Inc.
                </p>

                <p className="font-figtree font-normal mb-0 mt-4">
                    A El Professor da Oratória Ltda. é uma empresa com o objetivo de ajudar pessoas a se comunicarem melhor e aumentar o seu nível de oratória através de cursos e mentorias digitais. Os depoimentos mostrados vão variar com base no seu esforço, no conhecimento que você adquirir e nas forças do mercado que estão além do controle de qualquer pessoa.
                </p>

                <p className="font-figtree font-normal mb-0 mt-4">
                    Nós NÃO compartilharemos seus dados com ninguém.
                </p>
            </div>
        </footer>
    );
}
