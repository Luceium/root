import customConfig from "./bonsai_chip";
import defaultConfig from "./default";
import { set } from "lodash";

for (let key in customConfig) {
    set(defaultConfig, key, customConfig[key]);
}

export default defaultConfig;
