import { useEffect } from "react";

export function Footer() {
    useEffect(() => {
        const _prefixDomains = ["https://pay.hub.la", "https://invoice.hub.la", "https://app.hub.la", "https://hub.la"];

        function _getUtmParams() {
            let a = "";
            const r = window.top?.location.href || window.location.href;
            const e = new URL(r);
            if (e) {
                const t = e.searchParams.get("utm_source") || "";
                const n = e.searchParams.get("utm_medium") || "";
                const m = e.searchParams.get("utm_campaign") || "";
                const o = e.searchParams.get("utm_term") || "";
                const s = e.searchParams.get("utm_content") || "";
                if (r.indexOf("?") !== -1) {
                    a = "&sck=" + t + "|" + n + "|" + m + "|" + o + "|" + s;
                    console.log("[hubla][utms]", a);
                }
            }
            return a;
        }

        function applyUtms() {
            const a = new URLSearchParams(window.location.search);
            if (!a.toString()) return;

            document.querySelectorAll("a").forEach((r: any) => {
                for (let e = 0; e < _prefixDomains.length; e++) {
                    if (r.href.indexOf(_prefixDomains[e]) !== -1) {
                        if (r.getAttribute('data-utm-applied')) continue;

                        const utmStr = a.toString();
                        const extra = _getUtmParams();

                        if (r.href.indexOf("?") === -1) {
                            r.href += "?" + utmStr + extra;
                        } else {
                            r.href += "&" + utmStr + extra;
                        }
                        r.setAttribute('data-utm-applied', 'true');
                    }
                }
            });
        }

        // Run once
        applyUtms();

        // Monitor for future changes (React renders)
        const observer = new MutationObserver(applyUtms);
        observer.observe(document.body, { childList: true, subtree: true });

        // Safety cleanup
        return () => observer.disconnect();
    }, []);

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
