import { buildDependencies } from "./buid-repositories";

export const execMiddlewares = (router) => {
    router.use(buildDependencies);
};
