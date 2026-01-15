# Design System: Fale Sem Vício (Inspeção Final Dobra_01)

Esta documentação foi validada através da inspeção técnica de cada camada da **Dobra_01 (HERO)** no Figma.

## 🎨 1. Cores Institucionais (Tokens)
Valores exatos extraídos via código:
- **Neon Primary:** `#DEFF00` (Verde Elétrico) - `brand-lime`
- **Absolute Dark:** `#000000` (Fundo) - `brand-dark`
- **Secondary Dark:** `#262626` (Bordas e elementos neutros) - `brand-gray`
- **Primary Light:** `#FFFFFF` (Texto e Ícones) - `white`

## 🔠 2. Tipografia (Sora)
A fonte oficial do projeto é a **Sora**.
- **Títulos (Headline):**
  - Família: `Sora`
  - Pesos: `Bold` (700) para ênfase e `Medium` (500) para continuidade.
  - Tamanho: `40px` fixo no H1.
  - Line-height: `Normal`.
- **Subtítulos/Corpo:**
  - Tamanho: `22px`.
  - Peso: `Regular` (400) ou `Medium` (500).
- **Labels de Botão:**
  - Tamanho: `20px`.
  - Peso: `Medium` (500).

## 🔳 3. Componentes Específicos (Dobra_01)

### CTA Principal (Botão "Quero Falar Sem Vício")
- **Borda:** `1px solid #DEFF00`.
- **Arredondamento:** `8px` (`rounded-[8px]`).
- **Padding:** Vertical `16px` | Horizontal `48px`.
- **Gap Interno:** `14px` (entre texto e ícone).
- **Ícone:** `arrow.backward.circle` rotacionado 180°.
- **Cor de Texto:** `#DEFF00`.

### Logo
- **Tipo:** Vetorial (SVG).
- **Posição:** Topo-Esquerda (Padding relativo dependendo da largura do container).

### Elementos Visuais e Efeitos
- **Máscaras de Imagem:** Uso de `mask-alpha` com texturas de "fumaça/smoke" para integrar a imagem do especialista ao fundo preto.
- **Gradiêntes de Transição:** Seções finalizam com `Linear Gradient` de `transparent` para `#000000` para garantir scroll infinito suave.

## 🛠️ 4. Configuração Tailwind CSS Final

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          lime: '#DEFF00',
          dark: '#000000',
          gray: '#262626',
        }
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      borderRadius: {
        'button': '8px',
        'card': '14px',
      },
      padding: {
        'cta-x': '48px',
        'cta-y': '16px',
      }
    },
  },
}
```

## 📝 5. Regras de Composição de Texto
Siga este padrão para garantir a fidelidade visual:
- Todo título deve começar ou terminar com destaque verde `#DEFF00` usando a tag `<span>`.
- Ex: `<p>Isso não acontece só quando <span class="text-brand-lime font-bold">você está nervoso.</span></p>`
