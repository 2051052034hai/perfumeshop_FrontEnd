import Home from "./Dashboard/Home";
import {ROUTER} from "../constants/routes"

export const routes = [
    {
        key: ROUTER.HOME.key,
        path: ROUTER.HOME.path,
        name: ROUTER.HOME.name,
        component: Home,
      },
]
