/* ============================================
   GALAXY AMOR - SCRIPT COMPLETO
   ============================================ */

'use strict';

/* ============================================
   CONFIGURACIÓN
   ============================================ */
const CONFIG = {
    startDate: new Date(2026, 4, 15, 0, 0, 0),
    starCount: 600,
    apodos: [
        'Mi amor ❤️',
        'Mi vida ❤️',
        'Mi chiquitita ❤️',
        'Mi bonita ❤️',
        'Mi hermosa ❤️',
        'Mi princesa ❤️',
        'Mi cielo ❤️',
        'Mi reina ❤️',
        'Mi todo ❤️',
        'Mi razón de sonreír ❤️'
    ],
    mensajesOcultos: [
        'Eres mi universo 🌌',
        'Siempre tú ',
        'Gracias por existir ✨',
        'Mi casualidad favorita 🌟',
        'La distancia no puede con nosotros 💫',
        'Cada latido es para ti 💓',
        'Eres mi lugar favorito 🏡',
        'Contigo todo es mejor 🌹',
        'Eres mi sueño hecho realidad 💭',
        'Te elegiría mil veces más 💕',
        'Mi corazón es tuyo ❤️',
        'Eres mi estrella más brillante ⭐',
        'Gracias por amarme 🥰',
        'Eres mi hogar 🏠',
        'Mi persona favorita 👑',
        'Contigo el tiempo vuela ⏰',
        'Eres mi todo y más 💞',
        'Te amo más cada día 📈',
        'Eres mi milagro 🙏',
        'Mi razón de ser 💝',
        'Eres perfecta para mí 💯',
        'Mi eterno amor ♾️',
        'Eres mi luz en la oscuridad 💡',
        'Mi paz en el caos 🕊️',
        'Eres mi canción favorita 🎵',
        'Mi destino era encontrarte 🎯',
        'Eres mi mejor decisión ✅',
        'Mi sonrisa diaria 😊',
        'Eres mi universo paralelo 🌠',
        'Mi amor infinito ∞'
    ],
    carta: `Melisa, mi amor…

Hoy, mientras escribo estas palabras, miro al cielo y pienso en lo increíble que ha sido compartir estos dos meses a tu lado, aunque la distancia nos separe físicamente. Dos meses que han cambiado mi mundo por completo, dos meses en los que he descubierto que el amor verdadero no necesita estar cerca para sentirse presente.

Desde aquel 15 de mayo, mi universo tiene un nuevo centro: tú. Cada mensaje tuyo es un rayo de luz que atraviesa los kilómetros y me recuerda que lo nuestro es real, profundo e infinito. He aprendido que el amor no se mide en metros ni en horas de vuelo, sino en la forma en que alguien logra hacerte sentir en casa, incluso desde lejos.

La distancia ha sido nuestro primer gran desafío, y lo hemos superado con confianza, con paciencia, con llamadas que se convierten en horas sin darnos cuenta, con mensajes que llegan como caricias al alma. Gracias por creer en nosotros cuando todo parecía complicado, gracias por tu paciencia infinita, por tu ternura, por tu forma única de hacerme sentir el hombre más afortunado del mundo.

Eres mi chiquitita, mi princesa, mi reina. Eres la razón por la que sonrío sin motivo, por la que mi día mejora con solo ver tu nombre en mi celular. Eres mi casualidad favorita, mi destino cumplido, mi sueño que se hizo realidad.

Sueño con el día en que la distancia sea solo un recuerdo, con el momento en que pueda abrazarte sin tener que soltarte, con el futuro que estamos construyendo juntos, ladrillo a ladrillo, mensaje a mensaje, latido a latido.

Confío en ti, confío en nosotros. Sé que lo nuestro es de esos amores que los cuentos guardan para los finales felices, pero nosotros lo estamos viviendo desde el principio.

Gracias por existir, por amarme, por elegirme. Gracias por ser mi Melisa, mi todo, mi razón de sonreír cada mañana.

Te amo infinitamente.

Con todo mi corazón,

Jonathan ❤️`,
    fotos: [
        'fotos/portada.jpg',
        'fotos/foto1.jpg',
        'fotos/foto2.jpg',
        'fotos/foto3.jpg',
        'fotos/foto4.jpg',
        'fotos/foto5.jpg',
        'fotos/foto6.jpg',
        'fotos/foto7.jpg',
        'fotos/foto8.jpg'
    ]
};

/* ============================================
   ESTADO GLOBAL
   ============================================ */
const STATE = {
    escenaActual: 0,
    totalEscenas: 8,
    musicaActiva: true,
    clicsLuna: 0
};

/* ============================================
   SISTEMA DE GALAXIA
   ============================================ */
class SistemaGalaxia {
    constructor() {
        this.canvas = document.getElementById('galaxyCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.estrellas = [];
        this.particulas = [];
        this.nebulosas = [];
        this.tiempo = 0;
        this.rotacion = 0;
        this.centro = { x: 0, y: 0 };
        this.init();
    }
    
    init() {
        this.resize();
        this.crearEstrellas();
        this.crearNebulosas();
        this.animate();
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.ancho = this.canvas.width = window.innerWidth;
        this.alto = this.canvas.height = window.innerHeight;
        this.centro = { x: this.ancho / 2, y: this.alto / 2 };
    }
    
    crearEstrellas() {
        this.estrellas = [];
        for (let i = 0; i < CONFIG.starCount; i++) {
            this.estrellas.push({
                x: Math.random() * this.ancho,
                y: Math.random() * this.alto,
                radio: Math.random() * 2 + 0.5,
                opacidad: Math.random() * 0.8 + 0.2,
                velocidadParpadeo: Math.random() * 0.02 + 0.005,
                offsetParpadeo: Math.random() * Math.PI * 2,
                color: this.getColorEstrella(),
                profundidad: Math.random() * 3 + 1
            });
        }
    }
    
    getColorEstrella() {
        const colores = [
            '255, 255, 255',
            '255, 215, 0',
            '255, 182, 193',
            '173, 216, 230',
            '255, 105, 180',
            '179, 102, 255'
        ];
        return colores[Math.floor(Math.random() * colores.length)];
    }
    
    crearNebulosas() {
        this.nebulosas = [];
        for (let i = 0; i < 5; i++) {
            this.nebulosas.push({
                x: Math.random() * this.ancho,
                y: Math.random() * this.alto,
                radio: Math.random() * 250 + 150,
                color: this.getColorNebulosa(),
                opacidad: Math.random() * 0.15 + 0.05,
                derivaX: (Math.random() - 0.5) * 0.15,
                derivaY: (Math.random() - 0.5) * 0.15
            });
        }
    }
    
    getColorNebulosa() {
        const colores = ['255, 77, 148', '106, 13, 173', '255, 215, 0', '100, 150, 255'];
        return colores[Math.floor(Math.random() * colores.length)];
    }
    
    crearParticula(x, y, tipo = 'corazon') {
        this.particulas.push({
            x, y,
            vx: (Math.random() - 0.5) * 10,
            vy: (Math.random() - 0.5) * 10 - 2,
            vida: 1,
            decaimiento: Math.random() * 0.02 + 0.01,
            tipo,
            tamano: Math.random() * 12 + 5,
            color: tipo === 'corazon' ? '255, 77, 148' : '255, 215, 0'
        });
    }
    
    dibujarEstrella(estrella) {
        const parpadeo = Math.sin(this.tiempo * estrella.velocidadParpadeo + estrella.offsetParpadeo);
        const opacidad = estrella.opacidad * (0.5 + parpadeo * 0.5);
        
        this.ctx.beginPath();
        this.ctx.arc(estrella.x, estrella.y, estrella.radio, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(${estrella.color}, ${opacidad})`;
        this.ctx.fill();
        
        if (estrella.radio > 1.5) {
            this.ctx.beginPath();
            this.ctx.arc(estrella.x, estrella.y, estrella.radio * 5, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${estrella.color}, ${opacidad * 0.15})`;
            this.ctx.fill();
        }
    }
    
    dibujarNebulosa(nebulosa) {
        const gradiente = this.ctx.createRadialGradient(
            nebulosa.x, nebulosa.y, 0,
            nebulosa.x, nebulosa.y, nebulosa.radio
        );
        gradiente.addColorStop(0, `rgba(${nebulosa.color}, ${nebulosa.opacidad})`);
        gradiente.addColorStop(1, `rgba(${nebulosa.color}, 0)`);
        
        this.ctx.fillStyle = gradiente;
        this.ctx.beginPath();
        this.ctx.arc(nebulosa.x, nebulosa.y, nebulosa.radio, 0, Math.PI * 2);
        this.ctx.fill();
    }
    
    dibujarParticula(particula) {
        this.ctx.save();
        this.ctx.globalAlpha = particula.vida;
        
        if (particula.tipo === 'corazon') {
            this.dibujarCorazon(particula.x, particula.y, particula.tamano, `rgba(${particula.color}, ${particula.vida})`);
        } else {
            this.ctx.beginPath();
            this.ctx.arc(particula.x, particula.y, particula.tamano, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${particula.color}, ${particula.vida})`;
            this.ctx.fill();
        }
        
        this.ctx.restore();
    }
    
    dibujarCorazon(x, y, tamano, color) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        const alturaCurva = tamano * 0.3;
        this.ctx.moveTo(x, y + alturaCurva);
        this.ctx.bezierCurveTo(x, y, x - tamano / 2, y, x - tamano / 2, y + alturaCurva);
        this.ctx.bezierCurveTo(x - tamano / 2, y + (tamano + alturaCurva) / 2, x, y + (tamano + alturaCurva) / 1.2, x, y + tamano);
        this.ctx.bezierCurveTo(x, y + (tamano + alturaCurva) / 1.2, x + tamano / 2, y + (tamano + alturaCurva) / 2, x + tamano / 2, y + alturaCurva);
        this.ctx.bezierCurveTo(x + tamano / 2, y, x, y, x, y + alturaCurva);
        this.ctx.closePath();
        this.ctx.fill();
    }
    
    dibujarGalaxiaEspiral() {
        this.ctx.save();
        this.ctx.translate(this.centro.x, this.centro.y);
        this.ctx.rotate(this.rotacion);
        
        const brazos = 3;
        const puntosPorBrazo = 300;
        
        for (let brazo = 0; brazo < brazos; brazo++) {
            const offsetBrazo = (brazo / brazos) * Math.PI * 2;
            
            for (let i = 0; i < puntosPorBrazo; i++) {
                const t = i / puntosPorBrazo;
                const angulo = t * Math.PI * 6 + offsetBrazo;
                const radio = t * Math.min(this.ancho, this.alto) * 0.45;
                
                const x = Math.cos(angulo) * radio;
                const y = Math.sin(angulo) * radio * 0.6;
                
                const tamano = (1 - t) * 3 + 0.5;
                const opacidad = (1 - t) * 0.9;
                const tono = 320 + t * 60;
                
                this.ctx.fillStyle = `hsla(${tono}, 85%, 75%, ${opacidad})`;
                this.ctx.beginPath();
                this.ctx.arc(x, y, tamano, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }
        
        const gradienteNucleo = this.ctx.createRadialGradient(0, 0, 0, 0, 0, 120);
        gradienteNucleo.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        gradienteNucleo.addColorStop(0.3, 'rgba(255, 215, 0, 0.6)');
        gradienteNucleo.addColorStop(1, 'rgba(255, 77, 148, 0)');
        
        this.ctx.fillStyle = gradienteNucleo;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 120, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.restore();
    }
    
    actualizar() {
        this.tiempo++;
        this.rotacion += 0.0015;
        
        this.estrellas.forEach(estrella => {
            estrella.x -= 0.05 / estrella.profundidad;
            if (estrella.x < 0) estrella.x = this.ancho;
        });
        
        this.nebulosas.forEach(nebulosa => {
            nebulosa.x += nebulosa.derivaX;
            nebulosa.y += nebulosa.derivaY;
            
            if (nebulosa.x < -nebulosa.radio) nebulosa.x = this.ancho + nebulosa.radio;
            if (nebulosa.x > this.ancho + nebulosa.radio) nebulosa.x = -nebulosa.radio;
            if (nebulosa.y < -nebulosa.radio) nebulosa.y = this.alto + nebulosa.radio;
            if (nebulosa.y > this.alto + nebulosa.radio) nebulosa.y = -nebulosa.radio;
        });
        
        this.particulas = this.particulas.filter(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.08;
            p.vx *= 0.98;
            p.vida -= p.decaimiento;
            return p.vida > 0;
        });
    }
    
    renderizar() {
        this.ctx.fillStyle = 'rgba(5, 0, 8, 0.2)';
        this.ctx.fillRect(0, 0, this.ancho, this.alto);
        
        this.nebulosas.forEach(n => this.dibujarNebulosa(n));
        this.dibujarGalaxiaEspiral();
        this.estrellas.forEach(s => this.dibujarEstrella(s));
        this.particulas.forEach(p => this.dibujarParticula(p));
    }
    
    animate() {
        this.actualizar();
        this.renderizar();
        requestAnimationFrame(() => this.animate());
    }
    
    explotarCorazones(x, y, cantidad = 30) {
        for (let i = 0; i < cantidad; i++) {
            this.crearParticula(x, y, 'corazon');
        }
    }
    
    brillar(x, y, cantidad = 20) {
        for (let i = 0; i < cantidad; i++) {
            this.crearParticula(x, y, 'brillo');
        }
    }
    
    lluviaEstrellas() {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                for (let j = 0; j < 8; j++) {
                    this.crearParticula(
                        Math.random() * this.ancho,
                        Math.random() * this.alto * 0.3,
                        'brillo'
                    );
                }
            }, i * 60);
        }
    }
}

/* ============================================
   SISTEMA DE AUDIO
   ============================================ */
class SistemaAudio {
    constructor() {
        this.audio = null;
        this.inicializado = false;
    }
    
    init() {
        if (this.inicializado) return;
        
        try {
            this.audio = new Audio('audio/cancion.mp3');
            this.audio.loop = true;
            this.audio.volume = 0.5;
            this.inicializado = true;
            
            this.audio.addEventListener('error', () => {
                console.warn('Audio no disponible');
            });
        } catch (e) {
            console.warn('Audio no soportado');
        }
    }
    
    async play() {
        if (!this.inicializado) this.init();
        if (!this.audio) return;
        
        try {
            await this.audio.play();
        } catch (e) {
            console.warn('Autoplay bloqueado');
        }
    }
    
    toggle() {
        if (!this.audio) return;
        
        if (this.audio.paused) {
            this.audio.play();
            STATE.musicaActiva = true;
        } else {
            this.audio.pause();
            STATE.musicaActiva = false;
        }
    }
}

/* ============================================
   GESTOR DE ESCENAS
   ============================================ */
class GestorEscenas {
    constructor() {
        this.escenas = document.querySelectorAll('.scene');
        this.actual = 0;
        this.transicion = false;
    }
    
    irA(indice) {
        if (this.transicion || indice < 0 || indice >= this.escenas.length) return;
        if (indice === this.actual) return;
        
        this.transicion = true;
        
        this.escenas[this.actual].classList.remove('active');
        this.actual = indice;
        STATE.escenaActual = indice;
        
        const indicador = document.getElementById('sceneIndicator');
        if (indicador) indicador.textContent = `${indice + 1} / ${this.escenas.length}`;
        
        setTimeout(() => {
            this.escenas[this.actual].classList.add('active');
            this.activarEfectos(indice);
            this.transicion = false;
        }, 500);
    }
    
    siguiente() {
        this.irA(this.actual + 1);
    }
    
    anterior() {
        this.irA(this.actual - 1);
    }
    
    activarEfectos(indice) {
        switch (indice) {
            case 2:
                MostrarApodos.mostrar();
                break;
            case 3:
                Galeria.cargar();
                break;
            case 4:
                AnimacionDistancia.iniciar();
                break;
            case 5:
                Carta.escribir();
                break;
            case 6:
                Contador.iniciar();
                break;
            case 7:
                EscenaFinal.iniciar();
                break;
        }
    }
}

/* ============================================
   MOSTRAR APODOS (AHORA AUTOMÁTICO)
   ============================================ */
const MostrarApodos = {
    mostrado: false,
    
    mostrar() {
        if (this.mostrado) return;
        this.mostrado = true;
        
        const contenedor = document.getElementById('apodosContainer');
        contenedor.innerHTML = '';
        
        CONFIG.apodos.forEach((apodo, i) => {
            const item = document.createElement('div');
            item.className = 'apodo-item';
            item.textContent = apodo;
            item.style.animationDelay = `${i * 0.2}s`;
            
            item.addEventListener('click', () => {
                const rect = item.getBoundingClientRect();
                MensajesOcultos.mostrar(rect.left + rect.width / 2, rect.top + rect.height / 2);
                galaxia.explotarCorazones(rect.left + rect.width / 2, rect.top + rect.height / 2, 15);
            });
            
            contenedor.appendChild(item);
        });
    }
};

/* ============================================
   GALERÍA
   ============================================ */
const Galeria = {
    cargado: false,
    
    crearPlaceholder(index) {
        const colores = [
            ['#ff4d94', '#6a0dad'],
            ['#ffd700', '#ff4d94'],
            ['#b366ff', '#ff69b4'],
            ['#6496ff', '#ff4d94'],
            ['#ffd700', '#b366ff'],
            ['#ff69b4', '#6a0dad'],
            ['#ffb3d1', '#6a0dad'],
            ['#ffd700', '#ff69b4'],
            ['#b366ff', '#ffd700']
        ];
        
        const [c1, c2] = colores[index % colores.length];
        
        const div = document.createElement('div');
        div.className = 'gallery-placeholder';
        div.style.background = `linear-gradient(135deg, ${c1}, ${c2})`;
        div.innerHTML = '<span>💖</span>';
        return div;
    },
    
    cargar() {
        if (this.cargado) return;
        this.cargado = true;
        
        const contenedor = document.getElementById('galleryGrid');
        contenedor.innerHTML = '';
        
        CONFIG.fotos.forEach((foto, i) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.alt = `Foto ${i + 1}`;
            img.loading = 'lazy';
            
            const testImg = new Image();
            testImg.onload = () => {
                img.src = foto;
            };
            testImg.onerror = () => {
                item.innerHTML = '';
                item.appendChild(this.crearPlaceholder(i));
            };
            testImg.src = foto;
            
            item.appendChild(img);
            
            item.addEventListener('click', () => {
                Lightbox.abrir(img.src);
            });
            
            contenedor.appendChild(item);
        });
    }
};

/* ============================================
   LIGHTBOX
   ============================================ */
const Lightbox = {
    elemento: null,
    img: null,
    
    init() {
        this.elemento = document.getElementById('lightbox');
        this.img = document.getElementById('lightboxImg');
        const cerrar = document.getElementById('lightboxClose');
        
        cerrar.addEventListener('click', () => this.cerrar());
        this.elemento.addEventListener('click', (e) => {
            if (e.target === this.elemento) this.cerrar();
        });
    },
    
    abrir(src) {
        this.img.src = src;
        this.elemento.classList.remove('hidden');
    },
    
    cerrar() {
        this.elemento.classList.add('hidden');
    }
};

/* ============================================
   ANIMACIÓN DISTANCIA
   ============================================ */
const AnimacionDistancia = {
    iniciada: false,
    
    iniciar() {
        if (this.iniciada) return;
        this.iniciada = true;
        
        const izquierda = document.getElementById('starLeft');
        const derecha = document.getElementById('starRight');
        const linea = document.getElementById('connectionLine');
        const corazon = document.getElementById('unitedHeart');
        
        setTimeout(() => {
            izquierda.style.left = '35%';
            derecha.style.right = '35%';
        }, 1000);
        
        setTimeout(() => {
            linea.style.opacity = '1';
            linea.style.width = '35%';
        }, 4000);
        
        setTimeout(() => {
            izquierda.style.left = '45%';
            derecha.style.right = '45%';
            linea.style.opacity = '0';
            corazon.classList.add('visible');
            
            galaxia.explotarCorazones(window.innerWidth / 2, window.innerHeight / 2, 60);
            galaxia.lluviaEstrellas();
        }, 7000);
    }
};

/* ============================================
   CARTA
   ============================================ */
const Carta = {
    escrita: false,
    
    escribir() {
        if (this.escrita) return;
        this.escrita = true;
        
        const cuerpo = document.getElementById('letterBody');
        const firma = document.getElementById('letterSignature');
        const texto = CONFIG.carta;
        
        cuerpo.textContent = '';
        
        let i = 0;
        const escribirCaracter = () => {
            if (i < texto.length) {
                cuerpo.textContent += texto[i];
                i++;
                
                const caracter = texto[i - 1];
                const retraso = caracter === '\n' ? 100 : 
                               caracter === '.' || caracter === ',' ? 80 :
                               caracter === ' ' ? 30 : 25;
                
                setTimeout(escribirCaracter, retraso);
            } else {
                setTimeout(() => {
                    firma.textContent = 'Jonathan ❤️';
                    firma.classList.add('visible');
                }, 500);
            }
        };
        
        escribirCaracter();
    }
};

/* ============================================
   CONTADOR PRECISO
   ============================================ */
const Contador = {
    intervalo: null,
    iniciado: false,
    
    iniciar() {
        if (this.iniciado) return;
        this.iniciado = true;
        
        this.actualizar();
        this.intervalo = setInterval(() => this.actualizar(), 1000);
    },
    
    actualizar() {
        const ahora = new Date();
        const inicio = CONFIG.startDate;
        
        let meses = (ahora.getFullYear() - inicio.getFullYear()) * 12;
        meses += ahora.getMonth() - inicio.getMonth();
        if (ahora.getDate() < inicio.getDate()) meses--;
        if (meses < 0) meses = 0;
        
        const fechaDespuesMeses = new Date(inicio);
        fechaDespuesMeses.setMonth(fechaDespuesMeses.getMonth() + meses);
        
        const diffDias = ahora - fechaDespuesMeses;
        const dias = Math.floor(diffDias / (1000 * 60 * 60 * 24));
        
        const diffRestante = diffDias % (1000 * 60 * 60 * 24);
        const horas = Math.floor(diffRestante / (1000 * 60 * 60));
        const minutos = Math.floor((diffRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diffRestante % (1000 * 60)) / 1000);
        
        this.animarValor('countMonths', meses);
        this.animarValor('countDays', dias);
        this.animarValor('countHours', horas);
        this.animarValor('countMinutes', minutos);
        this.animarValor('countSeconds', segundos);
    },
    
    animarValor(id, nuevoValor) {
        const el = document.getElementById(id);
        if (!el) return;
        
        const valorFormateado = (id === 'countHours' || id === 'countMinutes' || id === 'countSeconds') ? 
            nuevoValor.toString().padStart(2, '0') : 
            nuevoValor.toString();
        
        if (el.textContent !== valorFormateado) {
            el.style.transform = 'scale(1.3)';
            el.textContent = valorFormateado;
            setTimeout(() => {
                el.style.transform = 'scale(1)';
            }, 300);
        }
    }
};

/* ============================================
   ESCENA FINAL
   ============================================ */
const EscenaFinal = {
    iniciada: false,
    
    async iniciar() {
        if (this.iniciada) return;
        this.iniciada = true;
        
        const titulo = document.getElementById('finalTitle');
        const corazon = document.getElementById('finalHeart');
        const nombre = document.getElementById('finalName');
        const mensaje = document.getElementById('finalMessage');
        const firma = document.getElementById('finalSignature');
        
        await this.esperar(1000);
        titulo.classList.add('visible');
        galaxia.brillar(window.innerWidth / 2, window.innerHeight / 3, 30);
        
        await this.esperar(2000);
        corazon.classList.add('visible');
        galaxia.explotarCorazones(window.innerWidth / 2, window.innerHeight / 2, 40);
        
        await this.esperar(2000);
        nombre.classList.add('visible');
        
        await this.esperar(2000);
        mensaje.classList.add('visible');
        
        await this.esperar(2000);
        firma.classList.add('visible');
        
        await this.esperar(1500);
        galaxia.explotarCorazones(window.innerWidth / 2, window.innerHeight / 2, 150);
        galaxia.lluviaEstrellas();
        Petalos.iniciar();
    },
    
    esperar(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};

/* ============================================
   PÉTALOS
   ============================================ */
const Petalos = {
    intervalo: null,
    activo: false,
    
    iniciar() {
        if (this.activo) return;
        this.activo = true;
        
        this.intervalo = setInterval(() => this.crearPetalo(), 250);
        
        setTimeout(() => this.detener(), 30000);
    },
    
    detener() {
        this.activo = false;
        clearInterval(this.intervalo);
    },
    
    crearPetalo() {
        const contenedor = document.getElementById('petalsContainer');
        const petalo = document.createElement('div');
        petalo.className = 'petal';
        
        petalo.style.left = `${Math.random() * 100}%`;
        
        const duracion = Math.random() * 6 + 6;
        const tamano = Math.random() * 15 + 12;
        
        petalo.style.width = `${tamano}px`;
        petalo.style.height = `${tamano}px`;
        petalo.style.animationDuration = `${duracion}s`;
        
        contenedor.appendChild(petalo);
        
        setTimeout(() => petalo.remove(), duracion * 1000);
    }
};

/* ============================================
   MENSAJES OCULTOS
   ============================================ */
const MensajesOcultos = {
    mostrar(x, y) {
        const mensaje = CONFIG.mensajesOcultos[Math.floor(Math.random() * CONFIG.mensajesOcultos.length)];
        const el = document.createElement('div');
        el.className = 'hidden-message';
        el.textContent = mensaje;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 5000);
    }
};

/* ============================================
   LUNA
   ============================================ */
const Luna = {
    init() {
        const luna = document.getElementById('moon');
        luna.addEventListener('click', () => {
            STATE.clicsLuna++;
            
            const rect = luna.getBoundingClientRect();
            galaxia.brillar(rect.left + 35, rect.top + 35, 15);
            
            if (STATE.clicsLuna === 5) {
                MensajesOcultos.mostrar(window.innerWidth / 2, window.innerHeight / 2);
                galaxia.explotarCorazones(window.innerWidth / 2, window.innerHeight / 2, 80);
                STATE.clicsLuna = 0;
            }
        });
    }
};

/* ============================================
   MENÚ
   ============================================ */
const Menu = {
    init() {
        const btn = document.getElementById('menuBtn');
        const panel = document.getElementById('menuPanel');
        
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            panel.classList.toggle('hidden');
        });
        
        panel.querySelectorAll('button').forEach(boton => {
            boton.addEventListener('click', () => {
                this.accion(boton.dataset.action);
                panel.classList.add('hidden');
            });
        });
        
        document.addEventListener('click', (e) => {
            if (!panel.contains(e.target) && e.target !== btn) {
                panel.classList.add('hidden');
            }
        });
    },
    
    accion(accion) {
        switch (accion) {
            case 'fullscreen':
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen().catch(() => {});
                } else {
                    document.exitFullscreen();
                }
                break;
            case 'music':
                audio.toggle();
                break;
            case 'restart':
                location.reload();
                break;
            case 'effects':
                galaxia.lluviaEstrellas();
                galaxia.explotarCorazones(window.innerWidth / 2, window.innerHeight / 2, 100);
                break;
        }
    }
};

/* ============================================
   LOADER
   ============================================ */
const Loader = {
    async iniciar() {
        const progreso = document.getElementById('loaderProgress');
        const loader = document.getElementById('loader');
        
        for (let i = 0; i <= 100; i += 2) {
            await this.esperar(30);
            progreso.style.width = `${i}%`;
        }
        
        await this.esperar(500);
        loader.classList.add('hidden');
        
        document.getElementById('startScreen').classList.remove('hidden');
    },
    
    esperar(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};

/* ============================================
   INICIALIZACIÓN
   ============================================ */
let galaxia, audio, gestorEscenas;

async function init() {
    try {
        galaxia = new SistemaGalaxia();
        audio = new SistemaAudio();
        gestorEscenas = new GestorEscenas();
        
        Lightbox.init();
        Luna.init();
        Menu.init();
        
        await Loader.iniciar();
        
        document.getElementById('startBtn').addEventListener('click', async () => {
            audio.init();
            await audio.play();
            
            document.getElementById('startScreen').classList.add('hidden');
            gestorEscenas.irA(0);
        });
        
        document.getElementById('nextBtn').addEventListener('click', () => gestorEscenas.siguiente());
        document.getElementById('prevBtn').addEventListener('click', () => gestorEscenas.anterior());
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') gestorEscenas.siguiente();
            if (e.key === 'ArrowLeft') gestorEscenas.anterior();
        });
        
        // ✅ CORRECCIÓN: Navegación táctil que respeta el scroll de la carta
        let touchStart = 0;
        let touchTarget = null;
        
        document.addEventListener('touchstart', (e) => {
            touchStart = e.touches[0].clientY;
            touchTarget = e.target;
        });
        
        document.addEventListener('touchend', (e) => {
            // Si el touch fue dentro de la carta, no cambiar escena
            if (touchTarget && touchTarget.closest('#letterContainer')) {
                return;
            }
            
            const diff = touchStart - e.changedTouches[0].clientY;
            if (Math.abs(diff) > 50) {
                if (diff > 0) gestorEscenas.siguiente();
                else gestorEscenas.anterior();
            }
        });
        
        // ✅ CORRECCIÓN: Wheel que respeta el scroll de la carta
        document.addEventListener('wheel', (e) => {
            if (e.target.closest('#letterContainer')) {
                return;
            }
            
            if (e.deltaY > 30) gestorEscenas.siguiente();
            else if (e.deltaY < -30) gestorEscenas.anterior();
        });
        
        document.addEventListener('click', (e) => {
            if (e.target.closest('.apodo-item') || 
                e.target.closest('.moon') ||
                e.target.closest('.menu-btn') ||
                e.target.closest('.control-btn') ||
                e.target.closest('.btn-primary') ||
                e.target.closest('.gallery-item') ||
                e.target.closest('.lightbox') ||
                e.target.closest('.menu-panel')) {
                return;
            }
            
            if (Math.random() < 0.2) {
                MensajesOcultos.mostrar(e.clientX, e.clientY);
            }
            galaxia.brillar(e.clientX, e.clientY, 10);
        });
        
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('loader').classList.add('hidden');
        document.getElementById('startScreen').classList.remove('hidden');
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

document.addEventListener('visibilitychange', () => {
    if (audio && audio.audio) {
        if (document.hidden) {
            audio.audio.pause();
        } else if (STATE.musicaActiva) {
            audio.audio.play().catch(() => {});
        }
    }
});