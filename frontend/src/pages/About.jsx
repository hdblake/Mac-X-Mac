import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "Mac X Mac | About";
  });

  return (
    <section>
      <h1 className="font-header text-main text-8xl text-center mt-10 underline decoration-2 decoration-accent">
        About Mac X Mac
      </h1>
      <p className="text-center font-mainText text-main text-lg w-3/5 m-auto mt-6">
        My name is Mackeznie Blake and I sell macrame and other crafts (such as
        signs). I work full time in health care, but I have always had a
        creative bone. I was looking for something to be my creative outlet and
        thus Mac X Mac (pronounced Mac by Mac) was born. I mainly create
        keychains and ornaments, but I also create earings and wall hangs. If
        you are looking for something else, do not be afraid to reach out and
        ask utilizing the contact form here!
      </p>
      <p className="text-center font-mainText text-main text-lg w-3/5 m-auto mt-5">
        Not only did I choose macrame as my create outlet because of my
        boho/modern/chic style I am into, I also wanted to bring awareness to a
        disorder close to me. I suffer from trichotillomania (yes, that is a
        real word) or trich for short. In short, I pull out my hair and have for
        years. I do this when I am stressed, nervous, or just bored. Doing
        macrame allows me to keep my hands busy and to stay productive. I hope
        this website helps brings awareness, but also brings some small
        business/homemade joy to your home!
      </p>
      {/* Add img of Mackenzie */}
    </section>
  );
}
