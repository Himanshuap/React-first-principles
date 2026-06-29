     🔗 useMemo + useCallback🔗

As we already know thta Every time a compinen re-renders , React re-runs the entire function top to bottom. That means every function and object inside it is recreated fresh , even if the code is identical ..

Why this Happens ?
See because Objects and functions compare by identity means same spot in the memory not by contents ..
react checks the props with === . So does it measn  that if we use == then this can be resolved ???🤔-------------- No bro  == wouldn't resolve it — the problem lives in identity comparison itself, which both operators use.


    -- Solution --
Each tool is HALF the fix:
• React.memo = the gate — child skips re-render unless a prop changes by reference.
• useCallback = keeps the function reference stable so the gate's check passes.
One without the other does NOTHING. memo alone: function reference keeps changing, gate never closes. useCallback alone: no gate checking, child re-renders with the parent anyway. Always a pair



Imp= To get this Concept u also have a good touch on Props concept also and i have learned it both at a go by  making the two Small activities 