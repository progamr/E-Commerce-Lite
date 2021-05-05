import {Route, Switch} from 'react-router-dom';
import React from 'react';
import {routes} from './../routes';
export const Content = () => {
    return (
        <div className="container-fluid-flex">
            <Switch>
                {
                    routes.map(route => (
                        <Route
                            path={route.path}
                            render={props => (
                                <route.component {...props} />
                            )}
                        />

                    ))
                }
            </Switch>
        </div>
    );
};
