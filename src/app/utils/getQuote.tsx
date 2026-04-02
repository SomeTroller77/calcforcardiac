"use client"

import { useEffect, useState } from "react";

export default function GetQuote(){
    const quotes = [
        {
            quote: "A good doctor treats the disease; a great doctor treats the patient who has the disease.",
            author: "William Osler"
        },
        {
            quote: "The art of medicine consists of amusing the patient while nature cures the disease.",
            author: "Voltaire"
        },
        {
            quote: "Wherever the art of medicine is loved, there is also a love of humanity.",
            author: "Hippocrates"
        },
        {
            quote: "The best way to find yourself is to lose yourself in the service of others.",
            author: "Mahatma Gandhi"
        },
        {
            quote: "Doctors put a wall up between themselves and their patients; nurses broke it down.",
            author: "Jodi Picoult"
        },
        {
            quote: "Medicine is not only a science; it is also an art. It does not consist of compounding pills and plasters; it deals with the very processes of life.",
            author: "Paracelsus"
        },
        {
            quote: "To array a man's will against his sickness is the supreme art of medicine.",
            author: "Henry Ward Beecher"
        },
        {
            quote: "A doctor's mission should be not simply to prevent death but to improve the quality of life.",
            author: "Patch Adams"
        },
        {
            quote: "Doctors are the true heroes of society, working selflessly to heal and comfort the sick.",
            author: "Unknown"
        },
        {
            quote: "A doctor is not just a healer but a source of hope and comfort for those in pain.",
            author: "Unknown"
        },
        {
            quote: "Always laugh when you can, it is cheap medicine.",
            author: "Lord Byron"
        },
        {
            quote: "Let food be thy medicine and medicine be thy food.",
            author: "Hippocrates"
        },
        {
            quote: "Isn’t it a bit unnerving that doctors call what they do “practice”?",
            author: "George Carlin"
        },
        {
            quote: "How do you tell the psychiatrists from the patients in the hospital? The patients get better and leave.",
            author: "Lisa Scottoline"
        },
        {
            quote: "Medicine is my lawful wife, and literature is my mistress. When I get fed up with one, I spend the night with the other.",
            author: "Anton Chekhov"
        },
        {
            quote: "The art of medicine consists of amusing the patient while nature cures the disease.",
            author: "Voltaire"
        },
        {
            quote: "After you find out all the things that can go wrong, your life becomes less about living and more about waiting.",
            author: "Chuck Palahniuk"
        },
        {
            quote: "A medicine cat has no time for doubt. Put your energy into today and stop worrying about the past.",
            author: "Erin Hunter"
        },
        {
            quote: "Wherever the art of Medicine is loved, there is also a love of Humanity.",
            author: "Hippocrates"
        },
        {
            quote: "In the words of the philosopher Sceptum, the founder of my profession: am I going to get paid for this?",
            author: "Terry Pratchett"
        },
        {
            quote: "In my opinion, our health care system has failed when a doctor fails to treat an illness that is treatable.",
            author: "Kevin Alan Lee"
        },
        {
            quote: "The life so short, the craft so long to learn.",
            author: "Hippocrates"
        },
        {
            quote: "Though the doctors treated him, let his blood, and gave him medications to drink, he nevertheless recovered.",
            author: "Leo Tolstoy"
        },
        {
            quote: "Surgeons can cut out everything except cause.",
            author: "Herbert M. Shelton"
        },
        {
            quote: "You are a placebo responder. Your body plays tricks on your mind. You cannot be trusted.",
            author: "Ben Goldacre"
        },
        {
            quote: "It’s true that laughter really is cheap medicine. It’s a prescription anyone can afford. And best of all, you can fill it right now.",
            author: "Steve Goodier"
        }
    ];
    const [quote, setQuote] = useState<{quote:string, author:string}>({quote:"", author:""});
    useEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, []);
    
    return(
            <div className="mt-5">
                <div className="chat chat-start">
                    <div className="chat-bubble bg-blue-200 text-blue-900 border-blue-200">
                        <blockquote cite="https://www.huxley.net/bnw/four.html">
                                <p suppressHydrationWarning>
                                {quote.quote}
                                </p>
                            </blockquote>
                            <p suppressHydrationWarning>—<cite suppressHydrationWarning>{quote.author}</cite></p>
                    </div>
                </div>
                
            </div>
        
    );
}