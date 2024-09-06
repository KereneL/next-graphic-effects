import GammaCorrection from "./gamma-correction/GammaCorrection";
import ChannelFilter from "./channel-filter/ChannelFilter";
import Destaturate from "./destaturate/Destaturate";
import BayerDither from "./bayer-dither/BayerDither";

// AGGREGATE EFFECTS HERE
// TODO: Scan folder
const graphicEffects = {
    GammaCorrection,
    ChannelFilter,
    Destaturate,
    BayerDither,
}

export function getEffectsNames() {
    return Object.values(graphicEffects).map(effect => effect.values.displayName);
}

export function getEffectsArr() {
    const effects = []
    for (let effect in graphicEffects){
        effects.push(graphicEffects[effect])
    }
    return effects
}

export default graphicEffects