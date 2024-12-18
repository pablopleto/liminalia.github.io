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
        <h1 className="text-border text-3xl font-impact uppercase">Expo memes</h1>
        <CoverImage title={title} src={coverImage} slug={slug} />
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
            <p className="text-lg leading-relaxed mb-8 text-justify mt-8">El término ”meme” aparece por primera vez en 1975, acuñado por el biólogo Richard Dawkins en su libro “El gen egoísta". Dawkins utiliza la palabra para describir la transmisión de una unidad de cultura entre individuos, situando al meme como un análogo al gen en términos de transmisión de información cultural; la replicación también ocurre en la cultura, con una idea (meme) propagándose de la mente de un humano a otro. Si bien probablemente Dawkins no contempló el alcance que tendría este concepto (ni tampoco alcanzó a conocer que significa*inserte meme*), el impacto de los memes en la sociedad actual es inconmensurable, inmiscuyéndose  en lo político, lo social, e inclusive en lo artístico. 
</p>
<p className="text-lg leading-relaxed mb-8 text-justify">El significado de la palabra ha mutado desde el siglo XX hasta la actualidad; hoy por hoy entendemos como meme una imagen o video de índole humorística que se difunde de forma viral a través de internet. A lo largo de las últimas dos décadas hemos presenciado la constante evolución y complejización de los memes, mutando de la mera utilización de una plantilla imagen/texto hasta llegar a creaciones repletas de lore y subtexto tales como los meta-memes, anti-memes y post-memes. Gafvelin (2021) postula que estas incesantes iteraciones son un reflejo del capitalismo tardío, encontrando los memes sujetos a la misma aceleración brutal que el capitalismo ejerce sobre todo lo que se considere un producto. Productos o no, los memes siguen gestándose y mutando a un ritmo vertiginoso, lo que despierta interrogantes acerca de su posicionamiento en nuevos espacios en un futuro no lejano, y los espacios en los cuales están penetrando en el presente. De la misma forma, hemos presenciado cómo los memes han transicionado de ser piezas meramente cómicas a vehículos de crítica e identificación social. Los memes han llegado a posicionarse como elementos identitarios y fundamentales en la vida cotidiana de las generaciones que  habitan el internet.</p>
          </h3>
        </div>
        <div className="text-justify text-lg leading-relaxed mb-4">
          <p className="mb-8">
          Uno de los espacios en los cuales podemos observar la inserción de los memes, es el mundo del arte, y más allá de una mera inserción, existe un sincretismo entre ambas esferas. Si bien arte y humor no son conceptos ajenos el uno del otro, siendo el dadaísmo uno de los antecedentes más importantes de este vínculo; movimiento caracterizado por la oposición a la razón, resultando en obras irónicas e irreverentes. 

Esta intersección de humor, cultura popular y visual, digitalidad y arte, propiciada por la accesibilidad e inmediatez de la cultura memística, abre una puerta a una nueva corriente artística, donde los memes toman un rol protagónico en la obra.  La historiadora Valentina Tanni establece en su libro Memestética (2023) que “toda la historia del arte es objeto de una continua acción de apropiación y reinterpretación”. En la corriente previamente descrita, podemos observar cómo la apropiación y reinterpretación de memes es plasmada en diversos medios, tanto digitales como físicos.

(Nombre expo) pretende explorar la transgresión de los memes desde la digitalidad al mundo físico, a lo tangible; el cómo una imagen gestada en cualquier lugar del mundo y difundida de forma virulenta a través de internet, logra ser plasmada por artistas chilenos en distintos medios físicos. 

La transferencia de los memes al mundo del arte adopta dimensiones estéticas que cambian y mutan, seguiendo la incesante producción de memes en internet. De la misma forma, hemos presenciado cómo los memes han transicionado de ser piezas meramente cómicas a vehículos de crítica e identificación social. Los memes han llegado a posicionarse como elementos identitarios y fundamentales en la vida cotidiana de varias generaciones que tienen habitan el internet día a día.  

          </p>
          <p className="mb-8">En el caso de los memes y el arte, el trabajo con
             memes toma elementos de humor gestados en  internet y
              pasan a convertirse en obras, un humor que ha construido 
              la identidad de la generación Z y millennial crónicamente 
              online1, y que a la vez genera infinitas interrogantes:</p>
              <p className="mb-8">¿Es el arte basado en memes un arte más democrático?</p>
              <p className="mb-8">Esta intersección de humor, cultura popular y visual, digitalidad y arte, propiciada por la accesibilidad e inmediatez de la cultura memística, abre una puerta a una nueva corriente artística, donde los memes toman un rol protagónico en la obra.  La historiadora Valentina Tanni establece en su libro Memestética (2023) que “toda la historia del arte es objeto de una continua acción de apropiación y reinterpretación”. En la corriente previamente descrita, podemos observar cómo la apropiación y reinterpretación de memes es plasmada en diversos medios, tanto digitales como físicos.</p>
              <p className="mb-8">
              (Nombre expo) pretende explorar la transgresión de los memes desde la digitalidad al mundo físico, a lo tangible; el cómo una imagen gestada en cualquier lugar del mundo y difundida de forma virulenta a través de internet, logra ser plasmada por artistas chilenos en distintos medios físicos. 
              </p>
              <p className="mb-8">La transferencia de los memes al mundo del arte adopta dimensiones estéticas que cambian y mutan, seguiendo la incesante producción de memes en internet. De la misma forma, hemos presenciado cómo los memes han transicionado de ser piezas meramente cómicas a vehículos de crítica e identificación social. Los memes han llegado a posicionarse como elementos identitarios y fundamentales en la vida cotidiana de varias generaciones que tienen habitan el internet día a día.</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
