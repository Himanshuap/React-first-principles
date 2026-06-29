              🔗 Custom Hooks 🔗
A custom hook isjust a function whose name starts with 'use' and that calls other hooks inside it . See no new API , no magic --- u bundle useState / useEffect/ useRef into your own reusable function

Just focus on these two line to get the feel  of this Topic -- Normal functions can extract regular logic, but NOT stateful logic . Custom hooks fill that gap- functions allowed to hold hooks , so u write stateful logic once and reuse it instead of copy - pasting.

Honest Nuance 🤓 => for One COmponent u do not need the hook - it works inline . The value appears with the 2nd and 3rd fetching component . that copy - paste a fetch for the third time , get annoyed , extract it's moment is when custom hooks truly click . 