import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImportUrl from "../../assets/bug.svg";
import ideaImportUrl from "../../assets/idea.svg";
import thoughtImportUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
  const [feedbackType,setFeedbackType] = useState<FeedbackType |null>(null)
  const [feedbackSent,setFeedbackSent] = useState(false);

  function handleRestartFeedback(){
    setFeedbackSent(false)
    setFeedbackType(null);
  }

  return(
    <div className=" bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
    {feedbackSent ? (
      <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
     ):(
     <>
       {!feedbackType ? (
        <FeedbackTypeStep onFeedBackTypeChanged={setFeedbackType}/>
       ):(
        <FeedbackContentStep 
         feedbackType={feedbackType} 
         onFeedbackRestartRequested={handleRestartFeedback}
         onFeedbackSent={() =>setFeedbackSent(true)}
        />
       )}
     </>
     )}

      <footer className="text-xs text-neutral-400">
      Feito com ♥ pelo <a className="underline underline-offset-2" href="https://github.com/FelipeFama" target="_blank">lipehfama</a>
      </footer>
    </div>
  );
}