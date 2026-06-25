     🔗<!-- USESTATE AND USEEFFECT -->🔗

Everyone knows React  that it a JS framwork but how internally thing works under the hood that is more important -> 

React simple Definition ->  You update data , react updates the DOM . You never touch the DOM directly . State changes -> re-render->UI updates automatically

React actually can be powerful because of its two things that runs under the hood-
    1) Diffing
    2) Reconcillation
    This is building block on which react is made......

 Re-render means React calls your function and produces a new Fiber tree. It then
  runs a diffing algorithm (reconciliation) on the two trees to find the minimum
  set of real DOM changes needed.

I have also understood that how snapshot are made under the hood by which UI changes.

If i have to define the useEffect then i will say that it is nothing but just the controlled side effects