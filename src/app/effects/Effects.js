import GammaCorrection from "./gamma-correction/GammaCorrection";
import ChannelFilter from "./channel-filter/ChannelFilter";
import Desaturate from "./desaturate/Desaturate";
import BayerDither from "./bayer-dithering/BayerDithering";
import Resize from "./resize/Resize";

// AGGREGATE EFFECTS HERE
// TODO: Scan folder
const graphicEffects = {
    Resize,
    GammaCorrection,
    ChannelFilter,
    Desaturate,
    BayerDither,
}

export function getEffectsArr() {
    const effects = []
    for (let effect in graphicEffects){
        effects.push(graphicEffects[effect])
    }
    return effects
}

export default graphicEffects