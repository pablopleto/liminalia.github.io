import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <div className="font-custom italic bg-[#FF0000] p-2 text-white">LIMINALIA</div> 
      </h1> <img src="/assets/blog/images/1.gif" alt="Liminalia" width={125} height={125}/>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 font-custom">
        {"Somos una iniciativa que busca visibilizar y potenciar el arte digital latinoamericano, a través de diferentes plataformas"}
        <a
          href="https://www.instagram.com/liminalia_/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
       
        </a>{" "}
       
      </h4>
    </section>
  );
}
