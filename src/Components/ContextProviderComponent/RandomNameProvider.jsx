import { RandomNameContext } from "../../Context/context";
import UseGenerateRandomNames from "../../Hooks/GenerateRandomNames";

function RandomeNameProvider({children})
{
// random string generated each time
let randomName=UseGenerateRandomNames()
    return (
        <RandomNameContext.Provider value={[randomName]}>
            {children}
        </RandomNameContext.Provider>
    )
}
