        🔗useRef + Controlled vs Uncontrolled Inputs🔗

useRef Simple Definition => useref is a sticky note that React keeps it for u . See u can write it on anytime , react never reads it (😂It is of the People , for the People and by the People😂)

A very Common Myth is that everyone think that we are hiding it from react but nope bro , we are writing it in just a plain JS property assignment  and React gets blind by seeing this at the re-render time...

If React is not Noticing it at the re-render time then who keeps this Alive ?🤷‍♂️....
As we know react stores every hook inside the component fiber and the Reconciler keeps the filber alive across renders while the component stays mounted ...



                   🤔Controlled vs Uncontrolled Inputs🤔
To answer this just answer a single Question  ---- An input's value always lives somewhere. The whole distinction is: who owns it?

Uncontrolled — the DOM owns the value:
Controlled — React owns the value, DOM mirrors it: