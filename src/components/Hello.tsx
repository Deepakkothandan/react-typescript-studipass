import * as React from "react";
import * as classNames from 'classnames';

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div>
                  <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
              </div>
    }
}
