# Clases de Tailwind reemplazadas

Se comprobó cada clase de la tabla contra Tailwind v3 (el que carga `cdn.tailwindcss.com`). Estas son las que no existen o no hacen lo que dice la fila, y la que se usó en su lugar. Las demás se dejaron tal cual aparecen en la tabla (a algunas se les sumaron clases de apoyo para poder ver el efecto).

Cuando la clase usada va entre corchetes, p. ej. `[word-spacing:.5em]`, es una *propiedad arbitraria* de Tailwind: se usa cuando Tailwind v3 no trae utilidad nativa para esa propiedad. Las `animate-*-slow`, `animate-fade-*`, `animate-slide-*`, etc. no existen en Tailwind (solo hay `spin`, `ping`, `pulse` y `bounce`), así que se reemplazaron por la transición o animación nativa más parecida.


## Menú 1 · Apariencia (Apariencia.html) — 12 reemplazos

| ID | Descripción | Clase en la tabla | Clase usada |
|---|---|---|---|
| 211 | Alineación de texto último | `text-right-last` | `[text-align-last:right]` |
| 212 | Justificar texto | `justify` | `text-justify` |
| 43 | Filtro | `filter` | `filter grayscale` |
| 44 | Filtro de fondo | `backdrop-filter` | `backdrop-filter backdrop-blur-md` |
| 46 | Ruta de recorte | `clip-full` | `[clip-path:circle(50%)]` |
| 50 | Forma exterior | `shape-outside` | `[shape-outside:circle(50%)]` |
| 88 | Opacidad de borde | `border-indigo-500/100` | `border-yellow-300/30` |
| 102 | Espacio entre palabras | `tracking-wide` | `[word-spacing:.5em]` |
| 110 | Desbordamiento | `overflow-normal` | `break-normal` |
| 157 | Desenfoque de fondo | `backdrop-blur-8` | `backdrop-blur` |
| 160 | Escala de grises de fondo | `backdrop-grayscale-50` | `backdrop-grayscale` |
| 165 | Sepia de fondo | `backdrop-sepia-50` | `backdrop-sepia` |

## Menú 2 · Diseño (diseño.html) — 9 reemplazos

| ID | Descripción | Clase en la tabla | Clase usada |
|---|---|---|---|
| 134 | Base flexible | `flex-basis-1/4` | `basis-1/4` |
| 149 | Columnas automáticas de cuadrícula | `grid-cols-3-auto` | `auto-cols-min` |
| 150 | Filas automáticas de cuadrícula | `grid-rows-3-auto` | `auto-rows-fr` |
| 264 | Columnas automáticas | `grid-cols-auto` | `auto-cols-fr` |
| 222 | Comportamiento de desplazamiento | `scroll-behavior-auto` | `scroll-auto` |
| 256 | Tipo de desplazamiento | `snap-type-mandatory` | `snap-x snap-mandatory` |
| 257 | Alineación de desplazamiento | `snap-align-start` | `snap-start` |
| 258 | Relleno de desplazamiento | `scroll-padding-4` | `scroll-p-4` |
| 259 | Margen de desplazamiento | `scroll-margin-4` | `scroll-m-4` |

## Menú 3 · Animaciones (animaciones.html) — 40 reemplazos

| ID | Descripción | Clase en la tabla | Clase usada |
|---|---|---|---|
| 26 | Perspectiva | `perspective-500` | `[perspective:500px]` |
| 27 | Visibilidad del fondo | `backface-visible` | `[backface-visibility:hidden]` |
| 48 | Aislamiento de capa | `isolation-isolate` | `isolate` |
| 98 | Animación de rebote | `animate-bounce-x` | `animate-bounce` |
| 99 | Animación de ping | `animate-ping-slow` | `animate-ping` |
| 100 | Animación de escala | `animate-scale-y` | `scale-y-150` |
| 168 | Animación inversa | `animate-reverse` | `[animation-direction:reverse]` |
| 172 | Animación de zoom | `animate-zoom-in` | `scale-125` |
| 173 | Animación de deslizamiento | `animate-slide-up` | `-translate-y-2` |
| 174 | Animación de desvanecimiento | `animate-fade-in` | `opacity-30` |
| 176 | Animación de rotación | `animate-rotate-45` | `rotate-45` |
| 177 | Animación de deslizamiento y desvanecimiento | `animate-slide-fade-up` | `opacity-30 -translate-y-2` |
| 178 | Animación de rebote y escala | `animate-bounce-scale-down` | `animate-bounce` |
| 179 | Animación de volteo | `animate-flip-x` | `-scale-x-100` |
| 180 | Animación de pulso | `animate-pulse-slow` | `animate-pulse` |
| 181 | Animación de temblor | `animate-wiggle-slow` | `-rotate-3` |
| 182 | Animación de parpadeo | `animate-blink-slow` | `animate-pulse` |
| 183 | Animación de deslizamiento y rebote | `animate-slide-bounce-up` | `animate-bounce` |
| 184 | Animación de latido | `animate-heartbeat-slow` | `animate-pulse` |
| 185 | Animación de goma | `animate-rubberband-slow` | `scale-x-125 scale-y-75` |
| 186 | Animación de sacudida | `animate-head-shake-slow` | `-skew-x-6` |
| 187 | Animación de gelatina | `animate-jello-slow` | `skew-x-12` |
| 188 | Animación de tada | `animate-tada-slow` | `scale-110 rotate-6` |
| 189 | Animación de rebote hacia la izquierda | `animate-bounce-in-left-slow` | `translate-x-3` |
| 190 | Animación de rebote hacia la derecha | `animate-bounce-in-right-slow` | `-translate-x-3` |
| 191 | Animación de rebote hacia arriba | `animate-bounce-in-up-slow` | `-translate-y-2` |
| 192 | Animación de rebote hacia abajo | `animate-bounce-in-down-slow` | `translate-y-2` |
| 193 | Animación de desvanecimiento desde la izquierda | `animate-fade-in-left-slow` | `opacity-30 translate-x-3` |
| 194 | Animación de desvanecimiento desde la derecha | `animate-fade-in-right-slow` | `opacity-30 -translate-x-3` |
| 195 | Animación de desvanecimiento desde arriba | `animate-fade-in-up-slow` | `opacity-30 -translate-y-2` |
| 196 | Animación de desvanecimiento desde abajo | `animate-fade-in-down-slow` | `opacity-30 translate-y-2` |
| 197 | Animación de deslizamiento desde la izquierda | `animate-slide-in-left-slow` | `translate-x-3` |
| 198 | Animación de deslizamiento desde la derecha | `animate-slide-in-right-slow` | `-translate-x-3` |
| 199 | Animación de deslizamiento desde arriba | `animate-slide-in-up-slow` | `-translate-y-2` |
| 200 | Animación de deslizamiento desde abajo | `animate-slide-in-down-slow` | `translate-y-2` |
| 226 | Estilo de transformación | `transform` | `[transform-style:preserve-3d]` |
| 228 | Origen de perspectiva | `origin-bottom` | `[perspective-origin:bottom]` |
| 229 | Caja de transformación | `box-border` | `[transform-box:border-box]` |
| 237 | Función de temporización de animación | `animate-ease-out` | `animate-[spin_1s_ease-out_infinite]` |
| 254 | Acción táctil | `touch-action-none` | `touch-none` |
