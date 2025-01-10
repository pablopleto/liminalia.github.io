import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  content: string;
};

export function HeroPost({
  title,
  coverImage,
  author,
  slug,

}: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <h1 className="mt-50 text-border text-4xl font-impact uppercase tracking-[0.1em] mt-8">1. Por amor al meme</h1>
       <p className="text-lg leading-relaxed mb-8 font-light text-white mt-2 bg-[#FF0000] p-2 inline-block rounded-lg" >El tránsito del meme de la digitalidad a lo tangible. </p> 
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-8 text-4xl lg:text-5xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
            <div className="mb-8 md:mb-0 text-lg  ">
            <p>16 de enero, 2025</p>
          </div>
          <p className="text-lg italic font-light leading-relaxed mb-8 text-justify mt-8" >“Toda la historia del arte es objeto de una continua acción de apropiación y reinterpretación”.  (Tanni, 2023)
          </p>
            <p className="text-lg leading-relaxed mb-8 text-justify mt-8">El término”meme” aparece por primera vez en 1975, acuñado por el biólogo Richard Dawkins en su libro “El gen egoísta". Dawkins utiliza la palabra para describir la transmisión de una unidad de cultura entre individuos, situando al meme como un análogo al gen en términos de transmisión de información cultural; la replicación también ocurre en la cultura, con una idea (meme) propagándose de la mente de un humano a otro. Si bien probablemente Dawkins no contempló el alcance que tendría este concepto (ni tampoco alcanzó a conocer que significa  “bruh”), el impacto de los memes en la sociedad actual es inconmensurable, inmiscuyéndose  en lo político, lo social, e inclusive en lo artístico.
 
</p>
<img src="meme1.jpg" alt="" className="shadow mb-8" />
<p className="italic text-sm mb-8">Instalación interactiva “Detective Wall”. Clusterduck (2020)
Foto: Domen Pal / Aksioma
</p>
<p className="text-lg leading-relaxed mb-8 text-justify">
El significado de la palabra ha mutado desde el siglo XX hasta la actualidad; hoy por hoy entendemos como meme una imagen o video de índole humorística que se difunde de forma viral a través de internet. A lo largo de las últimas dos décadas hemos presenciado la constante evolución y complejización de los memes, mutando de la mera utilización de una plantilla imagen/texto hasta llegar a creaciones repletas de lore y subtexto tales como los meta-memes, anti-memes y post-memes. Gafvelin (2021) postula que estas incesantes iteraciones son un reflejo del capitalismo tardío, encontrando los memes sujetos a la misma aceleración brutal que el capitalismo ejerce sobre todo lo que se considere un producto. Productos o no, los memes siguen gestándose y mutando a un ritmo vertiginoso, lo que despierta interrogantes acerca de su posicionamiento en nuevos espacios en un futuro no lejano, y los espacios en los cuales están penetrando en el presente. De la misma forma, hemos presenciado cómo los memes han transicionado de ser piezas meramente cómicas a vehículos de crítica e identificación social. Los memes han llegado a posicionarse como elementos identitarios y fundamentales en la vida cotidiana de las generaciones que habitan el internet.
</p>
          </h3>
        </div>
        <div className="text-justify text-lg leading-relaxed mb-4">
          <p className="mb-8">
          En el mundo del arte, podemos observar una progresiva inserción de memes de distinta índole -desde virales y referencias a la cultura popular a memes “de nicho”, ente muchos otros- decantando en el sincretismo entre ambas esferas. Arte y humor no son conceptos ajenos el uno del otro, siendo el dadaísmo uno de los antecedentes más importantes de este vínculo; movimiento caracterizado por la oposición a la razón, resultando en obras irónicas e irreverentes. 
          </p>
          <img src="meme2.png" alt="" className="mb-8"/>
          <p className="mb-8 italic text-sm">Adaptación del meme “Two soyjaks pointing” apuntando a la obra “Fuente” de Marcel Duchamp. (2022)</p>
          <p className="mb-8">
          En el caso de los memes y el arte, elementos propios del sentido del  humor gestado en internet, un humor que ha construido la identidad de la generación Z y millennial crónicamente online<span className="text-xs italic ">(1)</span>, son incorporados en las obras, originando una estética cargada de ironía  similar al dadaísmo. Esta intersección de humor, cultura popular y visual, digitalidad y arte, propiciada por la accesibilidad e inmediatez de la cultura memística, abre una puerta a esta nueva corriente artística, donde los memes toman un rol protagónico en la obra, y, a su vez genera infinitas interrogantes: ¿Es el arte basado en memes un arte más accesible? ¿Puede un meme ser considerado arte? Al cambiar del medio digital al físico, ¿Se mantienen los mismos significados y códigos o cambian en el proceso?

          </p>
          <p className="mb-8">Por amor al meme pretende abordar estas preguntas explorando la transgresión de los memes desde la digitalidad al mundo físico, a lo tangible, entendiendo el meme como un proceso, parte de un imaginario, de un conjunto de datos y una construcción colectiva en constante cambio, que carece de una única forma definitiva. (Chagas, 2023).
          </p>
          <p className="mb-4">Desde esta comprensión del concepto, la curaduría de Por amor al meme construye una narrativa que recorre la transferencia de imágenes y videos gestados en cualquier lugar del mundo y difundidos de forma virulenta a través de internet, hasta lograr ser plasmados en distintos medios físicos  por ocho artistas chilenos, a través de  la representación, incorporación y apropiación de diversos memes, adoptando nuevas dimensiones estéticas en constante cambio y mutación.
          </p>
          <Avatar name={author.name} picture={author.picture} />
        </div>

      </div>
      <p className="text-xs italic">(1.)</p>
      <p className="text-sm mb-4 italic">Se refiere a aquellas personas que pasan una cantidad significativa de tiempo en internet, al punto de que su personalidad gira en torno a los memes, la cultura y el léxico de internet.. Keyhole. (n.d.). Chronically Online: What does it mean? Keyhole. <a className="text-#ff0000" href="https://keyhole.co/social-media-glossary/chronically-online/">https://keyhole.co/social-media-glossary/chronically-online/</a>

</p>
    </section>
  );
}
