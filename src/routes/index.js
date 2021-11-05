import { Route, Switch } from "react-router"
import { Gathering } from "../pages/Gathering"
import { Home } from "../pages/Home"
import { Prom } from "../pages/Prom"
import { Wedding } from "../pages/Wedding"

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/gathering' component={Gathering}/>
            <Route path='/prom' component={Prom}/>
            <Route path='/wedding' component={Wedding}/>
        </Switch>
    )
}