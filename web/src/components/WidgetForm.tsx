import { CloseButton } from "./CloseButton";

import bugImportUrl from "../assets/bug.svg"
import ideaImportUrl from "../assets/idea.svg"
import thoughtImportUrl from "../assets/thought.svg"


const feedbackTypes = {
  BUG:{
    title: 'Problema',
    image: {
      source: bugImportUrl,
      alt: 'imagem de um inseto'
    }
  },
  IDEA:{
    title: 'Ideia',
    image: {
      source: ideaImportUrl,
      alt: 'imagem de uma lâmpada'
    }
  },
  OTHER:{
    title: 'Outro',
    image: {
      source: thoughtImportUrl,
      alt: 'imagem de um balão de pensamento'
    }
  }
}

export function WidgetForm(){
  return(
    <div className=" bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className=" text-xl leading-6">Deixe seu Feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key,value]) => {
          return (
            <button
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center justify-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            //onClick={}
            type="button"
            >
              <img src={value.image.source} alt={value.image.source}/>
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>

      <footer className="text-xs text-neutral-400">
      Feito com ♥ pelo <a className="underline underline-offset-2" href="https://github.com/FelipeFama" target="_blank">lipehfama</a>
      </footer>
    </div>
  );
}