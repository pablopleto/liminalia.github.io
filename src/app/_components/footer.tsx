import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800 bg-[url('/assets/blog/images/footer1.png')] bg-cover bg-center ">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center ">
          <h3 className="text-1xl lg:text-[2rem] rounded tracking-tighter bg-[#FF0000] text-white leading-tight text-center font-custom lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Por Rosario Bonnefoy y Pablo Bertolotto. 
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2 ">
            <a
              href="https://www.instagram.com/liminalia_/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
            iNSTAGRAM
            </a>
          
          </div>    
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
